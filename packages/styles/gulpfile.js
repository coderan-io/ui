const gulp = require('gulp');
const postcss = require('gulp-postcss');

const sass = require('gulp-sass')(require('sass'));

const build = () => {
    return gulp.src('./src/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest('./dist'));
}

const watch = () => {
    gulp.watch('./src/**/*.scss', build);
}

module.exports = {
    build,
    watch
}

