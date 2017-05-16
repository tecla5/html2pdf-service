'use strict'

const wkhtmltopdf = require('wkhtmltopdf')
// const toString = require('stream-to-string')

class Html2Pdf {
  constructor(opts = {}) {
    this.opts = opts
  }

  generate(cb) {
    wkhtmltopdf('http://google.com/', {
      pageSize: 'letter'
    }, function (err, stream) {
      // TODO: send back as response
      cb(stream)
    });
  }

  export () {
    // TODO: export to Amazon S3 file server
    // return link to S3 bucket
  }
}

module.exports = Html2Pdf