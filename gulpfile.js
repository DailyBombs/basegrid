var gulp = require('gulp');
var scss = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var reload = browserSync.reload;
var autoprefixer = require('autoprefixer');

var paths = require('./gulpconfig.js').paths;

var scriptWatchSrc = './app/js/**/*.js';
var stylesWatchSrc = './**/*.scss';

var scriptAppSrc = paths.script.app;

var buildDest = "./dist";

gulp.task('scss', function () {
    gulp.src('./app/scss/core.scss')
    .pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
    .pipe(gulp.dest('./app/css/'))
    .pipe(reload({stream:true}));
});

gulp.task('html', function() {
    return gulp.src([
        './index.html'
    ])
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
    browserSync.init(['./app/css/*.css', './app/js/*.js'], {
        server: {
            baseDir: './',
            directory: true
        }
    });
});


gulp.task('default', ['scss', 'browser-sync'], function () {
    gulp.watch([stylesWatchSrc], ['scss']);
    gulp.watch(['./**/*.html'], ['html']);
});
