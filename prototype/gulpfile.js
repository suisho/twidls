var gulp  = require('gulp')
var gulpFilter = require('gulp-filter')
var bower = require('gulp-bower-files');
var clean = require('gulp-clean');

gulp.task('bower', function() {
  var dest = 'lib/'
  //
  gulp.src(dest)
    .pipe(clean());
  
  var jsFilter = gulpFilter('**/*.js');
  
  bower()
    .pipe(jsFilter)
    //.pipe(uglify())
    .pipe(gulp.dest('lib/js'))

});

gulp.task('default', ['bower'])