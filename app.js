/*
 *  * Module dependencies
 *   */
var express = require('express')

var app = express()

function blockCpuFor(ms) {
	var now = new Date().getTime();
	var result = 0
	while(true) {
		result += Math.random() * Math.random();
		if (new Date().getTime() > now +ms)
			return;
	}	
}

app.get('/', function (req, res) {
  blockCpuFor(5000); // CPU-intensive

  res.end('<html><body bgcolor=blue><h1>Hi there!</h1></body></html>')
})
app.listen(8080)
