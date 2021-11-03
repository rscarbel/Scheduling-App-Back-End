const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const isAuthenticated = require ('../bin/isAuthenticated');

router.post ('/login', (req,res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (foundUser) {
      const passwordMatched = bcrypt.compareSync(req.body.password,foundUser.password);
      if (passwordMatched) {
        req.session.user = foundUser._id;
        req.session.company = foundUser.companyName;
        req.session.firstName = foundUser.firstName;
        req.session.lastName = foundUser.lastName;
      } else {
        res.send('Invalid username or password')
      }
    } else {
      res.send('Invalid username or password')
    }
  })
});

