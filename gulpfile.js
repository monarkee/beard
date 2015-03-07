// Gulp Requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css');

// Directories
var DIST = 'dist/';

// Error handler for Plumber
var onError = function (err) {
    gutil.beep();
};

// SCSS Compiling and Minification
gulp.task('sass', function() {
    return gulp.src('beard.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass({
            debugInfo: false,
            lineNumbers: false
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifycss())
        .pipe(gulp.dest(DIST));
});

// Gulp Default Task
gulp.task('default', ['sass']);
