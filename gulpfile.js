
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("styles/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('out/'));
});
// JS
// var concat = require('gulp-concat');
// var uglyfly = require('gulp-uglyfly');
//
// gulp.task('default', function() {
//     return gulp.src('./js/wow.min.js', './js/select2.min.js','./js/jquery.min.js', './js/popper.js', './js/bootstrap.min.js', './js/jquery.magnific-popup.js', './js/lib-init.js',  )
//         .pipe(concat('all.js'))
//         .pipe(uglyfly())
//         .pipe(gulp.dest('./dist/'));
// });

// IMAGE
// const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
//
// gulp.task('default', () =>
//     gulp.src('img/png/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// );