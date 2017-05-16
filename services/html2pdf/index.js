const Html2Pdf = require('./src/app') //

// hemera.use(HemeraZipkin, {
//   host: process.env.ZIPKIN_URL,
//   port: process.env.ZIPKIN_PORT
// })

hemera.ready(() => {
  let Joi = hemera.exposition['hemera-joi'].joi
  let subscribePattern = {
    cmd: 'html2pdf',
    topic: 'generate'
  }

  hemera.add(subscribePattern, function (req, cb) {
    console.log('request:', req.opts);

    new Html2Pdf(req.opts).generate(function (result) {
      // TODO: nats.publish
      cb(null, result)

      hemera.act({
        topic: 'result',
        cmd: 'pdf',
      }, function (err, resp) {
        resp.send({
          result
        })
      })
    })
  })
})