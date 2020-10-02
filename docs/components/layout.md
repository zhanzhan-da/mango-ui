---
title: 'Layout - 布局'
---
# 布局
## 预览


<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>
 <!-- <layout-demo></layout-demo> -->

## 使用方法
```vue
  <div class="wrapper">
    <m-layout>
      <m-header> header </m-header>
      <m-layout>
        <m-smder> smder </m-smder>
        <m-content> content </m-content>
      </m-layout>
      <m-footer> footer </m-footer>
    </m-layout>
    <m-layout>
      <m-header> header </m-header>
      <m-content> content </m-content>
      <m-footer> footer </m-footer>
    </m-layout>
    <m-layout>
      <m-header> header </m-header>
      <m-layout>
        <m-sider> sider </m-sider>
        <m-layout>
          <m-content> content </m-content>
          <m-footer> footer </m-footer>
        </m-layout>
      </m-layout>
    </m-layout>
  </div>
```

## 选项
提供基础布局，样式自定义。
### 组件概述
- <span style='color:#3eaf7c;background-color:#F8F8F8'> m-layout </span>：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> m-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> m-sider </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> m-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> m-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。

