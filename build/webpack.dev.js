// const path = require('path')
// const htmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
	mode: 'development',
	devtool:'cheap-module-eval-source-map',
	// devtool:'cheap-module-source-env-map',
	devServer:{
		contentBase:'./dist',
		open:true,
		port:3000,
		hot:true,
		hotOnly:true,
		proxy:{
			'/api':'http://localhost:3000'
		}
	},
	plugins:[
	new webpack.HotModuleReplacementPlugin()
	],
	//开发环境
	optimization:{
		usedExports:true
	}
}

module.exports = merge(commonConfig, devConfig)