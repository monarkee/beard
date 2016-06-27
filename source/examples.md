---
extends: _layouts.subpage
section: subpage_content
---
<h3 class="tcg50 ft7 md-ft10 fw3 mb2 md-mb3 flex aic acc">Component Examples</h3>

<h3 class="tcg50 ft7 fw3 mb2 md-mb3">Modal Window</h3>
<h4 class="tcg50 ft4 fw6 mb2 md-mb3">Example:</h4>

<div class="frame mb4">
    <div class="blk8">
        <div class="relative br4 brdr1 bcg20">
            <button class="xbg dim absolute pin-top pin-right lh1 tcg30 ft9 mt1 mr1">&times;</button>
            <div class="brdr1--bottom bcg10 pv2 ph2">
                <h2 class="tcg50 ft6 fw6">Modal Titles Are Hard</h2>
            </div>
            <div class="pv2 ph2">
                <p class="tcg50 ft4">Modal Content goes here</p>
            </div>
            <div class="brdr1--top bcg10 pv2 ph2">
                <p class="tar">
                    <button class="dib dim pv1 ph3 tcg50 brdr1 bgw bcg20 br3 ft5 mr1">No</button>
                    <button class="dib dim pv1 ph3 tcw brdr1 bc1 bg1 br3 ft5">Yes</button>
                </p>
            </div>
        </div>
    </div>
</div>

<h4 class="tcg50 ft4 fw6 mb2 md-mb3">Code:</h4>
```html
<div class="relative br4 brdr1 bcg30">
    <button class="xbg dim absolute pin-top pin-right lh1 tcg30 ft9 mt1 mr1">&times;</button>
    <div class="brdr1--bottom bcg10 pv2 ph2">
        <h2 class="tcg50 ft6 fw6">Modal Titles Are Hard</h2>
    </div>
    <div class="pv2 ph2">
        <p class="tcg50 ft4">Modal Content goes here</p>
    </div>
    <div class="brdr1--top bcg10 pv2 ph2">
        <p class="tar">
            <button class="dib dim pv1 ph3 tcg50 brdr1 bgw bcg20 br3 ft5 mr1">No</button>
            <button class="dib dim pv1 ph3 tcw brdr1 bc1 bg1 br3 ft5">Yes</button>
        </p>
    </div>
</div>
```

<h3 class="tcg50 ft7 fw3 mb2 md-mb3">Tabbed View</h3>
<h4 class="tcg50 ft4 fw6 mb2 md-mb3">Example:</h4>

<div class="frame mb4">
    <div class="blk">
        <div class="brdr1 bcg20">
            <div class="df">
                <a href="#" class="brdr1--right bcg20 w100 pv2 tac ft3 fw6 uppercase ls2 tc1">Tab One</a>
                <a href="#" class="brdr1--bottom bcg20 w100 pv2 tac ft3 fw6 uppercase ls2 bgg05 tcg30">Tab Two</a>
                <a href="#" class="brdr1--bottom bcg20 w100 pv2 tac ft3 fw6 uppercase ls2 bgg05 tcg30">Tab Three</a>
            </div>
            <div class="pv4 ph4">
                <p class="tcg50 ft4">Put your tab content here.</p>
            </div>
        </div>
    </div>
</div>

<h4 class="tcg50 ft4 fw6 mb2 md-mb3">Code:</h4>
```html
<div class="brdr1 bcg20">
    <div class="df">
        <a href="#" class="brdr1--right bcg20 w100 pv2 tac ft3 fw6 uppercase ls2 tc1">Tab One</a>
        <a href="#" class="brdr1--bottom bcg20 w100 pv2 tac ft3 fw6 uppercase ls2 bgg05 tcg30">Tab Two</a>
        <a href="#" class="brdr1--bottom bcg20 w100 pv2 tac ft3 fw6 uppercase ls2 bgg05 tcg30">Tab Three</a>
    </div>
    <div class="pv4 ph4">
        <p class="tcg50 ft4">Put your tab content here.</p>
    </div>
</div>
```