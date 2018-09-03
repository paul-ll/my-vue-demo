import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'
import './assets/styles/global.styl'
import createRouter from './config/router.js'
import createStore from './store/store'

Vue.use(VueRouter)

Vue.use(Vuex)
const router = createRouter()
const store = createStore()
store.registerModule('c', {
  state: {
    text: 3
  }
})
// store.unregisterModule('c') //解绑
store.watch((state) => state.count + 1, (newCount) => {
  console.log('newCount', newCount)
})
// 查看插件调用
store.subscribe((mutation, state) => {
  console.log(mutation.type)
  console.log(mutation.payload)
})
// 查看插件调用
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

router.beforeEach((to, from, next) => {
  console.log('before each invoild')
  // if(to.fullPath == '/app'){
  // 	next('/login')
  // }else{
  // 	next()
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoild')
  next()
})

router.afterEach((to, from, next) => {
  console.log('afterEach invoild')
})

new Vue({
  	router,
  	store,
  	render: (h) => h(App)
}).$mount('#root')
