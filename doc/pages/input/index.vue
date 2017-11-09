<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_disabled": "禁用状态",
      "eg_base_icon": "带icon的输入框",
      "eg_base_text": "文本域",
      "eg_base_text_change_height": "可自适应文本高度的文本域",
      "eg_base_text_more": "复合型输入框",
      "eg_base_size": "尺寸",
      "eg_base_number": "是否只允许输入数字",
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
          <qc-input type="text" placeholder='请输入...' :border-radius="false">
          </qc-input>
        </div>
        <j-code :langSources="code.base"></j-code><br>
        <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="true">
          </qc-input>
        </div>
        <j-code :langSources="code.borderRadius"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_disabled') }}</div>
        <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="false" disabled>
          </qc-input>
        </div>
        <j-code :langSources="code.disabled"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_icon') }}</div>
        <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="true" :icon="true" :icon-options="{class: 'icon-addcart', family: 'icomoon'}" :on-icon-click="testIconClick">
          </qc-input>
        </div>
        <j-code :langSources="code.icon"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_text') }}</div>
        <div class="input-warp">
          <qc-input type="textarea" placeholder='请输入...' :border-radius="true" :rows="3">
          </qc-input>
        </div>
        <j-code :langSources="code.text"></j-code>
      </div>
       <div class="components-view">
        <div class="view-title">{{ $t('eg_base_text_change_height') }}</div>
        <div class="input-warp">
          <qc-input v-model="value1" type="textarea" placeholder='请输入...' :border-radius="true" :autosize="true">
          </qc-input>
        </div>
        <j-code :langSources="code.autosize"></j-code><br>
        <div class="input-warp">
          <qc-input v-model="value2" type="textarea" placeholder='请输入...' :border-radius="true" :autosize="{minRows: 2,maxRows: 5}">
          </qc-input>
        </div>
        <j-code :langSources="code.autosize2"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_text_more') }}</div>
        <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="true">
            <span slot="append">前面</span>
          </qc-input>
        </div>
         <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="true">
            <span slot="prepend">后面</span>
          </qc-input>
        </div>
         <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="true">
            <span slot="append">前面</span>
            <span slot="prepend">后面</span>
          </qc-input>
        </div>
        <j-code :langSources="code.slot"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_size') }}</div>
        <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="true" size="large" :icon="true" :icon-options="{class: 'icon-addcart', family: 'icomoon'}">
          </qc-input>
        </div>
        <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="true" size="normal" :icon="true" :icon-options="{class: 'icon-addcart', family: 'icomoon'}">
          </qc-input>
        </div>
        <div class="input-warp">
          <qc-input type="text" placeholder='请输入...' :border-radius="true" size="small" :icon="true" :icon-options="{class: 'icon-addcart', family: 'icomoon'}">
          </qc-input>
        </div>
        <j-code :langSources="code.size"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_number') }}</div>
        <div class="input-warp">
          <qc-input is-number type="text" placeholder='请输入...' :border-radius="false">
          </qc-input>
        </div>
        <div class="input-warp">
          <qc-input is-number :decimal-point-count="2" type="text" placeholder='请输入...' :border-radius="false">
          </qc-input>
        </div>
        <j-code :langSources="code.number"></j-code>
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
      value1: '',
      value2: ''
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
