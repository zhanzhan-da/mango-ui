<template>
  <div class="grid-wrapper">
    <m-row class="row">
      <m-col class="item" span="24">col-24</m-col>
    </m-row>
    <m-row>
      <m-col class="item" span="12">col-12</m-col>
      <m-col class="item" span="12">col-12</m-col>
    </m-row>
    <m-row class="row">
      <m-col class="item" span="8">col-8</m-col>
      <m-col class="item" span="8">col-8</m-col>
      <m-col class="item" span="8">col-8</m-col>
    </m-row>
    <m-row class="row">
      <m-col class="item" span="6">col-6</m-col>
      <m-col class="item" span="6">col-6</m-col>
      <m-col class="item" span="6">col-6</m-col>
      <m-col class="item" span="6">col-6</m-col>
    </m-row>
  </div>
</template>

<style lang="scss" scoped>
  @import "../styles/helper";

  .grid-wrapper{
    > .row{ padding: .2em;
      > .item { text-align: center; color: $font-color;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,15%); color: $font-color; }
      }
    }
  }
</style>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      'm-col': Col,
      'm-row': Row
    }
  }
</script>