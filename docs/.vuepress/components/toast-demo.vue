<template>
  <div>
    <m-button @click="showToastTop" >上方弹出</m-button>
    <m-button @click="showToastMiddle">中间弹出</m-button>
    <m-button @click="showToastBottom">下方弹出</m-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/Toast'
  import Button from '../../../src/Button'
  import plugin from '../../../src/plugin'

  Vue.use(plugin)
  export default {
    components: {'m-toast': Toast, 'm-button': Button},
    methods: {
      showToastTop(){
        this.$toast('我是 toast 内容', { position: 'top' })
      },
      showToastMiddle(){
        this.$toast('我是 toast 内容', { position: 'middle' })
      },
      showToastBottom(){
        this.$toast('我是 toast 内容', { position: 'bottom' })
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>