const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
	entry: {
		main: './src/index.js',
	},
	module:{
		rules:[
			{ 
				test: /\.js$/,
			 	exclude: /node_modules/, 
			 	loader: "babel-loader",
			},{
			test:/\.(jpg|png|gif)$/,
			use:{
				loader:'url-loader',
				options:{
					//placther   占位符
					name:'[name]_[hash].[ext]',
					outputPath:'images/',
					limit:2048
				}
			}
		},{
			test: /\.css$/,
			use: [
				'style-loader', 
				'css-loader', 
				'postcss-loader'
			]
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader', 
				'css-loader', 
				'sass-loader',
				'postcss-loader'
			]
		},
		{
			test:/\.(eot|ttf|svg)$/,
			use:{
				loader:'file-loader',
			}
		},
		]
	},
	plugins:[
	new htmlWebpackPlugin({
		template:'src/index.html'
	}), 
	new CleanWebpackPlugin(),
	],
	output:{
		// publicPath:'./', //上传cdn
		filename: '[name].js',
		path:path.resolve(__dirname, 'dist')
	}
}