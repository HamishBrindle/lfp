const serverless = require('serverless-http');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan')
const AWS = require('aws-sdk');

morgan('tiny');
app.use(morgan('dev'));

let dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
})

console.log(dynamoDb);

app.use(bodyParser.json({
  strict: false
}));

app.get('/', (req, res) => res.send('default'));

app.use(require('./routes/users'));

module.exports.handler = serverless(app);