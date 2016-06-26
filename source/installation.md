---
extends: _layouts.subpage
section: subpage_content
---
<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Installation</h2>

<p class="tcg50 ft5 fw3 mb4 lh2">Beard can be installed via <a href="https://www.npmjs.com" class="tc1 :tc2">NPM</a> or <a href="bower.io" class="tc1 :tc2">Bower</a>, but just use <a href="https://www.npmjs.com" class="tc1 :tc2">NPM</a>. Seriously.</p>

<p class="tcg50 ft5 fw3 mb1 lh2"><code>$ npm install beardcss</code></p>
<p class="tcg50 ft5 fw3 mb4 lh2"><code>$ bower install beard</code></p>

<hr class="mb4">

<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Adding Beard into your project</h2>

<h3 class="tcg50 ft8 fw3 mb2 md-mb3">The Recommended Way</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">The best way to add Beard to your project is to copy the contents of <code>beard/beard.scss</code> to your main Sass file. This allows for the best source ordering. From there, we recommend adding your site styles between the "Objects" and "Helpers" sections, like so:</p>

```scss
// Objects
...

// Your styles go here

// Helpers
...
```

<blockquote class="bg1 br3 pv2 ph2">
    <p class="tcw ft5 fw3 lh2"><strong>Note:</strong> Don&rsquo;t forget to change the import paths to where you installed Beard.</p>
</blockquote>

<hr class="mb4">

<h3 class="tcg50 ft8 fw3 mb2 md-mb3">Or&hellip;Just the Dead Simple Installation</h3>
<p class="tcg50 ft5 fw3 mb2 lh2">Or you could just import it directly. We don't recommend it, but if you need something quick, go ahead!</p>
<p class="tcg50 ft5 fw3 mb2 lh2"><code class="">@import '../node_modules/beardcss/beard'</code></p>
