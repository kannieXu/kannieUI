<template>
  <div 
    class="qc-select" 
    :class = "[isMultiple, disabledClass]" 
    v-clickoutside="handelCloseSelect"
  >
    <div 
      class = "qc-select_inner"
      :class = "[sizeClass]"
      @click = "handelClick"
    >
      <template v-if="multipleShow">
        <div class="qc-select_tag" v-for="(item,index) in multipleList">
          <span class="qc-select_tag_text">{{item.label}}</span>
          <i class="qc-select_tag_clear" @click.stop="removeTag(index)"></i>
        </div>
      </template>
      <template v-if="!multipleShow && multipleList.length!==0">
        <div class="qc-select_tag">
          <span class="qc-select_tag_text">{{multipleList[0].label}}</span>
          <i class="qc-select_tag_clear" @click.stop="removeTag(0)"></i>
        </div>
      </template>
      <span class="qc-select_placeholder" v-show="showPlaceholder && !filterable">{{placeholder}}</span>
      <span class="qc-select_selected-value" v-show="!showPlaceholder && !multiple && !filterable">{{selectedSingle}}</span>
      <input 
        type = "text"
        ref = "input"
        :placeholder = "showPlaceholder ? placeholder : ''"
        v-if = "filterable"
        class = "qc-select_input"
        :style = "{width: inputWidth}"
        v-model = "query"
        :disabled = "disabled"
        @blur = "handelBlur"
      >
      <span class="qc-select_clear" v-show = "clearable && showClearIcon" @click.stop = "clearInputValue">
        <i 
          class="qc-select_clear_inner"
        ></i>
      </span>
      <i 
        class="qc-select_arrow__down"
        :style = "[transformRatate]"
      ></i>
    </div>
    <transition name="slide-up">
      <div class="qc-select_dropdown_warp" v-show="visible" :style="[dropdownStyle]">
        <qc-scroll-bar ref='scroll' height="200px">
          <ul 
            class="qc-select_dropdown_list"
            v-show = "!noFound"
          >
            <slot></slot>
          </ul>
        </qc-scroll-bar>
        <div class="qc-select_dropdown__tip">{{showText}}</div>
      </div>
    </transition>
  </div>
