import Vue from 'vue'

const component={
	props:{
		active:{
			// type:Boolean,
			// required:true,
			validator(value){
				return typeof value === 'boolean'
			}
		},
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

new Vue ({
	data:{
		prop1:'text1'
	},
	components:{
		CompOne:component
	},
	methods:{
		handleChange(){
			this.prop1 +=1
		}
	},
	mounted(){
		console.log(this.$refs.comp1)
	},
	el:'#root',
	template:`
	<div>
	<comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
	<comp-one :active="false" prop-one="text2"></comp-one>
	</div>
	
	`
})
