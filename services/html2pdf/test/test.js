import test from 'ava';

const YAML = require('yamljs')
// ---
const Trajson = require('../build/app/app')


test('App', /* async */ t => {
	console.log('starting trajson')

	var graph = require('./bm.json')
	//console.log(graph)

	//transform to json
	var trajson = new Trajson(graph)

	var services = trajson.transform()
	console.log(JSON.stringify(services));

	let servicesYaml = trajson.exportToYAML(services)
	console.log(servicesYaml);


	// const bar = Promise.resolve('bar');
	// t.is(await bar, 'bar');
	t.pass();
});
