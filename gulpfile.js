var gulp = require('gulp');
var customizeBootstrap = require('gulp-customize-bootstrap');
var gulpLess = require('gulp-less');


// compilando o bootstrap
gulp.task('compileBootstrap', function() {
    return gulp.src('node_modules/bootstrap/less/bootstrap.less')
      .pipe(customizeBootstrap('/dev/style/less/*.less'))
      .pipe(less())
      .pipe(gulp.dest('dist/css'));
  });

gulp.task('default', ['compileBootstrap',''])