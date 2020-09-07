// import Vue from 'vue/dist/vue.esm.js'
import App from '@/App'
//@配置的别名,代表src
import Vue from 'vue'
import router from '@/router'


Vue.config.productionTip = false 

// 全局注册各种组件,因为很多地方用到
import TypeNav from '@/components/TypeNav'

Vue.component('TypeNav',TypeNav);

new Vue({
  el:"#app",
  // render 渲染
  render:h=>h(App),
  router:router  //让所有的组件当中都可以多两个对象 $ router 路由器对象  $route 路由对象
  // components:{
  //   App:App
  // },
  // template:'</App>'
})
