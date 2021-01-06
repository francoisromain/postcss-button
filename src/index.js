/* eslint-disable prefer-destructuring */
import button from './button';

const propOption = (decl, optionsCurrent) => {
  const option = {};
  const value = decl.value.split(/\s+(?![^[]*\]|[^(]*\)|[^{]*})/);

  if (decl.prop.match(/^button$/)) {
    Object.assign(option, optionsCurrent);
  } else if (decl.prop.match(/^button-color-active$/)) {
    option.colorActive = value[0];
  } else if (decl.prop.match(/^button-color-hover$/)) {
    option.colorHover = value[0];
  } else if (decl.prop.match(/^button-background-color$/)) {
    option.backgroundColor = value[0];
  } else if (decl.prop.match(/^button-background-color-active$/)) {
    option.backgroundColorActive = value[0];
  } else if (decl.prop.match(/^button-background-color-hover$/)) {
    option.backgroundColorHover = value[0];
  } else if (decl.prop.match(/^button-border-width$/)) {
    option.borderWidth = value[0];
  } else if (decl.prop.match(/^button-border-color$/)) {
    option.borderColor = value[0];
  } else if (decl.prop.match(/^button-border-color-active$/)) {
    option.borderColorActive = value[0];
  } else if (decl.prop.match(/^button-border-color-hover$/)) {
    option.borderColorHover = value[0];
  } else if (decl.prop.match(/^button-class-active$/)) {
    option.classActive = value[0];
  } else if (decl.prop.match(/^button-class-disabled$/)) {
    option.classDisabled = value[0];
  } else if (decl.prop.match(/^button-class-parent$/)) {
    option.classParent = !!value[0] && value[0] !== 'false';
  } else if (decl.prop.match(/^button-color$/)) {
    option.color = value[0];

    if (value[1]) {
      option.colorActive = value[1];
    }

    if (value[2]) {
      option.colorHover = value[2];
    }
  } else if (decl.prop.match(/^button-background$/)) {
    option.backgroundColor = value[0];

    if (value[1]) {
      option.backgroundColorActive = value[1];
    }

    if (value[2]) {
      option.backgroundColorHover = value[2];
    }
  } else if (decl.prop.match(/^button-border$/)) {
    option.borderWidth = value[0];

    if (value[1]) {
      option.borderColor = value[1];
    }

    if (value[2]) {
      option.borderColorActive = value[2];
    }

    if (value[3]) {
      option.borderColorHover = value[3];
    }
  } else if (decl.prop.match(/^button-class$/)) {
    option.classActive = value[0];

    if (value[1]) {
      option.classDisabled = value[1];
    }

    if (value[2]) {
      option.classParent = !!value[2] && value[2] !== 'false';
    }
  }

  return option;
};

const atRuleOptions = (node, options) => {
  const option = {};
  node.walkDecls((decl) => {
    Object.assign(option, propOption(decl, options[decl.value]));
  });

  return option;
};

const postcssButton = (opts) => {
  const options = {
    default: {
      borderWidth: '0',
      color: 'grey',
      colorActive: 'white',
      colorHover: 'white',
      backgroundColor: 'white',
      backgroundColorActive: 'red',
      backgroundColorHover: 'grey',
      borderColor: 'grey',
      borderColorActive: 'red',
      borderColorHover: 'grey',
      classActive: 'active',
      classDisabled: 'disabled',
      classParent: false,
    },
  };

  const buttonMake = (node, { rule, decl }) => {
    if (options.tmp && !node.next()) {
      button(node.parent, options.tmp, { rule, decl });

      delete options.tmp;
    }
  };

  Object.assign(options.default, opts);

  return {
    postcssPlugin: 'postcss-button',
    AtRule(node) {
      if (node.name.match(/^button/)) {
        const name = node.params || 'default';
        options[name] = options[name] || {};

        Object.assign(options[name], atRuleOptions(node, options));
        node.remove();
      }
    },
    Declaration(node, { rule, decl }) {
      if (node.parent.type === 'rule') {
        if (node.prop.match(/^button/)) {
          options.tmp = options.tmp || { ...options.default };
          Object.assign(options.tmp, propOption(node, options[node.value]));
          buttonMake(node, { rule, decl });
          node.remove();
        } else {
          buttonMake(node, { rule, decl });
        }
      }
    },
  };
};

module.exports = postcssButton;
