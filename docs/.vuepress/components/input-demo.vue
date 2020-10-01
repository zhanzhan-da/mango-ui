<template>
  <div style="color:#000;">
    1.input框 <br>
    <m-input></m-input> <br>
    <br>
    2.input框 - 禁用状态<br>
    <m-input disabled></m-input> <br>
    
    <br>
    3.input框 - 只读状态<br>
    <m-input readonly></m-input> <br>
    <br>
    4.input框 - 显示错误状态<br>
    <m-input error="错误信息"></m-input> <br>
     <br>
     5.双向绑定<br>
    <m-input :value="xxx"></m-input> <br>
    <br>
    <span>value:{{xxx}}</span>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    data(){
      return{ xxx:'双向绑定' }
    },
    components: { 'm-input': Input }
  }
</script>

<style lang="scss" scoped>
</style>