# hyperscript-strict
Strict API for Hyperscript Libraries

## Strict Abstract Node Tree API
As propsed in https://github.com/hyperhype/hyperscript/issues/66#issuecomment-296449960, we implement the API

### h( {tag: tag, props: props, children : children} )

that is equivalent to 

### h( tag : String, props : Object, children : Array )

## Complete code

Due to the strict nature of the API,
the implementation code for the extension of `h` is very short:

```js
var h = require('hyperscript')
var isObject = val => (null != val) && ('object' == typeof val)

var hExt = (obj, props, children) => isObject(obj) 
	? h(obj.tag, obj.props, obj.children.map(child => isObject(child) 
		? hExt(child) 
		: child
	))
	: h(obj, props, children)

module.exports = hExt
```

## Run tests

```sh
git clone https://github.com/dmitriz/hyperscript-strict
yarn
npm test
```
