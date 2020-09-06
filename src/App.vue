<template>
  <div id="app">
    <!-- 使用组件 -->
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer v-show="!(this.$route.path==='/login' || $route.path === '/register')"></Footer> -->
    <Footer v-show="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
// 1.引入组件
import Header from  '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name:"App",
  // 2.注册组件
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
  
</style>