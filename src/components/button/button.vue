<template>
  <button :disabled="disabled" class="qc-button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :style="{width: buttonWdith}"
    :class="[buttonType, needRadius, checkSize, isPlain, isDisable, buttonPadding,isLoading,verificationClass]"
  >
    <i class="qc-button_loading_css qc-button_loading__animated" v-if="loading"></i>
    <i class="qc-button_icon" 
      v-if="icon && !loading"
      :style="{'font-family': isIcon}"
      :class="[iconOptions.class]"
    ></i>
    <span v-if="$slots.default && !verificationCode"><slot></slot></span>
    <span v-if="verificationCode" style="font-size:14px;"><span v-if="codeShow"><em class="qc-button_code-text">{{codeText}}</em>秒后继续获取</span> <span v-if="!codeShow">{{codeText}}</span></span>
  </button>
</template>
<style type="text/css" lang="scss" scoped>
  @import "../../styles/mixin";
  .qc-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: $button_normal_bg_color;
    border: 1px solid $button_normal_border_color;
    color: $button_normal_word_color;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    font-size: 16px;
    padding: 7px 15px;
  }
  .qc-button:hover,.qc-button:focus{
    border-color: $button_normal_hover_color; 
    color: $button_normal_hover_color;
  }
  .qc-button__large {
    padding: 10px 20px;
    font-size: 18px;
  }
  .qc-button__small {
    padding: 4px 10px;
    font-size: 14px;
  }
  .qc-button_primary{
    color: $button_primary_word_color;
    background: $button_primary_bg_color;
    border-color: $button_primary_bg_color; 
  }
  .qc-button_primary:hover,.qc-button_primary:focus{
    color: $button_primary_word_color;
    background: $button_primary_hover_color;
    border-color: $button_primary_hover_color; 
  }
  .qc-button_text{
    border: none;
    background: transparent;
    color: $button_text_word_color;
    padding-right: 0;
    padding-left: 0;
  }
  .qc-button_text:hover,.qc-button_text:focus{
    color: $button_text_hover_color;
  }
  .qc-button_success{
    color: $button_success_word_color;
    background: $button_success_bg_color;
    border-color: $button_success_bg_color; 
  }
  .qc-button_success:hover,.qc-button_success:focus{
    color: $button_success_word_color;
    background: $button_success_hover_color;
    border-color: $button_success_hover_color; 
  }
  .qc-button_warning{
    color: $button_warning_word_color;
    background: $button_warning_bg_color;
    border-color: $button_warning_bg_color; 
  }
  .qc-button_warning:hover,.qc-button_warning:focus{
    color: $button_warning_word_color;
    background: $button_warning_hover_color;
    border-color: $button_warning_hover_color; 
  }
  .qc-button_danger{
    color: $button_danger_word_color;
    background: $button_danger_bg_color;
    border-color: $button_danger_bg_color; 
  }
  .qc-button_danger:hover,.qc-button_danger:focus{
    color: $button_danger_word_color;
    background: $button_danger_hover_color;
    border-color: $button_danger_hover_color;
  }
  .qc-button_info{
    color: $button_info_word_color;
    background: $button_info_bg_color;
    border-color: $button_info_bg_color; 
  }
  .qc-button_info:hover,.qc-button_info:focus{
    color: $button_info_word_color;
    background: $button_info_hover_color;
    border-color: $button_info_hover_color;
  }
  .qc-button__is-plain{
    background: $button_normal_bg_color;
    color: $button_normal_word_color;
    border: 1px solid $button_normal_border_color;
  }
  .qc-button_success.qc-button__is-plain:hover,.qc-button_success.qc-button__is-plain:focus{
    color: $button_success_bg_color;
    background: $button_normal_bg_color;
    border-color: $button_success_bg_color; 
  }
  .qc-button_primary.qc-button__is-plain:hover,.qc-button_primary.qc-button__is-plain:focus{
    color: $button_primary_bg_color;
    background: $button_normal_bg_color;
    border-color: $button_primary_bg_color; 
  }
  .qc-button_warning.qc-button__is-plain:hover,.qc-button_warning.qc-button__is-plain:focus{
    color: $button_warning_bg_color;
    background: $button_normal_bg_color;
    border-color: $button_warning_bg_color; 
  }
  .qc-button_danger.qc-button__is-plain:hover,.qc-button_danger.qc-button__is-plain:focus{
    color: $button_danger_bg_color;
    background: $button_normal_bg_color;
    border-color: $button_danger_bg_color; 
  }
  .qc-button_info.qc-button__is-plain:hover,.qc-button_info.qc-button__is-plain:focus{
    color: $button_info_bg_color;
    background: $button_normal_bg_color;
    border-color: $button_info_bg_color; 
  }
  .qc-button__disabled{
    background: $button_disabled_bg_color;
    color: $button_disabled_word_color;
    cursor: not-allowed;
    border-color: $button_disabled_bg_color;
  }
  .qc-button__disabled:hover{
    background: $button_disabled_bg_color;
    color: $button_disabled_word_color;
    border-color: $button_disabled_bg_color;
  }
  .qc-button__is-plain.qc-button__disabled{
    color: $button_disabled_bg_color;
    cursor: not-allowed;
    background: $button_disabled_word_color;
  }
  .qc-button__is-plain.qc-button__disabled:hover{
    color: $button_disabled_bg_color;
    background: $button_disabled_word_color;
    border: 1px solid $button_disabled_bg_color;
  }
  .qc-button_text__disabled{
    color: $button_disabled_bg_color;
    border: none;
    cursor: not-allowed;
  }
  .qc-button_text__disabled:hover{
    color: $button_disabled_bg_color;
    border: none;
  }
  .qc_button_text__disable{
    color: $button_disabled_bg_color;
    cursor: not-allowed;
  }
  .qc-button_padding{
    padding-left: 0;
    padding-right: 0;
  }
  .qc-button_radius{
    border-radius: 4px;
  }
  .qc-button_icon{
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
    vertical-align: bottom;
  }
  .qc-button__small .qc-button_icon{
    font-size: 12px;
  }
  .qc-button_loading{
    position: relative;
    pointer-events: none;
    padding: 5px 15px;
  }
  .qc-button_loading:before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: hsla(0,0%,100%,.35);
  }
  .qc-button_loading_css{
    display:inline-block;
    width: 15px;
    height: 15px;
    line-height: 16px;
    border-radius: 100%;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    background: transparent !important;
  }
  .qc-button__large .qc-button_loading_css{
    width:17px;
    height: 17px;
  }
  .qc-button__small .qc-button_loading_css{
    width:12px;
    height: 12px;
  }
  .qc-button_loading__animated{
    animation: rotating 1s linear infinite;
    -webkit-animation: rotating 1s linear infinite;
  }
  .qc-button__large.qc-button_loading{
    padding: 9px 20px;
  }
  .qc-button__small.qc-button_loading{
    padding: 4px 20px;
  }
  .qc-button_verification{
    color: #666666;
    background: #e5e5e5;
    border-color: #e5e5e5; 
  }
  .qc-button_verification:hover,.qc-button_verification:focus{
    color: #666666;
    background: #e5e5e5;
    border-color: #e5e5e5; 
  }
  .qc-button_code-text{
    color: #e87070;
    font-style: normal;
  }
  @keyframes rotating{
    from{
      transform:rotate(0deg)
    }
    to{
      transform:rotate(360deg)
    }
  }
  @-webkit-keyframes rotating{
    from{
      transform:rotate(0deg)
    }
    to{
      transform:rotate(360deg)
    }
  }
