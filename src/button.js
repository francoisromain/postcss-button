import postcss from 'postcss';

export default (decl, options) => {
  console.log('--------------', options);
  if (options.colorActive ||
      options.backgroundColorActive ||
      options.borderColorActive) {
    const activeRule = postcss.rule({ selector: `${decl.parent.selector}:active` });

    if (options.colorActive) {
      activeRule.append({ prop: 'color', value: options.colorActive });
    }

    if (options.backgroundColorActive) {
      activeRule.append({ prop: 'background-color', value: options.backgroundColorActive });
    }

    if (options.borderColorActive && options.borderWidth !== '0') {
      activeRule.append({
        prop: 'box-shadow',
        value: `inset 0 0 0 ${options.borderWidth} ${options.borderColorActive}`,
      });
    }

    activeRule.moveAfter(decl.parent);
  }

  let declNew = [];

  if (options.color) {
    declNew = declNew.concat([
      postcss.decl({ prop: 'display', value: 'inline-block' }),
      postcss.decl({ prop: 'color', value: options.color }),
      postcss.decl({ prop: 'margin', value: 0 }),
      postcss.decl({ prop: 'cursor', value: 'pointer' }),
      postcss.decl({ prop: 'text-decoration', value: 'none' }),
      postcss.decl({ prop: 'border', value: 'none' }),
    ]);
  }

  if (options.backgroundColor) {
    declNew = declNew.concat([
      postcss.decl({ prop: 'background-color', value: options.backgroundColor }),
    ]);
  }

  if (options.borderWidth && options.borderWidth !== '0') {
    declNew = declNew.concat([
      postcss.decl({
        prop: 'box-shadow',
        value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
      }),
    ]);
  };

  // borderStyle: 'none' ???

  if (options.borderRadius && options.borderRadius !== '0') {
    declNew = declNew.concat([
      postcss.decl({ prop: 'border-radius', value: options.borderRadius }),
    ]);
  }

  decl.replaceWith(declNew);
};
