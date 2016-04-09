var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var googleWebFonts = require('gulp-google-webfonts');
var jade = require('gulp-jade');
var inject = require('gulp-inject');
var del = require('del');
var mainBowerFiles = require('gulp-main-bower-files');

var options = {};


// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'fonts', 'clean', 'jadeCompila', 'bower', 'inject'], function() {

  browserSync.init({
    server: {
      baseDir: './web/build',
      routes: {
        '/bower_components': './bower_components'
      }
    }
  });

  gulp.watch('web/**/*.scss', ['sass']);
  gulp.watch('web/src/**/*.jade', ['clean', 'jade-watch', 'inject']);
  gulp.watch('bower_components/**', ['default']);
  gulp.watch('web/build/*.html').on('change', browserSync.reload);
  gulp.watch('web/build/app/**/*.js').on('change', browserSync.reload);
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
gulp.task('fonts', function() {
  return gulp.src('web/src/fonts/fonts.list')
    .pipe(googleWebFonts(options))
    .pipe(gulp.dest('web/build/css/fonts'));
});

//del documents from app
gulp.task('clean', function() {
  del(['web/build/index.html']);
  //gulp.src(['web/src/app/**/*.js', 'web/src/app/**/*.scss'])
  //.pipe(gulp.dest('web/build/app/'));
});

// compile jade
gulp.task('jadeCompila', ['clean'], function() {
  return gulp.src('web/src/**/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('web/build/'));
});

// compile jade 2
gulp.task('jadeCompila2', function() {
  return gulp.src('web/build/app/**/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('web/build/app'));
});

//jade watch
gulp.task('jade-watch');

//inject gulp
gulp.task('inject', ['jadeCompila'], function() {
  gulp.src('./web/build/index.html')
    .pipe(inject(gulp.src(['web/build/bowerfiles/**/*.js', 'web/build/bowerfiles/**/*.css',
      'web/build/app/**/*.module.js', 'web/build/app/**/*.js'
    ], {
      read: false
    }), {
      relative: true
    }))
    .pipe(gulp.dest('./web/build'));
});


//copy bower main files
gulp.task('bower', function() {
  return gulp.src('bower.json')
    .pipe(mainBowerFiles())
    .pipe(gulp.dest('web/build/bowerfiles'));
});

gulp.task('default', ['serve']);
