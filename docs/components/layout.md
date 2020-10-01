---
title: 'Layout - 布局'
---
# 布局
## 预览


<!-- <ClientOnly>
    <layout-demo></layout-demo>
</ClientOnly> -->
 <layout-demo></layout-demo>

## 使用方法
```vue
  <div class="wrapper">
    <i-layout>
      <i-header> header </i-header>
      <i-layout>
        <i-sider> sider </i-sider>
        <i-content> content </i-content>
      </i-layout>
      <i-footer> footer </i-footer>
    </i-layout>
    <br>
    <i-layout>
      <i-header> header </i-header>
      <i-content> content </i-content>
      <i-footer> footer </i-footer>
    </i-layout>
    <br>
    <i-layout>
      <i-header> header </i-header>
      <i-layout>
        <i-sider> sider </i-sider>
        <i-layout>
          <i-content> content </i-content>
          <i-footer> footer </i-footer>
        </i-layout>
      </i-layout>
    </i-layout>
  </div>
```

## 选项
提供基础布局，样式自定义。
### 组件概述
- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-layout </span>：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-sider </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。

