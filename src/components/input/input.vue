<template>
  <div class="qc-input" :class="[addWrap, addTwoWrap, smallItem]">
    <template v-if="type !== 'textarea'">
      <div class="qc-input_group qc-input_group_prepend" v-if="prepend" v-show="slotReady" :class="{'qc-input_group__small': size === 'small'}"><slot name="prepend"></slot></div>
      <i v-if='icon && !prepend && !append' class="qc-input_icon qc-input_icon__large" :class='[iconOptions.class,iconSize]' :style="{'font-family': iconFamily}" @click="handleIconClick"></i>
      <input
        class="qc-input_inner"
        :class = "[{'qc-input_inner__radius': borderRadius},inputSize,addDisable]"
        :placeholder = "placeholder"
        :disabled = "disabled"
        :readonly = "readonly"
        :autofocus = "autofocus"
        :maxLength = "maxLength"
        :type="type"
        :value = "currentValue"
        @input = "handleInput"
        @keyup.enter="handleEnter"
        @focus="handleFocus"
        @blur="handleBlur" 
        @change="handleChange"
      ></input>
      <div class="qc-input_group qc-input_group_append" v-if="append" v-show="slotReady" :class="{'qc-input_group__small': size === 'small'}"><slot name="append"></slot></div>
    </template>
    <textarea
      v-else
      class = "qc-input_inner qc-input_inner__textarea"
      :class = "[{'qc-input_inner__radius': borderRadius},addDisable]"
      ref="textarea"
      :style="textareaStyles"
      :rows = "rows"
      :value = "value"
      :placeholder = "placeholder"
      :disabled = "disabled"
      :readonly = "readonly"
      :autofocus = "autofocus"
      :maxLength = "maxLength"
      @input = "handleInput"
      @keyup.enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></textarea>
  </div>
