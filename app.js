/*
 *  * Module dependencies
 *   */
var crypto = require('crypto');

var hash = crypto.createHash('sha256');

var code = 'bacon';

var express = require('express')

var app = express()

app.get('/', function (req, res) {
  code = hash.update(code);
  code = hash.digest(code);

  msg = Buffer.from(code).toString('base64');
  console.log(msg);

console.log(code);
  res.end('<html><body bgcolor=green><h1>Hi there! '+msg+'</h1></body></html>')
})
app.listen(8080)
