<template>
<!-- 

    props:从父组件中拿的
    data:初始数据
    computed:计算出来的
 -->
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>

    <button>···</button>

    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>

    <button>···</button>
    <button>{{totalPageNumgit}}</button>
    <button>下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
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
      totalPageNum(){
        //   向上取整 Math.ceil()
        return Math.ceil(this.total / this.pageSize)
      },
    //   连续页码的起始位置和结束位置   
    //     当前页 连续页数 计算出来的值  首页
    startEnd(){
        // 要想计算连续页的起始位置和结束位置和三个数据有关系 : 当前页码 连续数量 总页数
        let {currentPageNum,continueNum,totalPageNum} = this
    }
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