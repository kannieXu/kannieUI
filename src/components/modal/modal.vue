<template>
  <div class="qc-modal">
    <transition name="fade" mode="out-in">
      <div class="qc-modal_mark" v-show="isShow"></div>
    </transition>
    <transition name="qc-ease">
      <div class="qc-modal_wrap" v-show="isShow" @click="handelWrapClick">
        <div class="qc-modal_inner" :style="{width: getWidth}">
          <div class="qc-modal_header" v-show="title.length||closed">
            <div class="qc-modal_close">
              <i class="qc-modal_close_inner" v-if="closed" @click="handelClose"></i>
            </div>
            <slot name= "header">
              <div class="qc-modal_header_title" v-html="title"></div>
            </slot>
          </div>
          <div class="qc-modal_content">
            <slot name="content"><div class="qc-modal_content_slot" v-html="content"></div></slot>
          </div>
          <div class="qc-modal_footer" v-show="showFooter" :style="{textAlign: buttonPosition}">
            <slot name="footer">
              <qc-button v-if="showConfirm"
                @click = "handelConfirm"
                style = "margin-right: 20px;" 
                :disabled = "disabledConfirm" 
                :btn-width="confirmStyle.width" 
                :size = "confirmStyle.size"
                :plain = "confirmStyle.plain"
                :type = "confirmStyle.type"
                :border-radius = "confirmStyle.radius"
               >{{confirmText}}</qc-button>
              <qc-button v-if="showCancel"
                @click = "handelCancel"
                :btn-width="cancelStyle.width" 
                :size = "cancelStyle.size"
                :plain = "cancelStyle.plain"
                :type = "cancelStyle.type"
                :border-radius = "cancelStyle.radius"
              >{{cancelText}}</qc-button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style scoped>
  .qc-modal_mark{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    z-index: 1000;
    background-color: rgba(55,55,55,.6);
  }
  .qc-modal_wrap{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
    text-align: center;
  }
  .qc-modal_wrap:after{
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
  .qc-modal_inner{
    position: relative;
    display: inline-block;
    width: auto;
    text-align: left;
    vertical-align: middle;
    background-color: #fff;
  }
  .qc-modal_header{
    border-bottom: 1px solid #e5e5e5;
    background-color: #f9f9f9;
    padding: 14px 16px;
    line-height: 1;
    position: relative;
  }
  .qc-modal_close{
    position: absolute;
    right: 12px;
    top: 14px;
  }
  .qc-modal_close_inner{
    display: inline-block;
    position: relative;
    top: -4px;
    width: 14px;
    height: 14px;
    margin-left: 6px;
    cursor: pointer;
    overflow: hidden;
  }
  .qc-modal_header_title{
    font-size: 14px;
    color: #333333;
  }
  .qc-modal_content{
    padding: 16px;
    line-height: 1.5;
  }
  .qc-modal_content_slot{
    font-size: 14px;
    color: #666666;
  }
  .qc-modal_footer{
    //background-color: #f8f8f8;
    padding: 20px 18px;
  }
  .qc-modal_close_inner:after,.qc-modal_close_inner:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    margin-top: -2px;
    background-color: #666;
  }
  .qc-modal_close_inner:before{
    transform: rotate(45deg)
  }
  .qc-modal_close_inner:after{
    transform: rotate(-45deg)
  }
  .qc-ease-enter-active,.qc-ease-leave-active{
    animation-duration: .5s;
    animation-fill-mode: both;
  }
  .qc-ease-enter-active{
    animation-name:fadeInDown;
  }
  .qc-ease-leave-active{
    animation-name:fadeOutUp;
  }
  @-webkit-keyframes fadeInDown{
    from {
      opacity: 0;
      transform: translate3d(0, -40%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -40%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @-webkit-keyframes fadeOutUp{
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -40%, 0);
    }
  }
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -40%, 0);
    }
  }
