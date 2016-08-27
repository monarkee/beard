---
extends: _layouts.subpage
section: subpage_content
---
<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Quickstart</h2>

<h3 class="tcg50 ft6 fw6 mb2 md-mb3">Beard can be installed via NPM:</h3>

```sh
npm install beardcss
```

<h3 class="tcg50 ft6 fw6 mb2 md-mb3">Or link it from the CDN</h3>

```html
<link rel="stylesheet" href="https://npmcdn.com/beardcss/dist/beard.css">
```

<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Introduction</h2>
<p class="tcg50 ft5 fw3 mb4 lh2">Beard's most popular and polarizing feature is its helper classes. Many people feel utility classes like the ones that Beard generates for you leads to bloat and are just as bad as using inline styles. We've found that having a rich set of helper classes makes your projects easier to build, easier to reason, and more bulletproof. This approach is more common in web application contexts, which is where Beard was born out of.</p>

<p class="tcg50 ft5 fw3 mb4 md-mb6 lh2">Beard utilizes shorthand for most of the classes it provides. For example, to achieve a <code>margin-top</code> which uses the 2nd step in the spacing scale, use <code>.mt2</code>. The padding version of this would be <code>.pt2</code>. You&rsquo;ll find that once you master the basic nomenclature, you&rsquo;ll be able to quickly compose sets of classes together to style elements.</p>

```html
<h1 class="tcg50 ft8 fw6 pv2 ph2">This is your header</h1>
```

<p class="tcg50 ft5 fw3 mb4 md-mb6 lh2">Another example of the Beard nomenclature is font sizing. To use the 7th step in the font scale, you  use <code>.ft7</code>. If you wanted to change the size on a different breakpoint, you would use <code>.md-ft9</code></p>
