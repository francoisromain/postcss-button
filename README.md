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

This plugin outputs a lot of css repetitive code necessary to create clean buttons. It also uses `box-shadow` to create borders which respect the vertical rythm.

* * *

## Examples

There are two ways to declare a button:

#### With specific declarations

``` css
.my-button-class {
  /* short-hand syntax example */

  /* color: default | active | hover */
  button-color: skyblue white white;

  /* background-color: default | active | hover */
  button-background: white skyblue silver;

  /* border: size | default | active | hover */
  button-border: 4px skyblue skyblue silver;

  /* classes: active class name | disabled class name | apply classes and pseudo classes to the parent selector */
  button-class: active disabled true;
}
```

#### With a configuration

``` css
@button my-button-name {
  /* detailed-syntax example */

  /* color */
  button-color: orange;
  button-color-active: white;
  button-color-hover: white;

  /* background-color */
  button-background-color: white;
  button-background-color-active: silver;
  button-background-color-hover: orange;

  /* border */
  button-border-width: 1px;
  button-border-color: silver;
  button-border-color-active: silver;
  button-border-color-hover: orange;

  /* classes */
  button-class-active: active;
  button-class-disabled: disabled;
  button-class-parent: true;
}
```

``` css
.my-button-class {
  button: my-button-name;
}
```


01: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/01.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/01.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/01.html), [demo](https://francoisromain.github.io/postcss-button/test/01.html)

02: [input](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/src/02.css), [output](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/dist/02.css), [markup](https://github.com/francoisromain/postcss-button/blob/gh-pages/test/02.html), [demo](https://francoisromain.github.io/postcss-button/test/02.html)

* * *

## Installation

Install the [npm package](https://www.npmjs.com/package/postcss-button):

``` bash
npm install postcss-button --save-dev
```

Require the PostCSS plugin:

``` js
postcss([ require('postcss-button') ])
```

See [PostCSS docs](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts…

* * *

## Usage

#### With a configuration (optional)

``` css
@button ([name]) {
  [button-rules…]
}
```

``` css
.my-class {
  button: [name];
}
```

- _name_ (optional): custom identifier. If no _name_ is provided, the _default_ settings are overwritten.

#### Without a configuration

``` css
.my-class {
  [button-rules…]
}
```

## Css rules

#### Color

``` css
button-color-active: [color];
```

- _color_: button text color when active.

``` css
button-color-hover: [color];
```

- _color_: button text color on hover.

``` css
/* short-hand syntax */
button-color: [color] ([color-active]) ([color-hover]);
```

#### Background color

``` css
button-background-active: [color];
```

- _color_: button background color when active.

``` css
button-background-hover: [color];
```

- _color_: button background color on hover.

``` css
/* short-hand syntax */
button-background: [background-color] ([background-color-active]) ([background-color-hover]);
```

#### Border

``` css
button-border-width: [width];
```

- _width_: width and units of the border.

``` css
button-border-color: [color];
```

- _color_: color of the border.

``` css
button-border-color-active: [color];
```

- _color_: color of the border when active.

``` css
button-border-color-hover: [color];
```

- _color_: color of the border on hover.


``` css
/* short-hand syntax */
button-border: [width] ([border-color]) ([border-color-active]) ([border-color-hover]);
```

#### Classes

``` css
button-class-active: [class-name];
```

- _class-name_: class name to apply the active styles.

``` css
button-class-disabled: [class-name];
```

- _class-name_: class name to apply the disabled styles.

``` css
button-class-parent: [boolean];
```

- _boolean_: apply the classes and pseudo element to the parent element in the selector chain if it exists (default to false). (See test 07 and 08)

``` css
/* short-hand syntax */
button-class: [active] ([disabled]) ([parent]);
```

Missing declarations fallback to the _default_ settings.

