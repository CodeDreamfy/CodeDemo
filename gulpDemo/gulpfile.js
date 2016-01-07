var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var less = require('gulp-less');
var cssimport = require('postcss-import');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('less', function(){
  var processors = [
    cssimport,
    autoprefixer
    ];
  return gulp.src('./css/*/*.css')
  .pipe(postcss(processors))
  .pipe(concat('main.css'))
  .pipe(rename({suffix:".min"}))
  .pipe(gulp.dest('./dest'))
})

gulp.task('default', ['less'], function() {
  console.log('hello gulp!'); 
});

gulp.task('watch', function(){
  gulp.watch([
    './css/**/*.css'
    ])
})
gulp.watch('./css/*.css', ['watch']);