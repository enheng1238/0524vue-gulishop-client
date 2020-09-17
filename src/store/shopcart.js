import {reqAddOrUpdateShopCart,reqDeleteCart,reqShopCartList, reqUpdateCartIsChecked} from '@/api'
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
    },
    updateAllCartIsChecked({state,dispatch},isChecked){
        //Vue store 实例  --- context
        // dispatch 不一定非得在组件中dispatch 我也可以在通过某一个actions去dispatch另一个actions
        let promises = []
        state.shopCartList.forEach(item => {
            if(item.isChecked === isChecked) return
            const promise = dispatch('updateCartIsChecked',{skuId:item.skuId,isChecked:isChecked})  //依赖updateCartIsChecked去干活 
            // dispatch 返回的是一个promise
            promises.push(promise)//把返回的promise存到数组中
        })
        return Promise.all(promises) //拿的是每一个Promise成功的结果组成的数组
    },
    async deleteCart({commit},skuId){
        const result = await reqDeleteCart(skuId)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('falid'))
        }
    },
    deleteAllCart({state,dispatch}){
        // dispatch不一定是在vue中dispatch的,也可以在actions中dispatch给另一个actions
        /**
         * Promise.all是一个方法
         * 参数:    要求是一个 promise对象的 数组,这个数组里面必须都是promise对象
         * 返回值:  返回是一个promise  promise状态成功 结果就是 promise数组当中每个promise成功的结果组成的数组
         *          promise失败 结果就是promise数组当中第一个失败的promise失败的原因
         * 功能:    让多个promise一起执行,真正执行的时候是有顺序的(数组内的先后)，但是这几个promise谁先结束不清楚
         * 
         */
        let promises = []
        state.shopCartList.forEach(item => {
            
            if(!item.isChecked) return //不为真就不删
            const promise = dispatch('deleteCart',item.skuId)
            promises.push(promise)
        })
        return Promise.all(promises)
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