// import avatar from './avatar.jpg'
// import style from './index.scss'
// import createAvatar from './createAvatar'
// import "@babel/polyfill";

// import React, { Component } from 'react'
// import ReactDom from 'react-dom'

//tree shaking 只支持ES module 不支持require
// import { add, minus } from './math.js'
// import test from './test.js'
// console.log(test.name)
// import _ from 'lodash'; 

// var element = document.createElement('div');
// element.innHTML= _.join(['dell','lee'],'*****')
// document.body.appendChild(element)

// console.log(_.join(['a','b','c'],'*****'))
//懒加载 import
// async function getComponent () {
// 	// body...  模块懒加载
// 	const {default: _ } = await import(/*webpackChunkName:"lodash"*/'lodash')
// 		var element = document.createElement('div');
// 		element.innerHTML= _.join(['dell','lee'],'*****')
// 		return element
	
// }

// document.addEventListener('click', ()=>{
// 	getComponent().then(element=>{
// 		document.body.appendChild(element)

// 	})
// })


// document.addEventListener('click', ()=>{
// 	import( webpackPrefetch: true './click.js').then(({default: fun})=>{
// 		fun()
// 	})
// })


// createAvatar();

// var img = new Image()
// img.src = avatar

// img.classList.add(style.avatar)
// var root = document.getElementById('root')
//  root.append(img)

// var root = document.getElementById('root')

// import './avatars.scss'

// root.innerHTML='<div class="iconfont icon-Receipt"></div>'
// console.log('11')
// import number from './num.js'

// import './style.css'
// import './style1.css'
// var  btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)
// btn.onclick=function () {
// 	/* body... */
// 	var div = document.createElement('div')
// 	div.innerHTML = 'item'
// 	document.body.appendChild(div)
// }
// number()
// if(module.hot){
// 	module.hot.accept('./num',()=>{
// 		var numItem = document.getElementById('number');
// 		document.body.removeChild(numItem)
// 		number()
// 	})

// }

// const arr =[
// 	new Promise(()=>{}),
// 	new Promise(()=>{}),
// ]

// arr.map((item)=>{
// 	console.log(item)
// })

// class App extends Component {
// 	render(){
// 		return <div>Hello World</div>
// 	}
// }

// ReactDom.render(<App />, document.getElementById('root'))


// add(1,2)

// minus(4,2)


import _ from 'lodash'
import $ from 'jquery'


const dom=$('<div>');
dom.html(_.join(['de','ere','hello'],'---'))
$('body').append(dom)








