// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default[
  {
	    path: '/',
	    redirect: '/app'
  },
  {
	    path: '/app/:id',
	    // props:(route)=>({id:route.query.b}),
	    props: true,
	    component: () => import('../views/todo/todo.vue'),
	    // component: Todo,
	    name: 'app',
	    meta: {
	    	title: 'this is app',
	    	description: 'dsdsv'
	    },
	    beforeEnter (to, from, next) {
	    	console.log('app.route')
	    	next()
	    }
	    // children:[{
	    // 	path:'test',
	    // 	component:Login
	    // }]
  },
  {
	    path: '/login',
	    // component: Login
	    component: () => import('../views/login/login.vue')
  }
]
