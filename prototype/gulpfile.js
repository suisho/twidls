var gulp  = require('gulp')
var gulpFilter = require('gulp-filter')
var bower = require('gulp-bower-files');
var clean = require('gulp-clean');
var stylus = require('gulp-stylus')
var concat = require('gulp-concat')
var sass = require('gulp-sass')

var srcs = {
  "stylus" : "./stylus/**/*.styl",
  "scss"   : "./scss/*.scss"
}

var dests = {
  "js" : "lib/",
  "css" : "./app/css"
}

gulp.task('bower', function() {
  var dest = 'lib/'
  //
  /*gulp.src(dest)
    .pipe(clean());
  */
  var jsFilter = gulpFilter('**/*.js');
  
  bower()
    .pipe(jsFilter)
    //.pipe(uglify())
    .pipe(gulp.dest('lib/js'))

});

gulp.task('stylus', function(){
  var src = srcs["stylus"]
  var dest = "./app/css"
  
  gulp.src(src)
    .pipe(stylus({
      //set:['compress']
      use:['nib']
    }))
    .pipe(concat("main_stylus.css"))
    .pipe(gulp.dest(dest))
})

gulp.task('scss', function(){
  var src = srcs["scss"]
  var dest = dests["css"]

  gulp.src(src)
    .pipe(sass())
    .pipe(concat("main_scss.css"))
    .pipe(gulp.dest(dest))
})

gulp.task('watch', function(){
  gulp.watch(srcs["stylus"], ['stylus'])
  gulp.watch(srcs["scss"],   ['scss'])
})

gulp.task('default', [ 'stylus', 'scss', 'bower', 'watch'])

