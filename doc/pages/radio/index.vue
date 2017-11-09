<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_group": "组合使用",
      "eg_base_disabled": "设置不可用",
      "eg_base_vertical": "设置不可用",
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
        <div class="input-warp">
          <qc-radio v-model="model1" label="apple"></qc-radio>
          <p>{{model1}}</p>
          <qc-radio v-model="model2" label="apple">Apple</qc-radio>
          <p>{{model2}}</p>
        </div>
        <j-code :langSources="code.base"></j-code><br>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_group') }}</div>
        <div class="input-warp">
          <qc-radio-group v-model="group" >
            <qc-radio label="apple"></qc-radio>
            <qc-radio label="apple1"></qc-radio>
            <qc-radio label="apple2"></qc-radio>
          </qc-radio-group>
          <p>{{group}}</p>
          <div style="height: 10px;width:100%;"></div>
          <qc-radio-group v-model="group2" >
            <qc-radio label="apple">Apple</qc-radio>
            <qc-radio label="apple1">Apple1</qc-radio>
            <qc-radio label="apple2">Apple2</qc-radio>
          </qc-radio-group>
          <p>{{group2}}</p>
        </div>
        <j-code :langSources="code.group"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_disabled') }}</div>
        <div class="input-warp">
          <div>
            <qc-radio disabled label="apple" v-model="model3"></qc-radio>
          </div>
          <div style="height: 10px;width:100%;"></div>
          <qc-radio-group v-model="group3" >
            <qc-radio disabled label="apple"></qc-radio>
            <qc-radio label="apple1"></qc-radio>
            <qc-radio label="apple2"></qc-radio>
          </qc-radio-group>
        </div>
        <j-code :langSources="code.disabled"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_vertical') }}</div>
        <div class="input-warp">
          <qc-radio-group v-model="group4" vertical>
            <qc-radio label="apple"></qc-radio>
            <qc-radio label="apple1"></qc-radio>
            <qc-radio label="apple2"></qc-radio>
          </qc-radio-group>
          <p>{{group4}}</p>
        </div>
        <j-code :langSources="code.vertical"></j-code>
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
      model1: false,
      model2: false,
      model3: true,
      group: '',
      group2: 'apple',
      group3: '',
      group4: ''
    }
  },
  methods: {
    testIconClick () {
      console.log('on-icon-click')
    }
  }
}
</script>
<style lang="scss">
  .components-view{
    margin: 10px;
  }
  .input-warp{
    width: 250px;
    margin-top:20px;
  }
</style>
