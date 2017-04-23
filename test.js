// var h = require('hyperscript')
var h = require('./hyperscript-extend')
var test = require('ava')

test('empty valid args', t=>{
  t.is(h('div', {}, []).outerHTML, '<div></div>')
  t.is(h('h1', {}, ['hello world']).outerHTML, '<h1>hello world</h1>')
  t.is(h('input', {type: 'text'}, []).outerHTML, '<input type="text">')
})

test('allows for HTML-invalid args', t=>{
	t.is(
		h('invalid', {bad: 'nonsense'}, ['I am so invalid']).outerHTML, 
		'<invalid>I am so invalid</invalid>'
	)
})

test('nested', t=>{
  t.is(h('div', {}, [
  	'some text',
    h('h1', {}, ['Title']),
    h('p', {}, ['Paragraph'])
  ]).outerHTML, '<div>some text<h1>Title</h1><p>Paragraph</p></div>')
})

test('can set properties', t=>{
  var a = h('a', {href: 'https://github.com/dmitriz/hyperscript-strict'}, [])
  t.is(a.href, 'https://github.com/dmitriz/hyperscript-strict')
  var checkbox = h('input', {name: 'yes', type: 'checkbox'}, [])
  t.is(checkbox.outerHTML, '<input name="yes" type="checkbox">')
})

test('sets styles', t=>{
	var style = {'color': 'red'}
  t.is(h('p', {style}, []).outerHTML, '<p style="color:red;"></p>')
})

