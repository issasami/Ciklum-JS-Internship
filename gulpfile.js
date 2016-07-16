var gulp = require('gulp');
var cleancss = require('gulp-clean-css');
var rimraf = require('rimraf');
var browsersync = require('browser-sync');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var rigger = require('gulp-rigger');
var uglify = require('gulp-uglify');
var sequence = require('gulp-sequence');
var imagemin = require('gulp-imagemin');


gulp.task('html', function(){
	return gulp.src('src/index.html')
						.pipe(rigger())
						.pipe(gulp.dest('dist'))
						.pipe(browsersync.reload({stream: true}))
} )

gulp.task('style', function(){
	return gulp.src('src/css/main-style.css')
						.pipe(less())
						.pipe(gulp.dest('dist/css'))
						.pipe(browsersync.reload({stream: true}))
} )

gulp.task('script', function(){
	return gulp.src('src/scripts/script.js')
						.pipe(rigger())
						.pipe(uglify())
						.pipe(gulp.dest('dist/scripts'))
						.pipe(browsersync.reload({stream: true}))
} )

gulp.task('img', function() {
	return gulp.src('src/images/**/*.*')
			.pipe(imagemin())
			.pipe(gulp.dest('dist/images'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*.*')
			.pipe(gulp.dest('dist/fonts'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('watch', function(cb) {
	sequence('html', 'style', 'script', ['img', 'fonts'], cb);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.less', ['style']);
	gulp.watch('src/**/*.js', ['script']);
	gulp.watch('src/img/**/*.*', ['img']);
	gulp.watch('src/fonts/**/*.*', ['fonts']);
})

gulp.task('default', sequence('cleandist', 'watch', 'browser'));

gulp.task('browser', function() {
    browsersync.init({
        server: {
            baseDir: "dist"
        },
        notify: false
    });
});

gulp.task('cleandist', function(cb) {
	rimraf('./dist', cb);
})

