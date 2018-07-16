var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

// Models
var Project = require('../models/Project');

var router = express.Router();

router.get('/api/projects/:name', (req, res) => {
  Project.findOne({
    name: req.params.name
  }, (err, project) => {
    res.send(project);
  });
});

router.post('/api/projects', (req, res) => {
  var project = new Project({
    name: req.body.name,
    creator: "5b4bbfaa18a80af125192cc7", // req.body.creator,
    links: "5b4bbfaa18a80af125192cc7"
  });
  project.save(err => {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      res.send(project);
    }
  });
});

module.exports = router;