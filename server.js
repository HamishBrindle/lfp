const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

const users = require('./routes/users'); 

require('./database');

var app = express();
app.use(passport.initialize());
require('./auth/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('dev'));

// app.use(require('./routes/comments'));
// app.use(require('./routes/links'));
// app.use(require('./routes/projects'));

app.use('/api/users', users);

app.get('/api/', (req, res) => {
  res.send({
    express: 'LFP',
    message: 'Hey, Mac'
  });
}); 

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
});