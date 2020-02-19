const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const purgecss = require('gulp-purgecss');
const connect = require('gulp-connect');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const del = require('del');

// HTML TASK (COPY HTML FILE TO DIST)

function htmlTask() {
	return gulp
		.src('./src/*.html')
		.pipe(plumber())
		.pipe(gulp.dest('./dist'))
}

// SASS TASK (SOURCEMAP, AUTOPREFIXER, MINIFY, RENAME, CONCAT, COPY TO DIST)

function sassTask() {
	return gulp
		.src('./src/styles/main.sass')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/styles'))
}

// MOVE CSS TASK

function moveCssTask() {
	return gulp
		.src([
			'./src/styles/bulma/bulma.min.css',
			'./src/styles/bulma/bulma.css.map',
			'./src/styles/utility/reset.css'
		])
		.pipe(plumber())
		.pipe(gulp.dest('./dist/styles'))
}


// JS TASK (MINIFY JS, CONCAT JS, SOURCEMAP JS, COPY TO DIST)

function jsTask() {
	return gulp
		.src('./src/js/*.js')
		.pipe(plumber())
		// .pipe(concat('main.js'))
		.pipe(terser())
		// .pipe(uglify())
		// .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/js'))
}

// JSON TASK

function jsonTask() {
	return gulp
		.src('./src/js/projects.json')
		.pipe(plumber())
		.pipe(gulp.dest('./dist/js'))
}

// IMG TASK (COPY IMAGES TO DIST)

function imgTask() {
	return gulp
		.src('./src/img/**/*.*')
		.pipe(plumber())
		.pipe(imagemin([],{
			verbose: true
		}))
		.pipe(gulp.dest('./dist/img'))
}

// SEO TASK (COPY FILES TO DIST)

function seoTask() {
	return gulp
		.src([
			'./src/robots.txt',
			'./src/sitemap.xml'
		])
		.pipe(plumber())
		.pipe(gulp.dest('./dist'))
}

// CLEAN DIST TASK

function cleanDistTask() {
	return del('./dist')
}

// RELOAD TASKS

function reloadHtml() {
	return gulp
		.src('./dist/*.html')
		.pipe(connect.reload())
}

function reloadCss() {
	return gulp
		.src('./dist/styles/*.css')
		.pipe(connect.reload())
}

function reloadJs() {
	return gulp
		.src('./dist/js/*.js')
		.pipe(connect.reload())
}

function reloadJson() {
	return gulp
		.src('./dist/js/*.json')
		.pipe(connect.reload())
}

function reloadImages() {
	return gulp
		.src('./dist/img/**/*.*')
		.pipe(connect.reload())
}

// WATCH TASK

function watchTask() {
	gulp.watch('./src/styles/**/*.sass', gulp.series(sassTask, reloadCss));
	gulp.watch('./src/*.html', gulp.series(htmlTask,reloadHtml));
	gulp.watch('./src/js/*.js', gulp.series(jsTask,reloadJs));
	gulp.watch('./src/js/*.json', gulp.series(jsonTask,reloadJson));
	gulp.watch('./src/img/**/*.*', gulp.series(imgTask,reloadImages));
}

// SERVER TASK

function serverTask() {
	connect.server({
		root: 'dist',
		livereload: true
	});
}

exports.build = gulp.series(cleanDistTask, htmlTask, sassTask, moveCssTask, jsTask, jsonTask, imgTask, seoTask);
exports.dev = gulp.series(exports.build, gulp.parallel(serverTask, watchTask));

exports.default = exports.dev;