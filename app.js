/*
 *  * Module dependencies
 *   */
var crypto = require('crypto');

var msg = 'secret'
var hash = 'hash'

var express = require('express')

var app = express()

app.get('/', function (req, res) {

  
  var i;
  for (i = 0; i < 100; i++) {
    hash = crypto.createHash('sha256').update(msg).digest('hex')
    msg = hash
  }
  console.log(msg)

  res.end('<html><body bgcolor=green><h1>Hi there! '+msg+'</h1></body></html>')
})
app.listen(8080)
