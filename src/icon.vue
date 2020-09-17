<template>
  <svg class="m-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "MangoIcon",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.m-icon {
  width: 1em;
  height: 1em;
}
</style>
