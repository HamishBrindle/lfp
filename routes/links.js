var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

// Models
var Link = require('../models/Link');

var router = express.Router();

router.get('/api/links/:id', (req, res) => {
  Link.findOne({
    _id: req.params.id
  }, (err, link) => {
    res.send(link);
  });
});

router.post('/api/links', (req, res) => {
  var link = new Link({
    site: req.body.site,
    path: req.body.path
  });
  link.save(err => {
    if (err) {
      res.send('error');
    } else {
      res.send(link);
    }
  });
});

module.exports = router;