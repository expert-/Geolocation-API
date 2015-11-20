var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var concat = require('gulp-concat');	

var config={
	port:3000,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './source/*.html',
		css: './source/CSS/*.css',
		js: './source/Javascript/*.js',
		build: './build'
	}
};

gulp.task('connect', function(){
	connect.server({
		root:['build'],
		port:config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function(){
	gulp.src('build/index.html')
	.pipe(open('',{url:config.devBaseUrl + ':'+ config.port + '/'}));
	});

gulp.task('html', function(){
	gulp.src(config.paths.html)
	.pipe(gulp.dest(config.paths.build))
	.pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src(config.paths.js)
	.pipe(gulp.dest(config.paths.build + '/Javascript'))
	.pipe(connect.reload());
});

gulp.task('css',function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.build+'/CSS'))
		.pipe(connect.reload());
});
gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);