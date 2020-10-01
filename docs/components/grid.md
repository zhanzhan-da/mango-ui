---
title: 'Grid - 栅格'
---
# 栅格
24 栅格系统。

## 预览
&nbsp;
<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

## 使用方法
```vue
  <div>
    <m-row>
      <m-col>col-24</m-col>
    </im-row>
    <m-row>
      <m-col span="12">col-12</m-col>
      <m-col span="12">col-12</m-col>
    </m-row>
    <m-row>
      <m-col span="8">col-8</m-col>
      <m-col span="8">col-8</m-col>
      <m-col span="8">col-8</m-col>
    </m-row>
    <m-row class="row">
      <m-col span="6">col-6</m-col>
      <m-col span="6">col-6</m-col>
      <m-col span="6">col-6</m-col>
      <m-col span="6">col-6</m-col>
    </m-row>
  </div>
```
## 选项
### Row 选项
#### 1. gutter（排水沟；槽）
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> gutter </span>属性, 可以让栅格有间隔。单位为<span style='color:#3eaf7c;background-color:#F8F8F8'> px </span>。    
预览  
<ClientOnly>
  <gutter-demo></gutter-demo>
</ClientOnly>

代码
```vue
  <div>
    <m-row gutter="30">
      <m-col span="8"> <span> col-8; gutter-30;</span> </m-col>
      <m-col span="8"> <span> col-8; gutter-30;</span> </m-col>
      <m-col span="8"> <span> col-8; gutter-30;</span> </m-col>
    </m-row>
    <m-row gutter="20">
      <m-col  span="8"> <span> col-8; gutter-20;</span> </m-col>
      <m-col  span="8"> <span> col-8; gutter-20;</span> </m-col>
      <m-col  span="8"> <span> col-8; gutter-20;</span> </m-col>
    </m-row>
    <m-row gutter="10">
      <m-col  span="8"> <span> col-8; gutter-10;</span> </m-col>
      <m-col  span="8"> <span> col-8; gutter-10;</span> </m-col>
      <m-col  span="8"> <span> col-8; gutter-10;</span> </m-col>
    </m-row>
  </div>
```
#### 2. align
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> align </span>属性, 可以定义其子组件在该节点里面的排版方式。  
预览  
<ClientOnly>
  <align-demo></align-demo>
</ClientOnly>

代码
```vue
  <div>
    <m-row align="left">
      <m-col span="8">left</m-col>
      <m-col span="8">left</m-col>
    </m-row>
    <m-row align="center">
      <m-col span="8">center</m-col>
      <m-col span="8">center</m-col>
    </m-row>
    <m-row align="right">
      <m-col span="8">right</m-col>
      <m-col span="8">right</m-col>
    </m-row>
  </div>
```

### Col 选项
> Col 的选项有 span, offset 以及响应式相关的 ipad, narrowPc, pc, widePc 这些。
#### 1. span
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> span </span>属性来实现。
例如：三个等宽的列可以使用`<i-col span="8">列</i-col>` 来创建其中一个，其余两个再复制两份。

#### 2. offset
使用<span style='color:#3eaf7c;background-color:#F8F8F8'> offset </span>属性,可以将列向右侧偏。  
例如，`offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。  
预览
<ClientOnly>
    <offset-demo></offset-demo>
</ClientOnly>
代码
```vue
  <div>
    <m-row>
      <m-col span="8"> <span>col-8</span> </m-col>
      <m-col span="8"> <span>col-8</span> </m-col>
      <m-col span="4" offset="4"> <span>col-4</span> </m-col>
    </m-row>
    <m-row>
      <m-col span="8"> <span>col-8</span> </m-col>
      <m-col span="5" offset="3"> <span>col-5</span> </m-col>
      <m-col span="4" offset="4"> <span>col-4</span> </m-col>
    </m-row>
    <m-row>
      <m-col span="2" offset="6"> <span>col-2</span> </m-col>
      <m-col span="5" offset="3"> <span>col-5</span> </m-col>
      <m-col span="4" offset="4"> <span>col-4</span> </m-col>
    </m-row>
  </div>
```


#### 3. 响应式
支持ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。  
若不给 Col 这四个属性，默认为 手机端响应，span值为24。  
<span style='color:red;'>注意： 若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。</span>  
预览
<ClientOnly>
    <response-demo></response-demo>
</ClientOnly>

代码
```vue
<m-row>
    <m-col :span="24"  :ipad="{span:'11',offset:'0'}" :narrow-pc="{span:'8',offset:'0'}"  :pc="{span:'6',offset:'0'}">1</m-col>
    <m-col :span="24"  :ipad="{span:'11',offset:'2'}" :narrow-pc="{span:'12',offset:'4' }" :pc="{span:'18',offset:'0'}">2</m-col>
</m-row>
```

#### options
1. 关于Row

|参数|说明|类型|可选值|默认值
|------|---------------|---------|---------|---------|
|gutter|用于调整栅格之间的间距|Number|---|0|
|align|栅格的垂直对齐方式|String|'top'/'center'/bottom |---|

2. 关于Col的API

|参数|说明|类型|可选值|默认值
|------|---------------|---------|---------|---------|
|span|栅格的宽度，最大值为24|String|'0','1','2'...|---|
|offset|栅格的间距，最大值为24|String|'0'，'1','2'...|---|
| ipad| >576px 响应式栅格可为栅格数或间距|Object|{span:'4',offset:'3}...|---|
| narrowPc| >768px 响应式栅格可为栅格数或间距|Object|{span:'4',offset:'3}...|---|
| pc | >992px 响应式栅格可为栅格数或间距|Object|{span:'4',offset:'3}...|---|
| widthPc| >1200px 响应式栅格可为栅格数或间距|Object|{span:'4',offset:'3}...|---|