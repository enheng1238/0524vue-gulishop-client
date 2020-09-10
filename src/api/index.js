// 请求地址: /api/product/getBaseCategoryList
// 请求方式:GET
// 请求参数:无

import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'

export const reqCategoryList = ()=>{
    // 函数用法
    // 配置对象：属性名固定 属性值不固定
    return Ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

// 测试
// 1.reqCategoryList()  index.js不会自己运行,需要在main.js中加载
// reqCategoryList()

// 请求获取mock的banner和floor数据 
export const reqBannerList = ()=>{
    return mockAjax({
        url:'/banner',
        method:'get'//mock --- get
    })
}
export const reqFloorList = ()=>{
    return mockAjax({
        url:'/floor',
        method:'get'//mock --- get
    })
}