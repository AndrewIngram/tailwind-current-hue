const plugin = require('tailwindcss/plugin');

const currentHuePlugin = plugin.withOptions(
  function (options = { defaultHue: 'indigo' }) {
    return function ({ addBase, theme, config, addUtilities }) {
      const colors = theme('colors');
      const defaultHue = options.defaultHue;
      const shades = new Set();
      const hues = new Set();

      for (let [k, v] of Object.entries(colors)) {
        if (k === 'tint') {
          continue;
        }

        if (typeof v === 'object') {
          for (let shade of Object.keys(v)) {
            shades.add(shade);
          }
          hues.add(k);
        }
      }

      addBase({
        ':root': Array.from(shades).reduce((acc, shade) => {
          acc[`--${config('prefix')}current-hue-${shade}`] =
            colors[defaultHue][shade];
          return acc;
        }, {}),
      });

      addUtilities(
        Array.from(hues).reduce((acc, hue) => {
          acc[`.${config('prefix')}hue-${hue}`] = Array.from(shades).reduce(
            (acc, shade) => {
              acc[`--${config('prefix')}current-hue-${shade}`] =
                colors?.[hue]?.[shade] ?? colors[defaultHue][shade];
              return acc;
            },
            {}
          );
          return acc;
        }, {})
      );
    };
  },
  function (options) {
    return {
      theme: {
        extend: {
          colors: {
            'current-hue': {
              50: 'var(--current-hue-50)',
              100: 'var(--current-hue-100)',
              200: 'var(--current-hue-200)',
              300: 'var(--current-hue-300)',
              400: 'var(--current-hue-400)',
              500: 'var(--current-hue-500)',
              600: 'var(--current-hue-600)',
              700: 'var(--current-hue-700)',
              800: 'var(--current-hue-800)',
              900: 'var(--current-hue-900)',
            },
          },
        },
      },
    };
  }
);

module.exports = currentHuePlugin;
