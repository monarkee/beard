---
extends: _layouts.subpage
section: subpage_content
---
<h3 class="tcg50 ft7 md-ft10 fw3 mb2 md-mb3 flex aic acc">Spacing  <a class="badge br3 bg1 tcw ft1 md-ft3 uppercase ls1 fw6 ml1" title="These helpers accept responsive prefixes">Responsive</a></h3>
<p class="tcg50 ft5 fw3 mb4 md-mb6 lh2">The spacing system is set up by default to have 10 increments, each representing 1rem in size. For example, to achieve a <code>margin-top</code> which uses the 2nd step in the spacing scale (2rems by deafult), you would use <code>.mt2</code>. If you wanted a <code>padding-left</code> with the 8th step in the scale, it's <code>.pl8</code>.</p>

<table class="w100 mb6 ft4 tcg60 lh2">
    <thead>
        <tr class="brdr1--bottom bcg10">
            <th class="pv1">Name</th>
            <th class="pv1">Class</th>
        </tr>
    </thead>
    <tbody>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Margin All</td>
            <td class="pv1"><code>.ma</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Margin Vertical</td>
            <td class="pv1"><code>.mv</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Margin Horizontal</td>
            <td class="pv1"><code>.mh</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Margin Top</td>
            <td class="pv1"><code>.mt</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Margin Right</td>
            <td class="pv1"><code>.mr</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Margin Bottom</td>
            <td class="pv1"><code>.mb</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Margin Left</td>
            <td class="pv1"><code>.ml</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Padding All</td>
            <td class="pv1"><code>.pa</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Padding Vertical</td>
            <td class="pv1"><code>.pv</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Padding Horizontal</td>
            <td class="pv1"><code>.ph</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Padding Top</td>
            <td class="pv1"><code>.pt</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Padding Right</td>
            <td class="pv1"><code>.pr</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Padding Bottom</td>
            <td class="pv1"><code>.pb</code></td>
        </tr>
        <tr class="brdr1--bottom bcg10">
            <td class="pv1">Padding Left</td>
            <td class="pv1"><code>.pl</code></td>
        </tr>
    </tbody>
</table>

<h3 class="tcg50 ft6 fw3 mb2 md-mb3 flex aic acc">Example:</h3>

```html
<div class="mv2 md-mv4 lg-mv6 ph1 md-ph3 lg-ph6">This div has stuff in it</div>
```

<a name="adding-new-spacing-helpers"></a>
<h3 class="tcg50 ft8 fw3 mb2 md-mb3">Adding New Spacing Helpers</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows you to add a value to be generated along with Beard's default spacing helpers, including responsive versions of each.</p>

```scss
// Tools & Mixins
//-------------------------------------------------------------------------- */
// @import '../../../stylesheets/tools.font-size';

// This has to go between Beard's tool.font-size and helpers.spacing partials
@include new-spacing-helper(16); // Outputs responsive helpers like .pt16 { padding-top: 16rem !important }
@include new-spacing-helper('--tiny', 0.3); // Outputs responsive helpers like .pt--tiny { padding-top: 0.3rem !important }

// Helpers
//-------------------------------------------------------------------------- */
// @import '../../../stylesheets/helpers.spacing';
```

<blockquote class="bg1 br3 pv2 ph2 mb6">
<p class="tcw ft5 fw3 lh2"><strong>Note:</strong> Calling this mixin will only work if you import each of Beard&rsquo;s partials individually, <a href="/installation" class="tcw fw6">as recommended by the installation guide</a>.</p>
</blockquote>
