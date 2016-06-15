<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="/css/prism.css">
    </head>
    <body>
        @include('_partials/_header')
        <main class="flex">
            @include('_partials/_sidebar')
            <section class="w100">
                @yield('content')
            </section>
        </main>
        @include('_partials/_footer')
        <script src="/js/prism.js"></script>
    </body>
</html>
