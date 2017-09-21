var libDest = './wwwroot/lib';
var indexPath = './wwwroot/index';

var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
var bowerMain = require('bower-main');
var debug = require('gulp-debug');
var inject = require('gulp-inject');

var bowerMainJsFiles = bowerMain('js', 'min.js');
var bowerMainCssFiles = bowerMain('css', 'min.css');

gulp.task('main-min-js-bower-files', function () {
    return gulp.src(bowerMainJsFiles.minified)
        .pipe(debug({showFiles: true}))
        .pipe(gulp.dest(libDest));
});

gulp.task('main-min-css-bower-files', function () {
    return gulp.src(bowerMainCssFiles.minified)
        .pipe(debug({showFiles: true}))
        .pipe(gulp.dest(libDest));
});

gulp.task('index', function () {
    var target = gulp.src(indexPath);
});

gulp.task('default', ['main-min-js-bower-files', 'main-min-css-bower-files']);