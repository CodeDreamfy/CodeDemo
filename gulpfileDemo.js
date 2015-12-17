var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function() {
   gulp.src('./css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch',function(){
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./css/*.css', ['minify-css']);
})



gulp.task('default',['watch'], function() {
  console.log('--------------------------GO-------------------------');
}); 