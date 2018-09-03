<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <p>{{fullName}} {{counter}}</p>
        <p>{{textA}} {{textPlus}}</p>
        <router-link to='/app/1223'>app</router-link>
        <router-link to="/login">login</router-link>
        <transition name="fade"> 
            <router-view />
        </transition>  
        
        <Footer></Footer>
        <router-view name="a"/>
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    console.log(this.$store)
    this.updateCountAsync({
      num: 5,
      time: 1000
    })
    // this['a/updateText']('123')
    this['b/testActions']()
    // let i = 0
    // setInterval(()=>{
    //     this.updateCount(i++)
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add', 'b/testActions']),
    ...mapMutations(['updateCount', 'a/updateText'])
  },
  computed: {
    // textA(){
    //     return this.$store.state.b.text
    // },
    ...mapState({
      counter: (state) => state.count,
      textA: state => state.a.text,
      textc: state => state.c.text
    }),
    // count(){
    //     return this.$store.state.count
    // },
    // fullName(){
    //     return this.$store.getters.fullName
    // },
    ...mapGetters({
      'fullName': 'fullName',
      textPlus: 'a/textPlus'
    })
  }
}
</script>

<style lang="stylus" scoped>
#app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    }
#cover{
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
    }
</style>


