// http协议是无状态协议 cookie和session是为了保持状态
// 用户标识 用户的临时标识 userTempId
// 用户标识: 临时标识 userTempId  登录标识 token
// 如果没有用户标识，数据存进去就取不出来了，因为数据库不知道你要拿的是哪个数据，它不认识你


import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// 生成用户临时id
export function getUserTempId(){
    // 获取用户的临时身份标识

    // UserTempId 代表用户的临时身份标识 一般我们一个用户有一个临时标识就ok了,不需要每次都更新
    // 生成的标识先在loccalStorage当中存储,每次发送请求的时候从loccalStorage中去获取,没有必要再去创建新的
    // 创建新的 存储到localStorage中去

    // 首先先从localStorage中去获取,如果有那就不用创建新的，直接使用
    // 如果没有再去创建一个新的，并且要存储到localStorage中去

    // userTempId 必须这个名字
    let userTempId  = localStorage.getItem('USERTEMPID_KEY') 
    // ldaolocalStorage 如果能获取到获取到了，如果获取不到返回null

    if(!userTempId){
        // 创建一个新的userTempId
       userTempId =  uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        // 存储到localStorage
        localStorage.setItem('USERTEMPID_KEY',userTempId)
    }
    return userTempId
}