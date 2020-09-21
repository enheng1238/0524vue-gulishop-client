<template>
  <div>
    <h2>深入v-model</h2>
    <!--  
      v-model 双向数据绑定
          <input type="text" v-model="msg">
          <br>
          <span>我爱你{{msg}}</span>

          data() {
             return {
               msg:'赵丽颖'
            }
          }
    -->
    <input type="text" v-model="msg">
    <br>
    <span>我爱你{{msg}}</span>

    <br>
    <br>
    <!-- 
      v-model 本质 / 复杂写法 
        <input type="text" :value="msg" @input="msg = $event.target.value">
        <br>
        <span>我爱你{{msg}}</span>
    -->
    <input type="text" :value="msg" @input="msg = $event.target.value">
    <br>
    <span>我爱你{{msg}}</span>

<!-- 组件标签身上去写v-model目的是让父子组件的msg数据同步 -->
    <CustomInput v-model="msg"></CustomInput>
    <!-- 复杂写法 -->
    <CustomInput :value="msg" @input="msg = $event"></CustomInput>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data() {
      return {
        msg:'赵丽颖'
      }
    },
    components: {
      CustomInput
    }
  }
</script>
