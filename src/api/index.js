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

// 请求获取search的商品列表数据  /api/list           列表页  ---> 详情页
// post
// data 请求体参数
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
//   }

export const reqGoodsListInfo = (searchParams) => {
   
    return Ajax({
        url:'/list',
        method:'post',
        data:searchParams  //必须是对象
    })

}
// searchParams 搜索参数  如果搜索参数里面什么都没有 只是一个 {} 也没问题,它返回的是所有的商品信息
// 如果搜索参数当中有东西,那么返回的就是按照这些参数搜索到的商品信息
// 我们测试的时候可以使用 {} 去作为参数发请求,但是不能不传递参数,不传递就相当于没有传递参数 undefined

// reqGoodsListInfo({})  //测试必须要传一个对象

// 201 请求成功 参数错误

// 请求获取商品详情数据
// skuId---goodsId
// /api/item/{ skuId } GET
// 参数名称	类型	是否必选	描述
// skuId	string	Y	商品ID
// data {}
export const reqGoodsDetailInfo = (skuId) => {
    return Ajax({
        url:`/item/${skuId}`,
        method:'get'
    })
}