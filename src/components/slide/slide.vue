<template>
  <div class="qc-slide" :style="{width: wrapWidth, height: wrapHeight}"  @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">
    <div class="qc-slide_carousel">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'vertical'
      },
      interval: {
        type: Number,
        default: 3000
      },
      list: {
        type: Number,
        default: 0
      },
      isAuto: {
        type: Boolean,
        default: true
      },
      duration: {
        type: Number,
        default: 300
      }
    },
    data () {
      return {
        distance: null,
        container: null,
        itemList: null,
        currentIndex: 0,
        timer: null,
        moveTimer: null,
        checkNum: null,
        wrapWidth: null,
        wrapHeight: null,
        clickFlag: true
      }
    },
    methods: {
      getMovedistance () {
        if (this.$el.querySelector('.qc-slide_carousel_item')) {
          this.distance = this.direction === 'vertical' ? this.$el.querySelector('.qc-slide_carousel_item').offsetHeight : this.$el.querySelector('.qc-slide_carousel_item').offsetWidth
        }
      },
      initDom () {
        this.itemList = this.$el.querySelectorAll('.qc-slide_carousel_item')
        this.container = this.$el.querySelector('.qc-slide_carousel')
      },
      addDomList () {
        for (let i = 0; i < this.list; i++) {
          let cloneDom = Array.from(this.itemList)[i].cloneNode(true)
          cloneDom.className += ' clone'
          this.container.appendChild(cloneDom)
        }
      },
      initWidth () {
        this.wrapWidth = this.distance * (this.itemList.length + this.list) + 'px'
      },
      calcHeight () {
        this.wrapHeight = this.direction === 'vertical' ? (this.distance * this.list + 'px') : this.itemList[0].offsetHeight + 'px'
      },
      animate (json, fn) {
        clearInterval(this.moveTimer)
        let _duration = this.duration >= 1000 ? 50 : this.duration / 30
        this.moveTimer = setInterval(() => {
          let flag = true
          for (let attr in json) {
            let current = 0
            current = parseInt(this.getStyle(attr))
            let step = (json[attr] - current) / _duration
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            this.container.style[attr] = (current + step) + 'px'
            if (current !== json[attr]) {
              flag = false
            } else {
              flag = true
            }
          }
          if (flag) {
            clearInterval(this.moveTimer)
            if (fn) {
              fn()
            }
          }
        }, 20)
      },
      getStyle (attr) {
        return window.getComputedStyle ? window.getComputedStyle(this.container)[attr] : this.container.currentStyle[attr]
      },
      next () {
        this.currentIndex = this.currentIndex + 1
        if (this.currentIndex === this.itemList.length + 1) {
          this.currentIndex = 0
        }
        this.move(this.currentIndex)
      },
      prev () {
        this.currentIndex = this.currentIndex - 1
        let initDistance = -(this.distance * this.itemList.length)
        if (this.currentIndex === -1) {
          this.direction === 'vertical' ? this.container.style.top = `${initDistance}px` : this.container.style.left = `${initDistance}px`
          this.currentIndex = this.itemList.length - 1
        }
        this.move(this.currentIndex)
      },
      handelNext () {
        if (this.itemList.length <= this.list) {
          return
        }
        if (this.clickFlag) {
          this.next()
          this.clickFlag = false
        }
      },
      handelPrev () {
        if (this.itemList.length <= this.list) {
          return
        }
        if (this.clickFlag) {
          this.prev()
          this.clickFlag = false
        }
      },
      goto (index) {
        if (this.itemList.length <= this.list) {
          return
        }
        this.currentIndex = parseInt(index)
        this.move(this.currentIndex)
      },
      move (index) {
        let moveDistance = -(this.distance * index)
        let moveAttr = this.direction === 'vertical' ? 'top' : 'left'
        if (index === this.itemList.length) {
          this.currentIndex = 0
        }
        this.animate({
          [moveAttr]: moveDistance
        }, () => {
          this.clickFlag = true
          if (index === this.itemList.length) {
            this.direction === 'vertical' ? this.container.style.top = 0 : this.container.style.left = 0
          }
        })
      },
      autoPlay () {
        if (this.itemList.length <= this.list) {
          return
        }
        if (this.isAuto) {
          this.timer = setInterval(() => {
            this.next()
          }, this.interval)
        }
      },
      handleMouseEnter () {
        this.stop()
      },
      handleMouseLeave () {
        this.autoPlay()
      },
      stop () {
        clearInterval(this.timer)
      }
    },
    watch: {
      currentIndex (val) {
        this.$emit('slideValue', val)
      }
    },
    mounted () {
      if (!this.list) {
        throw new Error('the list of options is undefined')
      }
      this.$nextTick(() => {
        this.getMovedistance()
        this.initDom()
        if (this.direction === 'horizontal') {
          this.initWidth()
        }
        this.calcHeight()
        if (this.itemList.length > this.list) {
          this.addDomList()
          this.autoPlay()
        }
      })
    }
  }
</script>
<style scoped>
  .qc-slide{
    position: relative;
    overflow: hidden;
  }
  .qc-slide_carousel{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
</style>

