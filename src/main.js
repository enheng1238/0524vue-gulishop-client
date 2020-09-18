// import Vue from 'vue/dist/vue.esm.js'
import App from '@/App'
//@配置的别名,代表src
import Vue from 'vue'
import router from '@/router'

// import '@/api'  //加载api的 index.js 让其能够运行  只有index.js运行了  reqCategoryList()才能调用
// import {reqCategoryList} from '@/api'
// reqCategoryList()
import {reqCategoryList} from '@/api'
import store from '@/store'
import '@/mock/mockServe' //运行mockServe文件 让mock可以注册为接口

reqCategoryList()

Vue.config.productionTip = false 

// 全局注册各种组件,因为很多地方用到
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import pagination from '@/components/pagination'

import "swiper/css/swiper.min.css";

import * as API from '@/api'

Vue.component('TypeNav',TypeNav);
Vue.component('SliderLoop',SliderLoop);
Vue.component('pagination',pagination);


new Vue({
  
  beforeCreate() {
    Vue.prototype.$bus = this //vm
    Vue.prototype.$API = API //vm
  },
  el:"#app",
  // render 渲染
  render:h=>h(App),
  router:router,  //让所有的组件当中都可以多两个对象 $ router 路由器对象  $route 路由对象
  store //
  // components:{
  //   App:App
  // },
  // template:'</App>'
})
