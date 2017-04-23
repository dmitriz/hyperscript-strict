// Extend with single object API

var h = require('hyperscript')

var isObject = val => (null != val) && ('object' == typeof val) 

var hExt = obj => h(obj.tag, obj.props, obj.children.map(
	child => isObject(child) ? hExt(child) : child
))

module.exports = hExt
