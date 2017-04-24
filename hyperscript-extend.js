// Extend the hyperscript function to the Abstract Node Tree arguments

var isObject = val => (null != val) && ('object' == typeof val) 

var extend = h => (obj, ...rest) => isObject(obj) 
	? h(obj.tag, obj.props, obj.children.map(child => isObject(child) 
			? extend(h)(child) 
			: child
		))
	: h(obj, ...rest)

module.exports = extend
