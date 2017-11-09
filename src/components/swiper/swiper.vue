<template>
  <div class="qc-swiper" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">
    <div class="qc-swiper_carousel" :style="{height: calcHeight}">
      <slot></slot>
    </div>
  <template v-if="indicator">   
    <slot name="indicators"></slot>
  </template>
  <template v-if="!indicator&&indicatorLength>1">
    <ul class="qc-swiper_indicators">
      <li class="qc-swiper_indicator" v-for="(item,index) in indicatorLength">
        <a class="qc-swiper_button" :class="{'qc-swiper_button__active': index === currentNum}" @mouseenter="handleIndicatorMove(index)" @click.stop="goto(index)"></a>
      </li>
    </ul>
    <transition name="qc-swiper_arrow_left">
      <span class='qc-swiper_prev' v-if="arrow !== 'never'" v-show="arrow === 'always' || hover" @click.stop="pre">&lt;</span>
    </transition>
    <transition name="qc-swiper_arrow_right">
      <span class='qc-swiper_next' v-if="arrow !== 'never'" v-show="arrow === 'always' || hover" @click.stop="next">&gt;</span>
    </transition>
  </template>
  </div>
</template>
<script>
  export default {
    props: {
      height: {
        type: Number,
        default: 300
      },
      ratio: {
        type: Number
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      loop: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 3000
      },
      duration: {
        type: Number,
        default: 500
      },
      value: {
        type: [Number, String],
        default: 0
      },
      fade: {
        type: Boolean,
        default: false
      },
      indicator: {
        type: Boolean,
        default: false
      },
      trigger: {
        type: String,
        default: 'click'
      },
      arrow: {
        type: String,
        default: 'hover'
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.indicatorLength = this.$children.length
        this.createSwiper(this.currentInner)
      })
      this.childrenLength = this.$children.length
      this.getOffsetWidth()
      this.onEvents()
      this.$watch('childrenLength', () => {
        this.createSwiper(this.currentInner)
      })
    },
    destroyed () {
      this.offEvents()
    },
    created () {
      this.currentInner = this.value
    },
    data () {
      return {
        currentInner: 0,
        childrenLength: 0,
        offsetWidth: 0,
        indicatorLength: 0,
        eventHandlers: {},
        prevNum: 0,
        currentNum: 0,
        widthNum: 0,
        heightNum: 0,
        distanceNum: 0,
        offsetNum: 0,
        itemNums: null,
        container: null,
        count: 0,
        realCount: 0,
        positionArray: [],
        checkBol: true,
        checkmove: null,
        loopSymbol: this.loop,
        timer: null,
        resizeHandler: null,
        transitionEndHandler: null,
        newItem: '.qc-swiper_carousel_item',
        hover: false
      }
    },
    methods: {
      onResize () {
        this.getOffsetWidth()
      },
      offEvents () {
        window.removeEventListener('resize', this.onResize)
      },
      onEvents () {
        window.addEventListener('resize', this.onResize)
      },
      getOffsetWidth () {
        this.offsetWidth = this.$el.offsetWidth
      },
      goto (index) {
        if (this.trigger === 'click') {
          this.go(index, {
            noFirstItem: false
          })
        }
      },
      handleIndicatorMove (index) {
        if (this.trigger !== 'click') {
          this.go(index, {
            noFirstItem: false
          })
        }
      },
      createSwiper (idx) {
        let me = this
        // me.destroy()
        this.container = this.$el.querySelector('.qc-swiper_carousel')
        let $item = this.container.querySelector(`${this.newItem}-clone`)
        if ($item) {
          this.destroy()
        }
        this.itemNums = [...this.container.querySelectorAll('.qc-swiper_carousel_item')]
        if (this.fade) {
          this.loopSymbol = false
          this.itemNums.forEach((item, idx) => {
            (this.fade && idx !== 0) && (item.style.opacity = 0)
          })
        }
        this.count = this.itemNums.length
        this.realCount = this.itemNums.length
        if (!this.count) {
          return
        }
        this._init()
        this._auto()
        this._bind()
        this._onResize()
        this.on('swiped', (prev, index) => {
          me.currentInner = index
        })
        if (idx >= 0) {
          this.go(idx, {
            duration: 'none',
            noFirstItem: true
          })
        }
      },
      _auto () {
        let me = this
        me.stop()
        if (me.interval > 0) {
          me.timer = setTimeout(() => {
            me.next()
          }, me.interval)
        }
      },
      updateItemWidth () {
        this.widthNum = this.$el.offsetWidth || document.documentElement.offsetWidth
      },
      updateItemHeight () { // 拿到图片高度
        this.heightNum = this.container.offsetHeight
      },
      updateMoveDistance () { // 通过切换方向获取对应切换一屏的距离
        this.distanceNum = this.direction === 'horizontal' ? this.widthNum : this.heightNum
      },
      stop () {
        this.timer && clearTimeout(this.timer)
      },
      _loop () {
        return this.loopSymbol && this.realCount >= 3
      },
      _initPosition () {
        let me = this
        for (let i = 0; i < this.realCount; i++) {
          me.positionArray.push(i)
        }
      },
      _onResize () {
        let me = this
        this.resizeHandler = () => {
          setTimeout(() => {
            me.updateItemHeight()
            me.updateItemWidth()
            me.updateMoveDistance()
            me._setOffset()
            me._setTransform()
          }, 100)
        }
        window.addEventListener('orientationchange', this.resizeHandler, false)
      },
      _init () {
        if (this.loopSymbol) {
          this._loopTwoItems()
        }
        this.updateItemHeight()
        this.updateItemWidth()
        this.updateMoveDistance()
        this._initPosition()
        this._setOffset()
        this._setTransform()
        if (this._loop()) {
          this._loopRender()
        }
      },
      _movePosition (position) {
        if (position > 0) {
          let firstIndex = this.positionArray.splice(0, 1)
          this.positionArray.push(firstIndex[0])
        } else if (position < 0) {
          let lastIndex = this.positionArray.pop()
          this.positionArray.unshift(lastIndex)
        }
      },
      _setOffset () {
        let me = this
        let index = me.positionArray.indexOf(me.currentNum)
        me.offsetNum = []
        Array.from(me.itemNums).forEach(($item, key) => {
          me.offsetNum.push((key - index) * me.distanceNum)
        })
      },
      _setTransition (duration) {
        let myDuration = duration || (this.duration || 'none')
        let transition = duration === 'none' ? 'none' : (this.fade ? 'opacity ' : 'transform ') + myDuration + 'ms'
        Array.from(this.itemNums).forEach(($item, key) => {
          $item.style.webkitTransition = transition
          $item.style.transition = transition
        })
      },
      _setTransform (offset) {
        let me = this
        let myOffset = offset || 0
        Array.from(me.itemNums).forEach(($item, key) => {
          let transformCallback = () => {
            let distance = me.offsetNum[key] + myOffset
            let transform
            me.direction === 'vertical' ? transform = `translate3d(0, ${distance}px, 0)` : transform = `translate3d(${distance}px, 0, 0)`
            $item.style.webkitTransform = transform
            $item.style.transform = transform
          }
          // opacity 要先改变
          me.fade && ($item.style.opacity = 0)
          if ((me.fade && key === me.currentNum) || !me.fade) {
            transformCallback()
          } else {
            setTimeout(transformCallback, me.duration)
          }
        })
        if (this.fade) {
          this.itemNums[this.currentNum].style.opacity = 1
        }
      },
      _bind () {
        let me = this
        let myTimer
        let callback = () => {
          let cb = me.eventHandlers.swiped
          cb && cb.apply(me, [me.prevNum, me.currentNum])
          me._auto()
          me._loopRender()
        }
        me.transitionEndHandler = (e) => {
          myTimer && clearTimeout(myTimer)
          myTimer = setTimeout(callback, 10)
        }
        me.itemNums.forEach(($item) => {
          $item.addEventListener('webkitTransitionEnd', me.transitionEndHandler, false)
        })
        me.itemNums.forEach(($item) => {
          $item.addEventListener('transitionend', me.transitionEndHandler, false)
        })
        me.itemNums.forEach(($item) => {
          $item.addEventListener('mozTransitonEnd ', me.transitionEndHandler, false)
        })
      },
      _loopTwoItems () {
        if (this.count === 2) {
          let div = document.createElement('div')
          let $item
          for (let i = this.itemNums.length - 1; i >= 0; i--) {
            div.innerHTML = this.itemNums[i].outerHTML
            $item = div.querySelector(this.newItem)
            $item.classList.add(`${this.newItem.replace('.', '')}-clone`)
            this.container.appendChild($item)
          }
          this.realCount = 4
          this.checkmove = this.count + 1
        } else {
          this.checkmove = this.count
        }
      },
      _loopRender () {
        let me = this
        if (me._loop() && !me.checkBol) {
          if (me.offsetNum[me.offsetNum.length - 1] === 0) {
            me.container.appendChild(me.itemNums[0])
            me._loopEvent(1)
          } else if (me.offsetNum[0] === 0) {
            me.container.insertBefore(me.itemNums[me.itemNums.length - 1], me.container.firstChild)
            me._loopEvent(-1)
          }
        }
      },
      _loopEvent (num) {
        let me = this
        me._itemDestoy()
        me.itemNums = me.container.querySelectorAll(me.newItem)
        me.itemNums = [...me.itemNums]
        me.itemNums[1] && me.itemNums[1].addEventListener('webkitTransitionEnd', me.transitionEndHandler, false)
        me._movePosition(num)
        me._setOffset()
        me._setTransform()
      },
      getDistance (distance) {
        if (this._loop()) {
          return distance
        } else {
          if (distance > 0 && this.currentNum === 0) {
            return 0
          } else if (distance < 0 && this.currentNum === this.realCount - 1) {
            return 0
          } else {
            return distance
          }
        }
      },
      _moveIndex (num, bol) {
        if (!bol) {
          this.checkBol = false
        }
        if (num !== 0) {
          this.prevNum = this.currentNum
          this.currentNum += this.realCount
          this.currentNum += num
          this.currentNum %= this.realCount
        }
      },
      go (index, options) { // 需要优化的函数块，if太繁琐，目前想不出解决方案
        let me = this
        me.stop()
        index = index || 0
        index += me.realCount
        index = index % me.realCount
        index = me.positionArray.indexOf(index) - me.positionArray.indexOf(me.currentNum)
        if (me.fade || !me.loopSymbol || me.checkBol || (Math.abs(index) < me.checkmove - 1)) {
          me._moveIndex(index, options.noFirstItem)
          me._setOffset()
          me._setTransition(options && options.duration)
          me._setTransform()
          me._auto()
        }
        //console.log(!me.fade && me.loopSymbol && me.checkBol)
        if (!me.fade && me.loopSymbol && me.checkBol && index === (me.checkmove - 1)) {
          //alert()
          me.container.appendChild(me.itemNums[0])
          me._loopEvent(1)
        } else if (!me.fade && me.loopSymbol && me.checkBol && index === 0) {
          me.container.insertBefore(me.itemNums[me.itemNums.length - 1], me.container.firstChild)
          me._loopEvent(-1)
        }
      },
      next () {
        this.move(1)
      },
      pre () {
        this.move(-1)
      },
      move (num) {
        this.go(this.currentNum + num, {
          noFirstItem: false
        })
      },
      on (event, callback) {
        if (this.eventHandlers[event]) {
          console.error(`${event} is already register`)
        }
        if (typeof callback !== 'function') {
          console.error('callback is not a function')
        }
        this.eventHandlers[event] = callback
      },
      _itemDestoy () {
        this.itemNums.length && Array.from(this.itemNums).forEach(item => {
          item.removeEventListener('webkitTransitionEnd', this.transitionEndHandler, false)
        })
      },
      destroy () {
        this.stop()
        this.currentNum = 0
        this._setTransform(0)
        window.removeEventListener('orientationchange', this.resizeHandler, false)
        this._itemDestoy()
        if (this.loopSymbol && this.count === 2) {
          let $item = this.container.querySelector(`${this.newItem}-clone`)
          $item && this.container.removeChild($item)
          $item = this.container.querySelector(`${this.newItem}-clone`)
          $item && this.container.removeChild($item)
        }
      },
      handleMouseEnter () {
        this.hover = true
        this.stop()
      },
      handleMouseLeave () {
        this.hover = false
        this._auto()
      }
    },
    watch: {
      currentNum (value) {
        this.$emit('swiper-value', value)
      },
      value (val) {
        this.currentInner = parseInt(val)
      }
    },
    computed: {
      calcHeight () {
        let height = 'auto'
        if (typeof this.height === 'number') {
          height = this.height + 'px'
        } else if (this.height !== 'auto') {
          height = this.height
        }
        if (this.ratio && this.offsetWidth) {
          height = (this.offsetWidth * this.ratio) + 'px'
        }
        return height
      }
    }
  }
</script>

<style>
  .qc-swiper{
    position: relative;
    height: 100%;
  }
  .qc-swiper .qc-swiper_carousel{
    position: relative;
    overflow: hidden;
  }   
  .qc-swiper_indicators {
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .qc-swiper_indicator {
    display: inline-block;
    /*padding: 0 10px;*/
    color: #fff;
  }
  .qc-swiper_button{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 10px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0.5;
  }
  .qc-swiper_button:hover{
    background: #ffffff;
    opacity: 1;
  }
  .qc-swiper_button__active{
    width: 24px;
    height: 12px;
    border-radius: 6px;
    opacity: 1;
  }
  .qc-swiper_prev{
    font-size: 60px;
    color: #fff;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
    cursor: pointer;
  }
  .qc-swiper_next{
    font-size: 60px;
    color: #fff;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
    cursor: pointer;
  }
  .qc-swiper_arrow_left-enter,
  .qc-swiper_arrow_left-leave-active {
    /*transform: translateY(-50%) translateX(0px);*/
    opacity: 0;
  }

  .qc-swiper_arrow_right-enter,
  .qc-swiper_arrow_right-leave-active {
    /*transform: translateY(-50%) translateX(10px);*/
    opacity: 0;
  }
</style>
