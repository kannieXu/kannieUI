<template>
  <div class="qc-button_group">
    <slot></slot>
  </div>
</template>
<style type="text/css">
  .qc-button_group{
    display: inline-block;
    vertical-align: middle;
  }
  .qc-button_group:before,.qc-button_group:after{
    display: table;
    content: "";
  }
</style>
<script>
  export default {
    name: 'qcButtonGroup'
  }
</script>
