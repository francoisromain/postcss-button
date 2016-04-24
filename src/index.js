import postcss from 'postcss';
import button from './button';

module.exports = postcss.plugin('postcss-button', (opts) => {
  const settings = {
    default: {
      color: 'grey',
      backgroundColor: 'white',
      colorActive: 'black',
      backgroundColorActive: 'silver',
      borderWidth: 0,
      borderColor: 'grey',
      borderColorActive: 'black',
      borderRadius: 0,
    },
  };

  Object.assign(settings.default, opts);

  return (css) => {
    css.walk((node) => {
      if (node.type === 'atrule' && node.name.match(/^button/)) {
        const name = node.params ? node.params : 'default';
        settings[name] = settings[name] || {};
        node.walkDecls((decl) => {
          if (decl.prop.match(/^color$/)) {
            settings[name].color = decl.value;
          } else if (decl.prop.match(/^background-color$/)) {
            settings[name].backgroundColor = decl.value;
          } else if (decl.prop.match(/^color-active$/)) {
            settings[name].colorActive = decl.value;
          } else if (decl.prop.match(/^background-color-active$/)) {
            settings[name].backgroundColorActive = decl.value;
          } else if (decl.prop.match(/^border-width$/)) {
            settings[name].borderWidth = decl.value;
          } else if (decl.prop.match(/^border-color$/)) {
            settings[name].borderColor = decl.value;
          } else if (decl.prop.match(/^border-color-active$/)) {
            settings[name].borderColorActive = decl.value;
          } else if (decl.prop.match(/^border-radius$/)) {
            settings[name].borderRadius = decl.value;
          }
        });
        node.remove();
      } else if (node.type === 'decl' && node.prop.match(/^button/)) {
        let options;
        if (node.prop.match(/^button$/)) {
          options = settings[node.value] ? settings[node.value] : settings.default;
        } else if (node.prop.match(/^button-color$/)) {
          const value = node.value.split(' ');
          options = {
            color: value[0] || '',
            backgroundColor: value[1] || '',
            colorActive: value[2] || '',
            backgroundColorActive: value[3] || '',
          };
        } else if (node.prop.match(/^button-radius$/)) {
          options = {
            borderRadius: node.value,
          };
        } else if (node.prop.match(/^button-border$/)) {
          const value = node.value.split(' ');
          options = {
            borderWidth: value[0] || '',
            borderColor: value[2] || settings.default.borderColor,
            borderColorActive: value[3] || settings.default.borderColorActive,
          };
        }
        button(node, options);
      }
    });
  };
});
