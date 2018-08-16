import Vue from 'vue'

const component={
	props:{
		active:Boolean,
		propOne:String
	},
	template:`<div>
	<input type="text" v-model.number="text"/>
	<span @click="handleChange">{{propOne}}</span>
	<span v-show="active">dfdgfggh</span>
	</div>`,
	data(){
		return {
			text:0
		}
	},
	methods:{
		handleChange(){
			this.$emit('change')
		}
	}
}

const parent = new Vue({
	name:'parent'
})
const component2={
	parent:parent,
	extends:component,
	data(){
		return {
			text:1
		}
	},
	mounted(){
		this.$parent.text="4656"
		console.log(this.$parent.$options.name)//访问不到自己new的，访问到父组件自己的
	}
}

// const CompVue = Vue.extend(component)
// new CompVue({
// 	el:'#root',
// 	propsData:{
// 		propOne:'xxx'
// 	},
// 	data:{
// 		text:'1123'
// 	},
// 	mounted(){

// 	}
// })

new Vue({
	name:'root',
	el:'#root',
	parent:parent,
	components:{
		Com:component2
	},
	data:{
		text:122
	},
	mounted(){
		this.$parent.text="4656"
		console.log(this.$parent.$options.name)//组件继承通过new
	},
	template:`
	<div>
		<span>{{text}}</span>
		<Com></Com>
	</div>
		`
})



// new Vue ({
// 	data:{
// 		prop1:'text1'
// 	},
// 	components:{
// 		CompOne:component
// 	},
// 	methods:{
// 		handleChange(){
// 			this.prop1 +=1
// 		}
// 	},
// 	mounted(){
// 		console.log(this.$refs.comp1)
// 	},
// 	el:'#root',
// 	template:`
// 	<div>
// 	<comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
// 	<comp-one :active="false" prop-one="text2"></comp-one>
// 	</div>
	
// 	`
// })
