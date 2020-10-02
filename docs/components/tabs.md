---
title: 'Tabs - 标签'
---
# 标签
## 预览

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

## 使用方法
此组件的m-tabs m-tabs-item m-tabs-pane 必须有一一对应的 name。
```vue
<template>
  <div>
      <m-tabs :selected.sync="selectedTab">
      <m-tabs-head>
        <m-tabs-item name='tab1'>Tab1</m-tabs-item>
        <m-tabs-item name='tab2'>Tab2</m-tabs-item>
        <m-tabs-item name='tab3'>Tab3</m-tabs-item>
        <m-tabs-item name='tab4' disabled>Tab4</m-tabs-item>
      </m-tabs-head>
      <m-tabs-body>
        <m-tabs-pane name='tab1'>内容1</m-tabs-pane>
        <m-tabs-pane name='tab2'>内容2</m-tabs-pane>
        <m-tabs-pane name='tab3'>内容3</m-tabs-pane>
        <m-tabs-pane name='tab4'>内容4</m-tabs-pane>
      </m-tabs-body>
    </m-tabs>
  </div>
</template>
<script>
  export default {
    data() { return { selectedTab: 'tab1' } }
  }
</script>
```

## 选项
1. 默认高亮状态
m-tabs 需要设置<span style='color:#3eaf7c;background-color:#F8F8F8'> selected </span>属性来确定默认标签。  
你可以这样：`:selected.sync="selectedTab"`,其中 <span style='color:#3eaf7c;background-color:#F8F8F8'>selectedTab </span>是你需要传递的默认值。  
并且该标签的子组件应该是 m-tabs-head 和 m-tabs-body ，否则你会得到一个警告。
2. disabled 状态
 <span style='color:#3eaf7c;background-color:#F8F8F8'>disabled</span> 属性用于 m-tabs-item 标签，可以设置该标签的不可用状态。