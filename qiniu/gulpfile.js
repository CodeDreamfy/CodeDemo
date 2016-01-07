var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var rename = require('gulp-rename');

gulp.task('recss', function(){
  var processors = [
    autoprefixer,
    csswring,
    nested
  ];
  return gulp.src('./css/src/*.css')
  .pipe(postcss(processors))
  .on('error', errorHandler)
  .pipe(rename({suffix: ".min"}))
  .pipe(gulp.dest('./css'))
});
gulp.task('default', ['recss'], function(){
    console.log("start make css!~~~")
  })
gulp.watch('./css/src/*.css', ['recss']);

function errorHandler(error){
  this.emit('end');
}


