const selectorApply = (selector, modifiers, applyToParent, isClass) => {
  const apply = (sel, modifier) => {
    const sels = sel.split(' ');
    const child =
      applyToParent && ((sels.length >= 1 && isClass) || sels.length > 1)
        ? sels.pop()
        : null;

    return applyToParent && child
      ? `${sels.join(' ')}${modifier} ${child}`
      : `${sels.join(' ')}${modifier}`;
  };

  return Array.isArray(modifiers)
    ? modifiers.map((modifier) => apply(selector, modifier))
    : apply(selector, modifiers);
};

const ruleDisabled = (ruleSelectors, options, rule) => {
  const node = rule();
  node.selectors = ruleSelectors.map((selector) => {
    const selectorDefault = selectorApply(
      selector,
      [':disabled', ':disabled:active', ':disabled:hover'],
      options.classParent
    );
    const selectorClass = options.classDisabled
      ? selectorApply(
          selector,
          [
            `.${options.classDisabled}`,
            `.${options.classDisabled}:active`,
            `.${options.classDisabled}:hover`,
          ],
          options.classParent,
          true
        )
      : [];

    return [...selectorDefault, ...selectorClass];
  });

  node.append({ prop: 'opacity', value: '0.25' });
  node.append({ prop: 'cursor', value: 'default' });
  node.append({ prop: 'color', value: options.color });
  node.append({ prop: 'background-color', value: options.backgroundColor });
  node.append({
    prop: 'box-shadow',
    value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
  });

  return node;
};

const ruleHover = (ruleSelectors, options, rule) => {
  const node = rule();
  node.selectors = ruleSelectors.map((selector) => {
    const selectorDefault = selectorApply(
      selector,
      ':hover',
      options.classParent
    );
    const selectorClass = options.classActive
      ? selectorApply(
          selector,
          `.${options.classActive}:hover`,
          options.classParent,
          true
        )
      : '';

    return [selectorDefault, selectorClass];
  });

  if (options.colorHover) {
    node.append({ prop: 'color', value: options.colorHover });
  }

  if (options.backgroundColorHover) {
    node.append({
      prop: 'background-color',
      value: options.backgroundColorHover,
    });
  }

  if (options.borderColorHover && options.borderWidth !== '0') {
    node.append({
      prop: 'box-shadow',
      value: `inset 0 0 0 ${options.borderWidth} ${options.borderColorHover}`,
    });
  }

  return node;
};

const ruleActive = (ruleSelectors, options, rule) => {
  const node = rule();
  node.selectors = ruleSelectors.map((selector) => {
    const selectorDefault = selectorApply(
      selector,
      ':active',
      options.classParent
    );
    const selectorClass = options.classActive
      ? selectorApply(
          selector,
          `.${options.classActive}`,
          options.classParent,
          true
        )
      : '';

    return [selectorDefault, selectorClass];
  });

  if (options.colorActive) {
    node.append({ prop: 'color', value: options.colorActive });
  }

  if (options.backgroundColorActive) {
    node.append({
      prop: 'background-color',
      value: options.backgroundColorActive,
    });
  }

  if (options.borderColorActive && options.borderWidth !== '0') {
    node.append({
      prop: 'box-shadow',
      value: `inset 0 0 0 ${options.borderWidth} ${options.borderColorActive}`,
    });
  }

  return node;
};

const declDefault = (options, decl) => {
  const d1 = [
    decl({ prop: 'cursor', value: 'pointer' }),
    decl({ prop: 'text-decoration', value: 'none' }),
    decl({ prop: 'border', value: 'none' }),
    decl({ prop: 'display', value: 'inline-block' }),
  ];
  const d2 = options.color ? decl({ prop: 'color', value: options.color }) : '';
  const d3 = options.backgroundColor
    ? decl({ prop: 'background-color', value: options.backgroundColor })
    : '';
  const d4 =
    options.borderWidth && options.borderWidth !== '0'
      ? [
          decl({
            prop: 'box-shadow',
            value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
          }),
        ]
      : [];

  return [...d1, d2, d3, ...d4];
};

const button = (node, options, { rule, decl }) => {
  node.after(ruleDisabled(node.selectors, options, rule));

  if (
    options.colorHover ||
    options.backgroundColorHover ||
    options.borderColorHover
  ) {
    node.after(ruleHover(node.selectors, options, rule));
  }

  if (
    options.colorActive ||
    options.backgroundColorActive ||
    options.borderColorActive
  ) {
    node.after(ruleActive(node.selectors, options, rule));
  }

  node.selectors = node.selectors.map(
    (selector) =>
      `${selector},${selectorApply(selector, ':visited', options.classParent)}`
  );
  node.prepend(declDefault(options, decl));
};

export default button;
