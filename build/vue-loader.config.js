// const docsloader = require.resolve('./doc-loader')

module.exports=(isDev)=>{
	return {
		preserveWhitepace : true,
		extractCss : !isDev,
		cssModules: {
			localIndentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
			camelCase:true,
		},
		// postcss:{},
		// hotReload:true,//根据环境变量生成
		// loaders:{
		// 	'docs':docsloader
		// },
		// preLoader:{

		// },
		// poatLoader:{}
	}
}