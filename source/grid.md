---
extends: _layouts.subpage
section: subpage_content
---
<h2 class="tcg50 ft10 fw3 mb2 md-mb3 flex aic acc">Grid <a class="badge br3 bg1 tcw ft3 uppercase ls1 fw6 ml1" title="These helpers accept responsive prefixes">Responsive</a></h2>

<h3 class="tcg50 ft7 fw3 mb2 md-mb3">12-column Grid</h3>
<p class="tcg50 ft5 fw3 mb4 md-mb6 lh2">Beard ships with a standard 12-column grid and provides responsive helper classes to change the layout when the viewport reaches a certain breakpoint. It also supports nested grids and non-responsive grids for increased flexibility.</p>

<blockquote class="mb4 bg1 br3 pv2 ph2">
    <p class="tcw ft5 fw3 lh2">Hint: To get the grid to maintain its ratios on the small breakpoint, use the <code class="bg3 bc2 tcw xbrdr xtshadow">.frame--stay</code> modifier on your <code class="bg3 bc2 tcw xbrdr xtshadow">.frame</code> wrapper.</p>
</blockquote>

<h2 class="tcg50 ft5 fw5 mb2 md-mb3">Examples</h2>
<div class="frame example-frame mb3">
    <div class="blk md-blk6 example-blk">
        <div class="sticky">.blk.md-blk6</div>
    </div>
    <div class="blk md-blk6 example-blk">
        <div class="sticky">.blk.md-blk6</div>
    </div>
</div>
<div class="frame example-frame mb3">
    <div class="blk md-blk--offset3 example-blk">
        <div class="sticky">.blk.md-blk--offset3</div>
    </div>
</div>
<div class="frame example-frame mb6">
    <div class="blk3 md-blk--push9 example-blk">
        <div class="sticky">.blk3.md-blk--push9</div>
    </div>
    <div class="blk9 md-blk--pull3 example-blk">
        <div class="sticky">blk9.md-blk--pull3</div>
    </div>
</div>

<h3 class="tcg50 ft7 fw3 mb2 md-mb3">The Auto Grid</h3>
<p class="tcg50 ft5 fw3 mb4 md-mb6 lh2">The AutoGrid is the easiest way to get started. Simply use a div with a <code>.frame</code> class and place any number of <code>.blk</code> elements as direct descendants. The AutoGrid will automatically figure out the width for each column and will give it a generous 30px of padding between each of them. This will create 60px wide gutter between columns.</p>

<div class="frame frame--stay example-frame mb3">
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
</div>
<div class="frame frame--stay example-frame mb3">
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
</div>
<div class="frame frame--stay example-frame mb6">
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
    <div class="blk example-blk">
        <div class="sticky">.blk</div>
    </div>
</div>

<h3 class="tcg50 ft5 fw5 mb2 md-mb3">Grids with no padding <code class="ml1">.frame--xpad</code></h3>
<div class="frame frame--xpad example-frame mb3">
    <div class="blk3 outline example-blk">
        <div class="sticky sticky--nopad">Uno</div>
    </div>
    <div class="blk3 outline example-blk">
        <div class="sticky sticky--nopad">Dos</div>
    </div>
    <div class="blk3 outline example-blk">
        <div class="sticky sticky--nopad">Tres</div>
    </div>
    <div class="blk3 outline example-blk">
        <div class="sticky sticky--nopad">Quatro</div>
    </div>
</div>
<div class="frame frame--xpad example-frame mb3">
    <div class="blk4 outline example-blk">
        <div class="sticky sticky--nopad">1</div>
    </div>
    <div class="blk4 outline example-blk">
        <div class="sticky sticky--nopad">2</div>
    </div>
    <div class="blk4 outline example-blk">
        <div class="sticky sticky--nopad">3</div>
    </div>
</div>
<div class="frame frame--xpad example-frame mb6">
    <div class="blk6 outline example-blk">
        <div class="sticky sticky--nopad">1</div>
    </div>
    <div class="blk6 outline example-blk">
        <div class="sticky sticky--nopad">2</div>
    </div>
</div>

<h3 class="tcg50 ft5 fw5 mb4">Nested Grids with <code class="ml1">.frame--stay</code></h3>

<div class="frame example-frame">
    <div class="blk6 outline example-blk">
        <div class="frame frame--stay example-frame example-nested-frame">
            <div class="blk6 example-blk">
                <div class="sticky">Nested</div>
            </div>
            <div class="blk6 example-blk">
                <div class="sticky">Nested</div>
            </div>
        </div>
    </div>
    <div class="blk6 outline example-blk">
        <div class="frame frame--stay example-frame example-nested-frame">
            <div class="blk4 example-blk">
                <div class="sticky">1</div>
            </div>
            <div class="blk4 example-blk">
                <div class="sticky">2</div>
            </div>
            <div class="blk4 example-blk">
                <div class="sticky">3</div>
            </div>
        </div>
    </div>
</div>
