var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var plumber      = require('gulp-plumber');
var googleWebFonts = require('gulp-google-webfonts');
var jade = require('gulp-jade');

var options = { };


// Static Server + watching scss/html files
gulp.task('serve', ['sass','fonts','jadeCompila'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/jade/*.jade", ['jade-watch']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
        googleFonts ();
});

// googleFonts task
gulp.task('fonts', function () {
return gulp.src('app/fonts/fonts.list')
  .pipe(googleWebFonts(options))
  .pipe(gulp.dest('app/fonts'))
  ;
});

// compilar jade
gulp.task('jadeCompila', function () {
return gulp.src('app/jade/*.jade')
  .pipe(plumber())
  .pipe(jade({
    pretty: true
  }))
  .pipe(plumber.stop())
  .pipe(gulp.dest('app'));
});

//jade watch
gulp.task('jade-watch', ['jadeCompila']);


gulp.task('default', ['serve']);
