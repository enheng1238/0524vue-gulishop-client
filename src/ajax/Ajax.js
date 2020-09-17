import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

// 1.对 axios 进行二次封装
// * 1.配置基础路径和超时限制
const instance = axios.create({
    baseURL: '/api', //公共的url
    timeout: 20000,
  });

// * 2.添加进度条 nprogress  
// 请求拦截器  1.可以在请求时候添加功能 2.我们可以对请求报文进行处理
// 和响应拦截器 1.可以添加功能 2.可以处理响应报文
// 在请求拦截器中不需要写失败的
instance.interceptors.request.use(config => {
    // config 就是你的请求报文,可以这么理解
    // 一个函数就是一个功能
    // 1.可以在请求时添加功能
    NProgress.start();//添加进度条功能

    // 请求拦截器当中为每一次ajax请求都添加用户临时标识
    let userTempId = store.state.user.userTempId
    if(userTempId){
      config.headers.userTempId = userTempId
    }

    // 登陆成功后需要把token带着,从今往后每个请求都会带过去两个标识,一个是临时的 一个是登录后的
    // 带过去两个目的是为了后端能够把之前临时标识对的数据合并到登录后标识对应的数据
    let token = store.state.user.userInfo.token
    if(token){
      config.headers.token = token
    }

    return config;//请求拦截器最后一定要把config返回去  config 是请求报文
  });

  // , error=> {
   
  //   return Promise.reject(error);
  // }

// * 3.返回的响应不再需要从data属性当中拿数据,而是响应就是我们要的数据 response.data-->data  (请求拦截器和响应拦截器)
instance.interceptors.response.use(response => {
    NProgress.done();
    return response.data;
  }, error=> {
    NProgress.done();
// * 4.统一处理请求错误,具体请求也可以选择处理或不处理
    alert('发送ajax请求失败'+ error.message|| '未知错误');
    // 错误了之后可以选择今后可以继续处理这个错误,也可以选择今后不能处理这个错误
    // 如果不想让他进行处理 return 有个pending 状态的promise 中断 promise链
    return new Promise(()=>{});
    // 发的请求只许成功不许失败
    // return Promise.reject(error);//返回的是失败的promise,可以让后续继续处理这个错误的
    

  });


//   暴露
export default instance