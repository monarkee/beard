// Gulp Requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css');

// Directories
var DIST = 'dist/';

// SCSS Compiling and Minification
gulp.task('sass', function() {
    return gulp.src('beard.scss')
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
