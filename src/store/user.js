import { reqUserLogin, reqUserRegister } from '@/api'
import {getUserTempId} from '@/utils/userabout'
// 存数据的地方,多个属性的对象
const state = {
    // 为了效率 把userTempId 存在state中一份
    // 在state当中存储userTempId是为了效率更高一些，因为从localStorage获取比从state直接拿要慢
    // 我们只是在项目初始化的时候直接从localStorage获取一次，然后存给state，以后要用从state直接拿
    userTempId:getUserTempId(),
    // 自动登录 就是把用户的信息给保存下来 
    userInfo:JSON.parse(localStorage.getItem('USERINFO_KEY')) || {} ,
}

// 直接修改数据的地,是多个方法的一个对象  方法当中不能出现 if for 异步操作
const mutations = {
    RECEIVEUSERINFO(state,userInfo){
        state.userInfo = userInfo
    }
}

//和用户对接的地方 也是多个方法的一个对象  发方法中可以出现 if for 异步操作
const actions = {
    async userRegister({commit},userInfo){
        const result = await reqUserRegister(userInfo)
        if(result.code === 200){
          return 'ok'
        }else{
          return Promise.reject(new Error('faild'))
        }
      },

      async userLogin({commit},userInfo){
          const result = await reqUserLogin(userInfo)
          if(result.code === 200){
                //   修改state当中userInfo
              commit('RECEIVEUSERINFO',result.data)
        //   存储登录成功用户信息
              localStorage.setItem('USERINFO_KEY',JSON.stringify(result.data))
              return 'ok'
          }else{
              return Promise.reject(new Error('faild'))
          }
      }


} 


// 通过state计算出来的属性数据(只有读没有写 只能使用state数据不能修改state数据) 
const getters ={}

export default {
    state,
    mutations,
    actions,
    getters

}