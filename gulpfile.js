const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');

// сборщик и минификатор sass
function sassToCss(done) {
  gulp.src('./sass/style.sass')
      .pipe(sass({
        errorLogToConsole: true,
        outputStyle: 'compressed',
      }))
      .on('error', console.error.bind(console))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css/'))
      .pipe(browserSync.stream());
  done();
}
// Минификатор изображений
function imgMin() {
  gulp.src('./images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images/'));
}


// Live сервер
function Sync(done) {
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });
}

// Отслеживание изменений
function watch() {
  gulp.watch('sass/style.sass', sassToCss);
  gulp.watch('./**/*.html', browserReload);
  gulp.watch('./**/*.js', browserReload);
}
function browserReload(done) {
  browserSync.reload();
  done();
}

// Минификатор JS
function JSMin(done) {
  gulp.src('./index.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/js/'));

  done();
}


// экспорт задач
exports.default = gulp.series(sassToCss, imgMin);
exports.browserSync = Sync;
exports.watch = watch;
exports.jsmin = JSMin;
exports.sassToCss = sassToCss;
exports.runServe = gulp.parallel(Sync, watch, JSMin);
