import Vue from 'vue'

new Vue ({
	el:'#root',
	template:
	`<div>
	<p>name: {{name}}</p>
	<p>name: {{getName()}}</p>
	<p>num: {{num}}</p>
	<p>num<input type="text" v-model="num"/></p>
	<p>firstName<input type="text" v-model="firstName"/></p>
	<p>lastName<input type="text" v-model="lastName"/></p>
	<p>name<input type="text" v-model="name"/></p>
	<p>{{fullName}}</p>
	<p>obj.a<input type="text" v-model="obj.a"/></p>
	</div>`,
	data:{
		isActive:false,
		firstName:'Joke',
		lastName:'Lou',
		num:0,
		fullName:'',
		obj:{
			a:'123'
		}
	},
	computed:{
		name:{
			get(){
				console.log('computed')
				return `${this.firstName} ${this.lastName}`
			},
			set(name){
				const names = name.split('')
				this.firstName = names[0]
				this.lastName = names[1]
			}
			
		}
	},
	watch:{
		firstName:{
			handler(newName,oldName){
				this.fullName = newName + this.lastName
			},
			immediate:true
		},
		'obj.a':{
			handler(newName,oldName){
				console.log('aa')
			},
			immediate:true,
			// deep:true //检测每个handle 开销大
		}
		
	},
	mounted(){
		this.obj={
			a:'345'
		}
	},
	methods:{
		getName(){
			console.log('methods')
			return `${this.firstName} ${this.lastName}`
		}
	}
})