<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'qcCheckboxGroup',
    mixins: [Emitter],
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      },
      min: Number,
      max: Number
    },
    data () {
      return {
        currentValue: this.value,
        childrens: []
      }
    },
    methods: {
      updateChildCurrentValue (update) {
        const value = this.value
        let _this = this
        this.childrens = this.findChildComponents(this, 'qcCheckbox')
        if (this.childrens.length) {
          this.childrens.forEach((item) => {
            item.model = value
            _this.min && (item.minProps = _this.min)
            _this.max && (item.maxProps = _this.max)
            if (update) {
              item.currentValue = value.indexOf(item.label) >= 0
              item.group = true
            }
          })
        }
      }
    },
    watch: {
      value (val) {
        this.updateChildCurrentValue(true)
      }
    },
    mounted () {
      this.updateChildCurrentValue(true)
    }
  }
</script>
