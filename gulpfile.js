const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');
const browserSync = require('browser-sync').create();


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });    

	gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('sass',function(){
	return gulp.src('sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	// .pipe(autoprefixer())
	.pipe(sourcemaps.write('css/maps/'))
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream());

});

gulp.task('sass:watch', function(){
	gulp.watch('sass/**/*.scss', ['sass']);
});

// deploy tasks
gulp.task('deploy', ['DeployHtml', 'DeployCss', 'DeployFonts', 'DeployImages', 'DeployScripts']);

gulp.task('DeployHtml', function(){
	return gulp.src("*.html")
  .pipe(gulp.dest('dist'));
});

gulp.task('DeployCss', function(){
	return gulp.src('css/**/*.css')
	.pipe(cssmin())
	.pipe(gulp.dest('dist/css/'));
});

gulp.task('DeployFonts', function(){
	return gulp.src('fonts/*')
	.pipe(gulp.dest('dist/fonts/'));
});

gulp.task('DeployImages', function(){
	return gulp.src('images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images/'));
});

gulp.task('DeployScripts', function(){
	return gulp.src('scripts/*')
	.pipe(gulp.dest('dist/scripts/'));
});