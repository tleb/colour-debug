# colour-debug

[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[npm-url]: https://www.npmjs.com/package/colour-debug
[npm-image]: https://img.shields.io/npm/v/colour-debug.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/colour-debug.svg

> A simple coloured debugger

## Installation

```shell
npm install --save colour-debug
```

## Usage

```js
var d = require('colour-debug')

d({
    debug: 'anything',
    you: ['like']
})

// true to show the object's non-enumerable and symbol properties
// if not set to true, then equals false
d({ foo: 'bar' }, true)

// specify the depth to go into
// if not an integer, unlimited
d({ foo: 'bar' }, false, 3)
```

## Author

© 2016 tleb <tleb@openmailbox.org> (https://github.com/tleb)

## License

Released under the [MIT license](http://tleb.mit-license.org).
