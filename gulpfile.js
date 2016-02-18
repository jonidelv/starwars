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
var runSequence    = require('run-sequence').use(gulp);

var options = { };


// Static Server + watching scss/html files
gulp.task('serve', ['sass','fonts','jadeCompila','runsequence'], function() {

    browserSync.init({
        server: {
          baseDir: './web/build',
          routes: {
            '/bower_components': './bower_components'
          }
        }
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
    .pipe(gulp.dest('web/build/app/'));
});

//inject
gulp.task('inject', function () {
  var target = gulp.src('./web/build/index.html');
  var sources = gulp.src(['./web/src/**/*.js'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./web/build'));
});

//run sequence
gulp.task('runsequence', function () {
  runSequence('copy','bower','inject');
});



gulp.task('default', ['serve']);