</style>
<script>
  import {qcButton} from '../button'
  export default {
    name: 'qcModal',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      width: {
        type: [Number, String],
        default: 520
      },
      title: {
        type: String,
        default: ''
      },
      closed: {
        type: Boolean,
        default: false
      },
      isMarkClose: {
        type: Boolean,
        default: false
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmButton: {
        type: Object,
        default () {
          return {}
        }
      },
      cancelButton: {
        type: Object,
        default () {
          return {}
        }
      },
      scrollable: {
        type: Boolean,
        default: false
      },
      content: {
        type: String,
        default: ''
      },
      buttonPosition: {
        type: String,
        default: 'right'
      },
      confirm: {
        type: Function,
        default () {}
      },
      showConfirm: {
        type: Boolean,
        default: true
      },
      cancel: {
        type: Function,
        default () {}
      },
      showCancel: {
        type: Boolean,
        default: true
      },
      disabledConfirm: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShow: this.value,
        scrollBarWidth: null,
        isScroll: false
      }
    },
    watch: {
      value (val) {
        this.isShow = val
        if (val) {
          if (!this.scrollable) {
            this.addScrollBar()
          }
        }
      },
      isShow (val) {
        this.$emit('input', val)
        if (!val) {
          if (!this.scrollable) {
            this.resetScrollBar()
          }
        }
      },
      scrollable (val) {
        if (!val) {
          this.addScrollBar()
        } else {
          this.resetScrollBar()
        }
      }
    },
    computed: {
      cancelStyle () {
        return Object.assign({}, {
          type: 'primary',
          size: 'normal',
          width: '',
          plain: true,
          radius: false
        }, this.cancelButton)
      },
      confirmStyle () {
        return Object.assign({}, {
          type: 'primary',
          size: 'normal',
          width: '',
          plain: false,
          radius: false
        }, this.confirmButton)
      },
      getWidth () {
        return `${this.width}px`
      },
      showFooter () {
        if (!this.showConfirm && !this.showCancel) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      handelClose () {
        this.isShow = false
        this.$emit('close-modal', this.isShow)
      },
      handelConfirm (event) {
        this.isShow = false
        this.$emit('confirm-callback')
        this.confirm()
      },
      handelCancel (event) {
        this.isShow = false
        this.$emit('cancel-callback')
        this.cancel()
      },
      handelMark () {
        if (!this.isMarkClose) return false
        this.isShow = false
        this.$emit('close-modal', this.isShow)
      },
      handelWrapClick (event) {
        let className = event.target.getAttribute('class')
        if (className && className.indexOf('qc-modal_wrap') > -1) {
          this.handelMark()
        }
      },
      checkScrollBar () {
        let fullWidth = window.innerWidth
        if (!fullWidth) {
          fullWidth = document.documentElement.getBoundingClientRect().right - Math.abs(document.documentElement.getBoundingClientRect().left)
        }
        this.isScroll = document.body.clientWidth < fullWidth
        if (this.isScroll && !this.scrollBarWidth) {
          this.getScrollBar()
        }
      },
      getScrollBar () {
        let scrollBarDom = document.createElement('div')
        scrollBarDom.style.cssText = 'overflow:scroll;width:100px;height:100px;'
        document.body.appendChild(scrollBarDom)
        if (scrollBarDom) {
          this.scrollBarWidth = scrollBarDom.offsetWidth - scrollBarDom.clientWidth
        }
        document.body.removeChild(scrollBarDom)
      },
      setScrollBar () {
        if (this.isScroll && this.scrollBarWidth) {
          document.body.style.paddingRight = `${this.scrollBarWidth}px`
        }
      },
      resetScrollBar () {
        document.body.style.paddingRight = ''
        document.body.style.overflow = ''
      },
      addScrollBar () {
        this.checkScrollBar()
        this.setScrollBar()
        document.body.style.overflow = 'hidden'
      }
    },
    components: {
      qcButton
    },
    mounted () {
      if (this.value) {
        if (!this.scrollable) {
          this.addScrollBar()
        }
      }
    },
    beforeDestroy () {
      this.resetScrollBar()
    }
  }
</script>
