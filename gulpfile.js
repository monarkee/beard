// Gulp Requires
var elixir = require('laravel-elixir');

// Config
elixir.config.assetsPath = './';
elixir.config.css.sass.folder = '';
elixir.config.publicPath = 'dist';

elixir(function(mix) {
    mix.sass('beard.scss');
    mix.sass('site.scss');
    mix.copy('dist/css/beard.css', 'source/css/beard.css');
});