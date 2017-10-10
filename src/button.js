import postcss from 'postcss';

const selectorApply = (selector, modifiers) => {
  const apply = (sel, modifier) => {
    const sels = sel.split(' ');
    return sels.length > 1 ? `${sels.shift()}${modifier} ${sels.join(' ')}` : `${sels[0]}${modifier}`;
  };
  return Array.isArray(modifiers)
    ? modifiers.map(modifier => apply(selector, modifier))
    : apply(selector, modifiers);
};

const ruleDisabled = (ruleSelectors, options) => {
  const rule = postcss.rule();
  rule.selectors = ruleSelectors.map((selector) => {
    const r1 = selectorApply(selector, [':disabled', ':disabled:active', ':disabled:hover']);
    const r2 = options.classDisabled
      ? selectorApply(selector, [
        `.${options.classDisabled}`,
        `.${options.classDisabled}:active`,
        `.${options.classDisabled}:hover`,
      ])
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
    const r1 = selectorApply(selector, ':hover');
    const r2 = options.classActive ? selectorApply(selector, `.${options.classActive}:hover`) : '';
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
    const r1 = selectorApply(selector, ':active');
    const r2 = options.classActive ? selectorApply(selector, `.${options.classActive}`) : '';
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
  const d1 = [
    postcss.decl({ prop: 'cursor', value: 'pointer' }),
    postcss.decl({ prop: 'text-decoration', value: 'none' }),
    postcss.decl({ prop: 'border', value: 'none' }),
    postcss.decl({ prop: 'display', value: 'inline-block' }),
  ];
  const d2 = options.color ? postcss.decl({ prop: 'color', value: options.color }) : '';
  const d3 = options.backgroundColor
    ? postcss.decl({ prop: 'background-color', value: options.backgroundColor })
    : '';
  const d4 =
    options.borderWidth && options.borderWidth !== '0'
      ? [
        postcss.decl({
          prop: 'box-shadow',
          value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
        }),
      ]
      : [];

  return [...d1, d2, d3, ...d4];
};

export default (rule, options) => {
  rule.after(ruleDisabled(rule.selectors, options));

  if (options.colorHover || options.backgroundColorHover || options.borderColorHover) {
    rule.after(ruleHover(rule.selectors, options));
  }

  if (options.colorActive || options.backgroundColorActive || options.borderColorActive) {
    rule.after(ruleActive(rule.selectors, options));
  }

  rule.selectors = rule.selectors.map(selector => `${selector},${selectorApply(selector, ':visited')}`);
  rule.prepend(declDefault(options));
};
