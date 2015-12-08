"use strict";

var gulp         = require('gulp');
var postcss      = require('postcss');
var gulp_postcss = require('gulp-postcss');
var Px2remObj    = require('px2rem');
var rename       = require('gulp-rename');
var csswring     = require('csswring'); 

var px2rem = postcss.plugin('postcss-px2rem', function(options) {
    return function(css, result) {
        var oldCssText = css.toString();
        var px2remIns = new Px2remObj(options);
        var newCssText = px2remIns.generateRem(oldCssText);
        var newCssObj = postcss.parse(newCssText);
        result.root = newCssObj;
    };
});

gulp.task('postcss', function(){
  var processors = [
    px2rem({ remUnit: 64 }),
    csswring({
      preserveHacks: true,
      removeAllComments: true
    })
  ];
  console.log('here in ');
  return gulp.src('./css/main.css') 
          .pipe(gulp_postcss(processors))
          .on('error', errorHandler)
          .pipe(rename({suffix: ".min"}))
          .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    gulp.watch([
      './css/**/*.css'
    ], ['postcss']);
});

// Main stask
gulp.task('default', ['postcss','watch']);

function errorHandler(error){
  this.emit('end');
}