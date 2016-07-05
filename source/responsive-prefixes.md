---
extends: _layouts.subpage
section: subpage_content
---
<h2 class="tcg50 ft10 fw3 mb2 md-mb3 flex aic acc">Responsive Prefixes</h2>
<p class="tcg50 ft5 fw3 mb4 lh2">Because Beard ships with a standard set of breakpoints, many of the helpers are responsive. These helpers are generated from the breakpoints in your <a href="/configuration" class="tc1">configuration</a>. These are the default breakpoints:</p>

<table class="ft4 tcg60 lh2 w100 mb6">
    <thead>
        <tr class="brdr1--bottom bcg10">
            <th class="pv1">Name</th>
            <th class="pv1">Prefix</th>
            <th class="pv1">Target</th>
        </tr>
    </thead>
    <tbody>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Small</td>
            <td class="pv1"><code>.sm-</code></td>
            <td class="pv1"><code>(min-width: 300px)</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Medium</td>
            <td class="pv1"><code>.md-</code></td>
            <td class="pv1"><code>(min-width: 600px)</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Large</td>
            <td class="pv1"><code>.lg-</code></td>
            <td class="pv1"><code>(min-width: 900px)</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Extra Large</td>
            <td class="pv1"><code>.xlg-</code></td>
            <td class="pv1"><code>(min-width: 1440px)</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Only Small</td>
            <td class="pv1"><code>.only-sm-</code></td>
            <td class="pv1"><code>(max-width: 599px)</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Only Medium</td>
            <td class="pv1"><code>.only-md-</code></td>
            <td class="pv1"><code>(min-width: 600px) and (max-width: 899px)</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Only Large</td>
            <td class="pv1"><code>.only-lg-</code></td>
            <td class="pv1"><code>(min-width: 900px) and (max-width: 1439px)</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Only Extra Large</td>
            <td class="pv1"><code>.only-xlg-</code></td>
            <td class="pv1"><code>(min-width: 1440px)</code></td>
        </tr>
    </tbody>
</table>

<p class="tcg50 ft5 fw3 mb4 lh2">You can use responsive prefixes to specify when an element should be shown on a page. The following would hide the element on the `lg` breakpoint.</p>

```html
<div class="lg-dn">Show on the large breakpoint</div>
```

<h2 class="tcg50 ft8 fw3 mb2 md-mb3">Adding New Breakpoints</h2>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows you to add a new breakpoint to be generated along with Beard&rsquo;s defaults. This will also cause every responsive-helper type to generate a new classes using this breakpoint's key</p>

```scss
@include new-breakpoint(tablet, '(min-width: 600px)');
```

<blockquote class="bg1 br3 pv2 ph2 mb6">
<p class="tcw ft5 fw3 lh2"><strong>Note:</strong> Calling this mixin will only work if you import Beard&rsquo;s before and after partials, <a href="/installation" class="tcw fw6">as recommended by the installation guide</a>.</p>
</blockquote>

<h2 class="tcg50 ft8 fw3 mb2 md-mb3">Using breakpoints in Sass with <code>media()</code></h2>
<p class="tcg50 ft5 fw3 mb4 lh2">Used inside a CSS declaration, this mixin will generate the appropriate media query based on the name registered in Beard's configuration. The media queries are configurable by overriding the default media queries or adding new ones with the <code>new-breakpoint</code> mixin.</p>

```scss
// This Scss
.narcos {
    @include media(sm) {
        display: none;
    }
}

// Generates this CSS
@media screen and (min-width: 300px) {
    .narcos {
        display: none;
    }
}
```