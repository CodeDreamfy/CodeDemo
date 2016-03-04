"use strict"

var gulp = require('gulp');
var postcss      = require('postcss');
var gulp_postcss = require('gulp-postcss');
var cssimport    = require('postcss-import');
//var px2rem       = require('postcss-px2rem');
var autoprefixer = require('autoprefixer');           // 浏览器前缀
var mqpacker     = require('css-mqpacker');                // MQ 包装器
var csswring     = require('csswring');                    // css minify
var nested       = require('postcss-nested');              // 支持css嵌套
var rename       = require('gulp-rename');                 // 文件重命名

gulp.task('postcss', function(){
  var processors = [
    cssimport,
    nested,
    mqpacker,
    autoprefixer,
    csswring({
      removeAllComments: true
    })
  ]
  return gulp.src('./css/main.css')
            .pipe(gulp_postcss(processors))
            .on('error', errorHandler)
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./css'))
})

gulp.task('watch', function(){
  gulp.watch('./css/src/*.css', ['postcss']);
})

gulp.task('default', ['postcss', 'watch']);

function errorHandler(error) {
  console.log(error.message);
  console.log(error.fileName);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}
