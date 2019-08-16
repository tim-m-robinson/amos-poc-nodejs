/*
 *  * Module dependencies
 *   */
var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.end('<html><body bgcolor=blue><h1>Hi there!</h1></body></html>')
})
app.listen(8080)
