<template>
  <li 
    class = "qc-select_dropdown_list_item"
    :class = "[selectedClass, isFocusClass, disabledClass]"
    @click.stop = "select"
    v-show = "!hidden"
    @mouseenter.stop = "handelEnter"
  ><slot>{{showLabel}}</slot></li>
</template>
<style scoped lang="scss">
  @import "../../styles/mixin";
  .qc-select_dropdown_list_item{
    display: block;
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    color: $select_list_word_color;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    font-size: 14px;
  }
  .qc-select-dropdown_list__disabled{
    color: $select_list_disabled_word_color;
    cursor: not-allowed;
  }
  .qc-select_dropdown_list_item:hover{
    background-color: $select_list_hover_bg_color;
  }
  .qc-select-dropdown_list__disabled:hover{
    color: $select_list_disabled_word_color;
    background-color: transparent;
  }
  .qc-select_dropdown_list__selected{
    color: $select_list_selected_word_color;
    background-color: $select_list_selected_bg_color;
  }
  .qc-select_dropdown_list__selected:hover{
    color: $select_list_selected_word_color;
    background-color: $select_list_selected_bg_color;
  }
  .qc-select_dropdown_list__focus{
    background-color: $select_list_hover_bg_color;
  }
  .qc-select_multiple .qc-select_dropdown_list__selected{
    background-color: $select_list_selected_word_color;
    position: relative;
    color: $select_list_selected_bg_color;
  }
  .qc-select_multiple .qc-select_dropdown_list__selected:after{
    content: "";
    display: inline-block;
    width: 4px;
    height: 8px;
    line-height: 1;
    border: 2px solid $select_list_selected_bg_color;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    position: absolute;
    right: 8px;
    top: 50%;
    margin-top: -6px;
  }
  .qc-select_multiple .qc-select_dropdown_list__selected:hover{
    background-color: $select_list_selected_word_color;
    color: $select_list_selected_bg_color;
  }
  .qc-select_multiple .qc-select_dropdown_list__focus{
    background-color: $select_list_hover_bg_color;
  }
  .qc-select .qc-select_dropdown_list__selected.qc-select_dropdown_list__focus{
    background-color: $select_list_selected_foucs_bg_color;
  }
  .qc-select_multiple .qc-select_dropdown_list__selected.qc-select_dropdown_list__focus{
    background-color: $select_list_hover_bg_color;
  }
</style>
<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'qcOption',
    props: {
      value: {
        required: true
      },
      label: {
        type: [String, Number]
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        selected: false,
        index: 0,
        isFocus: false,
        hidden: false,
        searchLabel: '',
        selectLimit: null,
        haSelected: null
      }
    },
    computed: {
      showLabel () {
        return this.label || ((typeof this.value === 'string' || typeof this.value === 'number' ? this.value : this.$el.innerHTML))
      },
      selectedClass () {
        return this.selected ? 'qc-select_dropdown_list__selected' : ''
      },
      isFocusClass () {
        return this.isFocus ? 'qc-select_dropdown_list__focus' : ''
      },
      disabledClass () {
        return this.disabled ? 'qc-select-dropdown_list__disabled' : ''
      },
      parent () {
        let result = this.$parent
        while (!result.isQcSelect) {
          result = result.$parent
        }
        return result
      }
    },
    methods: {
      select () {
        if (this.disabled) {
          return false
        }
        if (this.selectLimit && !this.selected && this.haSelected > this.selectLimit - 1) {
          return false
        }
        this.dispatch('qcSelect', 'is-selected', this.value)
        // if (typeof this.label === 'object') {
        //   this.dispatch('qcSelect', 'is-selected-label', this.label)
        // }
      },
      blur () {
        this.isFocus = false
      },
      queryChange (val) {
        let parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1')
        this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel)
      },
      handelEnter () {
        this.dispatch('qcSelect', 'is-hover', this.index)
      }
    },
    mixins: [Emitter],
    mounted () {
      this.parent.cacheOptions.push(this)
      this.parent.slots.push(this)
      this.searchLabel = this.$el.innerHTML
      this.$on('is-selected', () => {
        this.isFocus = false
      })
      this.$on('is-query-change', (val) => {
        this.queryChange(val)
      })
    }
  }
</script>
