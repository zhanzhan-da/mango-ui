<template>
  <svg class="m-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
import "./svg";
export default {
  props: ["name"],
};
</script>

<style lang="scss">
.m-icon {
  width: 1em;
  height: 1em;
}
</style>