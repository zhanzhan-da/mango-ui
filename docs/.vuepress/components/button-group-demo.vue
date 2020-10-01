<template>
  <div>
    <m-button-group>
      <m-button icon="left">上一页</m-button>
      <m-button>更多</m-button>
      <m-button icon="right" icon-position="right">下一页</m-button>
    </m-button-group>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group';
import Button from '../../../src/button';
export default {
  components: {
    'm-button': Button,
    'm-button-group': ButtonGroup
  }
};
</script>
<style lang="scss" scoped></style>
