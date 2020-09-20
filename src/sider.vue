<template>
  <div class="sider">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MangoSider',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.sider {
    position: relative;
}
</style>
