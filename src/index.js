import postcss from 'postcss';
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

const atruleOptions = (node, options) => {
  const option = {};
  node.walkDecls((decl) => {
    Object.assign(option, propOption(decl, options[decl.value]));
  });
  return option;
};

module.exports = postcss.plugin('postcss-button', (opts) => {
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

  const buttonMake = (node) => {
    if (options.tmp && !node.next()) {
      button(node.parent, options.tmp);
      delete options.tmp;
    }
  };

  Object.assign(options.default, opts);

  return (css) => {
    css.walk((node) => {
      if (node.type === 'atrule' && node.name.match(/^button/)) {
        const name = node.params || 'default';
        options[name] = options[name] || {};

        Object.assign(options[name], atruleOptions(node, options));
        node.remove();
      } else if (node.parent.type === 'rule' && node.type === 'decl') {
        if (node.prop.match(/^button/)) {
          options.tmp = options.tmp || Object.assign({}, options.default);
          Object.assign(options.tmp, propOption(node, options[node.value]));
          buttonMake(node);
          node.remove();
        } else {
          buttonMake(node);
        }
      }
    });
  };
});
