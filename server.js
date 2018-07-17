var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

require('./database');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('dev'));

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

app.listen(process.env.PORT);