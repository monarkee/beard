---
extends: _layouts.subpage
section: subpage_content
---
<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Installation</h2>

<h3 class="tcg50 ft6 fw6 mb2 md-mb3">Beard can be installed via NPM:</h3>

```sh
npm install beardcss
```

<h3 class="tcg50 ft6 fw6 mb2 md-mb3">Or link it from the CDN</h3>

```html
<link rel="stylesheet" href="https://npmcdn.com/beardcss/dist/beard.css">
```

<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Adding Beard into your project</h2>

<h3 class="tcg50 ft8 fw3 mb2 md-mb3">The Recommended Way</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">The best way to add Beard to your project is to copy the contents of <code>beard/beard.scss</code> to your main Sass file. This allows for the best source ordering. From there, we recommend adding your site styles between the "Objects" and "Helpers" sections, like so:</p>

```scss
@import '../node_modules/beard.before';

// Place custom spacing, color, and media query configuration here

// @include new-spacing-helper('0-5', 0.5);
// @include new-color('1--light', lightent($brand-color-1, 15%));
@include new-breakpoint(tablet, '(min-width: 600px)');

// Your site styles go here
// @import 'app'

@import '../node_modules/beard.after';
```

<blockquote class="bg1 br3 pv2 ph2">
    <p class="tcw ft5 fw3 lh2"><strong>Note:</strong> Don&rsquo;t forget to change the import paths to where you installed Beard.</p>
</blockquote>

<hr class="mb4">

<h3 class="tcg50 ft8 fw3 mb2 md-mb3">Or&hellip;Just the Dead Simple Installation</h3>
<p class="tcg50 ft5 fw3 mb2 lh2">Or you could just import it directly. We don't recommend it, but if you need something quick, go ahead!</p>
<p class="tcg50 ft5 fw3 mb2 lh2"><code class="">@import '../node_modules/beardcss/beard'</code></p>
