const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const isAuthenticated = require ('../bin/isAuthenticated');

const setSessionProperties = (session, model) => {
  session.user = model._id;
  session.company = model.companyName;
  session.firstName = model.firstName;
  session.lastName = model.lastName;
}

router.post ('/login', (req,res) => {
  User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (foundUser) {
      const passwordMatched = bcrypt.compareSync(req.body.password, foundUser.password);
      if (passwordMatched) {
        setSessionProperties(req.session, foundUser)
        res.send({success: 'successfully logged in'})
      } else {
        res.send({error: 'Invalid username or password'})
      }
    } else {
      res.send({error: 'Invalid username or password'})
    }
  })
});

router.post('/signup',(req,res) => {

  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  }

  User.create (req.body, (err, newUser) => {
    if (err) {
      res.send(err.code === 11000 ? {error: 'Email must be unique'} : {error: 'Something went wrong.'});
    } else {
      setSessionProperties(req.session, newUser)
      res.send('Account successfully created.')
    }
  })
})

router.get('/logout',(req,res) => {
  if (req.session.user) {
    req.session.destroy()
    res.send({success: 'Successfully logged out.'})
  } else {
    res.send({error: 'Already logged out.'})
  }
})

module.exports = router;