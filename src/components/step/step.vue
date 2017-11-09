<template>
  <div 
    class="qc-step"
    :style="[style,lastStyle]"
    :class="['qc-step_' + $parent.direction]"
    ref = 'step'
  >
    <div
      class="qc-step_head"
      :class = "['qc-step_' + status, {'qc-step__text': !icon.iconClass}]"
    >
      <div
        class="qc-step_line"
        :style = "isLast ? '' : {marginRight: $parent.stepOffset + 'px'}"
        :class = "{'qc-step_icon': icon.iconClass}"
      >
        <i class="qc-step_line_inner" :style="lineStyle"></i>
      </div>
      <span class="qc-step_icon">
        <slot
          v-if = "status === 'wait'"
          name = 'icon'
        >
          <i v-if='icon.iconClass' :class="[icon.iconClass]" :style="{fontFamily: icon.family}"></i>
          <div v-else>{{index + 1}}</div>
        </slot>
        <div class="qc-step_status" v-else>
          <div class="qc-step__error" v-if="status==='error'">
            <i
              :class = "['qc-step_icon__' + status]"
            ></i>
          </div>
          <i
            v-else
            :class = "['qc-step_icon__' + status]"
          ></i>
        </div>
      </span>
    </div>
    <div class="qc-step_container" :style="{marginLeft: mainOffset}">
      <div class="qc-step_title" :class="['qc-step_title__' + status]">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="qc-step_description" :class="['qc-step_description__' + status]">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>
<style>
  .qc-step{
    position: relative;
    vertical-align: top;
    text-align: left;
  }
  .qc-step_head{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    line-height: 28px;
    vertical-align: top;
    background-color: #e5e5e5
  }
  .qc-step_vertical .qc-step_head{
    display: inline-block;
  }
  .qc-step_line{
    position: absolute;
    border-color: inherit;
    background-color: #e5e5e5;
  }
  .qc-step_line_inner{
    display: block;
    border-style: solid;
    border-color: inherit;
    box-sizing: border-box;
    height: 0;
    width: 0;
  }
  .qc-step_icon{
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    line-height: 28px;
  }
  .qc-step_container{
    white-space: normal;
    padding-right: 10px;
    text-align: left;
  }
  .qc-step:last-child .qc-step_container{
    padding-right: 0;
  }
  .qc-step:last-child .qc-step_line{
    display: none
  }
  .qc-step_vertical .qc-step_container{
    display: inline-block;
    padding-left: 10px;
  }
  .qc-step_title{
    font-size: 14px;
    line-height: 32px;
    display: inline-block;
    color: #999999;
  }
  .qc-step_description{
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
  .qc-step_horizontal{
    display: inline-block;
  }
  .qc-step__text{
    font-size: 14px;
    border-width: 2px;
    border-style: solid;
    border-color: #e5e5e5;
    box-sizing: content-box;
  }
  .qc-step__text.qc-step_process{
    color: #ffffff;
  }
  .qc-step_horizontal .qc-step_line{
    top: 12px;
    height: 8px;
    left: 28px;
    right: -4px;
    z-index: 2;
    border-radius: 4px;
  }
  .qc-step_vertical .qc-step_line{
    top: 28px;
    width: 8px;
    left: 12px;
    bottom: -4px;
    border-radius: 4px;
    z-index: 2;
  }
  .qc-step_status{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
  }
  .qc-step_process .qc-step_status{
    background-color: #125fa0;
    border-color: #125fa0;
  }
  .qc-step_icon__process{
    width: 100%;
    height: 100%;
  }
  .qc-step_finish .qc-step_line{
    border-color: #125fa0;
  }
  .qc-step_horizontal .qc-step_finish .qc-step_line, .qc-step_horizontal .qc-step_error .qc-step_line{
    left: 25px;
    right: -7px;
  }
  .qc-step_vertical .qc-step_finish .qc-step_line, .qc-step_vertical .qc-step_error .qc-step_line{
    top: 25px;
    bottom: -7px;
  }
  .qc-step_finish .qc-step_status{
    background-color: #125fa0;
    border-color: #125fa0;
  }
  .qc-step_error .qc-step_line{
    border-color: #e87070;
  }
  .qc-step_error .qc-step_status{
    background-color: #e87070;
    border-color: #e87070;
  }
  .qc-step__error{
    display: inline-block;
    position: relative;
    width: 12px;
    height: 12px;
    overflow: hidden;
  }
  .qc-step__error:after,.qc-step__error:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    margin-top: -2px;
    background-color: #ffffff;
  }
  .qc-step__error:before{
    transform: rotate(45deg)
  }
  .qc-step__error:after{
    transform: rotate(-45deg)
  }
  .qc-step_icon__process:after{
    content: '';
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAmElEQVRYR+2V0Q2CMBgG75sAnMBVGIERGEEncQTdgBUcxRFggp+Q0MQQqeCDffn6ek17uaatKDxUeH8s4AIu4AIusFkgIjrgtjzVV0mP92c7IlrgnuEN0G/xtFZOYACqZeIg6bQSeAHnX/lRgVFSnRE4zPcIzAlT9k7ScyWQ+Cx2+XBEWf5V4F/ftK+hC7iAC7iAC7hA8QITDNo8Ie1iCQoAAAAASUVORK5CYII=');
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 2px;
    height: 0;
    width: 100%;
    height: 100%;
  }
  .qc-step_icon__finish{
    display: inline-block;
    position: relative;
    width: 14px;
    height: 14px;
    top: -2px;
    left: 0;
    box-sizing: border-box;
  }
  .qc-step_icon__finish:after{
    content: "";
    display: table;
    width: 6px;
    height: 12px;
    position: absolute;
    top: 0;
    left: 4px;
    border: 2px solid #ffffff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(1);
    box-sizing: border-box;
  }
  .qc-step_title__finish{
    color: #125fa0;
  }
  .qc-step_title__error{
    color: #e87070;
  }
