<template>
  <div class="qc-radio-group" :class="[verticalClass]">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
  @import "../../styles/mixin";
  .qc-radio-group{
    display: inline-block;
    font-size: 14px;
  }
  .qc-radio-group__vertical .qc-radio{
    display: block;
    height: 30px;
    line-height: 30px;
  }
</style>
<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'qcRadioGroup',
    props: {
      value: {
        type: [String, Number, Boolean],
        default: ''
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        checkedValue: this.value
      }
    },
    watch: {
      value () {
        this.updateValue()
      }
    },
    computed: {
      verticalClass () {
        return this.vertical ? 'qc-radio-group__vertical' : ''
      }
    },
    methods: {
      updateValue () {
        let value = this.value
        let childrens = this.findChildComponents(this, 'qcRadio')
        if (childrens) {
          childrens.forEach(child => {
            child.checkedValue = value === child.label
            child.group = true
          })
        }
      },
      change (options) {
        this.checkedValue = options.label
        this.$emit('input', options.label)
        this.updateValue()
        this.$emit('change', options.label)
      }
    },
    mixins: [Emitter],
    mounted () {
      this.$on('is-change', (options) => {
        this.$nextTick(() => {
          this.change(options)
        })
      })
      this.$on('update', () => {
        this.updateValue()
      })
    }
  }
</script>
