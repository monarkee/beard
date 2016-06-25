---
extends: _layouts.subpage
section: subpage_content
---
<h2 class="tcg50 ft10 fw3 mb2 md-mb3">Philosophy</h2>
<p class="tcg50 ft5 fw3 mb4 lh2">Beard is an atomic CSS library for rapidly styling web app components and sites. It was created to meet the CSS needs of a demanding and fast-paced production web app. Beard is not a front-end framework but can be used to create one and can function as the basis for a standardized set of classes for projects. It doesn't come with any pre-built components or widgets, and it doesn't come with any Javascript. It provides only the lowest-level atomic abstractions needed by most web apps.</p>

<h3 class="tcg50 ft7 fw3 mb2 md-mb3">An Example of the Beard Workflow</h3>

<p class="tcg50 ft5 fw3 mb4 lh2">For example, let&rsquo;s pretend you are building a button component for your project. You want buttons to be able to have two background colors and two font colors. You may be tempted to write these classes:</p>

<pre class="mb4"><code class="language-html">
&lt;a class="button dark"&gt;Submit Me!&lt;/a&gt;
</code></pre>

<p class="tcg50 ft5 fw3 mb4 lh2">There are a number of problems with this approach. It's hard to know what color "dark" is. Does it have more styles in it? Is it connected to the <code>button</code> class?</p>

<p class="tcg50 ft5 fw3 mb4 lh2">In Beard, we would encourage you to use the built-in background and text color helper classes:</p>

<pre class="mb4"><code class="language-html">
&lt;a class="button bgb tcw"&gt;Submit Me!&lt;/a&gt;
</code></pre>

<p class="tcg50 ft5 fw3 mb4 lh2">This would apply a black background (<code>.bgb</code>) with white text (<code>.tcw</code>). At first, the naming scheme seems odd, until you realize that Beard tries to follow a mnemonic approach.

<p class="tcg50 ft5 fw3 mb4 lh2">Next, let's say you choose to set up some default padding and border styles. Again, using Beard, we can optimize this process by using global helper classes.</p>

<pre class="mb4"><code class="language-html">
&lt;a class="button bgb tcw brdr1 bc1 pv1 ph2 br3"&gt;Submit Me!&lt;/a&gt;
</code></pre>

<p class="tcg50 ft5 fw3 mb4 lh2">In addition to the previous styles, this would add a 1px border with the color being the value of <code>$branding-color-1</code>. It would also add vertical padding in the amount of the 1st value in the spacing scale (10px by default), and horizontal padding from the 2nd level in the scale (20px by default). It would finally add a <code>border-radius</code> of 3px.</p>

<p class="tcg50 ft5 fw3 mb4 lh2">By now you might be saying to yourself, "So what would be the purpose of having a <code>.button</code> class then? All the styles are in those helper classes." That's exactly what we were thinking! In fact, for some projects you may not need anything more than this. But let's say you now needed to put this button inside another component in your system. You could add a "project-specific" class that can handle that special case:</p>

<pre class="mb4"><code class="language-html">
&lt;div class="card"&gt;
    &lt;a class="card__button bgb tcw brdr1 bc1 pv1 ph2 br3"&gt;Submit Me!&lt;/a&gt;
&lt;/div&gt;
</code></pre>

<p class="tcg50 ft5 fw3 mb4 lh2">The class <code>.card__button</code> could contain rules with absolute positioning, margins, or anything else specific to that "instance" of the component or something that Beard doesn't provide a handy helper for.</p>
