import postcss from 'postcss';
import button from './button';

module.exports = postcss.plugin('postcss-button', (opts) => {
  const options = {
    default: {
      borderWidth: '0',
      color: 'grey',
      backgroundColor: 'white',
      borderColor: 'grey',
      colorActive: 'white',
      backgroundColorActive: 'red',
      borderColorActive: 'red',
      colorHover: 'white',
      backgroundColorHover: 'grey',
      borderColorHover: 'grey',
      classActive: 'active',
      classDisabled: 'disabled',
    },
  };

  Object.assign(options.default, opts);

  return (css) => {
    css.walk((node) => {
      if (node.type === 'atrule' && node.name.match(/^button/)) {
        const name = node.params ? node.params : 'default';

        options[name] = options[name] || {};

        node.walkDecls((decl) => {
          if (decl.prop.match(/^border-width$/)) {
            options[name].borderWidth = decl.value;
          } else if (decl.prop.match(/^color$/)) {
            options[name].color = decl.value;
          } else if (decl.prop.match(/^background-color$/)) {
            options[name].backgroundColor = decl.value;
          } else if (decl.prop.match(/^border-color$/)) {
            options[name].borderColor = decl.value;
          } else if (decl.prop.match(/^color-active$/)) {
            options[name].colorActive = decl.value;
          } else if (decl.prop.match(/^background-color-active$/)) {
            options[name].backgroundColorActive = decl.value;
          } else if (decl.prop.match(/^border-color-active$/)) {
            options[name].borderColorActive = decl.value;
          } else if (decl.prop.match(/^color-hover$/)) {
            options[name].colorHover = decl.value;
          } else if (decl.prop.match(/^background-color-hover$/)) {
            options[name].backgroundColorHover = decl.value;
          } else if (decl.prop.match(/^border-color-hover$/)) {
            options[name].borderColorHover = decl.value;
          } else if (decl.prop.match(/^class-active$/)) {
            options[name].classActive = decl.value;
          } else if (decl.prop.match(/^class-disabled$/)) {
            options[name].classDisabled = decl.value;
          }
        });

        node.remove();
      } else if (node.type === 'decl' && node.prop.match(/^button/)) {
        options.tmp = options.tmp ? options.tmp : Object.assign({}, options.default);
        const value = node.value.split(/\s+(?![^\[]*\]|[^(]*\)|[^\{]*})/);

        if (node.prop.match(/^button$/)) {
          Object.assign(options.tmp, options[value[0]]);
        } else if (node.prop.match(/^button-color$/)) {
          options.tmp.color = value[0];

          if (value[1]) {
            options.tmp.colorActive = value[1];
          }

          if (value[2]) {
            options.tmp.colorHover = value[2];
          }
        } else if (node.prop.match(/^button-background$/)) {
          options.tmp.backgroundColor = value[0];

          if (value[1]) {
            options.tmp.backgroundColorActive = value[1];
          }

          if (value[2]) {
            options.tmp.backgroundColorHover = value[2];
          }
        } else if (node.prop.match(/^button-border$/)) {
          options.tmp.borderWidth = value[0];

          if (value[1]) {
            options.tmp.borderColor = value[1];
          }

          if (value[2]) {
            options.tmp.borderColorActive = value[2];
          }

          if (value[3]) {
            options.tmp.borderColorHover = value[3];
          }
        } else if (node.prop.match(/^button-class$/)) {
          options.tmp.classActive = value[0];

          if (value[1]) {
            options.tmp.classDisabled = value[1];
          }
        }

        if (options.tmp && !node.next()) {
          button(node.parent, options.tmp);
          delete options.tmp;
        }

        node.remove();
      } else if (options.tmp && !node.next()) {
        button(node.parent, options.tmp);
        delete options.tmp;
      }
    });
  };
});
