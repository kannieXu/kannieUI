<template>
  <div class="input">
    <input type="text" v-qyValidator-input:reg="validatorObj">
    <div v-qyValidator-error:id="{id:id}"></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    props: {
      validatorObj: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        id: this.validatorObj.id
      }
    }
  }
</script>
