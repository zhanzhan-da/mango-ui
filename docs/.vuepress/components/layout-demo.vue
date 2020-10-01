<template>
  <div class="wrapper">
    <m-layout>
      <m-header> header </m-header>
      <m-layout>
        <m-sider> sider </m-sider>
        <m-content> content </m-content>
      </m-layout>
      <m-footer> footer </m-footer>
    </m-layout>
    <br>
    <m-layout>
      <m-header> header </m-header>
      <m-content> content </m-content>
      <m-footer> footer </m-footer>
    </m-layout>
    <br>
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
</template>

<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Sider from '../../../src/sider'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'

  export default {
    components: {
      'm-layout': Layout,
      'm-header': Header,
      'm-sider': Sider,
      'm-content': Content,
      'm-footer': Footer
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .wrapper {
    color: #ffffff;
    > .layout { height: 30vh;
      > .header { height: 3em; background: $background; }
      > .content { background: lighten($background, 25%); }
      > .layout { height: 6em;
        > .sider { width: 3em; background: lighten($background, 15%); }
        > .content { background: lighten($background, 25%); }
        > .layout{
          > .content{ background: lighten($background, 25%); }
          > .footer { background: $background; }
        }
      }
      > .footer { background: $background; }
    }
  }
</style>