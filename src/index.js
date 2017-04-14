const Hemera = require("nats-hemera")
const nats = require("nats").connect(['nats://localhost:4222'])// nats://nats.io:4222

const hemera = new Hemera(nats, { logLevel: "info" })

const Trajson = require('./app/app')

var graph = require('../test/bm.json')

hemera.ready(function () {
  console.log('index starting trajson')

  hemera.add({ topic: "swarm", cmd: "transform" }, function (resp, cb) {
    console.log(resp.graph)
    let trajson = new Trajson(resp.graph)
    let services = trajson.transform()
    //console.log(JSON.stringify(services));

    let servicesYaml = trajson.exportToYAML(services)
    console.log(servicesYaml);
    cb(null, servicesYaml )// yaml)



  })

  hemera.act({ topic: "swarm", cmd: "transform", graph: graph }, function (err, resp) {
    console.log("Result", resp)
  })


})


/*
// index.js
const YAML = require('yamljs')
// ---
const Trajson = require('./app/app')


console.log('index starting trajson')
var graph = require('./bm.json')
//console.log(graph)

//transform to json
var trajson = new Trajson(graph)

var services = trajson.transform()
console.log(services);


//yaml = YAML.dump(services)
//console.log(yaml)

*/
