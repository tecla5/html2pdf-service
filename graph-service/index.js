const Hemera = require('nats-hemera')
const HemeraJoi = require('hemera-joi')
// const HemeraZipkin = require('hemera-zipkin')
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

const Trajson = require('./src/app/app') //

const nats = require('nats').connect({
  'url': process.env.NATS_URL,
  'user': process.env.NATS_USER,
  'pass': process.env.NATS_PW
}) // ['nats://localhost:4222']

const hemera = new Hemera(nats, {
  logLevel: process.env.HEMERA_LOG_LEVEL || "info"
})

hemera.use(HemeraJoi)
// hemera.use(HemeraZipkin, {
//   host: process.env.ZIPKIN_URL,
//   port: process.env.ZIPKIN_PORT
// })

hemera.ready(() => {
    let Joi = hemera.exposition['hemera-joi'].joi

    hemera.add({
        topic: 'graph',
        cmd: 'toyaml' //,
        //graph: Joi.object().required(),
        //name: Joi.string().required()
    }, function(req, cb) {

        console.log('req.graph:', req.graph);

        let result

        // TODO: convert graph to YAML
        let operation = (graph) => {
            let trajson = new Trajson(graph) // JSON.parse()
            let services = trajson.transform()
            //console.log(JSON.stringify(services));
            let servicesYaml = trajson.exportToYAML(services)
            //console.log(servicesYaml);
            return servicesYaml
        }

        //big operation
        result = operation(req.graph)
        return cb(null, result)

    })

    // move to test with hemera
    /*
    */
    var graph = require('./test/bm.json')
    hemera.act({ topic: "graph", cmd: "toyaml", graph: graph, name: 'test-bm' }, function (err, resp) {
      console.log("Result", resp)
    })

})
