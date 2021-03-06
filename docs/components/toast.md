---
title: 'Toast - 弹出提示框'
---
# 弹出提示框
## 预览
&nbsp;
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

## 使用方法
想要使用 Toast 组件，首先需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件。  
代码  
```vue
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
```

#### 选项
|参数|说明|类型|可选值|默认值
|------|---------------|---------|---------|---------|
|position|位置表明提示框出现的位置|String|top/middle /bottom|top
|autoClose|可以设置是否自动关闭或是出现在界面的时间|String/number|---|3
|closeButton|支持手动关闭提示框，并且可以触发其他事件相关逻辑|Object|----|---
|enableHtml|支持html格式内容|Boolean|true/false|false