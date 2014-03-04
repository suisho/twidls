var gulp  = require('gulp')
var gulpFilter = require('gulp-filter')
var bower = require('gulp-bower');
var clean = require('gulp-clean');

gulp.task('bower', function() {
  var dest = 'lib/'
  gulp.src(dest)
    .pipe(clean())

  var jsFilter = gulpFilter('**/*.js', '!**/test/*');
  bower()
    .pipe(jsFilter)
    .pipe(gulp.dest(dest + "js/"))

  var cssFilter = gulpFilter('**/*.css');
  bower()
    .pipe(cssFilter)
    .pipe(gulp.dest(dest + "css/"))
});

gulp.task('default', ['bower'])