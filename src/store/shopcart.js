import {reqAddOrUpdateShopCart,reqShopCartList, reqUpdateCartIsChecked} from '@/api'
//存数据的地方 多个属性的对象
const state = {
    shopCartList : []
}
// 直接修改数据的地,是多个方法的一个对象 方法当中不能出现if for 异步操作
const mutations = {
    RECEIVESHOPCARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}
// 和用户对接的地方，也是多个方法的一个对象 方法当中可以出现 if for 异步操作
/***
 * async 返回值是一个promise 
 * 加了async 说明这是一个异步函数
 * 而这个promise的成功或失败看return
 * 
 * async函数返回值不看return 返回的一定是一个promise
 * 但是async函数返回值promise ,是成功还是失败,就看return
 * 
 * promise 成功还是失败
 * return  undefined/10/赵丽颖  只要return的是一个非失败的 promise 那么它就是成功的
 * 失败：  1.retutn了一个失败的promise
 *        2.抛出错误 throw error
 * 
 * promise成功的结果就是return的结果
 * promise失败的原因就是抛出的错误或者return后的失败的promise的失败原因
 * 
 * 
 * 
 */
const actions = {
    async addOrUpdateShopCart({commit},{skuId,skuNum}){ //dispatch的时候传递参数只能传递一个,如果想传递两个参数，必须封装在对象中才能传过去
        const result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code === 200){
            // 添加/修改成功
            return 'ok'
        }else{
             // 添加/修改失败
            //  return 'falid'
            return Promise.reject(new Error('falid'))
        }
    },
    async getShopCartList({commit}){
        const result = await reqShopCartList()
        if(result.code === 200){
            commit('RECEIVESHOPCARTLIST',result.data)
        }
    },
    async updateCartIsChecked({commit},{skuId,isChecked}){
        const result = await reqUpdateCartIsChecked(skuId,isChecked)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faild'))
        }
    }

}
// 通过state计算出来id属性数据(只有读没有写,只能使用state数据不能修改state数据)
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}