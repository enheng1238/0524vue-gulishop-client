<template>
  <div class="spec-preview">
    <!-- 
      a.b.c 报假错 
      避免出现a.b.c 就是避免出现undefined
      "TypeError: Cannot read property 'imgUrl' of undefined"

      skuImageList[defaultIndex].imgUrl  []相当于.  undefined 异步那数据数据没回来 空对象 计算 this.skuInfo.skuImageList  空数组. = undefined
      页面正常，但是报错了
      页面正常是因为数据回来了
      但是数据没回来的那一刹那 错误已经报出来了
     -->
    <!-- <img :src="skuImageList[defaultIndex].imgUrl" /> -->
    <img :src="defaultImg.imgUrl" />
    <div class="event"></div>
    <div class="big">
      <img :src="defaultImg.imgUrl" />
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['skuImageList'],
    data() {
      return {
        defaultIndex:0
      }
    },
    mounted() {
      // 绑定事件
      this.$bus.$on('changeDefaultIndex',this.changeDefaultIndex)
    },
    computed: {
      defaultImg(){
        return this.skuImageList[this.defaultIndex] || {}
      }
    },
    methods: {
      changeDefaultIndex(index){
          this.defaultIndex = index
      }
      
    },
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>