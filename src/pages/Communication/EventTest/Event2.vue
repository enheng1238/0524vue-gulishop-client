<template>
  <div style="background: #ccc; height: 80px;">
    <h2>Event2组件</h2>
    <button @click="$emit('click',10)">分发自定义click事件</button><br>
    <!-- 调用xxx事件所对应的回调 -->
    <button @click="$emit('xxx',10)">分发自定义xxx事件</button><br>
  </div>
</template>
