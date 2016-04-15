var paths = {
  src: 'public/js/src',
  build: 'public/js/build'
}
module.exports = {
  entry: {
	  preload: 'public/js/src/main.js'
	},
	output: {
		path: 'public/js/src',
		filename: 'main.js',
	}
}

// module: {
//   loaders: [
//     {
//       test: path.join(__dirname, 'es6'),
//       loader: 'babel-loader',
//       query: {
//         presets: ['es2015']
//       }
//     }
//   ]
// }