</style>
<script>
  export default {
    name: 'qcStep',
    props: {
      title: {
        type: String,
        default: ''
      },
      icon: {
        type: Object,
        default () {
          return {
            family: '',
            iconClass: ''
          }
        }
      }
    },
    data () {
      return {
        index: -1,
        status: '',
        isLast: false,
        mainOffset: 0,
        style: {},
        lineStyle: {}
      }
    },
    watch: {
      index (newVal, oldVal) {
        this.$watch('$parent.active', this.updateStatus, {immediate: true})
      }
    },
    computed: {
      lastStyle () {
        return this.isLast ? '' : {marginRight: -this.$parent.stepOffset + 'px'}
      }
    },
    methods: {
      updateStatus (val) {
        let prevChild = this.$parent.stepGroup[this.index - 1]
        if (val > this.index) {
          this.status = this.$parent.finishStatus
        } else if (val === this.index) {
          this.status = this.$parent.processStatus
        } else {
          this.status = 'wait'
        }
        if (prevChild) {
          prevChild.calcProgress(this.status)
        }
      },
      calcProgress (status) {
        let step = 100
        let style = {}
        style.transitionDelay = 150 * this.index + 'ms'
        if (status === this.$parent.processStatus) {
          step = 100
        } else if (status === 'wait') {
          step = 0
          style.transitionDelay = (-150 * this.index) + 'ms'
        }
        style.borderWidth = step ? '4px' : 0
        this.$parent.direction === 'vertical' ? style.height = step + '%' : style.width = step + '%'
        this.lineStyle = style
      },
      adjustPosition () {
        this.style = {}
        this.$parent.stepOffset = this.$el.querySelector('.qc-step_head').getBoundingClientRect().width / (this.$parent.stepGroup.length - 1)
      },
      initStep () {
        let parent = this.$parent
        let isCenter = parent.center
        let isLast = this.isLast = parent.stepGroup[parent.stepGroup.length - 1] === this
        let space = typeof parent.space === 'number' ? parent.space + 'px' : parent.space ? parent.space : 100 / (isCenter ? parent.stepGroup.length - 1 : parent.stepGroup.length) + '%'
        if (parent.direction === 'horizontal') {
          this.style = {width: space}
          if (parent.alignCenter) {
            this.mainOffset = -this.$el.querySelector('.qc-step_title').getBoundingClientRect().width / 2 + 16 + 'px'
          }
          isCenter && isLast && this.adjustPosition()
        } else {
          if (!isLast) {
            this.style = {height: space}
          }
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.initStep()
      })
    }
  }
</script>
