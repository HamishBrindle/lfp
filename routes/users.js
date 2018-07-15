var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

// Models
var User = require('../models/User');

var router = express.Router();

router.get('/api/users/:github_id', (req, res) => {
  User.findOne({
    github_id: req.params.github_id
  }, (err, user) => {
    res.send(user);
  });
});

router.post('/api/users', (req, res) => {
  var user = new User({
    github_id: req.body.github_id,
    bio: req.body.bio,
    logins: 0
  });
  user.save(err => {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      res.send(user);
    }
  });
});

module.exports = router;