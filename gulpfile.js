// Gulp Requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    amaretto = require('amaretto'),
    autoprefixer = require('gulp-autoprefixer'),
    scss = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat');

// Node requires for exec and sys
var exec = require('child_process').exec,
    sys = require('sys');

// Directories
var DIST = 'dist/';

var onError = function (err) {
    gutil.beep();
};

// SCSS Compiling and Minification
gulp.task('scss', function() {
    return gulp.src('beard.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(scss({
            loadPath: [amaretto.includePaths],
            debugInfo: false,
            lineNumbers: false
        }))
        .pipe(autoprefixer('last 2 version'))
        // .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(DIST));
        //.pipe(notify({message: 'Beard: scss compiled.'}));
});

/**
 * Watch Files For Changes
 */
gulp.task('watch', function () {
    gulp.watch('beard.scss', ['scss']);
});

// Gulp Default Task
gulp.task('default', ['scss', 'watch'])
