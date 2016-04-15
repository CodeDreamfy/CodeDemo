'use strict';
import gulp from "gulp";
import babel from 'gulp-babel';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';

const dirs = {
  src: 'public/js/src',
  dest: 'public/js/build'
};

const paths = {
	src: [
		`${dirs.src}/**/*.js`,
	],
	dest: `${dirs.dest}`
};

gulp.task('build', ()=>{
	gulp.src(paths.src)
    .pipe(
      babel({
        "presets": [
            "es2015",
            "stage-2"
        ],
        "plugins": [
          // 'transform-runtime'
        ]
	    })
    )
    .pipe(gulp.dest(paths.dest));
});

// gulp.task('libs', function(){
//   return gulp.src([
//       'node_modules/systemjs/dist/system.js',
//       'node_modules/babel-polyfill/dist/polyfill.js'])
//       .pipe(gulp.dest(paths.dest));
// });

gulp.task('webpack', ['build'], function(){
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ];
  webpack(myConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true,
      progress: true
    }));
  });
})

gulp.task('watch',() => {
  gulp.watch(paths.src,['webpack','build'])
})

gulp.task('default', ['build','watch']);
