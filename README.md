# postcss-button

[![npm version][npm-img]][npm] [![Build Status][ci-img]][ci] [![Dependency Status][dep-img]][dep]

[francoisromain.github.io/postcss-button][github.io]

A [PostCSS] plugin to create buttons.

[github.io]: http://francoisromain.github.io/postcss-button
[PostCSS]:   https://github.com/postcss/postcss
[ci-img]:    https://travis-ci.org/francoisromain/postcss-button.svg
[ci]:        https://travis-ci.org/francoisromain/postcss-button
[npm-img]:   https://badge.fury.io/js/postcss-button.svg
[npm]:       https://badge.fury.io/js/postcss-button
[dep-img]:   https://david-dm.org/francoisromain/postcss-button.svg
[dep]:       https://david-dm.org/francoisromain/postcss-button

* * * 

## Installation

Install the [npm package](https://www.npmjs.com/package/postcss-button):

    $ npm install postcss-button --save-dev

Require the PostCSS plugin:

``` js
postcss([ require('postcss-button') ])
```

See [PostCSS docs](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts… 

* * * 

## Configuration (optional)

``` css
@button ([name]) {
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

- _name_ (optional): custom identifier. If no _name_ is provided, the _default_ settings are overwritten.

* * * 

## Usage

### Name

`button: [name]`

- _name_: string identifier referring to a settings atRule. Set to _default_ to use default settings.

### Colors

`button-color: [color] ([background-color]) ([color-active]) ([background-color-active]);`

- _color_: button text color.
- _background-color_ (optional): button background color.
- _color-active_ (optional): button text color on mouseover.
- _background-color_ (optional): button background color on mouseover.

### Border

`button-border: [width] ([border-color]) ([border-color-active])`

- _width_: width of the border.
- _border-color_ (optional): color of the border.
- _border-color-active_ (optional): color of the border on mouseover.

### Classes

`button-classes: [active] ([disabled])`

- _active_: class name to apply the active styles.
- _disabled_ (optional): class name to apply the disabled styles.

If optional values are not set, fallback to the atRule declaration values.

### Examples

There are two ways of declaring a button: 

### With a _name_ referring to an atRule declaration

```css
.my-button {
  button: big-button;
}
```

### With specific declarations

``` css 
.my-button {
  button-color: grey white white orange;
  button-border: 2px orange white;
  button-classes: active diabled;
}
```

Missing declarations will use the _default_ settings. 

Example: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/01.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/01.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/01.html), [demo](http://localhost/francoisromain.github.io/postcss-button/test/01.html)

Example: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/02.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/02.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/02.html), [demo](http://localhost/francoisromain.github.io/postcss-button/test/02.html)

