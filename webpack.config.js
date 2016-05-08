var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
        path: './dist/',
        filename: 'bundle.js'
    },
	module: {
	    loaders: [{
	        test: /\.css$/,
	    	exclude: '/node_modules/',
	        loader: 'style!css'
	    },{
	    	test: /\.jsx?$/,
	    	exclude: '/node_modules/',
	    	loader: 'babel',
	    	query: {
                presets: ['es2015', 'react']
            }
	    }]
	},
	plugins: [new webpack.BannerPlugin('@author Xiaochun Fu \n@url fuxiaochun.com')]
};