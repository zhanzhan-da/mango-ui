---
title: '快速上手'
---
# 快速上手

## 引入必要资源
```javascript
import {Button} from "mangoing-ui";
import "mangoing-ui/dist/index.css";
```

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "m-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <m-button>默认按钮</m-button>
  </div>
</template>
```
