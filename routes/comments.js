var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

// Models
var Comment = require('../models/Comment');

var router = express.Router();

router.get('/api/comments/:id', (req, res) => {
  Comment.findOne({
    _id: req.params.id
  }, (err, comment) => {
    res.send(comment);
  });
});

router.post('/api/comments', (req, res) => {
  var comment = new Comment({
    message: req.body.message,
    creator: req.body.creator
  });
  comment.save(err => {
    if (err) {
      res.send('error');
    } else {
      res.send(comment);
    }
  });
});

module.exports = router;