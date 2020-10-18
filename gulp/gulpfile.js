var gulp = require('gulp');
//npm install --save-dev gulp-concat

var concat = require('gulp-concat');
// npm install --save-dev gulp-autoprefixer
const autoprefixer = require('gulp-autoprefixer');
//npm i gulp-sass --save-dev
var sass = require('gulp-sass');
//npm i gulp-pug --save-dev
var pug = require('gulp-pug');
//npm install --save-dev gulp-watch
var watch = require('gulp-watch');

/*
 *npm i static-server
 */
//npm i gulp-livereload
var livereload = require('gulp-livereload');
//npm i gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');


//css 
gulp.task('watch', () => {
    return watch('project/index.html', ['html'])
})
gulp.task('html', () => {
    return gulp.src('project/*.html').pipe(
            gulp.dest('dist')
        )
        .pipe(sourcemaps.write())

    .pipe(livereload.listen.listen())
})
gulp.task('pug', () => {
    return gulp.src('project/*.pug').pipe(pug({ pretty: true })).pipe(
            gulp.dest('dist')
        )
        .pipe(sourcemaps.write())

    .pipe(livereload.listen())
})
gulp.task('js', () => {
    return gulp.src('project/js/*.js').pipe(
        concat('main.js')
    ).pipe(
        gulp.dest('dist/js')
    ).pipe(livereload.listen())
})

gulp.task('css', () => {
    return gulp.src('project/css/main.scss').pipe(
            sass({ outputStyle: 'compressed' })
        )
        .pipe(autoprefixer(
            'last 4 versions',
            'safari 5',
            'ie6',
            'ie7',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'Firefox 14',
            'Opera 11.1',
            'firefox >= 4',
            'safari 7',
            'safari 8',
            'IE 8',
            'IE 9',
            'IE 10',
            'IE 11',
            '> 1%',
            'Firefox >= 20',
            "> 1%", "ie 8",
            "Android 2",
            "Firefox ESR",
            'ios 6',
            'android 4'))
        .pipe(
            concat('main.css')
        )
        .pipe(sourcemaps.write())

    .pipe(
        gulp.dest('dist/css')
    ).pipe(livereload.listen())
})