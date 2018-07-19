var mongoose = require('mongoose').set('debug', true);
var dotenv = require('dotenv').config()

var db_url = process.env.DB_URL;
var port = process.env.PORT;

// database connection
var db = mongoose.connect(db_url, {
  useNewUrlParser: true
});

var db_test = mongoose.connection;
db_test.on('error', console.error.bind(console, 'connection error:'));
db_test.once('open', function() {
  console.log('🛰️  DATABASE: Connection Successful!');
});