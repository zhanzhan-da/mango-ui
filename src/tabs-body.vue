<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'MangoTabsBody',
    inject:['eventBus'],
    created(){
      
    }
}
</script>

<style lang="scss" scoped>
    
</style>