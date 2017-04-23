var h = require('./hyperscript-extend')
var test = require('ava')

test('basic Abstract Nodes', t=>{
	t.is(h({
			tag: 'a',
			props: {href: 'https://github.com/dmitriz/hyperscript-strict'},
			children: ['Check me!']
		}).outerHTML, 
		'<a href="https://github.com/dmitriz/hyperscript-strict">Check me!</a>' 
	)
	t.is(h({
			tag: 'input',
			props: {type: 'search'},
			children: []
		}).outerHTML, 
		'<input type="search">' 
	)
})

test('nested Abstract Nodes', t=>{
	t.is(h({
			tag: 'div',
			props: {style: {margin: '0'}},
			children: [
				'Check ',
				{
					tag: 'strong',
					props: {},
					children: ['Me!']
				}
			]}).outerHTML, 
		'<div style="margin:0;">Check <strong>Me!</strong></div>' 
	)
})
