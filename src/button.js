import postcss from 'postcss';

const ruleDisabled = (ruleSelectors, options) => {
  const rule = postcss.rule();
  rule.selectors = ruleSelectors.map((selector) => {
    const r1 = [
      `${selector}:disabled`,
      `${selector}:disabled:active`,
      `${selector}:disabled:hover`,
    ];
    const r2 = options.classDisabled
      ? [
        `${selector}.${options.classDisabled}`,
        `${selector}.${options.classDisabled}:active`,
        `${selector}.${options.classDisabled}:hover`,
      ]
      : [];
    return [...r1, ...r2];
  });

  rule.append({ prop: 'opacity', value: '0.25' });
  rule.append({ prop: 'cursor', value: 'default' });
  rule.append({ prop: 'color', value: options.color });
  rule.append({ prop: 'background-color', value: options.backgroundColor });
  rule.append({
    prop: 'box-shadow',
    value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
  });
  return rule;
};

const ruleHover = (ruleSelectors, options) => {
  const rule = postcss.rule();
  rule.selectors = ruleSelectors.map((selector) => {
    const r1 = `${selector}:hover`;
    const r2 = options.classActive ? `${selector}.${options.classActive}:hover` : '';
    return [r1, r2];
  });

  if (options.colorHover) {
    rule.append({ prop: 'color', value: options.colorHover });
  }

  if (options.backgroundColorHover) {
    rule.append({ prop: 'background-color', value: options.backgroundColorHover });
  }

  if (options.borderColorHover && options.borderWidth !== '0') {
    rule.append({
      prop: 'box-shadow',
      value: `inset 0 0 0 ${options.borderWidth} ${options.borderColorHover}`,
    });
  }
  return rule;
};

const ruleActive = (ruleSelectors, options) => {
  const rule = postcss.rule();
  rule.selectors = ruleSelectors.map((selector) => {
    const r1 = `${selector}:active`;
    const r2 = options.classActive ? `${selector}.${options.classActive}` : '';
    return [r1, r2];
  });

  if (options.colorActive) {
    rule.append({ prop: 'color', value: options.colorActive });
  }

  if (options.backgroundColorActive) {
    rule.append({ prop: 'background-color', value: options.backgroundColorActive });
  }

  if (options.borderColorActive && options.borderWidth !== '0') {
    rule.append({
      prop: 'box-shadow',
      value: `inset 0 0 0 ${options.borderWidth} ${options.borderColorActive}`,
    });
  }

  return rule;
};

const declDefault = (options) => {
  const decl = [
    postcss.decl({ prop: 'cursor', value: 'pointer' }),
    postcss.decl({ prop: 'text-decoration', value: 'none' }),
    postcss.decl({ prop: 'border', value: 'none' }),
    postcss.decl({ prop: 'display', value: 'inline-block' }),
  ];

  if (options.color) {
    decl.push(postcss.decl({ prop: 'color', value: options.color }));
  }

  if (options.backgroundColor) {
    decl.push(postcss.decl({ prop: 'background-color', value: options.backgroundColor }));
  }

  if (options.borderWidth && options.borderWidth !== '0') {
    decl.push(postcss.decl({
      prop: 'box-shadow',
      value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
    }));
  }

  return decl;
};

export default (rule, options) => {

  rule.after(ruleDisabled(rule.selectors, options));

  if (options.colorHover || options.backgroundColorHover || options.borderColorHover) {
    rule.after(ruleHover(rule.selectors, options));
  }

  if (options.colorActive || options.backgroundColorActive || options.borderColorActive) {
    rule.after(ruleActive(rule.selectors, options));
  }

  rule.selectors = rule.selectors.map(selector => `${selector},${selector}:visited`);

  rule.prepend(declDefault(options));
};
