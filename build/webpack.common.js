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
	optimization:{
		runtimeChunk:{
			name:'runtime'
		},
		//开发环境
		usedExports:true,
		splitChunks:{
	      chunks: 'all', //async异步代码生效  all所有代码生效 initial 同步代码分割
	      // minSize: 30000,
	      // maxSize: 0,
	      // minChunks: 1, //最小引入次数
	      // maxAsyncRequests: 5, //最大请求
	      // maxInitialRequests: 3, //首页入口文件
	      // automaticNameDelimiter: '~', //文件生成链接符
	      // name: true,
	      cacheGroups: {
	        vendors: {
	          test: /[\\/]node_modules[\\/]/,
	          priority: -10,
	          name: 'vendors'
	        },
	        default: false
	      }
	    }
	},
	performance: false,
	output:{
		// publicPath:'./', //上传cdn
		// filename: '[name].js',
		// chunkFilename: '[name].chunk.js',
		path:path.resolve(__dirname, '../dist')
	}
}