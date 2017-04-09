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

*/


class Trajson {
    constructor(graph) {
        this.graph = graph;
    }

    transform(){
      var services =  {
        processes: this.graph.processes
      }
      //map?
      //$.extend()
      

      return services
    }

}

module.exports = Trajson
