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

## Examples

There are two ways to declare a button:

#### With an atRule declaration

``` css
@button big-button {
  button-border-width: 1px;
  button-color: orange;
  button-background-color: white;
  button-border-color: silver;
  button-color-hover: white;
  button-background-color-hover: orange;
  button-border-color-hover: orange;
  button-color-active: white;
  button-background-color-active: silver;
  button-border-color-active: silver;
  button-class-active: active;
  button-class-disabled: disabled;
}
```

```css
.my-button {
  button: big-button;
}
```

#### With specific declarations

``` css
.your-button {
  button-color: skyblue white white;
  button-background: white skyblue silver;
  button-border: 4px skyblue skyblue silver;
  button-classes: active disabled;
}
```

01: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/01.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/01.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/01.html), [demo](https://francoisromain.github.io/postcss-button/test/01.html)

02: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/02.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/02.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/02.html), [demo](https://francoisromain.github.io/postcss-button/test/02.html)

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
  button-color: grey;
  button-background-color: white;
  button-color-active: white;
  button-background-color-active: grey;
  button-border-width: 0;
  button-border-color: grey;
  button-border-color-active: black;
  button-class-active: active;
  button-class-disabled: disabled;
  button-parent: false;
}
```

- _name_ (optional): custom identifier. If no _name_ is provided, the _default_ settings are overwritten.

* * *

## Usage

### Name

`button: [name];`

- _name_: string identifier referring to a settings atRule. Set to _default_ to use default settings.

### Color

`button-color: [color] ([color-active]) ([color-hover]);`

- _color_: button text color.
- _color-active_ (optional): button text color when active.
- _color-hover_ (optional): button text color on mouseover.


### Background color

`button-background: [background-color] ([background-color-active]) ([background-color-hover]);`

- _background-color_ (optional): button background color.
- _background-color-active_ (optional): button background color when active.
- _background-color-hover_ (optional): button background color on mouseover.

### Border

`button-border: [width] ([border-color]) ([border-color-active]) ([border-color-hover]);`

- _width_: width of the border.
- _border-color_ (optional): color of the border.
- _border-color-active_ (optional): color of the border when active.
- _border-color-hover (optional): color of the border on mouseover.

### Parent

`button-parent: false (default) | true;`

It applied pseudo classes to parent elements in a selector chain.

### Classes

`button-classes: [active] ([disabled]);`

- _active_: class name to apply the active styles.
- _disabled_ (optional): class name to apply the disabled styles.

Missing declarations fallback to the _default_ settings.
