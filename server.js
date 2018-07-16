var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose').set('debug', true);
var dotenv = require('dotenv').config()

var app = express();

var db_url = process.env.DB_URL;
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('dev'));

// database connection
var db = mongoose.connect(db_url, {
  useNewUrlParser: true
});

var db_test = mongoose.connection;
db_test.on('error', console.error.bind(console, 'connection error:'));
db_test.once('open', function() {
  console.log('db connection success');
});

app.use(require('./routes/comments'));
app.use(require('./routes/links'));
app.use(require('./routes/projects'));
app.use(require('./routes/users'));

app.get('/api/', (req, res) => {
  res.send({
    express: 'LFP',
    message: 'Hey, Mac'
  });
});

app.listen(port);