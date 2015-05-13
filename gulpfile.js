'use strict';

var gulp = require('gulp');
var jsonlint = require('gulp-jsonlint');

gulp.task('test', function () {
	return gulp.src('./config/*.json')
		.pipe(jsonlint())
		.pipe(jsonlint.reporter());
});
