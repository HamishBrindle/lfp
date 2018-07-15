var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

// Models
var User = require('../models/User');

var router = express.Router();

router.get('/api/user/:username', (req, res) => {
  User.findOne({
    username: req.params.username
  }, (err, user) => {
    res.send(user);
  });
});

router.post('/api/user', (req, res) => {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    logins: 0
  });
  user.save(err => {
    if (err) {
      res.send('error');
    } else {
      res.send(user);
    }
  });
});

module.exports = router;