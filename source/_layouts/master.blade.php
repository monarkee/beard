<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet" href="/css/vendor.css">
        <link rel="stylesheet" href="/css/main.css">
        <title>Beard - Atomic CSS framework</title>
    </head>
    <body id="app" {{-- v-bind:class="{ 'ofh': sidebarVisible  }" --}}>
        @include('_partials/_header')
        <main class="flex">
            <div class="main-sidebar dn md-df">
                @include('_partials/_sidebar')
            </div>
            <section class="w100">
                @yield('content')
            </section>
        </main>
        @include('_partials/_footer')
        <script src="/js/app.js"></script>
    </body>
</html>
