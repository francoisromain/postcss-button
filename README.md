# postcss-button [![Build Status][ci-img]][ci]

[francoisromain.github.io/postcss-button](http://francoisromain.github.io/postcss-button)

A [PostCSS] plugin to create buttons.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/francoisromain/postcss-button.svg
[ci]:      https://travis-ci.org/francoisromain/postcss-button

* * * 

## Installation

Install the [npm module](https://www.npmjs.com/package/postcss-button):

    $ npm install postcss-button --save-dev

Require the PostCSS plugin:

``` js
postcss([ require('postcss-button') ])
```

See [PostCSS docs](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts… 

* * * 

## Configuration (optional)

The default settings can be overrided with an atrule:

``` css

@button [name] {
  color: grey;
  background-color: white;
  color-active: white;
  background-color-active: grey;
  border-width: 0;
  border-style: none;
  border-color: grey;
  border-color-active: black;
  class-active: active;
  class-disabled: disabled;
}
```


* * * 

## Usage

There are two ways of declaring a button: 
- With an atRule declaration
- With specific declarations

### With an atRule declaration

``` css
@button [name] {
  color: grey;
  background-color: white;
  color-active: white;
  background-color-active: grey;
  border-width: 0;
  border-style: none;
  border-color: grey;
  border-color-active: grey;
  class-active: active;
  class-disabled: disabled;
}
```

```css
.my-button {
  button: [name]
}
```

- _name_: custom identifier

### With specific declarations

``` css 
.my-button {
  button-color: [color] [background-color] [color-active] [background-color-active];
  button-border: [width] [border-color] [border-color-active];
  button-classes: [active] [disabled];
}
```

Missing declarations will use the _default_ settings. 

Example: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/01.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/01.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/01.html), [demo](http://localhost/francoisromain.github.io/postcss-button/test/01.html)

Example: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/02.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/02.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/02.html), [demo](http://localhost/francoisromain.github.io/postcss-button/test/02.html)

