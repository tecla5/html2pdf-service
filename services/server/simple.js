var express = require('express');
var stream = require('express-stream');
var wkhtmltopdf = require('wkhtmltopdf');

//App setup
var app = express()

//Add the stream piping middleware to the main route
app.get('/', stream.pipe(), function (req, res) {
  // listen to wkhtmltopdf stream cb and send as stream in HTTP response
  wkhtmltopdf(req.body, function (err, stream) {
    //Stream data with pdf
    res.stream(stream);
    res.close();
  })
})