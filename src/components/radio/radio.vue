<template>
  <div 
    class="qc-radio"
    :class = "[checkedClass, disabledClass]"
  >
    <span class="qc-radio_wrap">
      <span class="qc-radio_inner"></span>
      <input 
        class = "qc-radio_input" 
        type="radio"
        :disabled = "disabled"
        :checked = "checkedValue"
        @change = "handelchange"
      >
    </span>
    <slot>{{label}}</slot>
  </div>
</template>
<style scoped lang="scss">
  @import "../../styles/mixin";
  .qc-radio{
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    margin-right: 8px;
    cursor: pointer;
    text-align: left;
  }
  .qc-radio__disabled{
    cursor: not-allowed;
  }
  .qc-radio_wrap{
    display: inline-block;
    margin-right: 4px;
    white-space: nowrap;
    outline: 0;
    line-height: 1;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
  }
  .qc-radio_inner{
    display: inline-block;
    width: 16px;
    height: 16px;
    position: relative;
    left: 0;
    top: 0;
    background-color: $radio_bg_color;
    border: 1px solid $radio_border_color;
    border-radius: 50%;
  }
  .qc-radio_inner:after{
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: 50%;
    top: 50%;
    margin-top: -5px;
    margin-left: -5px;
    border-radius: 50%;
    display: table;
    background-color: $radio_bg_active_color;
    opacity: 0;
    transition: all .2s ease-in-out;
    transform: scale(0);
  }
  .qc-radio__checked .qc-radio_inner{
    border: 1px solid $radio_bg_active_color;
  }
  .qc-radio__checked .qc-radio_inner:after{
    opacity: 1;
    transform: scale(1);
    transition: all .2s ease-in-out;
  }
  .qc-radio__disabled .qc-radio_inner{
    background-color: $radio_disabled_bg_color;
    border: 1px solid $radio_disabled_border_color;
  }
  .qc-radio__disabled .qc-radio_inner:after{
    background-color: $radio_disabled_active_color;
  }
  .qc-radio_input{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    z-index: 1;
  }
  .qc-radio__disabled .qc-radio_input{
    cursor: not-allowed;
  }
</style>
<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'qcRadio',
    props: {
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      label: [String, Number, Boolean],
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        checkedValue: this.value,
        group: false
      }
    },
    watch: {
      value (val) {
        this.checkedValue = val
      }
    },
    computed: {
      checkedClass () {
        return this.checkedValue ? 'qc-radio__checked' : ''
      },
      disabledClass () {
        return this.disabled ? 'qc-radio__disabled' : ''
      }
    },
    methods: {
      handelchange (event) {
        if (this.disabled) return false
        this.checkedValue = event.target.checked
        this.$emit('input', this.checkedValue)
        if (!this.group) {
          this.$emit('change', this.checkedValue)
        } else if (this.group && this.label !== undefined) {
          this.dispatch('qcRadioGroup', 'is-change', {
            checked: this.value,
            label: this.label
          })
        }
      }
    },
    mixins: [Emitter],
    mounted () {
      if (this.findComponentUpward(this, 'qcRadioGroup')) {
        this.group = true
        this.$nextTick(() => {
          this.dispatch('qcRadioGroup', 'update')
        })
      } else {
        this.checkedValue = this.value
      }
    }
  }
</script>