</template>
<style scoped lang="scss">
  @import "../../styles/mixin";
  .qc-select{
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    color: $select_word_color;
    font-size: 14px;
    line-height: normal;
    position: relative;
  }
  .qc-select_inner{
    display: block;
    position: relative;
    box-sizing: border-box;
    outline: 0;
    cursor: pointer;
    user-select: none;
    background-color: $select_bg_color;
    // border-radius: 4px;
    border: 1px solid $select_border_color;
  }
  .qc-select__disabled .qc-select_inner{
    background-color: $select_disabled_bg_color;
    color: $select_disabled_word_color;
    cursor: not-allowed;
  }
  .qc-select_multiple .qc-select_inner{
    min-height: 32px;
    padding: 0 24px 0 4px;
  }
  .qc-select_multiple .qc-select_large{
    min-height: 40px;
    padding: 0 24px 0 4px;
  }
  .qc-select_multiple .qc-select_small{
    min-height: 24px;
    padding: 0 24px 0 4px;
  }
  .qc-select_placeholder{
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 8px;
    padding-right: 24px;
  }
  .qc-select_large .qc-select_placeholder{
    height: 38px;
    line-height: 38px;
  }
  .qc-select_small .qc-select_placeholder{
    height: 22px;
    line-height: 22px;
    font-size: 12px;
  }
  .qc-select_selected-value{
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 8px;
    padding-right: 24px;
  }
  .qc-select_large .qc-select_selected-value{
    height: 38px;
    line-height: 38px;
  }
  .qc-select_small .qc-select_selected-value{
    height: 22px;
    line-height: 22px;
    font-size: 12px;
  }
  .qc-select_input{
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 32px;
    padding: 0 24px 0 8px;
    font-size: 14px;
    outline: 0;
    border: none;
    box-sizing: border-box;
    color: $select_word_color;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  .qc-select__disabled .qc-select_input{
    cursor: not-allowed;
  }
  .qc-select_large .qc-select_input{
    height: 40px;
    line-height: 40px;
  }
  .qc-select_small .qc-select_input{
    height: 24px;
    line-height: 24px;
    font-size: 12px;
  }
  .qc-select_multiple .qc-select_input{
    height: 29px;
    padding: 0 0 0 4px;
  }
  .qc-select_multiple .qc-select_large .qc-select_input{
    height: 37px;
  }
  .qc-select_multiple .qc-select_small .qc-select_input{
    height: 21px;
  }
  .qc-select_tag{
    display: inline-block;
    height: 22px;
    line-height: 22px;
    margin: 3px 4px 2px 0;
    padding: 0 8px;
    border: 1px solid $select_border_color;
    border-radius: 3px;
    background: $select_tag_bg_color;
    font-size: 12px;
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    color: $select_word_color; 
  }
  .qc-select_large .qc-select_tag{
    margin: 6px 4px 4px 0;
  }
  .qc-select_small .qc-select_tag{
    height: 17px;
    line-height: 18px;
    margin: 2px 4px 1px 0;
  }
  .qc-select_tag_text{
    display: inline-block;
    max-width:87%;
    height: 100%;
    overflow: hidden; 
  }
  .qc-select_tag_clear{
    display: inline-block;
    position: relative;
    top: -4px;
    width: 10px;
    height: 10px;
    margin-left: 6px;
    overflow: hidden;
  }
  .qc-select_small .qc-select_tag_clear{
    top: -2px;
  }
  .qc-select_tag_clear:after,.qc-select_tag_clear:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    margin-top: -2px;
    background-color: #666666;
  }
  .qc-select_tag_clear:before{
    transform: rotate(45deg)
  }
  .qc-select_tag_clear:after{
    transform: rotate(-45deg)
  }
  .qc-select_arrow__down{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #ccc;
    position: absolute;
    right: 8px;
    top: 50%;
    margin-top: -3px;
    transition: all .2s ease-in-out;
  }
  .qc-select_clear{
    display: none;
    width: 12px;
    height: 12px;
    line-height: 12px;
    text-align: center;
    position: absolute;
    right: 8px;
    top: 50%;
    margin-top: -6px;
    background-color: #cccccc;
    border-radius: 50%;
    z-index: 2;  
  }
  .qc-select_inner:hover .qc-select_clear{
    display: inline-block;
  }
  .qc-select_clear_inner{
    display: inline-block;
    position: relative;
    width: 60%;
    height: 60%;
    overflow: hidden;
  }
  .qc-select_clear_inner:after,.qc-select_clear_inner:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    margin-top: -2px;
    background-color: #ffffff;
  }
  .qc-select_clear_inner:before{
    transform: rotate(45deg)
  }
  .qc-select_clear_inner:after{
    transform: rotate(-45deg)
  }
  .qc-select_dropdown__tip{
    font-size: 14px;
    color: $select_word_color;
    text-align: center;
  }
  .qc-select_dropdown_warp{
    max-height: 220px;
    position: absolute;
    left: 0;
    top: 32px;
    margin: 5px 0;
    padding: 5px 0;
    background-color: $select_bg_color;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    z-index: 999;
  }
  .qc-select_dropdown_list{
    padding: 0;
    margin: 0;
  }
  ::-webkit-input-placeholder { 
    color: $select_word_color; 
  }
  ::-moz-placeholder {
    color: $select_word_color; 
  }
  :-ms-input-placeholder {
    color: $select_word_color; 
  }
  input:-moz-placeholder {
    color: $select_word_color; 
  }
  .qc-select__disabled .qc-select_input::-webkit-input-placeholder{ 
    color: $select_disabled_input_color; 
  }
  .qc-select__disabled .qc-select_input::-moz-placeholder{
    color: $select_disabled_input_color; 
  }
  .slide-up-enter-active{
    opacity:0;
    animation-timing-function:ease-in-out
  }
  .slide-up-leave-active{
    animation-timing-function:ease-in-out
  }
  .slide-up-enter-active,.slide-up-leave-active{
    animation-duration:.3s;
    animation-fill-mode:both;animation-play-state:paused
  }
  .slide-up-appear,.slide-up-enter-active{
    animation-name:qcSlideUpIn;
    animation-play-state:running
  }
  .slide-up-leave-active{
    animation-name:qcSlideUpOut;animation-play-state:running
  }
  @-webkit-keyframes qcSlideUpIn{
    0% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(.8);
    }
    100% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
  }
  @keyframes qcSlideUpIn {
    0% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(.8);
    }
    100% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
  }
  @-webkit-keyframes qcSlideUpOut{
    0% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(.8);
    }
  }
  @keyframes qcSlideUpOut {
    0% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(.8);
    }
  }
