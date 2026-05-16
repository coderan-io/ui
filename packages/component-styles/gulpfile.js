const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const build = () => {
    return gulp.src('./src/**/*.css')
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./dist'));
}

const watch = () => {
    gulp.watch('./src/**/*.css', build);
}

module.exports = {
    build,
    watch
}

