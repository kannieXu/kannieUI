<template>
  <div 
    class="qc-step-group"
    :class = '[directionClass, centerClass]'
  >
    <slot></slot>
  </div>
</template>
<style scoped>
  .qc-step-group{
    font-size: 0;
  }
  .qc-steps_horizontal{
    white-space: nowrap;
  }
  .qc-steps_horizontal.qc-steps_center{
    text-align: center;
  }
</style>
<script>
  export default {
    name: 'qcStepGroup',
    props: {
      space: [Number, String],
      active: Number,
      direction: {
        type: String,
        default: 'horizontal'
      },
      alignCenter: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: false
      },
      finishStatus: {
        type: String,
        default: 'finish'
      },
      processStatus: {
        type: String,
        default: 'process'
      }
    },
    data () {
      return {
        stepGroup: [],
        stepOffset: 0
      }
    },
    watch: {
      active (newVal, oldVal) {
        this.$emit('change', newVal, oldVal)
      },
      stepGroup (stepArr) {
        stepArr.forEach((child, index) => {
          child.index = index
        })
      }
    },
    computed: {
      directionClass () {
        return `qc-steps_${this.direction}`
      },
      centerClass () {
        return this.center ? 'qc-steps_center' : ''
      }
    },
    mounted () {
      this.stepGroup = [].concat(this.$children)
    }
  }
</script>
