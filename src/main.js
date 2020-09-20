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



/*
// element-ui 完整引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)  //use 代表在声明使用插件
*/

/*
// element-ui 按需引入
// 1.下载一个babel的插件
// 2.在babel.config.js当中配置插件
// 3.引入需要使用的插件并注册

import { Button,Tag } from 'element-ui';
Vue.use(Button)
Vue.use(Tag)

reqCategoryList()
*/

// MessageBox 弹框
// 引入MessageBox
import {MessageBox,Message,Pagination} from  'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;//用来提示错误信息
Vue.use(Pagination)


Vue.config.productionTip = false 

// 全局注册各种组件,因为很多地方用到
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import pagination from '@/components/pagination'

import "swiper/css/swiper.min.css";

// 图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading,  // 指定未加载得到图片之前的loading图片
})

import './validate'

import * as API from '@/api'

Vue.component('TypeNav',TypeNav);
Vue.component('SliderLoop',SliderLoop);
// Vue.component('pagination',pagination);


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
