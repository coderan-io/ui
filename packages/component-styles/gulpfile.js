const gulp = require('gulp');
const postcss = require('gulp-postcss');

const sass = require('gulp-sass')(require('sass'));

const build = () => {
    return gulp.src('./src/**/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dist'));
}

const watch = () => {
    gulp.watch('./src/**/*.css', build);
}

module.exports = {
    build,
    watch
}

