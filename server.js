var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose').set('debug', true);

var app = express();

// TODO: move stuff to .env
var db_url = 'mongodb://localhost:27017/lfp';
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

app.use(require('./routes/user'));

app.get('/api/', (req, res) => {
  res.send({
    express: 'LFP'
  });
});

app.listen(port);