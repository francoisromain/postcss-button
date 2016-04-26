import postcss from 'postcss';

export default (rule, options) => {
  const ruleSelectors = rule.selectors;

  // disabled rule
  const ruleDisabledSelectors = [];

  ruleSelectors.forEach((selector) => {
    ruleDisabledSelectors.push(...[
      `${selector}:disabled`,
      `${selector}:disabled:active`,
      `${selector}:disabled:hover`,
    ]);
  });

  if (options.classDisabled) {
    ruleSelectors.forEach((selector) => {
      ruleDisabledSelectors.push(...[
        `${selector}.${options.classDisabled}`,
        `${selector}.${options.classDisabled}:active`,
        `${selector}.${options.classDisabled}:hover`,
      ]);
    });
  }

  const ruleDisabled = postcss.rule();
  ruleDisabled.selectors = ruleDisabledSelectors;

  ruleDisabled.append({ prop: 'opacity', value: '0.25' });
  ruleDisabled.append({ prop: 'cursor', value: 'default' });

  ruleDisabled.moveAfter(rule);

  // active rule
  if (options.colorActive ||
    options.backgroundColorActive ||
    options.borderColorActive) {
    const ruleActiveSelectors = [];

    ruleSelectors.forEach((selector) => {
      ruleActiveSelectors.push(...[
        `${selector}:active`,
        `${selector}:hover`,
      ]);
    });

    if (options.classActive) {
      ruleSelectors.forEach((selector) => {
        ruleActiveSelectors.push(`${selector}.${options.classActive}`);
      });
    }

    const ruleActive = postcss.rule();

    ruleActive.selectors = ruleActiveSelectors;

    if (options.colorActive) {
      ruleActive.append({ prop: 'color', value: options.colorActive });
    }

    if (options.backgroundColorActive) {
      ruleActive.append({ prop: 'background-color', value: options.backgroundColorActive });
    }

    if (options.borderColorActive && options.borderWidth !== '0') {
      ruleActive.append({
        prop: 'box-shadow',
        value: `inset 0 0 0 ${options.borderWidth} ${options.borderColorActive}`,
      });
    }

    ruleActive.moveAfter(rule);
  }

  // default rule
  const declNew = [
    postcss.decl({ prop: 'display', value: 'inline-block' }),
    postcss.decl({ prop: 'margin', value: '0' }),
    postcss.decl({ prop: 'cursor', value: 'pointer' }),
    postcss.decl({ prop: 'text-decoration', value: 'none' }),
    postcss.decl({ prop: 'border', value: 'none' }),
  ];

  if (options.color) {
    declNew.push(...[
      postcss.decl({ prop: 'color', value: options.color }),
    ]);
  }

  if (options.backgroundColor) {
    declNew.push(...[
      postcss.decl({ prop: 'background-color', value: options.backgroundColor }),
    ]);
  }

  if (options.borderWidth && options.borderWidth !== '0') {
    declNew.push(...[
      postcss.decl({
        prop: 'box-shadow',
        value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
      }),
    ]);
  }

  const ruleSelectorsNew = [];

  ruleSelectors.forEach((selector) => {
    ruleSelectorsNew.push(`${selector}:visited`);
  });

  rule.selectors = ruleSelectors.concat(ruleSelectorsNew);

  rule.append(declNew);
};
