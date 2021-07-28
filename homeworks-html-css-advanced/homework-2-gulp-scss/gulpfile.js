const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const rename = require("gulp-rename");
const groupMedia = require('gulp-group-css-media-queries');
 

function browsersync() {
	browserSync.init({
		server: { baseDir: './' }, 
		notify: false, 
		online: true 
	})
}
 
function scripts() {
	return src(['./src/scripts/main.js'])
  .pipe(concat('main.js'))
	.pipe(uglify())
  .pipe(rename({
    suffix: ".min"
  }))
	.pipe(dest('./dist/scripts/'))
	.pipe(browserSync.stream())
}
 
function styles() {
	return src('./src/sass/style.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
	.pipe(groupMedia())
	.pipe(autoprefixer({ overrideBrowserslist: ['last 5 versions'], grid: true }))
	.pipe(cleancss( { level: { 1: { specialComments: 0 } }} ))
  .pipe(rename({
    suffix: ".min"
  }))
	.pipe(dest('./dist/css/'))
	.pipe(browserSync.stream())
}
 
function images() {
	return src([
		'./src/images/**/*',
	], { base: './src/' })
	.pipe(newer('./dist/images/'))
	.pipe(imagemin())
	.pipe(rename({
    suffix: ".min"
  }))
	.pipe(dest('./dist/'))
}
 
function cleandist() {
	return del('./dist/**/*', { force: true })
}

function cleanimg() {
	return del('dist/images/**/*', { force: true })
}

function startwatch() { 
	watch('./src/**/*.js', scripts);
	watch('./src/sass/**/*.scss', styles);
	watch('./index.html').on('change', browserSync.reload);
	watch('./src/images/**/*', images); 
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleandist = cleandist;
exports.cleanimg = cleanimg;

exports.build = series(cleandist, styles, scripts, images);
exports.dev = parallel(browsersync, startwatch);
 
exports.default = parallel(styles, scripts, images, browsersync, startwatch);