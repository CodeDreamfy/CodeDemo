'use strict';
import gulp from "gulp";
import babel from 'gulp-babel';


const dirs = {
  src: 'src',
  dest: 'build'
};

const paths = {
	src: [
		`${dirs.src}/**/**.js`
	],
	dest: `${dirs.dest}`
};

gulp.task('build', () =>{
	gulp.src(paths.src)
    .pipe(
      babel({
        "presets": [
            "es2015",
            "stage-2"
        ],
        "plugins": [
          'transform-runtime'
        ],
	    })
    )
    .pipe(gulp.dest(paths.dest));
});
gulp.task('watch',() => {
  gulp.watch(paths.src,['build'])
})



gulp.task('default', ['build','watch']);
