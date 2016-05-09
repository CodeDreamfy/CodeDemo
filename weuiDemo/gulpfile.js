var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssimport = require('postcss-import');
var concat = require('gulp-concat');
var nested = require('postcss-nested');
var rename = require('gulp-rename');  //重命名
var cssmqp = require('css-mqpacker');  //合并媒体查询
var csswring = require('csswring'); //合并多个css属性

gulp.task('postcss', function(){
  var processors = [
    cssimport,
    nested,
    autoprefixer,
    cssmqp,
    csswring({
      removeAllComments: true
    }),
    ];
  return gulp.src('./css/main.css')
  .pipe(postcss(processors))
  .on('error', errorHandler)
  .pipe(concat('main.css'))
  .pipe(rename({suffix:".min"}))
  .pipe(gulp.dest('./css/dest'))
})
gulp.task('watch', function(){
  gulp.watch('./css/src/**/*.css', ['postcss'])
})
gulp.task('default', ['postcss', 'watch']);

function errorHandler(error){
  console.log(error.message);
  console.log(error.fileName);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}
