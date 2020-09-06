import Vue from 'vue/dist/vue.esm.js'
import App from '@/App'
//@配置的别名,代表src
// import Vue from 'vue'


Vue.config.productionTip = false  

new Vue({
  el:"#app",
  // render 渲染
  // render:h=>h(App)
  components:{
    App:App
  },
  template:'</App>'
})
