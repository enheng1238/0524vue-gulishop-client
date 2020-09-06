// 1.引入并声明使用
import VueRouter from 'vue-router'
import Vue from 'vue'
import router from '@/router'

// 2.声明使用
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

// 3.必须往外暴露一个路由器对象
export default new VueRouter({
    routes:[ //存多个一般用数组 四个路由组件对应四个路由  /代表根路径
        {
            path:'/home',
            component: Home,        //注册路由组件
          
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHide:true
            }
            
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHide:true
            }
            
        },
        {
            path:'search',
            component:Search
        },
        { //重定向路由
            path:'/',
            redirect:'/home'
        }
    ]
})

// 4.必须在 vue 当中注入(使用)路由器对象  在 main.js 当中去注入