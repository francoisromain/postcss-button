import postcss from "postcss";

const selectorApply = (selector, modifiers, applyToParent, isClass) => {
  const apply = (sel, modifier) => {
    const sels = sel.split(" ");
    const child =
      applyToParent && ((sels.length >= 1 && isClass) || sels.length > 1)
        ? sels.pop()
        : null;

    return applyToParent && child
      ? `${sels.join(" ")}${modifier} ${child}`
      : `${sels.join(" ")}${modifier}`;
  };

  return Array.isArray(modifiers)
    ? modifiers.map((modifier) => apply(selector, modifier))
    : apply(selector, modifiers);
};

const ruleDisabled = (ruleSelectors, options) => {
  const rule = postcss.rule();
  rule.selectors = ruleSelectors.map((selector) => {
    const selectorDefault = selectorApply(
      selector,
      [":disabled", ":disabled:active", ":disabled:hover"],
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

  rule.append({ prop: "opacity", value: "0.25" });
  rule.append({ prop: "cursor", value: "default" });
  rule.append({ prop: "color", value: options.color });
  rule.append({ prop: "background-color", value: options.backgroundColor });
  rule.append({
    prop: "box-shadow",
    value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
  });

  return rule;
};

const ruleHover = (ruleSelectors, options) => {
  const rule = postcss.rule();
  rule.selectors = ruleSelectors.map((selector) => {
    const selectorDefault = selectorApply(
      selector,
      ":hover",
      options.classParent
    );
    const selectorClass = options.classActive
      ? selectorApply(
          selector,
          `.${options.classActive}:hover`,
          options.classParent,
          true
        )
      : "";

    return [selectorDefault, selectorClass];
  });

  if (options.colorHover) {
    rule.append({ prop: "color", value: options.colorHover });
  }

  if (options.backgroundColorHover) {
    rule.append({
      prop: "background-color",
      value: options.backgroundColorHover,
    });
  }

  if (options.borderColorHover && options.borderWidth !== "0") {
    rule.append({
      prop: "box-shadow",
      value: `inset 0 0 0 ${options.borderWidth} ${options.borderColorHover}`,
    });
  }

  return rule;
};

const ruleActive = (ruleSelectors, options) => {
  const rule = postcss.rule();
  rule.selectors = ruleSelectors.map((selector) => {
    const selectorDefault = selectorApply(
      selector,
      ":active",
      options.classParent
    );
    const selectorClass = options.classActive
      ? selectorApply(
          selector,
          `.${options.classActive}`,
          options.classParent,
          true
        )
      : "";

    return [selectorDefault, selectorClass];
  });

  if (options.colorActive) {
    rule.append({ prop: "color", value: options.colorActive });
  }

  if (options.backgroundColorActive) {
    rule.append({
      prop: "background-color",
      value: options.backgroundColorActive,
    });
  }

  if (options.borderColorActive && options.borderWidth !== "0") {
    rule.append({
      prop: "box-shadow",
      value: `inset 0 0 0 ${options.borderWidth} ${options.borderColorActive}`,
    });
  }

  return rule;
};

const declDefault = (options) => {
  const d1 = [
    postcss.decl({ prop: "cursor", value: "pointer" }),
    postcss.decl({ prop: "text-decoration", value: "none" }),
    postcss.decl({ prop: "border", value: "none" }),
    postcss.decl({ prop: "display", value: "inline-block" }),
  ];
  const d2 = options.color
    ? postcss.decl({ prop: "color", value: options.color })
    : "";
  const d3 = options.backgroundColor
    ? postcss.decl({ prop: "background-color", value: options.backgroundColor })
    : "";
  const d4 =
    options.borderWidth && options.borderWidth !== "0"
      ? [
          postcss.decl({
            prop: "box-shadow",
            value: `inset 0 0 0 ${options.borderWidth} ${options.borderColor}`,
          }),
        ]
      : [];

  return [...d1, d2, d3, ...d4];
};

const button = (rule, options) => {
  rule.after(ruleDisabled(rule.selectors, options));

  if (
    options.colorHover ||
    options.backgroundColorHover ||
    options.borderColorHover
  ) {
    rule.after(ruleHover(rule.selectors, options));
  }

  if (
    options.colorActive ||
    options.backgroundColorActive ||
    options.borderColorActive
  ) {
    rule.after(ruleActive(rule.selectors, options));
  }

  rule.selectors = rule.selectors.map(
    (selector) =>
      `${selector},${selectorApply(selector, ":visited", options.classParent)}`
  );
  rule.prepend(declDefault(options));
};

export default button;
