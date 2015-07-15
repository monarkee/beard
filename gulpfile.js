// Gulp Requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber');
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css');

// Directories
var dist = 'dist';
var sitedist = 'source/css';
var paths = {
    css: ['./beard.scss', 'stylesheets/**/*.scss']
}

// SCSS Compiling and Minification
gulp.task('sass', function() {
    return gulp.src('beard.scss')
        .pipe(plumber())
        .pipe(sass({
            debugInfo: false,
            lineNumbers: false
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifycss())
        .pipe(gulp.dest(sitedist))
        .pipe(gulp.dest(dist));
});

gulp.task('watch-assets', function() {
    gulp.watch(paths.css, ['sass']);
});

// Gulp Default Task
gulp.task('default', ['sass']);
gulp.task('watch', ['watch-assets', 'sass']);
