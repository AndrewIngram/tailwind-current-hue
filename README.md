# Tailwind Current Hue Plugin

Tailwind plugin to provide current hue styles to allow adding tint hues to a subtree.

**Tailwind Play examples**: https://play.tailwindcss.com/6bVIIfHPGm

<img width="874" alt="CleanShot 2022-12-21 at 11 16 57@2x" src="https://user-images.githubusercontent.com/35227/208894272-728e9ec0-6429-480a-89d3-a47108f4119e.png">

### Why does this exist?

On occasion I've need to build components which can be tinted any color in a website's pallete. Due to the how Tailwind's class extraction works, existing ways to do this have ended up being quite verbose. This plugin aims to solve that.

Instead of:

```html
<span class="inline-block rounded-full bg-blue-100 px-4 py-1 text-blue-800"
  >Badge</span
>
```

We have:

```html
<span
  class="hue-blue inline-block rounded-full bg-current-hue-100 px-4 py-1 text-current-hue-800"
  >Badge</span
>
```

This lets us build components that don't need knowledge of all the possible hues, just that they work with whatever hue is currently set. Think of it a bit like CSS' `current-color` but for an entire range of tones.

### Installation

Install from npm using your package manager of choice

```sh
$ npm install tailwind-current-hue
// or
$ yarn add tailwind-current-hue
// Or
$ pnpm tailwind-current-hue
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

### Usage

The plugin adds a new hue to the palette (blue, indigo, red, orange, etc) called `current-hue`. This can be used anywhere you would otherwise use color utility styles.

| Utility class                | current-hue equivalent             |
| ---------------------------- | ---------------------------------- |
| `bg-red-100`                 | `bg-current-hue-50`                |
| `text-blue-800`              | `text-current-hue-800`             |
| `shadow-blue-200`            | `shadow-current-hue-200`           |
| `group-hover:text-green-200` | `group-hover:text-current-hue-200` |

The default hue is indigo (this can be configured to be a different one from the pallete via the plugin's configuration, see above); you can set the current hue by using one of the `hue-*` utility styles on the specific element or an ancestor element in the DOM.

```html
<span class="hue-red">
  <!-- Some subtree where "current-hue" is now red -->
</span>
```

The hue can be any value in your Tailwind theme's colors.

Both the following are visually equivalent, whether you have a wrapper element or not is up to you:

```html
<span class="hue-blue">
  <span
    class="inline-block rounded-full bg-current-hue-100 px-4 py-1 text-current-hue-800"
    >Badge</span
  >
</span>

<span
  class="hue-blue inline-block rounded-full bg-current-hue-100 px-4 py-1 text-current-hue-800"
  >Badge</span
>
```

You can be as elaborate as you want with:

```html
<div class="col-span-1 hue-sky">
  <article
    class="justify-stretch group flex flex-col gap-2 rounded-md border-2 border-current-hue-200 bg-white p-6 shadow-md shadow-current-hue-100 hover:border-current-hue-300 hover:bg-current-hue-500"
  >
    <h3
      class="text-md text-center font-medium text-current-hue-900 group-hover:text-white"
    >
      Hello world
    </h3>
    <p
      class="mb-2 text-center text-sm font-normal text-current-hue-500 group-hover:text-current-hue-200"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales
      porta diam.
    </p>
    <button
      class="rounded-md bg-current-hue-500 px-6 py-2 text-current-hue-50 shadow-md shadow-current-hue-200 group-hover:bg-white group-hover:text-current-hue-500 group-hover:shadow-current-hue-600"
    >
      Click me
    </button>
  </article>
</div>
```
