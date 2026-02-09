<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# concat1d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a one-dimensional [ndarray][@stdlib/ndarray/ctor] formed by concatenating provided input arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
concat1d = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-concat1d@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var concat1d = require( 'path/to/vendor/umd/ndarray-concat1d/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-concat1d@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.concat1d;
})();
</script>
```

#### concat1d( ...arrays )

Returns a one-dimensional [ndarray][@stdlib/ndarray/ctor] formed by concatenating provided input arguments.

```javascript
var array = require( '@stdlib/ndarray-array' );

var x = array( [ -1.0, 2.0, 3.0, 4.0 ] );
var y = array( [ -5.0, 6.0, -7.0, -8.0, 9.0, -10.0 ] );

var out = concat1d( x, y );
// returns <ndarray>[ -1.0, 2.0, 3.0, 4.0, -5.0, 6.0, -7.0, -8.0, 9.0, -10.0 ]
```

The function accepts the following arguments:

-   **...arrays**: inputs to concatenate. May be passed as separate arguments or an array of arguments. Each argument must either be a one-dimensional [ndarray][@stdlib/ndarray/ctor], a zero-dimensional [ndarray][@stdlib/ndarray/ctor], or a scalar value.

The data type of the output [ndarray][@stdlib/ndarray/ctor] is determined by applying [type promotion rules][@stdlib/ndarray/promotion-rules]. If provided [ndarrays][@stdlib/ndarray/ctor] having different [memory layouts][@stdlib/ndarray/orders] or only scalar inputs, the output [ndarray][@stdlib/ndarray/ctor] has the [default memory layout][@stdlib/ndarray/defaults].

#### concat1d.assign( ...arrays, out )

Concatenates provided input arguments and assigns the result to a provided one-dimensional output [ndarray][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray-array' );
var zeros = require( '@stdlib/ndarray-zeros' );

var x = array( [ -1.0, 2.0, 3.0, 4.0 ] );
var y = array( [ -5.0, 6.0, -7.0, -8.0 ] );
var z = zeros( [ 8 ] );

var out = concat1d.assign( x, y, z );
// returns <ndarray>[ -1.0, 2.0, 3.0, 4.0, -5.0, 6.0, -7.0, -8.0 ]

var bool = ( out === z );
// returns true
```

The function accepts the following arguments:

-   **...arrays**: inputs to concatenate. May be passed as separate arguments or an array of arguments. Each argument must either be a one-dimensional [ndarray][@stdlib/ndarray/ctor], a zero-dimensional [ndarray][@stdlib/ndarray/ctor], or a scalar value.
-   **out**: output [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-concat1d@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'generic'
};
var x = array( discreteUniform( 6, 0, 10, opts ), opts );
console.log( ndarray2array( x ) );

var y = array( discreteUniform( 8, 0, 10, opts ), opts );
console.log( ndarray2array( y ) );

var out = concat1d( x, y );
console.log( ndarray2array( out ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-concat1d.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-concat1d

[test-image]: https://github.com/stdlib-js/ndarray-concat1d/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/ndarray-concat1d/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-concat1d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-concat1d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-concat1d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-concat1d/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-concat1d/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-concat1d/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-concat1d/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-concat1d/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-concat1d/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-concat1d/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-concat1d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-concat1d/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders/tree/umd

[@stdlib/ndarray/defaults]: https://github.com/stdlib-js/ndarray-defaults/tree/umd

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray-promotion-rules/tree/umd

</section>

<!-- /.links -->
