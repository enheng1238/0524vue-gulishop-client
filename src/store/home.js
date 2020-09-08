import {reqCategoryList} from '@/api'

// 三连环写完后 请求没有发 
// 什么时候会触发三连环？
// 组件当中用户dispatch的时候才会触发三连环


// 存数据的地方,多个属性的对象
const state = {
    reqCategoryList : [] //初始化存储的共享状态数据
}

// 直接修改数据的地,是多个方法的一个对象 方法当中不能出现 if for 异步操作
const mutations = {//mutations当中的函数名要大写
    RECEIVECATEGORYLIST(state,reqCategoryList){
        state.reqCategoryList = reqCategoryList
    }
}

// 和用户对接的地方  也是多个方法的一个对象 方法当中可以出现 if for 异步操作  只能接收到成功的结果
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        if(result.code === 200){
            commit('RECEIVECATEGORYLIST',result.data);
        }
    }
}

const getters = {}
// 通过state计算出来的属性数据(只有读没有写 只能使用state数据 不能修改state数据)
export default{
    state,
    mutations,
    actions,
    getters
}