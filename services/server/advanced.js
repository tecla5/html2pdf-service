const express = require('express');
const stream = require('express-stream');
const hemera = require('./hemera/config/');
const {
  generatePdf,
  listenAndStream
} = require('./hemera/pubsub');

//App setup
let app = express()
app.set('views', './views')
app.set('view engine', 'ejs')

// TODO: do actual validation!!
function validateAccess({
  apiKey,
  secret
}) {
  return true
}

function parseOptions(res) {
  return res.opts
}

const ERROR = {
  unauthorized: 401
}

//Add the stream middleware to the routes
app.get('/', stream.pipe(), function (req, res) {
  hemera.ready(() => {
    const grantAccess = validateAccess(req.credentials)

    // https://expressjs.com/en/guide/error-handling.html
    if (!grantAccess) {
      res.status(ERROR.unauthorized).send({
        error: 'Invalid credentials'
      })
    }

    const opts = parseOptions(req)
    generatePdf(opts)
    listenAndStream(res)
  })
})

const port = 3000

app.listen(port, function () {
  console.log('html2pdf service listening on:', port)
})