</template>
<style type="text/css" lang="scss">
  @import "../../styles/mixin";
  .qc-input{
    display: inline-block;
    position: relative;
    vertical-align: middle;
    width: 100%;
  }
  .qc-input_warp__prepend{
    display: inline-table;
  }
  .qc-input_warp__append{
    display: inline-table;
  }
  .qc-input_inner{
    display: inline-block;
    width: 100%;
    height: 40px;
    padding: 4px 10px;
    font-size: 14px;
    border: 1px solid $input_border_color;
    color: $input_word_color;
    background-color: $input_bg_color;
    background-image: none;
    position: relative;
    cursor: text;
    outline: none;
    box-sizing: border-box;
  }
  .qc-input_inner__textarea{
    resize: none;
  }
  .qc-input_inner__radius{
    border-radius: 4px;
  }
  .qc-input_inner:focus,.qc-input_inner:hover{
    border: 1px solid $input_hover_border_color;
  }
  textarea.qc-input_inner{
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    padding: 5px 10px;
    line-height: 1.5;
  }
  .qc-input_inner__disable{
    background-color: $input_bg_disabled;
    opacity: 1;
    cursor: not-allowed;
    color: $input_word_disabled;
  }
  .qc-input_inner__normal{
    height: 32px;
    padding: 4px 10px;
    font-size: 12px;
  }
  .qc-input_inner__disable:hover{
    border: 1px solid $input_border_color;
  }
  .qc-input_inner__small{
    height: 24px;
    padding: 1px 10px;
    font-size: 12px;
  }
  .qc-input_icon{
    display: inline-block;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: none;
    text-transform: none;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  .qc-input_icon__large{
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    position: absolute;
    right: 0;
    z-index: 3;
  }
  .qc-input_icon__normal{
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
  }
  .qc-input_icon__small{
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
  }
  .qc-input_icon+.qc-input_inner{
    padding-right: 40px;
  }
  .qc-input_icon+.qc-input_inner__normal{
    padding-right: 32px;
  }
  .qc-input_icon+.qc-input_inner__small{
    padding-right: 24px;
  }
  .qc-input_group{
    font-size: inherit;
    font-variant: 400;
    line-height: 1;
    color: $input_prepend_word_color;
    text-align: center;
    background: $input_prepend_bg_color;
    border: 1px solid $input_prepend_border_color;
    border-radius: 4px;
    width: 1px;
    white-space: nowrap;
    vertical-align: middle;
    display: table-cell;
  }
  .qc-input_group_append{
    border-left: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background: $input_append_bg_color;
    color: $input_append_word_color;
  }
  .qc-input_group_prepend{
    border-right: none;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .qc-input_warp__append .qc-input_inner{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none; 
  }
  .qc-input_warp__prepend .qc-input_inner{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }
  .qc-input_warp .qc-input_inner{
    border-radius: 0 ;
    border-left: none;
    border-right: none;
  }
  .qc-input_warp__small .qc-input_group{
    font-size: 12px;
  }
  .qc-input_warp__normal .qc-input_group{
    font-size: 14px;
  }
  .qc-input_warp__append .qc-input_inner:focus{
    border: 1px solid $input_append_border_color;
    border-right: none;
  }
  .qc-input_warp__prepend .qc-input_inner:focus{
    border: 1px solid $input_prepend_border_color;
    border-left: none; 
  }
  .qc-input_warp__append .qc-input_inner:hover{
    border: 1px solid $input_append_border_color;
    border-right: none; 
  }
  .qc-input_warp__prepend .qc-input_inner:hover{
    border: 1px solid $input_prepend_border_color;
    border-left: none; 
  }
  .qc-input_warp .qc-input_inner:hover,.qc-input_warp .qc-input_inner:focus{
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
</style>
<script>
  import calcTextareaHeight from './calcTextareaHeight.js'
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      maxLength: {
        type: Number
      },
      icon: {
        type: Boolean,
        default: false
      },
      iconOptions: {
        type: Object
      },
      rows: {
        type: Number,
        default: 2
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      size: {
        type: String,
        default: 'large'
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      borderRadius: {
        type: Boolean,
        default: false
      },
      onIconClick: {
        type: Function
      },
      isNumber: {
        type: Boolean,
        default: false
      },
      decimalPointCount: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        currentValue: this.value,
        textareaStyles: {},
        prepend: false,
        append: false,
        slotReady: false
      }
    },
    methods: {
      resizeTextarea () {
        const autosize = this.autosize
        if (!autosize || this.type !== 'textarea') {
          return false
        }
        const minRows = autosize.minRows
        const maxRows = autosize.maxRows
        this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
      },
      handleInput (event) {
        let value = event.target.value
        let emitValue = ''
        if (this.isNumber && this.decimalPointCount === 0 && value !== '') {
          let regx = /^[1-9]\d*$/
          if (regx.test(value)) {
            event.target.value = value
            this.currentValue = value
            emitValue = value
          } else {
            event.target.value = this.currentValue
            emitValue = this.currentValue
          }
        } else if (this.isNumber && this.decimalPointCount !== 0  && value !== '') {
          const str = '^\\d+(\\.||\\.\\d{' + 1 + ',' + this.decimalPointCount + '})?$'
          let regx = new RegExp(str)
          if (regx.test(value)) {
            event.target.value = value
            this.currentValue = value
            emitValue = value
          } else {
            event.target.value = this.currentValue
            emitValue = this.currentValue
          }
        } else if (this.isNumber  && value === '') {
          emitValue = ''
          this.currentValue = ''
        } else {
          emitValue = value
        }
        // if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value)
        this.$emit('input', emitValue)
        this.setCurrentValue(emitValue)
        this.$emit('on-change', event)
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.$nextTick(() => {
          this.resizeTextarea()
        })
        this.currentValue = value
      },
      handleEnter (event) {
        this.$emit('on-enter', event)
      },
      handleFocus (event) {
        this.$emit('on-focus', event)
      },
      handleBlur (event) {
        this.$emit('on-blur', event)
      },
      handleChange () {
        this.$emit('on-input-change', event)
      },
      handleIconClick (event) {
        if (this.onIconClick) {
          this.onIconClick(event)
        }
        this.$emit('click', event)
      }
    },
    watch: {
      value (val) {
        this.setCurrentValue(val)
      }
    },
    computed: {
      inputSize () {
        return this.size === 'large' ? '' : this.size === 'normal' ? 'qc-input_inner__normal' : 'qc-input_inner__small'
      },
      iconSize () {
        return this.size === 'large' ? '' : this.size === 'normal' ? 'qc-input_icon__normal' : 'qc-input_icon__small'
      },
      addWrap () {
        return this.prepend ? 'qc-input_warp__prepend' : this.append ? 'qc-input_warp__append' : ''
      },
      addTwoWrap () {
        return (this.prepend && this.append) ? 'qc-input_warp' : ''
      },
      smallItem () {
        return this.size === 'large' ? '' : this.size === 'normal' ? 'qc-input_warp__normal' : 'qc-input_warp__small'
      },
      addDisable () {
        return this.disabled ? 'qc-input_inner__disable' : ''
      },
      iconFamily () {
        return this.iconOptions.family ? this.iconOptions.family : ''
      }
    },
    mounted () {
      if (this.type !== 'textarea') {
        this.prepend = this.$slots.prepend !== undefined
        this.append = this.$slots.append !== undefined
      } else {
        this.prepend = false
        this.append = false
      }
      this.slotReady = true
      this.resizeTextarea()
    }
  }
</script>
