---
title: button - 按钮
---

# 按钮

## 预览

<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

## 使用方法

```vue
<m-button>默认按钮</m-button>
<m-button icon="settings">默认按钮</m-button>
<m-button icon="settings" icon-position="right">默认按钮</m-button>
<m-button :loading="loading" @click="loading = !loading">默认按钮</m-button>
<m-button disabled>默认按钮</m-button>
```

## 选项

### 单个按钮

#### 1. 图标

通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> icon </span>属性在 Button 内嵌入一个 Icon。  
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> iconPosition </span>属性改变 Icon 在 Button 中的位置，仅支持“左，右”两个位置。

#### 2. 加载中状态

通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> loading </span>属性，可以让按钮处于加载中状态。

#### 3. 不可用状态

通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> disabled </span>属性，可将按钮设置为不可用状态。

### 按钮组

预览

<ClientOnly>
  <button-group-demo></button-group-demo>
</ClientOnly>

代码

```vue
<m-button-group>
  <m-button icon="left">上一页</m-button>
  <m-button>更多</m-button>
  <m-button icon="right" icon-position="right">下一页</m-button>
</m-button-group>
```

#### options

| 参数          | 说明                     | 类型    | 可选值                               | 默认值 |
| ------------- | ------------------------ | ------- | ------------------------------------ | ------ |
| icon          | 内置的图标               | String  | 'left'/'right'/'settings'/'download' | ---    |
| icon-position | 图标与文字的位置关系     | String  | 'left'/'right'                       | "left" |
| loading       | 可以设置是否出现加载状态 | Boolean | true/false                           | false  |
| disabled      | 是否可点击               | Boolean | true/false                           | false  |
