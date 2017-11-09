<i18n>
  {
    "zh": {
      "eg_base": "分页效果展示",
      "eg_base_block": "基础用法",
      "eg_base_show": "显示页目",
      "eg_base_go": "go的使用",
      "eg_base_currentPage": "currentPage的使用",
      "eg_base_changepage": "changepage的使用",
      "eg_base_config": "配置参数"
    }
  }
</i18n>
<template>
    <div>
      <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base') }}</div>
        <pagination :total-lists="total" :show-lists="10"></pagination>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_block') }}</div>
        <pagination :total-lists="total" :show-lists="10"></pagination>
        <j-code :langSources="code.base"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_show') }}</div>
        <pagination :total-lists="total" :show-lists="10" :show-pages="5"></pagination>
        <j-code :langSources="code.showPages"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_go') }}</div>
        <pagination :total-lists="total" :show-lists="10" :show-pages="5" :go="true"></pagination>
        <j-code :langSources="code.go"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_currentPage') }}</div>
        <pagination :total-lists="total" :show-lists="10" :show-pages="5" :currentPage="2"></pagination>
        <j-code :langSources="code.currentPage"></j-code>
      </div>
       <div class="components-view">
        <div class="view-title">{{ $t('eg_base_changepage') }}</div>
        <pagination @changepage="getPage" :total-lists="total" :show-lists="10" :show-pages="5"></pagination>
        <j-code :langSources="code.changepage"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_config') }}</div>
        <j-code :overview="true" :langSources="code.config"></j-code>
      </div>
    </div>
</template>

<script>
import code from './index.js'
export default {
  data () {
    return {
      code: code,
      total: 200,
      pageNum: 1
    }
  },
  methods: {
    getPage (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">
  .components-view{
    margin: 10px;
  }
</style>