</style>
<script>
  import Emitter from '@/mixins/emitter'
  import {qcScrollBar} from '@/components/scroll-bar'
  export default {
    name: 'qcSelect',
    props: {
      value: {
        type: [String, Number, Array, Object],
        default: ''
      },
      multiple: {
        type: Boolean,
        default: false
      },
      multipleShow: {
        type: Boolean,
        default: true
      },
      multipleLimit: {
        type: Number,
        default: 0
      },
      size: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      filterable: {
        type: Boolean,
        default: false
      },
      noMatchText: {
        type: String,
        default: '无匹配数据'
      },
      noDataText: {
        type: String,
        default: '无数据'
      }
    },
    data () {
      return {
        visible: false,
        options: [],
        selectedSingle: '',
        selectOptionList: [],
        model: this.value,
        multipleList: [],
        query: '',
        noFound: false,
        maxMultipleSelected: false,
        focusIndex: 0,
        emitSelectedChangeEvent: false,
        dropdownStyle: null,
        slots: [],
        cacheOptions: [],
        isQcSelect: true
      }
    },
    watch: {
      value (val) {
        this.model = val
        if (val === '') this.query = ''
      },
      model (val) {
        this.$emit('input', this.model)
        this.setQuery()
        if (this.multiple) {
          if (this.maxMultipleSelected) {
            this.maxMultipleSelected = false
          } else {
            this.updateMultipleSelected()
          }
          if (this.multipleLimit) {
            this.findChild((child) => {
              child.haSelected = val.length
            })
          }
        } else {
          this.updateSingleSelected()
        }
        if (!this.visible && this.filterable) {
          this.$nextTick(() => {
            this.broadcastQuery('')
          })
        }
        this.$nextTick(() => {
          this.dropdownStyle = {
            minWidth: this.$el.offsetWidth + 'px',
            top: this.$el.offsetHeight + 'px'
          }
        })
      },
      visible (val) {
        if (val) {
          if (this.filterable) {
            if (this.multiple) {
              this.$refs.input.focus()
            } else {
              this.$refs.input.select()
            }
          }
          this.$nextTick(() => {
            this.dropdownStyle = {
              minWidth: this.$el.offsetWidth + 'px',
              top: this.$el.offsetHeight + 'px'
            }
            this.initScroll()
          })
        } else {
          if (this.filterable && !this.disabled) {
            this.$refs.input.blur()
          }
          document.removeEventListener('keydown', this.handelkeydown)
        }
      },
      query (val) {
        if (!this.emitSelectedChangeEvent) {
          this.$emit('is-query-change', val)
        }
        this.broadcastQuery(val)
        let isHidden = true
        this.$nextTick(() => {
          this.findChild((child) => {
            if (!child.hidden) {
              isHidden = false
            }
          })
          this.noFound = isHidden
        })
        this.emitSelectedChangeEvent = false
      },
      noFound (val) {
        if (!val) {
          this.initScroll()
        }
      },
      cacheOptions (val) {
        if (this.multipleLimit) {
          this.cacheOptions.forEach((child) => {
            child.selectLimit = this.multipleLimit
          })
        }
        this.setQuery()
        this.$nextTick(() => {
          this.broadcastQuery('')
        })
        this.options = []
        this.selectOptionList = []
        this.updateChildOptions(true)
      }
    },
    computed: {
      showPlaceholder () {
        if (!this.model && this.model !== 0) {
          return true
        } else if (Array.isArray(this.model)) {
          if (!this.model.length) {
            return true
          }
        } else {
          return false
        }
      },
      showClearIcon () {
        return !this.multiple && this.clearable && !this.showPlaceholder
      },
      showText () {
        let options = this.slots || []
        if (this.noFound) {
          return this.noMatchText
        } else if (!this.noFound && !options.length) {
          return this.noDataText
        }
      },
      isMultiple () {
        return this.multiple ? 'qc-select_multiple' : ''
      },
      inputWidth () {
        if (this.showPlaceholder) {
          return `100%`
        } else {
          let width = this.query.length * 14 + 40
          return `${width}px`
        }
      },
      transformRatate () {
        if (this.visible) {
          return {
            transform: 'rotate(180deg)'
          }
        } else {
          return {
            transform: 'rotate(0deg)'
          }
        }
      },
      sizeClass () {
        return this.size === 'normal' ? '' : `qc-select_${this.size}`
      },
      disabledClass () {
        return this.disabled ? 'qc-select__disabled' : ''
      }
    },
    methods: {
      handelCloseSelect () {
        this.hideMenu()
      },
      handelClick () {
        if (this.disabled) return false
        this.visible = !this.visible
        document.addEventListener('keydown', this.handelkeydown)
      },
      handelBlur () {
        setTimeout(() => {
          let model = this.model
          if (this.multiple) {
            this.query = ''
          } else {
            if (model !== '') {
              this.findChild((child) => {
                if (typeof model !== 'object' && child.value === model) {
                  this.query = child.label === undefined ? child.searchLabel : child.label
                  return;
                }
                if (typeof model === 'object') {
                  if (this.isEqual(child.value, model)) {
                    this.query = !child.label ? child.searchLabel : child.label
                    return;
                  }
                }
              })
            } else {
              this.query = ''
            }
          }
        }, 300)
      },
      isEqual (x, y) {
        if (x === y) {
          return true
        }
        if (!(x instanceof Object) || !(y instanceof Object)) {
          return false
        }
        if (x.constructor !== y.constructor) {
          return false
        }
        for (var p in x) {
          if (x.hasOwnProperty(p)) {
            if (!y.hasOwnProperty(p)) {
              return false
            }
            if (x[p] === y[p]) {
              continue
            }
            if (typeof(x[p]) !== "object") {
              return false
            }
            if (typeof(x[p]) === "object" && !this.isEqual(x[p], y[p])) {
              return false
            }
          }
        }
        for (p in y) {
          if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
            return false
          }
        }
        return true
      },
      setQuery () {
        if (!this.multiple && this.filterable && this.model !== undefined) {
          this.findChild((child) => {
            if (this.isEqual(child.value, this.model)) {
              if (child.label && typeof child.label !== 'object') {
                this.query = child.label
              } else if (child.searchLabel) {
                this.query = child.searchLabel
              } else {
                this.query = child.value
              }
            }
          })
        }
      },
      initScroll () {
        this.$nextTick(() => {
          this.$refs.scroll.initDom()
          this.$refs.scroll.start()
        })
      },
      broadcastQuery (val) {
        if (this.findChildComponents(this, 'qcOptionGroup')) {
          this.broadcast('qcOption', 'is-query-change', val)
          this.broadcast('qcOptionGroup', 'is-query-change', val)
        } else {
          this.broadcast('qcOption', 'is-query-change', val)
        }
        this.initScroll()
      },
      clearInputValue () {
        if (this.showClearIcon) {
          this.findChild((child) => {
            child.selected = false
          })
          this.model = ''
          if (this.filterable) {
            this.query = ''
          }
        }
      },
      clearValue () {
        this.findChild((child) => {
          child.selected = false
        })
        this.model = ''
      },
      handelkeydown (e) {
        if (this.visible) {
          let keyCode = e.keyCode
          if (keyCode === 27) {
            e.preventDefault()
            this.hideMenu()
          }
          if (keyCode === 40) {
            e.preventDefault()
            this.selectDuration('next')
          }
          if (keyCode === 38) {
            e.preventDefault()
            this.selectDuration('prev')
          }
          if (keyCode === 13) {
            e.preventDefault()
            this.findChild((child) => {
              if (child.isFocus) {
                child.select()
              }
            })
          }
        }
      },
      selectDuration (direction) {
        let find = false
        let status = {
          disabled: false,
          hidden: false
        }
        if (direction === 'next') {
          let next = this.focusIndex + 1
          this.focusIndex = (this.focusIndex === this.options.length) ? 1 : next
          let speed = -(this.focusIndex - 1) * 33
          this.$refs.scroll.handelKeydownNext(speed)
        } else if (direction === 'prev') {
          let prev = this.focusIndex - 1
          this.focusIndex = (this.focusIndex <= 1) ? this.options.length : prev
          let speed = -(this.focusIndex - 1) * 33
          this.$refs.scroll.handelKeydownPrev(speed)
        }
        this.findChild(child => {
          if (child.index === this.focusIndex) {
            status.disabled = child.disabled
            status.hidden = child.hidden
            if (!child.disabled && !child.hidden) {
              child.isFocus = true
            }
          } else {
            child.isFocus = false
          }
          if (!child.hidden && !child.disabled) {
            find = true
          }
        })
        if ((status.disabled || status.hidden) && find) {
          this.selectDuration(direction)
        }
      },
      findChild (cb) {
        const find = (child) => {
          const name = child.$options.name
          if (name === 'qcOption') {
            cb(child)
          } else if (child.$children.length) {
            child.$children.forEach((item) => {
              find(item, cb)
            })
          }
        }
        if (this.selectOptionList.length) {
          this.selectOptionList.forEach((child) => {
            find(child)
          })
        } else {
          this.$children.forEach((child) => {
            find(child)
          })
        }
      },
      updateChildOptions (slot = false) {
        let options = []
        let index = 0
        this.cacheOptions.forEach((child) => {
          options.push({
            value: child.value,
            label: (child.label === undefined) ? child.$el.innerHTML : child.label
          })
          child.index = ++index
          this.selectOptionList.push(child)
        })
        this.options = options
        this.updateSingleSelected(true, slot)
        this.updateMultipleSelected(true, slot)
      },
      updateSingleSelected (init = false, slot = false) {
        let type = typeof this.model
        if (type === 'string' || type === 'number') {
          for (let i = 0; i < this.options.length; i++) {
            if (this.model === this.options[i].value) {
              this.selectedSingle = this.options[i].label
              break
            }
          }
        }
        if (type === 'object') {
          const values = Object.values(this.model)
          for (let j = 0; j < this.options.length; j++) {
            if (values.indexOf(this.options[j].label) > -1) {
              this.selectedSingle = this.options[j].label
            }
          }
        }
        this.getSingleSelectedLabel(this.model, init)
      },
      updateMultipleSelected (init = false, slot = false) {
        if (this.multiple && Array.isArray(this.model)) {
          let selected = []
          for (let i = 0; i < this.model.length; i++) {
            let model = this.model[i]
            for (let j = 0; j < this.options.length; j++) {
              let option = this.options[j]
              if (this.isEqual(model, option.value)) {
                selected.push({
                  value: option.value,
                  label: option.label
                })
                break
              }
            }
          }
          this.multipleList = selected
          if (slot) {
            let selectedModel = []
            for (let i = 0; i < selected.length; i++) {
              selectedModel.push(selected[i].value)
            }
            if (this.model.length === selectedModel.length) {
              this.maxMultipleSelected = true
            }
            this.model = selectedModel
          }
        }
        this.getMultipleSelectedLabel(this.model, init)
      },
      removeTag (index) {
        if (this.disabled) return false
        this.model.splice(index, 1)
        if (this.filterable && this.visible) {
          this.$refs.input.focus()
        }
      },
      hideMenu () {
        this.visible = false
        this.focusIndex = 0
        document.removeEventListener('keydown', this.handelkeydown)
      },
      getSingleSelectedLabel (value, init = false) {
        if (!this.multiple) {
          let label = ''
          this.findChild((child) => {
            if (this.isEqual(child.value, value)) {
              child.selected = true
              label = (child.label === undefined) ? child.$el.innerHTML : child.label
            } else {
              child.selected = false
            }
          })
          this.hideMenu()
          if (!init) {
            this.$emit('get-label', {
              label: label
            })
          }
        }
      },
      getMultipleSelectedLabel (value, init = false) {
        if (this.multiple) {
          let LabelArray = []
          this.findChild((child) => {
            let index = value.findIndex(item => {
              return this.isEqual(item, child.value)
            })
            if (index > -1) {
              child.selected = true
              LabelArray[index] = (child.label === undefined) ? child.$el.innerHTML : child.label
              return
            } else {
              child.selected = false
            }
          })
          if (!init) {
            this.$emit('get-label', LabelArray)
          }
        }
      }
    },
    components: {
      qcScrollBar
    },
    directives: {
      clickoutside: {
        bind (el, binding, vnode) {
          function documentHandler (e) {
            if (el.contains(e.target)) {
              return false
            } else {
              binding.value(e)
            }
          }
          el.__clickOutside__ = documentHandler
          document.addEventListener('click', documentHandler)
        },
        unbind (el, binding) {
          document.removeEventListener('click', el.__clickOutside__)
          delete el.__clickOutside__
        }
      }
    },
    mixins: [Emitter],
    mounted () {
      this.$on('is-selected', (value) => {
        if (this.model === value) {
          this.hideMenu()
        } else {
          if (this.multiple) {
            let index = this.model.indexOf(value)
            if (index > -1) {
              this.removeTag(index)
            } else {
              this.model.push(value)
            }
            if (this.filterable) {
              if (this.query !== '') {
                this.emitSelectedChangeEvent = true
              }
              this.query = ''
              this.$refs.input.focus()
            }
          } else {
            this.model = value
            if (this.filterable) {
              this.findChild((child) => {
                if (child.value === value) {
                  if (this.query !== '') {
                    this.emitSelectedChangeEvent = true
                  }
                }
              })
            }
          }
        }
      })
      this.$on('is-hover', (value) => {
        this.focusIndex = value
        this.findChild(child => {
          if (child.index === value) {
            child.isFocus = true
          } else {
            child.isFocus = false
          }
        })
      })
    }
  }
</script>
