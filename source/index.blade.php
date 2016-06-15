@extends('_layouts.master')

@section('content')
<div class="wrap wrap--pad">
<section class="main-content pv4 md-pv6 md-ph6">
        <h2 class="tcg50 ft10 fw3 mb2 md-mb3">Quickstart</h2>
        <p class="tcg50 ft5 fw3 mb1 lh2"><code>$ npm install beardcss</code></p>
        <p class="tcg50 ft5 fw3 mb4 lh2"><code>$ bower install beard</code></p>

        <h2 class="tcg50 ft10 fw3 mb2 md-mb3">Introduction</h2>
        <p class="tcg50 ft5 fw3 mb4 lh2">Beard's most popular and polarizing feature is its helper classes. Many people feel utility classes like the ones that Beard generates for you leads to bloat and are just as bad as using inline styles. We've found that having a rich set of helper classes makes your projects easier to build, easier to reason, and more bulletproof. This approach is more common in web application contexts, which is where Beard was born out of.</p>

        <p class="tcg50 ft5 fw3 mb4 md-mb6 lh2">Beard utilizes shorthand for most of the classes it provides. For example, to achieve a <code>margin-top</code> which uses the 2nd step in the spacing scale, use <code>.mt2</code>. The padding version of this would be <code>.pt2</code>. You&rsquo;ll find that once you master the basic nomenclature, you&rsquo;ll be able to quickly compose sets of classes together to style elements.</p>

        <pre class="mb4"><code class="language-html">
&lt;h1 class="tcg50 ft8 fw6 pv2 ph2"&gt;This is your header&lt;/h1&gt;
        </code></pre>

        <p class="tcg50 ft5 fw3 mb4 md-mb6 lh2">Another example of the Beard nomenclature is font sizing. To use the 7th step in the font scale, you  use <code>.ft7</code>. If you wanted to change the size on a different breakpoint, you would use <code>.md-ft9</code></p>
</section>
</div>

{{--
<section class="pv4 md-pv6">
    <div class="wrap">
        <h2 class="tc1 tac uppercase ft4 ls4 fwxxbold mb4 md-mb6">Features</h2>
        <div class="features frame frame--pad">
            <div class="blk feature">
                <h2 class="tcg50 ft7 fw3 mb2 md-mb3">Settings</h2>
                <p class="ft5 lh2 tcg50 mb4 md-mb6">Want to change or disable something in Beard? We make it easy to do so.</p>
            </div>

            <div class="blk feature">
                <h2 class="tcg50 ft7 fw3 mb2 md-mb3">Reset &amp; Base Styles</h2>
                <p class="ft5 lh2 tcg50 mb4 md-mb6">Beard uses a standard reset and has a small amount of sensible base styles to remove the most annoying defaults.</p>
            </div>

            <div class="blk feature">
                <h2 class="tcg50 ft7 fw3 mb2 md-mb3">Objects</h2>
                <p class="ft5 lh2 tcg50 mb4 md-mb6">With roots in OOCSS, Beard comes with a small assortment of basic CSS objects like the infamous <code>media</code> object.</p>
            </div>
        </div>
        <div class="features frame frame--pad">
            <div class="blk feature">
                <h2 class="tcg50 ft7 fw3 mb2 md-mb3">Components</h2>
                <p class="ft5 lh2 tcg50 mb4 md-mb0">You can now opt to pull in a bunch of handy pre-styled widgets and components.</p>
            </div>

            <div class="blk feature">
                <h2 class="tcg50 ft7 fw3 mb2 md-mb3">Helpers</h2>
                <p class="ft5 lh2 tcg50 mb4 md-mb0">Beard ships with a ton of handy classes to help kickstart development and reduce the redundancy found in large CSS projects.</p>
            </div>
            <div class="blk feature"></div>
        </div>
    </div>
</section>

<section class="wrap bgg05 pv4 md-pv6">
    <h2 class="tc1 tac uppercase ft4 ls4 fwxxbold mb4 md-mb6">Testimonials</h2>
    <div class="frame mb4">
        <div class="blk4 only-sm-mb6">
            <p class="ft5 tcg60 lh1-8 mb3">&ldquo;Beard has without a doubt made my HTML much more crowded and my CSS unreadable. You know. But hey, it’s fast!&rdquo;</p>
            <div>
                <h2 class="uppercase ft4 ls1 fwxxbold mb1"><a href="http://davidhemphill.com" class="tc1">David Hemphill</a></h2>
                <p class="ft4 tcg40">Founder Monarkee, LLC</p>
            </div>
        </div>
        <div class="blk4 only-sm-mb6">
            <p class="ft5 tcg60 lh1-8 mb3">&ldquo;Beard is bloated and overweight, it should instead be called ‘fatGuyWithBeard.&rdquo;</p>
            <div>
                <h2 class="uppercase ft4 ls1 fwxxbold mb1"><a href="http://pathsofdesign.com" class="tc1">Andrew Del Prete</a></h2>
                <p class="ft4 tcg40">Big Boss Man @ Musicbed</p>
            </div>
        </div>
        <div class="blk4">
            <p class="ft5 tcg60 lh1-8 mb3">&ldquo;If you aren’t using Beard, it’s probably because you are working with one of the good frameworks out there. Good for you. #stayAway #flatCssIsALie&rdquo;</p>
            <div>
                <h2 class="uppercase ft4 ls1 fwxxbold mb1"><a href="http://jaymesdowner.com" class="tc1">Jaymes Downer</a></h2>
                <p class="ft4 tcg40">#Cashmoney Connoisseur</p>
            </div>
        </div>
    </div>
</section>
 --}}
@stop
