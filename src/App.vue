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
  },
  mounted() {
    // 请求数据 放在这里只需要发一次请求
     this.getCategoryList();  
  },
  methods: {
     getCategoryList() {
      // 用户在触发响应的actions去发请求拿数据
      this.$store.dispatch("getCategoryList"); //dispatch 触发 actions --home当中的actions  ----后期合并到 store当中的actions
    },
  },
}
</script>

<style lang="less" scoped>
  
</style>