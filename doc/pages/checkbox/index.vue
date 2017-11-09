<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_borderRadius": "显示圆角",
      "eg_base_checkboxBorder": "自定义选中颜色",
      "eg_base_disabled": "禁用checkbox",
      "eg_base_group": "组合使用",
      "eg_base_limit": "可选项目数量的限制",
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
        <qc-checkbox v-model="box1">Checkbox</qc-checkbox>
         <p>{{box1}}</p>
        <j-code :langSources="code.base"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_borderRadius') }}</div>
        <qc-checkbox v-model="box2" border-radius>开启圆角</qc-checkbox>
        <j-code :langSources="code.borderRadius"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_checkboxBorder') }}</div>
        <qc-checkbox v-model="box3" checkbox-border="#37ac68" checkbox-background="#37ac68">改变颜色</qc-checkbox>
        <j-code :langSources="code.checkboxBorder"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_disabled') }}</div>
        <qc-checkbox v-model="box4" disabled>disabled</qc-checkbox>
        <qc-checkbox v-model="box5" disabled>被选中了</qc-checkbox>
        <j-code :langSources="code.disabled"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_group') }}</div>
        <qc-checkbox-group v-model="arr" 
        >
          <qc-checkbox label="twitter"><span>推特</span></qc-checkbox>
          <qc-checkbox label="facebook"><span>脸书</span></qc-checkbox>
          <qc-checkbox label="Alibaba"><span>阿里巴巴</span></qc-checkbox>
          <qc-checkbox disabled label="Baidu"><span>百度</span></qc-checkbox>
        </qc-checkbox-group>
        <p>{{arr}}</p>
        <j-code :langSources="code.group"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_limit') }}</div>
        <qc-checkbox-group 
          v-model="arr2" 
          :max = "3"
        >
          <qc-checkbox label="Luffy"><span>路飞</span></qc-checkbox>
          <qc-checkbox label="Zoro"><span>索隆</span></qc-checkbox>
          <qc-checkbox label="Nami"><span>娜美</span></qc-checkbox>
          <qc-checkbox disabled label="Usopp"><span>乌索普</span></qc-checkbox>
          <qc-checkbox label="Sanji"><span>山治</span></qc-checkbox>
        </qc-checkbox-group>
        <p>{{arr2}}</p>
        <j-code :langSources="code.limit"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_config') }}</div>
        <j-code :overview="true" :langSources="code.config"></j-code>
        <j-code :overview="true" :langSources="code.config2"></j-code>
      </div>
    </div>
</template>

<script>
import code from './index.js'
export default {
  data () {
    return {
      code: code,
      box1: false,
      box2: false,
      box3: false,
      box4: false,
      box5: true,
      arr: ['Alibaba'],
      arr2: ['Luffy', 'Usopp']
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
