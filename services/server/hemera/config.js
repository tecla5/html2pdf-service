const nats = require('nats').connect({
  'url': process.env.NATS_URL,
  'user': process.env.NATS_USER,
  'pass': process.env.NATS_PW
})

const Hemera = require('nats-hemera')
const hemera = new Hemera(nats, {
  logLevel: process.env.HEMERA_LOG_LEVEL || "info"
})

const HemeraJoi = require('hemera-joi')
hemera.use(HemeraJoi)

module.exports = hemera