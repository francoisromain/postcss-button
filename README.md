# postcss-button [![Build Status][ci-img]][ci]

[francoisromain.github.io/postcss-button](http://francoisromain.github.io/postcss-button)

A [PostCSS] plugin to create grids based on a fixed column width.

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

Global settings rule (and default values):

``` css

@button {
  color: grey;
  background-color: white;
  color-active: black;
  background-color-active: silver;
  border-width: 0;
  border-style: none;
  border-color: grey;
  border-color-active: black;
  radius: 0;
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
  color-active: black;
  background-color-active: silver;
  border-width: 0;
  border-style: none;
  border-color: grey;
  border-color-active: black;
  radius: 0;
}

.my-button {
  button: [name]
}
```

### With specific declarations

``` css 
.my-button {
  button-color: [color] [background-color] [color-active] [background-color-active];
  button-border: [width] [style] [color] [color-active];
  button-radius: [size];
}
```

Example: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/00.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/00.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/00.html), [demo](http://localhost/francoisromain.github.io/postcss-button/test/00.html)

