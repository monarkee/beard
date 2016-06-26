<header class="main-header">
    <div class="flex jcsb aic pv1 md-pv2 ph3">
        <div class="flex aic">
            <h1 class="logo ft5 md-ft7 ls1 fwxxbold flex aic">
                <a href="/" class="tc1 dim">
                    <span class="uppercase">Beard</span>
                </a>
                <a @click="sidebarVisible = ! sidebarVisible" class="pointer md-dn btn--sm dim bgw tcg40 uppercase br3 ft3 md-ft4">Menu</a>
            </h1>
            <p class="dn md-db ml2 tcg40 ft3 md-ft4">A CSS framework for people with better things to do</p>
        </div>
        <div class="flex aic">
            <a href="https://github.com/monarkee/beard" class="dn md-dib btn--sm dim bgw tcg40 br3 ft3 md-ft4">View on GitHub</a>
            <a href="https://github.com/monarkee/beard/tarball/master" class="btn--sm dim bg1 tcw br3 ft3 md-ft4">Download</a>
        </div>
    </div>
    <nav v-if="sidebarVisible" class="md-dn">
        @include('_partials/_sidebar')
    </nav>
</header>
<section>
    <div class="bg5 ht3"></div>
    <div class="bg4 ht3"></div>
    <div class="bg3 ht3"></div>
    <div class="bg2 ht3"></div>
    <div class="bg1 ht3"></div>
</section>
