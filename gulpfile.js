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
var del            = require('del');

var options = { };


// Static Server + watching scss/html files
gulp.task('serve', ['sass','fonts','jadeCompila',], function() {

    browserSync.init({
        server: {
          baseDir: './web/build',
          routes: {
            '/bower_components': './bower_components'
          }
        }
    });

    gulp.watch('web/**/*.scss', ['sass']);
    gulp.watch('web/src/**/*.jade', ['jade-watch']);
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
});

// googleFonts task
gulp.task('fonts', function () {
return gulp.src('web/src/fonts/fonts.list')
  .pipe(googleWebFonts(options))
  .pipe(gulp.dest('web/build/css/fonts'));
});

// compilar jade
gulp.task('jadeCompila', function () {
return gulp.src('web/src/**/*.jade')
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

//iject gulp
gulp.task('inject', function () {
  gulp.src('./web/build/index.html')
  //  .pipe(wiredep({
  //  }))
    .pipe(inject(gulp.src(['web/build/app/**/*.module.js','web/build/app/**/*.js'], {read: false}), {relative: true}))
    .pipe(gulp.dest('./web/build'));
});

// wiredep bower
gulp.task('bower', function () {
  gulp.src('web/build/index.html')
    .pipe(wiredep({
    }))
    .pipe(gulp.dest('web/build'));
});

//remove
gulp.task('remove', function () {
  del(['web/build/app/**/*']);
});

//copy documents from app
gulp.task('copy', ['remove'],function() {
    gulp.src(['web/src/app/**/*.js', 'web/src/app/**/*.scss'])
    .pipe(gulp.dest('web/build/app/'));
});

gulp.task('clean', ['remove','copy']);


gulp.task('default', ['serve']);
