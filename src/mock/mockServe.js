// 这个文件才是正儿八经的去把数据模拟成为接口去获取
// 模拟接口使用一个包 mock.js

// Mock 是一个对象
import  Mock from 'mockjs'
import banner from './banner.json'
import floor from '@/mock/floor'

Mock.mock('/mock/banner',{code:200,data:banner})//就是用来把数据和路径注册为接口
Mock.mock('/mock/floor',{code:200,data:floor})//就是用来把数据和路径注册为接口

/**
 * mock数据
 * 1.准备数据 数据必须为json格式
 * 2.通过mockjs把数据和路径注册为一个接口  安装mockjs
 * 3.切记再main当中运行这个文件
 * js是个模块 模块不会自己运行
 * 4.发请求
 * 
 */