</style>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: Boolean,
        default: false
      },
      iconOptions: Object,
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      btnWidth: {
        type: [Number, String],
        default: ''
      },
      borderRadius: Boolean,
      verificationCode: Boolean,
      verificationStart: Boolean,
      codeTime: {
        type: Number,
        default: 10
      }
    },
    data () {
      return {
        initCodeTime: this.codeTime,
        codeText: '获取验证码',
        timer: null,
        // codeBol: false,
        codeShow: false
      }
    },
    watch: {
      verificationStart (val) {
        let _this = this
        console.log(val)
        if (this.verificationCode && val) {
          // this.codeBol = true
          this.timer = setInterval(() => {
            this.codeShow = true
            _this.initCodeTime = _this.initCodeTime - 1
            _this.codeText = _this.initCodeTime
            if (_this.initCodeTime <= 0) {
              _this.$emit('time-end', true)
              clearInterval(_this.timer)
              _this.initCodeTime = this.codeTime
              _this.codeText = '获取验证码'
              // _this.codeBol = false
              _this.codeShow = false
            }
          }, 1000)
        }
      }
    },
    computed: {
      buttonWdith () {
        return this.btnWidth ? `${this.btnWidth}px` : ''
      },
      buttonPadding () {
        return this.btnWidth ? 'qc-button_padding' : ''
      },
      needRadius () {
        return this.borderRadius ? 'qc-button_radius' : ''
      },
      buttonType () {
        return this.type === 'default' ? '' : `qc-button_${this.type}`
      },
      isDisable () {
        return this.disabled ? this.type === 'text' ? 'qc-button_text__disabled' : 'qc-button__disabled' : ''
      },
      isPlain () {
        return this.type === 'text' ? '' : this.plain ? 'qc-button__is-plain' : ''
      },
      isIcon () {
        return this.iconOptions.family ? this.iconOptions.family : ''
      },
      isLoading () {
        return this.loading ? 'qc-button_loading' : ''
      },
      checkSize () {
        return (this.size === 'large' || this.size === 'small') ? `qc-button__${this.size}` : ''
      },
      verificationClass () {
        return this.verificationCode ? 'qc-button_verification' : ''
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
