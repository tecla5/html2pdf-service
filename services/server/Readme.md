# Express web service for html2pdf

HTTP request/response wrapper for html2pdf service.

The *html2pdf* service returns a Stream of data that we can stream directly to the client browser using [express-stream](https://www.npmjs.com/package/express-stream)

## Simple html2pdf Web service

```js
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
```

## TODO

- Get `simple` version working!
- Enhance `simple` with authentication check etc.
- Play with `advanced` version

## NATS streaming

- See [nats docs](http://nats.io/documentation/)
- [NATS streaming](https://nats.io/documentation/streaming/nats-streaming-intro/)
- See [nats-streaming-server](https://github.com/nats-io/nats-streaming-server/) repo
- Node NATS streaming [node-nats-streaming](https://github.com/nats-io/node-nats-streaming)

### Docker NATS streaming

- Use [nats-streaming](https://hub.docker.com/_/nats-streaming/) docker image

`docker run -d nats-streaming`


