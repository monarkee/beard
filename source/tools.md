---
extends: _layouts.subpage
section: subpage_content
---

<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Tools</h2>
<p class="tcg50 ft5 fw3 mb4 lh2">Beard isn't packed full of every feature you might need, but it does come with a small set of mixins to make life easier.</p>

<a id="appearance"></a>
<h3 class="tcg50 ft8 fw3 mb2 md-mb3">appearance()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">The appearance mixin provides an easy way to assign or remove platform-native styling on form elements.</p>

```scss
// This Scss
.terry {
    @include appearance(none);
}

// Generates this CSS
.terry {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
```

<a id="font-size"></a>
<h3 class="tcg50 ft8 fw3 mb2 md-mb3">font-size()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows you to generate <code>font-size</code> declarations with rem units and uses pixels as a fallback value.</p>

```scss
// This Scss
.heading {
    @include font-size(16);
}

// Generates this CSS
.heading {
  font-size: 16px;
  font-size: 1.6rem;
}
```

<blockquote class="mb4 bg1 br3 pv2 ph2">
    <p class="tcw ft5 fw3 lh2"><strong>Note:</strong> If you've modified the font-size on the html element, the generated values will not match. It's best to either leave the value at its default or create a mixin of your own which accomplishes the same result.</p>
</blockquote>

<a id="media"></a>
<h3 class="tcg50 ft8 fw3 mb2 md-mb3">media()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows you to use the breakpoints from Beard inside of your Sass. </p>

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

<p class="tcg50 ft5 fw3 mb4 lh2">See also: <a href="/responsive-prefixes#media" class="tc1 dim">Responsive Prefixes</a></p>

<a id="new-breakpoint"></a>
<h3 class="tcg50 ft8 fw3 mb2 md-mb3">new-breakpoint()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows you to add breakpoints to Beard&rsquo;s configuration.</p>

```scss
@include new-breakpoint('tablet', '(min-width: 600px)');
```

<p class="tcg50 ft5 fw3 mb4 lh2">See also: <a href="/responsive-prefixes#adding-new-breakpoints" class="tc1 dim">Adding New Breakpoints</a></p>

<a id="new-color"></a>
<h3 class="tcg50 ft8 fw3 mb2 md-mb3">new-color()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows you to add a color to Beard&rsquo;s configuration.</p>

```scss
@include new-color('red', #FF0000);
```

<p class="tcg50 ft5 fw3 mb4 lh2">See also: <a href="/colors#adding-new-color-helpers" class="tc1 dim">Adding New Color Helpers</a></p>

<a id="new-spacing-helper"></a>
<h3 class="tcg50 ft8 fw3 mb2 md-mb3">new-spacing-helper()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows you to add a set of responsive spacing helpers to Beard&rsquo;s configuration.</p>

```scss
@include new-spacing-helper('tiny', 0.3);
```

<p class="tcg50 ft5 fw3 mb4 lh2">See also: <a href="/spacing#adding-new-spacing-helpers" class="tc1 dim">Adding New Spacing Helpers</a></p>
