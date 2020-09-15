// 1.引入并声明使用
import VueRouter from 'vue-router'
import Vue from 'vue'
import router from '@/router'

// 2.声明使用
Vue.use(VueRouter)

import routes from './routes'


// 3.必须往外暴露一个路由器对象
export default new VueRouter({
    routes
})

// 4.必须在 vue 当中注入(使用)路由器对象  在 main.js 当中去注入