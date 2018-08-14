import Vue from 'vue'

new Vue ({
	el:'#root',
	// template:`<div :id='aaa' @click="handleClick">
	// <p v-html="html"></p>
	// </div>`,
	template:
	`<div :id="text">
	<p v-if="isActive">{{text}}</p>
	<p v-else="!isActive">{{text2}}</p>
	<input type="checkbox" v-model="isActive" />
	<div>
		<input type="checkbox" :value="1" v-model="arr" />
		<input type="checkbox" :value="2" v-model="arr" />
		<input type="checkbox" :value="3" v-model="arr" />
	</div>
	<div>
		<input type="radio" value="one" v-model="picked" />
		<input type="radio" value="two" v-model="picked" />
	</div>
	<ul>
		<li v-for="(item,index) in arr" :key="item">{{item}}:{{index}}</li>
		<li v-for="(val,key,index) in obj">{{val}}:{{key}}:{{index}}</li>
	</ul>
	</div>`,
	data:{
		arr:[1,2,3],
		obj:{
			a:'123',
			b:'356',
			c:'5454'
		},
		isActive:false,
		text:0,
		text2:2,
		picked:''
	},
	methods:{
	
	}
})