<template>
  <div class="response-wrapper">
     <m-row  style="margin: 10px 0 ; color: #ffffff;">
        <m-col :span="24"  :ipad="{span:'11',offset:'0'}" :narrow-pc="{span:'8',offset:'0'}"  :pc="{span:'6',offset:'0'}" style="background-color: #51A1EA">1</m-col>
        <m-col :span="24"  :ipad="{span:'11',offset:'2'}" :narrow-pc="{span:'12',offset:'4' }" :pc="{span:'18',offset:'0'}" style="background-color: #72BCEF">2</m-col>
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
 

</style>
