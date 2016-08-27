Beard
=====

[![Join the chat at https://gitter.im/monarkee/beard](https://badges.gitter.im/monarkee/beard.svg)](https://gitter.im/monarkee/beard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Beard is an extremely pragmatic and utility-focused CSS framework. Actually, don't call it that.

Beard focuses on developer speed, maintenance, and ease-of-use, versus "pretty" markup.

## Installation

Beard can be installed via [NPM](https://www.npmjs.com).
```$ npm install beardcss```

---

### Adding Beard into your project

### The Recommended Way

The best way to add Beard to your project is to copy the contents of <code>beard/beard.scss</code> to your main Sass file. This allows for the best source ordering. From there, we recommend adding your site styles between the "Objects" and "Helpers" sections, like so:

```scss
@import '../node_modules/beardcss/stylesheets/beard.before';

// Place custom spacing, color, and media query configuration here

// @include new-spacing-helper('0-5', 0.5);
// @include new-color('1--light', lighten($brand-color-1, 15%));
@include new-breakpoint(tablet, '(min-width: 600px)');

// Your site styles go here
// @import 'app'

@import '../node_modules/beardcss/stylesheets/beard.after';
```

---

### Or&hellip;Just the Dead Simple Installation

Or you could just import it directly. We don't recommend it, but if you need something quick, go ahead!
```@import '../node_modules/beardcss/beard'```
