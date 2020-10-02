<template>
  <div class="single-wrapper">
    <m-collapse :selected.sync="selected" single>
      <m-collapse-item title="标题1" name="1">1</m-collapse-item>
      <m-collapse-item title="标题2" name="2">2</m-collapse-item>
      <m-collapse-item title="标题3" name="3">3</m-collapse-item>
    </m-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'

  export default {
    components:{
      'm-collapse': Collapse,
      'm-collapse-item': CollapseItem,
    },
    data(){
      return{
        selected : ['1']
      }
    },
  }
</script>

<style lang="scss" scoped>
.single-wrapper{
  padding: 10px 0;
}
</style>