import Vue from 'vue'

const ChildComponent = {
	template:`<div>this is ChildComponent{{data.value}}</div>`,
	inject:['yeye','data'],
	mounted(){
		// console.log(this.$parent.$options.name)
		console.log(this.yeye,this.data.value)
	}
}

const component={
	name:'compont',
	props:['prop1'],
	components:{
		ChildComponent
	},
	// props:['value','value1'],
	// template:`<div :style = 'style'>
	
	// 	<slot>{{value}}</slot>
	// </div>`,
	render(createElement){
		return createElement('div',{
			style:this.style,
			// on:{
			// 	click:()=>{
			// 		this.$emit('click')
			// 	}
			// }
		},[
			this.$slots.header,this.prop1
		])
	},
	methods:{
		handleInput(e){
			this.$emit('change',e.target.value)
		}
	},
	data(){
		return {
			style:{
				width:'200px',
				height :'200px',
				border : '1px solid #aaa'
			},
			value:'er'
		}
	}
}




new Vue({
	el:'#root',
	components:{
		CompOne:component
	},
	data:{
		text:122,
		value:123
	},
	provide(){//爷爷 级
		const data={}
		Object.defineProperty(data, 'value', {
			get:()=>this.value,
			enumerable:true
		})
		return {
			yeye:this,
			data
		}
	},
	mounted(){
		console.log(this.$refs.copm.value,this.$refs.span)
	},
	// template:`
	// <div>
	// 	<span>{{value}}</span>
	
	// 	<comp-one ref="copm">
	// 		<span ref="span">{{value}}</span>
	// 	</comp-one>
	// 	<input type="text" v-model="value"/>
	// </div>
	// 	`,
	methods:{
		handleClick(){
			console.log(2121)
		}
	},
	render(createElement){
		return createElement('comp-one',{
			ref:'copm',
			props:{
				prop1:this.value
			},
			// on:{
			// 	click:this.handleClick
			// },
			nativeOn:{//自动绑定原声根节点
				click:this.handleClick
			}
		},[
			createElement('span',{
			ref:'span',
			slot:'header',//插槽
			// domProps:{//替换根节点
			// 	innerHTML:'<span>7989</span>'
			// }
			attrs:{
				id:'ff'
			}
		},this.value)
		]
		)
	}

})



