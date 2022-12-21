# Tailwind Current Hue Plugin

> Plugin to provide current hue styles to allow adding tint hues to a subtree.

Install the plugin from npm:

```
$ npm install tailwind-current-hue
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [require('tailwind-current-hue')],
};
```

This will install the plugin with the default hue of "indigo". You can configure the default with an option:

```js
// tailwind.config.js
module.exports = {
  plugins: [require('tailwind-current-hue')]({ defaultHue: 'blue' })],
};
```
