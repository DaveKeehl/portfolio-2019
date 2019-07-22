const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

function sassTask() {
  return gulp
    .src('./styles/main.sass')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(uglifycss({uglyComments: true,}),)
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./styles'));
}

function watchTask() {
  gulp.watch('./styles/**/*.sass', sassTask);
}

exports.sassTask = sassTask;
exports.watchTask = watchTask;
exports.default = gulp.parallel(sassTask, watchTask);