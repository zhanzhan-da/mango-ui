<template>
  <div>
      <m-tabs :selected.sync="selectedTab">
      <m-tabs-head>
        <m-tabs-item name='tab1'>Tab1</m-tabs-item>
        <m-tabs-item name='tab2'>Tab2</m-tabs-item>
        <m-tabs-item name='tab3'>Tab3</m-tabs-item>
        <m-tabs-item name='tab4' disabled>Tab4</m-tabs-item>
      </m-tabs-head>
      <m-tabs-body>
        <m-tabs-pane name='tab1'>内容1</m-tabs-pane>
        <m-tabs-pane name='tab2'>内容2</m-tabs-pane>
        <m-tabs-pane name='tab3'>内容3</m-tabs-pane>
        <m-tabs-pane name='tab4'>内容4</m-tabs-pane>
      </m-tabs-body>
    </m-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs'
import TabsBody from '../../../src/tabs-body'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
import Icon from '../../../src/icon'

export default {
    components:{
        'm-tabs': Tabs,
        'm-tabs-body': TabsBody,
        'm-tabs-head': TabsHead,
        'm-tabs-item': TabsItem,
        'm-tabs-pane': TabsPane,
        'icon': Icon
    },
    data(){
        return{selectedTab: 'tab1'}
    }
}
</script>

<style lang="scss" scoped>

</style>