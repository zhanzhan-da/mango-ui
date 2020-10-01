<template>
  <div class="gutter-wrapper">
    <m-row gutter="30">
      <m-col class="item" span="8"> <span> col-8; gutter-30;</span> </m-col>
      <m-col class="item" span="8"> <span> col-8; gutter-30;</span> </m-col>
      <m-col class="item" span="8"> <span> col-8; gutter-30;</span> </m-col>
    </m-row>
    <m-row gutter="20">
      <m-col class="item" span="8"> <span> col-8; gutter-20;</span> </m-col>
      <m-col class="item" span="8"> <span> col-8; gutter-20;</span> </m-col>
      <m-col class="item" span="8"> <span> col-8; gutter-20;</span> </m-col>
    </m-row>
    <m-row gutter="10">
      <m-col class="item" span="8"> <span> col-8; gutter-10;</span> </m-col>
      <m-col class="item" span="8"> <span> col-8; gutter-10;</span> </m-col>
      <m-col class="item" span="8"> <span> col-8; gutter-10;</span> </m-col>
    </m-row>
  </div>
</template>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      'm-col': Col,
      'm-row': Row
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .gutter-wrapper { padding-top: $wrapper-top;
    .item { text-align: center; color: $font-color;
      > span { display: block; background: $background; }
    }
  }

</style>