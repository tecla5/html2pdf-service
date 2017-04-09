// index.js
const YAML = require('yamljs')

const Trajson = require('./app')

console.log('starting trajson')





var graph = require('./bm.json')
//console.log(graph)



//transform to json
var trajson = new Trajson(graph)

var services = trajson.transform()
console.log(services);


//yaml = YAML.dump(services)
//console.log(yaml)
