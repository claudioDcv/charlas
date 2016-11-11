var gulp = require("gulp");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');

gulp.task('scripts', function() {
  return gulp.src([
    "./public/app/core/*.js",
    "./public/app/directives/*.js",
    "./public/app/directives/**/*.js",
    "./public/app/factory/*.js",
    "./public/app/services/*.js",
    "./public/app/modules/**/*.js",
    "./public/app/modules/intranet/**/**/*.js"
  ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/js/dist/'));
});







gulp.task('watch', function () {
  gulp.watch('./public/app/modules/**/*.js', ['scripts']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});



gulp.task('sass', function () {
  return gulp.src('./public/app/sass/styleUHL.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./public/css'));
});


gulp.task('default', ['sass', 'scripts','watch']);
