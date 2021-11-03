const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const isAuthenticated = require ('../bin/isAuthenticated');

const setSessionProperties = (model) => {
  req.session.user = model._id;
  req.session.company = model.companyName;
  req.session.firstName = model.firstName;
  req.session.lastName = model.lastName;
}

router.post ('/login', (req,res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (foundUser) {
      const passwordMatched = bcrypt.compareSync(req.body.password,foundUser.password);
      if (passwordMatched) {
        setSessionProperties(foundUser)
      } else {
        res.send('Invalid username or password')
      }
    } else {
      res.send('Invalid username or password')
    }
  })
});

router.post('/signup',(req,res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

  User.create (req.body, (err, newUser) => {
    if (err) {
      res.send(err.code === 11000 ? {error: 'Email must be unique'} : {error: 'Something went wrong.'});
    } else {
      setSessionProperties(newUser)
      res.send('Account successfully created.')
    }
  })
})

router.get('/logout',(req,res) => {
  req.session.destroy()
})

module.exports = router;