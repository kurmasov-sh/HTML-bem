let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));
let imagemin = require('gulp-imagemin');

//сборщик и минификатор sass
function sassToCss(done) {
    gulp.src('./sass/style.sass')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css/'));
    done();
}
//Минификатор изображений
function imgMin(){
    gulp.src('./images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/'))
}

function JSMin() {
        gulp.src('./menu.js')
        .pipe(babel())
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
}

//экспорт задач
exports.default = gulp.series(sassToCss, imgMin);
