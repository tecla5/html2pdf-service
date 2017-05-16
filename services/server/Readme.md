# Express web service for html2pdf

HTTP request/response wrapper for html2pdf service.
The *html2pdf* service returns a Stream of data that we can stream directly to the client browser using [express-stream](https://www.npmjs.com/package/express-stream)

See [nats docs](http://nats.io/documentation/)

```js
var express = require('express');
var stream = require('express-stream');

//App setup
var app = express()
app.set('views', './views')
app.set('view engine', 'ejs')

//Add the middleware to the desired routes
app.get('/', stream.pipe(), function (req, res) {
  // send nats message
  // listen to nats message with result
  nats.receive(function (err, stream){
    //Stream data with pdf
    res.stream(stream);
    res.close();
  })
})
```

