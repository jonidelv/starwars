var gulp           = require('gulp');
var browserSync    = require('browser-sync').create();
var sass           = require('gulp-sass');
var autoprefixer   = require('gulp-autoprefixer');
var sourcemaps     = require('gulp-sourcemaps');
var plumber        = require('gulp-plumber');
var googleWebFonts = require('gulp-google-webfonts');
var jade           = require('gulp-jade');
var wiredep        = require('wiredep').stream;
var inject         = require('gulp-inject');

var options = { };


// Static Server + watching scss/html files
gulp.task('serve', ['sass','fonts','jadeCompila','copy','bower'], function() {

    browserSync.init({
        server: './web/build'
    });

    gulp.watch('web/src/scss/*.scss', ['sass']);
    gulp.watch('web/src/jade/*.jade', ['jade-watch']);
    gulp.watch('web/src/app/**/*', ['copy']);
    gulp.watch('web/build/*.html').on('change', browserSync.reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src('web/src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('web/build/css'))
        .pipe(browserSync.stream());
        googleFonts ();
});

// googleFonts task
gulp.task('fonts', function () {
return gulp.src('web/src/fonts/fonts.list')
  .pipe(googleWebFonts(options))
  .pipe(gulp.dest('web/build/css/fonts'))
  ;
});

// compilar jade
gulp.task('jadeCompila', function () {
return gulp.src('web/src/jade/*.jade')
  .pipe(plumber())
  .pipe(jade({
    pretty: true
  }))
  //.pipe(wiredep())
  .pipe(plumber.stop())
  .pipe(gulp.dest('web/build/'));
});

//jade watch
gulp.task('jade-watch', ['jadeCompila']);


// wiredep bower
gulp.task('bower', function () {
  gulp.src('web/build/index.html')
    .pipe(wiredep({
    }))
    .pipe(gulp.dest('web/build'));
});

//copy documents from app
gulp.task('copy', function() {
    gulp.src(['web/src/app/**/*'])
    .pipe(gulp.dest('web/build/app/'))
});

//inject


gulp.task('default', ['serve']);
