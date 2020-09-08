// 1.引入声明并使用
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home'
import user from './user'
import search from './search'

// 代表 存数据的地方 十多个属性 的一个对象
const state = {}

// 直接修改数据的地方 是多个方法的一个对象 不能出现if for 异步操作
const mutations = {}

// 和用户对接的一个地方 也是多个方法的一个对象 可以出现if for 异步操作  开始发请求 用于diapatch
const actions = {}

// 通过state计算出来的属性数据(只有读没有写，只能使用state数据,不能修改state数据)
const getters = {}


// 2.向外暴露一个store对象
export default new Vuex.Store({
    // 在配置对象当中暴露出去
    state,
    mutations,
    actions,
    getters,
    // 把每个小模块的小store合并到大的store
    modules:{
        home,
        user,
        search
    }
})

// 3.注入这个创建的store对象 在vue当中

