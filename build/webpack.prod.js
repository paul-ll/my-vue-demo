// const path = require('path')
// const htmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
	mode: 'production',
	devtool:'cheap-module-source-map',
	module:{
		rules:[
		{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader, 
				'css-loader', 
				'postcss-loader'
			]
		},
		{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'sass-loader',
				'postcss-loader'
			]
		}
		]
	},
	optimization:{
		minimizer: [new OptimizeCSSAssetsPlugin({})],
	},
	plugins:[
	new MiniCssExtractPlugin({
		filename:'[name].css',
		chunkFilename:'[name].chunk.css'
	})
	],
	output:{
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
	}
}

module.exports = merge(commonConfig, prodConfig)