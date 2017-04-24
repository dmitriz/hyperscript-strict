// Extend the hyperscript function to the Abstract Node Tree arguments

var isObject = val => (null != val) && ('object' == typeof val) 

var hExt = h => (obj, ...rest) => isObject(obj) 
	? h(obj.tag, obj.props, obj.children.map(child => isObject(child) 
			? hExt(h)(child) 
			: child
		))
	: h(obj, ...rest)

module.exports = hExt
