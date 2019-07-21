import { task, src, dest, watch } from 'gulp';
import sass, { logError } from 'gulp-sass';
// import uglifycss from 'gulp-uglifycss';

task('sass', function() {
    return src('./css/**/*.sass')
        .pipe(sass().on('error', logError))
        .pipe(dest('./css'));
});

task('css', function() {
    return src('./css/main.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(dest('./css'));
});

task('run', ['sass', 'css']);

task('watch', function() {
    watch('./sass/*.sass', ['sass']);
    watch('./css/*.css', ['css']);
});

task('default', ['run', 'watch']);