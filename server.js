const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js');
const complier = webpack(config) //编译器 打包

const app = express();
app.use(webpackDevMiddleware(complier,{
	publicPath:config.output.publicPath
}))

app.listen(3003,()=>{
	console.log('233')
})