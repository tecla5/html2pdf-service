import test from 'ava';
const Html2Pdf = require('../build/app')

test.db('App', /* async */ t => {
	console.log('testing: Html2Pdf')

	var opts = {}

	const html2pdf = new Html2Pdf(opts)

	html2pdf.generate((res) => {
		console.log('result:', res)
		t.pass('generated')
		t.end()
	})
});