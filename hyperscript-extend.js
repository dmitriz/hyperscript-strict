// Extend hyperscript to the single object API
var h = require('hyperscript')

var isObject = val => (null != val) && ('object' == typeof val) 

var hExt = (obj, props, children) => isObject(obj) 
	? h(obj.tag, obj.props, obj.children.map(child => isObject(child) 
		? hExt(child) 
		: child
	))
	: h(obj, props, children)

module.exports = hExt
