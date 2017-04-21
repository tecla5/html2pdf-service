'use strict'

const YAML = require('yamljs')
//const prettyjson = require('prettyjson')
//const json2yaml = require('json2yaml')


var options = {
  //noColor: true,
  // keysColor: 'rainbow',
  dashColor: 'magenta',
  stringColor: 'white',
  inlineArrays: true,
  indent: 4
};

/*
{ id: 'ti6yn',
  project: '',
  properties:
   { name: 'network-bm',
     environment:
      { runtime: 'html',
        src: 'preview/iframe.html',
        width: 300,
        height: 300 } },
  groups:
   [ { name: 'VM1', nodes: [Object], metadata: [Object] },
     { name: 'VM2', nodes: [Object], metadata: [Object] },
     { name: 'VM3', nodes: [Object], metadata: [Object] } ],
  processes:
   { memcache_1: { component: 'database', metadata: [Object] },
     apache: { component: 'server', metadata: [Object] },
     'web/sympony': { component: 'server', icon: 'eye', metadata: [Object] },
     'web/services': { component: 'server', metadata: [Object] },
     elasticsearch: { component: 'server', metadata: [Object] },
     nginx: { component: 'server', metadata: [Object] },
     memcache_2: { component: 'database', metadata: [Object] } },
  connections:
   [ { src: [Object], tgt: [Object], metadata: [Object] },
     { src: [Object], tgt: [Object], metadata: [Object] },
     { src: [Object], tgt: [Object], metadata: [Object] },
     { src: [Object], tgt: [Object], metadata: [Object] } ] }

  ==>

  ---
  - service:
    - network:     "dev"
    - name:        "web"
    - image:       "registry.webfg.com/apache:0.0.2"

  ==>

  [
    {
      "service": [
        {
          "network": "dev"
        },
        {
          "name": "web"
        },
        {
          "image": "registry.webfg.com/apache:0.0.2"
        }
      ]
    }
  ]

*/

class Trajson {
    constructor(graph) {
        console.log('Trajson constructor');
        this.graph = graph;

        this.templates = {}
        this.templates['default'] = {
          network:     'dev',
          name:        'default',
          image:       'some', // registry.webfg.com/default:0.0.1
          publish:     '',
          env:         '',
          command:     '',
          constraint:  '',
          mount:       '',
          replicas:    '',
          hosts:       '',
        }
        this.templates['database'] = Object.assign({},this.templates['default'],{ name: 'database'})
        this.templates['server'] = Object.assign({},this.templates['default'],{ name: 'server'})
        //JSON.parse(JSON.stringify(this.templates['default']));
    }

    templateServices(name){ // = 'apache'
      var arr = [];
      let obj = this.templates[name]
      for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            let x = {}
            x[key]= obj[key]
            arr.push(x);
          }
      }

      return arr
    }

    transform(){
      const processes = Object.entries(this.graph.processes)

      //map?
      var services = processes.map( (proccess) => {
          //let service = this.templateServices(proccess[1].component); // proccess[0],
          return { service: this.templateServices(proccess[1].component) }
      })
      //$.extend()
      return services
    }

    exportToYAML(services){
      let yaml = YAML.dump(services, 4, 2)
      //let yaml = prettyjson.render(services, options);
      //let yaml = json2yaml.stringify(services)
      return yaml.replace(/(?:\-\s+)/g, '- ');
    }

}

module.exports = Trajson
