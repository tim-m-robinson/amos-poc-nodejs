/*
 *  * Module dependencies
 *   */
var crypto = require('crypto');

var msg = 'secret'

var express = require('express')

var app = express()

app.get('/', function (req, res) {

  var hash = crypto.createHash('sha256').update(msg).digest('hex')
  msg = hash
  console.log(msg)

  res.end('<html><body bgcolor=green><h1>Hi there! '+msg+'</h1></body></html>')
})
app.listen(8080)
