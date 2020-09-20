<template>
  <!-- 

    props:从父组件中拿的
    data:初始数据
    computed:计算出来的
  -->
  <div class="pagination">
    <button :disabled="currentPageNum === 1" @click="$emit('changePageNum',currentPageNum-1)">上一页</button>
    <button v-if="startEnd.start > 1" @click="$emit('changePageNum',1)">1</button>

    <button v-if="startEnd.start > 2">···</button>

    <!--
     v-for 可以遍历数字 遍历数字从1开始
    v-for in 5 1,2,3,4,5
    v-for in 10 1,2,3,4,5,6,7,8,9,10
    v-for和v-if如果同时存在 先v-for 再v-if
    -->
    <button
      v-for="(page) in startEnd.end"
      :key="page"
      v-if="page >= startEnd.start"
      :class="{active:currentPageNum === page}"
      @click="$emit('changePageNum',page)"
    >{{page}}</button>
    <!-- <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>-->

    <button v-if="startEnd.end < totalPageNum -1">···</button>
    <button
      v-if="startEnd.end < totalPageNum"
      @click="$emit('changePageNum',totalPageNum)"
    >{{totalPageNum}}</button>
    <button
      :disabled="currentPageNum === totalPageNum"
      @click="$emit('changePageNum',currentPageNum+1)"
    >下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  //   接收数据
  // props:['currentPageNum'] 1.数组写法 最简单 但是缺点没法制定数据类型

  // props:{              2.对象的简便写法 它可以指定数据类型 严格了一些 但是还是不够严格
  //     currentPageNum:Number
  // }

  //   props:{            3.复杂写法
  //       currentPageNum:{
  //         type:Number,
  //         default:1
  //       }
  //   }
  props: {
    currentPageNum: {
      type: Number,
      default: 1,
    },
    pageSize: Number,
    total: Number,
    continueNum: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPageNum() {
      //   向上取整 Math.ceil()
      return Math.ceil(this.total / this.pageSize);
    },
    //   连续页码的起始位置和结束位置
    //     当前页 连续页数 计算出来的值  首页
    startEnd() {
      // 要想计算连续页的起始位置和结束位置和三个数据有关系 : 当前页码 连续数量 总页数
      let { currentPageNum, continueNum, totalPageNum } = this;

      let start, end, disNum;
      if (totalPageNum <= continueNum) {
        // 连续页数比总页数还大，那么1为起始 总页数就是结束
        start = 1;
        end = totalPageNum;
      } else {
        // 计算正常情况
        // Math.floor 向下取整
        start = currentPageNum - Math.floor(continueNum / 2);
        end = currentPageNum + Math.floor(continueNum / 2);

        if (start <= 1) {
          // 左侧边界修正
          disNum = 1 - start; //指的是算出来的start和1之间的差值,为了后面去修正算出来的start和end
          start += disNum;
          end += disNum;

          // start = 1;
          // end = continueNum;
        }

        if (end >= totalPageNum) {
          // 右侧边界修正
          disNum = end - totalPageNum;
          start -= disNum;
          end -= disNum;

          // start = totalPageNum - continueNum;
          // end = totalPageNum;
        }
      }

      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>