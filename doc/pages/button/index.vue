<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_disabled": "禁用状态",
      "eg_base_color": "颜色倾向",
      "eg_base_icon": "图标按钮",
      "eg_base_group": "按钮组",
      "eg_base_loading": "加载中",
      "eg_base_size": "不同尺寸",
      "eg_base_width_borderRadius": "指定button按钮宽度 || 是否开启圆角",
      "eg_base_verification": "验证码",
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
        <div class="view-title">{{ $t('eg_base_block') }}</div>
        <qc-button>默认按钮</qc-button>
        <qc-button type='primary'>主要按钮</qc-button>
        <qc-button type='text' plain>文字按钮</qc-button>
        <j-code :langSources="code.base"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_disabled') }}</div>
        <qc-button type='primary' disabled>主要按钮</qc-button>
        <qc-button type='text' disabled>主要按钮</qc-button>
        <j-code :langSources="code.disabled"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_color') }}</div>
        <div>
          <qc-button type='success'>成功按钮</qc-button>
          <qc-button type='warning'>警告按钮</qc-button>
          <qc-button type='danger'>危险按钮</qc-button>
          <qc-button type='info'>信息按钮</qc-button>
        </div>
        <j-code :langSources="code.color"></j-code><br>
        <div>
          <qc-button type='success' plain>成功按钮</qc-button>
          <qc-button type='warning' plain>警告按钮</qc-button>
          <qc-button type='danger' plain>危险按钮</qc-button>
          <qc-button type='info' plain>信息按钮</qc-button>
        </div>
        <j-code :langSources="code.plain"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_icon') }}</div>
        <qc-button type="success" icon :icon-options="{family: 'icomoon', class: 'icon-addcart'}">addCart</qc-button>
        <j-code :langSources="code.icon"></j-code>
      </div>
      <div class="components-view1">
        <div class="view-title">{{ $t('eg_base_group') }}</div>
        <qc-button-group>
          <qc-button type="success">成功按钮</qc-button>
          <qc-button type="primary">常用按钮</qc-button>
          <qc-button type="success" icon :icon-options="{family: 'icomoon', class: 'icon-addcart'}">addCart</qc-button>
        </qc-button-group> 
        <j-code :langSources="code.group"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_loading') }}</div>
        <qc-button size="normal" type="primary" loading>loading</qc-button>
        <j-code :langSources="code.loading"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_size') }}</div>
        <qc-button size="large" type="primary">大型按钮</qc-button>
        <qc-button size="normal" type="primary">中型按钮</qc-button>
        <qc-button size="small" type="primary">小型按钮</qc-button>
        <j-code :langSources="code.size"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_width_borderRadius') }}</div>
        <div>
          <qc-button type="success">默认宽度随文字长度改变</qc-button>
          <qc-button type="success" :btn-width="200">指定宽度</qc-button>
        </div>
        <br>
        <div>
          <qc-button type="success">默认不开启圆角</qc-button>
          <qc-button type="success" border-radius>开启圆角</qc-button>
        </div>   
        <j-code :langSources="code.borderRadius"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_verification') }}</div>
        <qc-button type="success" verification-code :code-time="15" :btn-width="120">address</qc-button>
        <j-code :langSources="code.verification"></j-code>
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
    button{
      margin-right:10px !important;
    }
  }
  .components-view1{
    margin: 10px;
  }
</style>
