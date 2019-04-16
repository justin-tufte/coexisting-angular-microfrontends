var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/angularjs.app.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		library: 'app'
	},
	module: {
		loaders: [{ 
			test: /\.js$/,
			loader: 'babel'
		}]
	}
};