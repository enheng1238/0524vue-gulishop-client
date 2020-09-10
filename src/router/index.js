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
            path:'/search/:keyword?',//代表这个params参数可传可不传  /:代表接收后面的参数
            name:'search',
            component:Search,
            /**
             * props:true
             * props这个属性用来配置传递参数的简便方式,就是把参数作为属性映射到组件当中
             * 1.布尔值  如果写为true  代表路由对象把接收的params参数作为属性映射到要显示的路由组件当中
             * props:{name:'zhaoliying'}
             * 2.对象写法  如果写为对象,目的是额外的往要显示的路由组件当中传递一些静态数据用的
             * 3.函数写法 函数写法是用的最多的,因为它不但可以映射params还可以映射query
             * props(route){
             *     把路由对象接收到的参数,无论什么参数,自己动手映射为路由组件的属性
             *      return {keyword:route.params.keyword,keyword2:route.query.keyword2}
             * }
             * 
             * 
             */
        },
        { //重定向路由
            path:'/',
            redirect:'/home'
        }
    ]
})

// 4.必须在 vue 当中注入(使用)路由器对象  在 main.js 当中去注入