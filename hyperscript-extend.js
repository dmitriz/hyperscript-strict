// Extend the hyperscript function to the Abstract Node Tree arguments
var h = require('hyperscript')

var isObject = val => (null != val) && ('object' == typeof val) 

var hExt = (obj, ...rest) => isObject(obj) 
	? h(obj.tag, obj.props, obj.children.map(child => isObject(child) 
			? hExt(child) 
			: child
		))
	: h(obj, ...rest)

module.exports = hExt
