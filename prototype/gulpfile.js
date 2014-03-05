var gulp  = require('gulp')
var gulpFilter = require('gulp-filter')
var bower = require('gulp-bower-files');
var clean = require('gulp-clean');
var stylus = require('gulp-stylus')
var concat = require('gulp-concat')

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

gulp.task('stylus', function(){
  var dest = "./app/css"

 gulp.src(dest)
    .pipe(clean());
  
  gulp.src('./stylus/**/*.styl')
    .pipe(stylus({
      //set:['compress']
    }))
    .pipe(concat("main.css"))
    .pipe(gulp.dest(dest))
})

gulp.task('default', ['bower', 'stylus'])