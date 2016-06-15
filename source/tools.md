---
extends: _layouts.subpage
section: subpage_content
---

<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Tools</h2>
<p class="tcg50 ft5 fw3 mb4 lh2">Beard isn't packed full of every feature you might need, but it does come with a small set of mixins to make life easier.</p>

<hr class="mb4">

<h3 class="tcg50 ft8 fw3 mb2 md-mb3">appearance()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">The appearance mixin provides an easy way to assign or remove platform-native styling on form elements.</p>

<pre class="mb4"><code class="language-scss">
.terry {
    @include appearance(none);
}
</code></pre>

<hr class="mb4">


<hr class="mb4">

<h3 class="tcg50 ft8 fw3 mb2 md-mb3">new-breakpoint()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows the user to generate their own breakpoint in Beard, which is in turn used to generate many types of responsive helpers, like spacing, breakpoints, text-alignment, and more.</p>
<pre class="mb4"><code class="language-scss">
// Somewhere in your configuration before importing Beard
@include new-breakpoint('watch', '(min-width: 100px) and (max-width: 250px)');
</code></pre>

<hr class="mb4">

<h3 class="tcg50 ft8 fw3 mb2 md-mb3">font-size()</h3>
<p class="tcg50 ft5 fw3 mb4 lh2">This mixin allows you to generate <code>font-size</code> declarations with rem units and uses pixels as a fallback value.</p>

<pre class="mb4"><code class="language-scss">
.heading {
    @include font-size(16);
}

.heading {
  font-size: 16px;
  font-size: 1.6rem;
}
</code></pre>

<blockquote class="mb4 bg1 br3 pv2 ph2">
    <p class="tcw ft5 fw3 lh2"><strong>Note:</strong> If you've modified the font-size on the html element, the generated values will not match. It's best to either leave the value at its default or create a mixin of your own which accomplishes the same result.</p>
</blockquote>

<hr class="mb4">



<!-- <blockquote class="bg1 br3 pv2 ph2">
    <p class="tcw ft5 fw3 lh2"><strong>Note:</strong> If you've modified the font-size on the html element, the generated values will not match. It's best to either leave the value at its default or create a mixin of your own which accomplishes the same result.</p>
</blockquote> -->

<!-- <hr class="mb4"> -->

<!-- <p class="ft6 tc2">Test</p>
<p class="ft6 tc3">Test</p>
<p class="ft6 tc4">Test</p>
<p class="ft6 tc5">Test</p>
<p class="ft6 tc6">Test</p> -->

<!-- <pre class="pre mb4">
<code class="code">
    // Objects
    ...

    // Your styles go here

    // Helpers
    ...
</code>
</pre> -->

<!-- <p class="tcg50 ft5 fw3 mb4 lh2">Doing things this way allows for the best source ordering.</p> -->

<!-- <blockquote class="bg1 br3 pv2 ph2">
    <p class="tcw ft5 fw3 lh2"><strong>Note:</strong> You will have to change the import paths to the actual location as when they're copied into your main Sass file, they will have changed.</p>
</blockquote> -->
