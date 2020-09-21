<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 
      原生的dom事件 
      @click在html标签上去写，这个click一定是个原生事件
      click:事件类型
      test1:回调函数
      原生的dom事件：默认传递的参数是event事件对象
      如果还有其他的参数要传的时候,$event要写,位置自己控制

      原生的dom事件类型在html标签身上就是原生dom事件
      原生dom事件类型在组件标签身上就是自定义事件
      <Event1 @click="test2" ></Event1> ---自定义
      原生dom事件类型在组件标签身上,如果想成为原生dom事件,那么需要加修饰符 .native ,事件监听添加给了子组件的根元素，形成了事件委派
      <Event1 @click.native="test2" ></Event1>  ---- 原生
       -->
    <button @click="test1">按钮1</button>
    <button @click="test1($event)">按钮2</button>
    <button @click="test1('杨幂',$event)">我爱你赵丽颖</button>

    <Event1 @click.native="test2" ></Event1>
    <br>
    <br>

    <!-- 
      自定义事件
      自定义事件添加在html标签身上,无意义,也不会这么干,因为没办法触发
      <button @xxx="test3"></button> --- 没法触发

      自定义事件添加在组件标签身上,有意义
      原生的dom事件类型如果添加在组件标签身上,也是自定义事件

     -->
    <button @xxx="test3">我爱你杨幂</button>

<!-- 
    在父组件当中可以看到子组件,给儿子绑定了一个事件,回调函数一定是留在父组件当中,也就是说事件的回调函数的定义是定义在父组件当中
    <Event2 @xxx="test3"></Event2>
 -->
    <Event2 @xxx="test3"></Event2>
    <Event2 @click="test3"></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
     test1(name,event){
       console.log(event.target.innerHTML,name)//我爱你赵丽颖 杨幂
     },
     test2(event){
       console.log(event.target.innerHTML)
     },
     test3(event){
       console.log(event)
        // event是事件的回调默认参数,这个默认值不一定是事件对象
        // 如果是原生dom事件,那么就是事件对象
        // 如果是自定义事件的回调,那么就是自定义事件触发时候自己传递的参数,有就有,没有就是undefined

       //event接收的就是10 event拿到的是默认传过来的参数,但是不一定是事件对象,如果是原生dom事件，拿传过来的就是event事件对象,如果是自定义事件,拿到的是啥不一定
       console.log(event.target.innerHTML)//报错
     },
     
    }
  }
</script>
