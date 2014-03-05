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

var stylusSrc = './stylus/**/*.styl'
gulp.task('stylus', function(){
  var src = stylusSrc
  var dest = "./app/css"

  /*gulp.src(dest)
    .pipe(clean());*/
  
  gulp.src(src)
    .pipe(stylus({
      //set:['compress']
    }))
    .pipe(concat("main.css"))
    .pipe(gulp.dest(dest))
})

gulp.task('watch', function(){
  gulp.watch(stylusSrc, ['stylus'])
})

gulp.task('default', [ 'stylus', 'bower', 'watch'])

