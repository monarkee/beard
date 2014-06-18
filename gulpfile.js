// Gulp Requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    coffeelint = require('gulp-coffeelint'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    scss = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat');

// Node requires for exec and sys
var exec = require('child_process').exec,
    sys = require('sys');

// Directories
var SRC = 'src/',
    DIST = 'dist/';

var onError = function (err) {
    gutil.beep();
//    console.log(err);
};

// SCSS Compiling and Minification
gulp.task('scss', function () {
    return gulp.src(SRC + 'beard.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(scss({
            loadPath: SRC,
            // outputStyle: 'compressed',
            debugInfo: false,
            lineNumbers: false,
        }))
        .pipe(autoprefixer('last 2 version'))
        // .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(DIST))
        .pipe(notify({ message: 'Beard: scss compiled.' }));
});

/**
 * Lint CoffeeScript
 */
gulp.task('coffeelint', function () {
    console.log("Linting Coffee ----------------------------");
    gulp.src(SRC + '**/*.coffee')
        .pipe(coffeelint())
        .on('error', function() {
            gutil.beep();
        })
        .pipe(coffeelint.reporter());
});

/**
 * Compile CoffeeScript
 */
gulp.task('coffee', function () {
    console.log("CoffeeScript ----------------------------");
    // For each individual file
    gulp.src(SRC + '**/*.coffee')
//        .pipe(coffee({bare: true}).on('error', gutil.beep()))
        .pipe(coffee().on('error', function() {
            gutil.beep();
        }))
        .pipe(gulp.dest(DIST));
});

/**
 * Build JavaScript
 */
gulp.task('buildjs', function() {
    console.log("Building JS ----------------------------");
    // Concat the files to generate an all-in-one file
    gulp.src(DIST + 'components/**/*.js')
        .pipe(concat('beard.js'))
        .pipe(gulp.dest(DIST));
});

/**
 * Build Minified Javascript
 */
gulp.task('buildMinifiedJs', function() {
    console.log("Building Minified JS ----------------------------");
    // Concat the files to generate an all-in-one file
    gulp.src(DIST + 'components/**/*.js')
        .pipe(concat('beard.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(DIST));
});

/**
 * Clean Build Folders
 **/
gulp.task('clean', function() {
    console.log("Cleaning Build Files ---------------------");
    return gulp.src(DIST + '**/*.js', {read: false})
        .pipe(clean());
});

/**
 * Watch Files For Changes
 */
gulp.task('watch', function()
{
    gulp.watch([
        SRC + 'components/**/*.scss',
        SRC + 'lib/**/*.scss'
    ], ['styles']);

    gulp.watch(SRC + 'components/**/**/*.coffee', ['scripts']);
});

// Gulp Default Task
gulp.task('styles', ['scss']);
gulp.task('scripts', ['clean', 'coffeelint', 'coffee', 'buildjs', 'buildMinifiedJs']);
gulp.task('default', ['styles', 'scripts', 'watch'])