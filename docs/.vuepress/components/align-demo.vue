<template>
  <div class="align-wrapper">
    <m-row class="row" align="left">
      <m-col class="item" span="8">left</m-col>
      <m-col class="item" span="8">left</m-col>
    </m-row>
    <m-row class="row" align="center">
      <m-col class="item" span="8">center</m-col>
      <m-col class="item" span="8">center</m-col>
    </m-row>
    <m-row class="row" align="right">
      <m-col class="item" span="8">right</m-col>
      <m-col class="item" span="8">right</m-col>
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
  .align-wrapper{ text-align: center; color: $font-color;
    .row{ padding-top: $wrapper-top;
      > .item { text-align: center;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
      }
    }
  }
</style>