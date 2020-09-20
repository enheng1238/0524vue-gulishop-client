// 1.引入并声明使用
import VueRouter from 'vue-router'
import Vue from 'vue'
// import router from '@/router'

// 2.声明使用
Vue.use(VueRouter)

import routes from './routes'
import store from '@/store'



// 3.必须往外暴露一个路由器对象
// this.$router.push    this.$router 就是 VueRouter 的实例化对象,
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    // 代表没有传递处理的回调函数 无论是成功还是失败
    return originPush.call(this,location).catch(()=>{})
  }else{
    return originPush.call(this,location,onResolved,onRejected)
  }
}
VueRouter.prototype.replace = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    // 代表没有传递处理的回调 无论成功还是失败
    return originReplace.call(this,location).catch(()=>{})
  }else{
    return originReplace.call(this,location,onResolved,onRejected)
  }
}




const router = new VueRouter({
  // mode:'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 加全局导航守卫 一般都是多个页面路由跳转的时候用
// 每个路由跳转的时候都要去解析的
// to 目的地路由对象
// from 出发的路由对象
// next 放行部分放行的函数
    // 参数为空 代表放行
    // 参数为false 代表中断
    // 参数为指定的路径 代表跳转到指定路径对应的页面
// 83、必须登录后才能访问的多个界面使用全局守卫（交易相关、支付相关、用户中心相关） 自动跳转前面想而没到的页面
router.beforeEach((to,from,next) => {
  let targetPath = to.path 
  if(targetPath.indexOf('/pay') === 0 || targetPath.startsWith('/trade') || targetPath.startsWith('/center')){
    // indexOf 查找以/pay开头的 startsWith 以/trade开头

    // 判断登没登录 在state里边去拿
    if(store.state.user.userInfo.name){
      next()//登录了直接放行
    }else{
      // 去到登录页 并且把本来想去的目标路径存起来  路由传参 以保证后面鞥路后可以去到之前想去的地方
      next('/login?redirect='+targetPath)//如果没登录去到/login
    }
  }else{
    next()//直接放行
  }
})


export default router
// 4.必须在 vue 当中注入(使用)路由器对象  在 main.js 当中去注入