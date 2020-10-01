<template>
  <div style="padding: 30px 0">
    <m-button>默认按钮</m-button>
    <m-button icon="settings">默认按钮</m-button>
    <m-button icon="settings" icon-position="right">默认按钮</m-button>
    <m-button  :loading="loading" @click="loading=!loading">默认按钮</m-button>
    <m-button disabled>默认按钮</m-button>
  </div>
</template>

<script>
import Button from '../../../src/button';
import ButtonGroup from '../../../src/button-group';

export default {
  components: {
    'm-button': Button,
    'm-button-group': ButtonGroup
  },
  data() {
    return {
      loading:true
    };
  },
  methods:{

  }
};
</script>
