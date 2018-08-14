import Vue from 'vue'

const app = new Vue ({
	// el:'#root',
	template:'<div>{{text}}</div>',
	data:{
		text:'life'
	},
	beforeCreate(){
		console.log(this,'beforeCreate')
	},
	created(){
		console.log(this,'created')
	},
	beforeMount(){
		console.log(this,'beforeMount')
	},
	mounted(){
		console.log(this,'mounted')
	},
	beforeUpdate(){
		console.log(this,'beforeUpdate')
	},
	updated(){
		console.log(this,'updated')
	},
	activated(){
		console.log(this,'activated')
	},
	deactivated(){
		console.log(this,'deactivated')
	},
	beforeDestroy(){
		console.log(this,'beforeDestroy')
	},
	destroyed(){
		console.log(this,'destroyed')
	},
	render(h){
		// throw new TypeError('reneder error')
		console.log('render')
		return h('div',{},this.text)
	},
	renderError(h,err){
		return h('div',{},err.stack)
	},
	errorCaptured(){
		//向上冒泡，正式环境可以使用
	}
})

app.$mount('#root')


// setTimeout(()=>{
// 	app.$destroy()
// })