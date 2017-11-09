<template>
  <div class="qc-scrollbar" :style="{maxHeight:height}">
    <div class="qc-scrollbar_warp">
      <slot></slot>
    </div>
    <transition name="fade" mode="out-in">
      <div class="qc-scrollbar_bar" v-show="hoverBol">
        <div class="qc-scrollba_thumb" @mousedown.prevent="move($event)"></div>
      </div>
    </transition>
  </div>
</template>
<style type="text/css">
  .qc-scrollbar{
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .qc-scrollbar_bar{
    position: absolute;
    width: 6px;
    right: 2px;
    bottom: 0;
    top: 0;
    z-index: 1;
    border-radius: 4px;
  }
  .qc-scrollba_thumb{
    position: absolute;
    display: block;
    width: 100%;
    height: 20%;
    cursor: pointer;
    border-radius: inherit;
    background-color: rgba(151,168,190,.3);
    opacity: 0;
  }
  .qc-scrollbar:hover .qc-scrollba_thumb {
    opacity: 1;
  }
</style>
<script>
  export default {
    name: 'qcScrollbar',
    props: {
      height: {
        type: String,
        default: '300px'
      }
    },
    data () {
      return {
        container: null,
        box: null,
        drag: null,
        moveSpeed: 0,
        hoverBol: false,
        keyFlag: false
      }
    },
    methods: {
      initDom () {
        this.container = this.$el.querySelector('.qc-scrollbar_warp')
        this.box = this.$el.querySelector('.qc-scrollbar_bar')
        this.drag = this.$el.querySelector('.qc-scrollba_thumb')
        this.$nextTick(() => {
          this.moveSpeed = (this.container.clientHeight - this.$el.clientHeight) / 10
        })
      },
      getTransformY (dom) {
        let transformValue = window.getComputedStyle(dom)['transform']
        let returnY = 0
        if (transformValue !== 'none') {
          let arr = transformValue.split(',')
          let replaceStr = arr[5].replace(')', '')
          returnY = Number(replaceStr)
        }
        return returnY
      },
      move (ev) {
        if (this.$el.clientHeight >= this.container.clientHeight) {
          return
        }
        let distance = ev.clientY - this.getTransformY(this.drag)
        document.onmousemove = event => {
          let top = event.clientY - distance
          if (top <= 0) {
            top = 0
          }
          if (top >= this.box.clientHeight - this.drag.clientHeight) {
            top = this.box.clientHeight - this.drag.clientHeight
          }
          let scale = -(top / (this.box.clientHeight - this.drag.clientHeight)) * (this.container.clientHeight - this.$el.clientHeight)
          this.drag.style.transform = `translate3d(0, ${top}px, 0)`
          this.container.style.transform = `translate3d(0, ${scale}px, 0)`
        }
        document.onmouseup = () => {
          document.onmousemove = null
        }
      },
      handleFirefox (ev) {
        ev.preventDefault()
        if (ev.detail < 0) {
          let top = this.getTransformY(this.container) + this.moveSpeed
          if (top >= 0) {
            top = 0
          }
          if (top <= -(this.container.clientHeight - this.$el.clientHeight)) {
            top = -(this.container.clientHeight - this.$el.clientHeight)
          }
          let scale = -(top / (this.container.clientHeight - this.$el.clientHeight)) * (this.box.clientHeight - this.drag.clientHeight)
          this.container.style.transform = `translate3d(0, ${top}px, 0)`
          this.drag.style.transform = `translate3d(0, ${scale}px, 0)`
        }
        if (ev.detail > 0) {
          let top = this.getTransformY(this.container) - this.moveSpeed
          if (top >= 0) {
            top = 0
          }
          if (top <= -(this.container.clientHeight - this.$el.clientHeight)) {
            top = -(this.container.clientHeight - this.$el.clientHeight)
          }
          let scale = -(top / (this.container.clientHeight - this.$el.clientHeight)) * (this.box.clientHeight - this.drag.clientHeight)
          this.container.style.transform = `translate3d(0, ${top}px, 0)`
          this.drag.style.transform = `translate3d(0, ${scale}px, 0)`
        }
      },
      handelKeydownPrev (speed) {
        if (!this.keyFlag) return
        let top = speed
        if (top >= 0) {
          top = 0
        }
        if (top <= -(this.container.clientHeight - this.$el.clientHeight)) {
          top = -(this.container.clientHeight - this.$el.clientHeight)
        }
        let scale = -(top / (this.container.clientHeight - this.$el.clientHeight)) * (this.box.clientHeight - this.drag.clientHeight)
        this.container.style.transform = `translate3d(0, ${top}px, 0)`
        this.drag.style.transform = `translate3d(0, ${scale}px, 0)`
      },
      handelKeydownNext (speed) {
        if (!this.keyFlag) return
        let top = speed
        if (top >= 0) {
          top = 0
        }
        if (top <= -(this.container.clientHeight - this.$el.clientHeight)) {
          top = -(this.container.clientHeight - this.$el.clientHeight)
        }
        let scale = -(top / (this.container.clientHeight - this.$el.clientHeight)) * (this.box.clientHeight - this.drag.clientHeight)
        this.container.style.transform = `translate3d(0, ${top}px, 0)`
        this.drag.style.transform = `translate3d(0, ${scale}px, 0)`
      },
      handelNoFirefox (ev) {
        let e = ev || window.event
        if (e.preventDefault) {
          e.preventDefault()
        } else {
          e.returnValue = false
        }
        if (e.wheelDelta > 0) {
          let top = this.getTransformY(this.container) + this.moveSpeed
          if (top >= 0) {
            top = 0
          }
          if (top <= -(this.container.clientHeight - this.$el.clientHeight)) {
            top = -(this.container.clientHeight - this.$el.clientHeight)
          }
          let scale = -(top / (this.container.clientHeight - this.$el.clientHeight)) * (this.box.clientHeight - this.drag.clientHeight)
          this.container.style.transform = `translate3d(0, ${top}px, 0)`
          this.drag.style.transform = `translate3d(0, ${scale}px, 0)`
        }
        if (e.wheelDelta < 0) {
          let top = this.getTransformY(this.container) - this.moveSpeed
          if (top >= 0) {
            top = 0
          }
          if (top <= -(this.container.clientHeight - this.$el.clientHeight)) {
            top = -(this.container.clientHeight - this.$el.clientHeight)
          }
          let scale = -(top / (this.container.clientHeight - this.$el.clientHeight)) * (this.box.clientHeight - this.drag.clientHeight)
          this.container.style.transform = `translate3d(0, ${top}px, 0)`
          this.drag.style.transform = `translate3d(0, ${scale}px, 0)`
        }
      },
      checkNavigator () {
        let str = window.navigator.userAgent.toLowerCase()
        if (str.indexOf('firefox') !== -1) {
          this.$el.addEventListener('DOMMouseScroll', this.handleFirefox, false)
        } else {
          this.$el.addEventListener('mousewheel', this.handelNoFirefox, false)
        }
        this.$el.addEventListener('keydown', this.handelKeydown, false)
      },
      removeEvent () {
        let str = window.navigator.userAgent.toLowerCase()
        if (str.indexOf('firefox') !== -1) {
          this.$el.removeEventListener('DOMMouseScroll', this.handleFirefox, false)
        } else {
          this.$el.removeEventListener('mousewheel', this.handelNoFirefox, false)
        }
        this.$el.removeEventListener('keydown', this.handelKeydown, false)
      },
      reductState () {
        this.container.style.transform = `translate3d(0, 0, 0)`
        this.drag.style.transform = `translate3d(0, 0, 0)`
      },
      start () {
        let height = parseInt(this.height.replace('px', ''))
        this.$nextTick(() => {
          if (this.container.clientHeight > height) {
            this.reductState()
            this.removeEvent()
            this.checkNavigator()
            this.keyFlag = true
            this.hoverBol = true
          } else {
            this.reductState()
            this.removeEvent()
            this.keyFlag = false
            this.hoverBol = false
          }
        })
      }
    }
  }
</script>
