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
	components:{
		ChildComponent
	},
	// props:['value','value1'],
	template:`<div :style = 'style'>
	
		<slot :value="value" aa="sdf"></slot>
		<child-component></child-component>
	</div>`,
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
	template:`
	<div>
		<span>{{value}}</span>
	
		<comp-one ref="copm">
			<span slot-scope="props" ref="span">{{props.value}} {{props.aa}} {{value}}</span>
		</comp-one>
		<input type="text" v-model="value"/>
	</div>
		`
})



