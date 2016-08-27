---
extends: _layouts.subpage
section: subpage_content
---
<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Reset &amp; Base</h2>
<p class="tcg50 ft5 fw3 mb4 lh2">Beard is designed to be highly useful for web applications. To this end, we've added a hard reset in place of other options like <a href="http://normalizecss.com" class="tc1">Normalize.css</a>. We feel this provides the best method of "setting an even playing field" for building out front-end components.</p>
<p class="tcg50 ft5 fw3 mb4 lh2">Of course, you don't have to use this reset, and can instead opt to use your own. If you'd like to disable Beard's reset, simply set the flag before you import Beard.</p>

```scss
$beard-reset: false;
```

<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Base Styles</h2>
<p class="tcg50 ft5 fw3 mb4 lh2">Beard comes with a few opinionated defaults for things such as the <code>html</code> and <code>body</code> elements, headings, and other basic elements. These are written as smart defaults which most people want to have out of the box. It also sets images to be responsive by default. However, if the provided defaults don't serve your needs, you can redefine the styles in your own Sass.</p>
<p class="tcg50 ft5 fw3 mb4 lh2">Again, you don't have to use these base styles, and can disable them by setting the flag before you import Beard.</p>

```scss
$beard-base: false;
```
