import {reqTradeInfo} from '@/api'
// 存数据的地方,多个属性的对象
const state = {
 tradeInfo:{}
}

// 直接修改数据的地,是多个方法的一个对象  方法当中不能出现 if for 异步操作
const mutations = {
    RECEIVETRADEINTO(state,tradeInfo){
        state.tradeInfo = tradeInfo
    }
}

//和用户对接的地方 也是多个方法的一个对象  发方法中可以出现 if for 异步操作
const actions = {
    async getTradeInfo({commit}){
        const result = await reqTradeInfo()
        if(result.code === 200){
            commit('RECEIVETRADEINTO',result.data)
        }
    }


} 


// 通过state计算出来的属性数据(只有读没有写 只能使用state数据不能修改state数据) 
const getters ={
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList(state){
        return state.tradeInfo.userAddressList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters

}