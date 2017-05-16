const pattern = {
  publish: {
    topic: 'generate',
    cmd: 'pdf',
  },
  subscribe: {
    cmd: 'result',
    topic: 'generate'
  }
}

exports.generatePdf = function (opts) {
  hemera.act(pattern.publish, function (err, resp) {
    resp.send({
      opts
    })
  })
}

exports.listenAndStream = function (res) {
  // Subscribe to result from html2pdf generator service
  hemera.add(pattern.subscribe, function (req, cb) {
    console.log('request:', req.stream);
    res.stream(req.stream);
    res.close();
  })
}