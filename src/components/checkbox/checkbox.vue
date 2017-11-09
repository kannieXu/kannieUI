<template>
  <label class="qc-checkbox_wrap" :class="[isDisabled]">
    <span class="qc-checkbox" :class="[isChecked]">
      <span class="qc-checkbox_inner" :class="[isBorderRadius]" :style="{borderColor: isBorder, backgroundColor: isBackground}"></span>
      <input v-if="group" type="checkbox" class="qc-checkbox_input" :disabled="disabled || limitBol" :value="label" v-model="model" @change="handleChange">
      <input v-if="!group" type="checkbox" class="qc-checkbox_input" :disabled="disabled" :checked="currentValue" @change="handleChange">
    </span>
      <span class="qc-checkbox__label" v-if="$slots.default || label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
  </label>
</template>
<style type="text/css" lang="scss" scoped>
  @import "../../styles/mixin";
  .qc-checkbox_wrap{
    cursor: pointer;
    font-size: 12px;
    display: inline-block;
    margin-right: 8px;
    box-sizing: border-box;
  }
  .qc-checkbox{
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    outline: 0;
    cursor: pointer;
    line-height: 1;
    position: relative;
  }
  .qc-checkbox_inner{
    display: inline-block;
    width: 18px;
    height: 18px;
    position: relative;
    top: 0;
    left: 0;
    border: 1px solid $checkbox_normal_border_color;
    background-color: $checkbox_normal_bg_color;
    box-sizing: border-box;
  }
  .qc-checkbox_inner:after{
    content: "";
    
    width: 6px;
    height: 11px;
    position: absolute;
    top: 1px;
    left: 5px;
    border: 2px solid $checkbox_checked_word_color;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0);
    transition: all .2s ease-in-out;
    box-sizing: border-box;
  }
  .qc-checkbox__borderRadius{
    border-radius: 4px;
  }
  .qc-checkbox_checked .qc-checkbox_inner{
    border: 1px solid $checkbox_checked_bg_color;
    background-color: $checkbox_checked_bg_color; 
  }
  .qc-checkbox_checked .qc-checkbox_inner:after{
    transform: rotate(45deg) scale(1);
  }
  .qc-checkbox_input{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .qc-checkbox__label{
    font-size: 14px;
    color: $checkbox_label_color;
    padding-left: 3px;
    vertical-align:middle
  }
  .qc-checkbox_wrap__disabled{
    cursor: not-allowed;
  }
  .qc-checkbox_wrap__disabled .qc-checkbox{
    cursor: not-allowed;
  }
  .qc-checkbox_wrap__disabled .qc-checkbox_input{
    cursor: not-allowed;
  }
  .qc-checkbox_wrap__disabled .qc-checkbox_inner{
    border: 1px solid $checkbox_disabled_border_color;
    background-color: $checkbox_disabled_bg_color; 
  }
  .qc-checkbox_wrap__disabled .qc-checkbox__label{
    color: $checkbox_disabled_label_color;
  }
  .qc-checkbox_wrap__disabled .qc-checkbox_checked .qc-checkbox_inner{
    background-color: $checkbox_disabled_checked_bg_color;
    border: 1px solid $checkbox_disabled_checked_border_color;
  }
</style>
<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'qcCheckbox',
    mixins: [Emitter],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: Boolean,
        default: false
      },
      label: {
        type: [String, Number, Boolean]
      },
      borderRadius: Boolean,
      checkboxBorder: String,
      checkboxBackground: String
    },
    data () {
      return {
        model: [],
        currentValue: this.value,
        group: false,
        parentComponet: null,
        limitBol: false,
        minProps: null,
        maxProps: null
      }
    },
    watch: {
      value () {
        this.updateCurrentValue()
      },
      model (val) {
        let _this = this
        if (this.maxProps && val.length >= this.maxProps) {
          val.indexOf(_this.label) >= 0 ? _this.limitBol = false : _this.limitBol = true
        } else {
          _this.limitBol = false
        }
      }
    },
    computed: {
      isChecked () {
        return this.currentValue ? 'qc-checkbox_checked' : ''
      },
      isDisabled () {
        return this.disabled ? 'qc-checkbox_wrap__disabled' : ''
      },
      isBorderRadius () {
        return this.borderRadius ? 'qc-checkbox__borderRadius' : ''
      },
      isBorder () {
        return (this.currentValue && this.checkboxBorder) ? this.checkboxBorder : ''
      },
      isBackground () {
        return (this.currentValue && this.checkboxBackground) ? this.checkboxBackground : ''
      }
    },
    methods: {
      handleChange (event) {
        if (this.disabled) {
          return false
        }
        const checked = event.target.checked
        this.currentValue = checked
        this.$emit('input', checked)
        if (this.group) {
          this.dispatch('qcCheckboxGroup', 'input', [this.model])
        } else {
          this.$emit('change', checked)
        }
      },
      updateCurrentValue () {
        this.currentValue = this.value
      }
    },
    mounted () {
      this.updateCurrentValue()
    }
  }
</script>
