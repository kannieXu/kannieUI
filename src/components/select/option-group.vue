<template>
  <li class="qc-select_dropdown_group" v-show="!hidden">
    <div class="qc-select_dropdown_group_title">{{title}}</div>
    <ul class="qc-select_dropdown_group_wrap">
      <slot></slot>
    </ul>
  </li>
</template>
<style scoped lang="scss">
  @import "../../styles/mixin";
  .qc-select_dropdown_group{
    display: block;
    width: 100%;
    margin: 0;
    line-height: normal;
    list-style: none;
  }
  .qc-select_dropdown_group_wrap{
    padding: 0;
    margin: 0;
  }
  .qc-select_dropdown_group_title{
    padding-left: 10px;
    font-size: 12px;
    color: $select_list_title_word_color;
    height: 30px;
    line-height: 30px;
  }
</style>
<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'qcOptionGroup',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        hidden: false
      }
    },
    methods: {
      queryChange () {
        this.$nextTick(() => {
          let itemArr = this.findChildComponents(this, 'qcOption')
          let ishidden = false
          for (let i = 0; i < itemArr.length; i++) {
            if (!itemArr[i].hidden) {
              ishidden = true
              break
            }
          }
          this.hidden = !ishidden
        })
      }
    },
    mixins: [Emitter],
    mounted () {
      this.$on('is-query-change', () => {
        this.queryChange()
      })
    }
  }
</script>
