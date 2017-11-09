<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_clear": "有描述的步骤条",
      "eg_base_group": "居中的步骤条",
      "eg_base_multiple": "竖式步骤条",
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
          <qc-step-group :space="200" :active="1" finish-status='finish'>
            <qc-step title="步骤1"></qc-step>
            <qc-step title="步骤2"></qc-step>
            <qc-step title="步骤3"></qc-step>
          </qc-step-group>
        </div>
        <j-code :langSources="code.base"></j-code><br>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_clear') }}</div>
        <div class="input-warp">
          <qc-step-group :space="200" :active="1" finish-status='finish'>
            <qc-step title="步骤1">
              <div slot="description">这是步骤1内容</div>
            </qc-step>
            <qc-step title="步骤2">
              <div slot="description">这是步骤2内容</div>
            </qc-step>
            <qc-step title="步骤3">
              <div slot="description">这是步骤3内容</div>
            </qc-step>
          </qc-step-group>
        </div>
        <j-code :langSources="code.close"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_group') }}</div>
        <div class="input-warp">
           <qc-step-group align-center :active="1" finish-status='finish'>
            <qc-step title="步骤1">
              <div slot="description">这是步骤1内容</div>
            </qc-step>
            <qc-step title="步骤2">
              <div slot="description">这是步骤2内容</div>
            </qc-step>
              
            <qc-step title="步骤3">
              <div slot="description">这是步骤3内容</div>
            </qc-step>
          </qc-step-group>
        </div>
        <j-code :langSources="code.button"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_multiple') }}</div>
        <div class="input-warp">
           <qc-step-group :space="200" direction="vertical" :active="1" finish-status='finish'>
            <qc-step title="步骤1">
              <div slot="description">这是步骤1内容</div>
            </qc-step>
            <qc-step title="步骤2">
            <div slot="description">这是步骤2内容</div>
            </qc-step>
              
            <qc-step title="步骤3">
              <div slot="description">这是步骤3内容</div>
            </qc-step>
          </qc-step-group>
        </div>
        <j-code :langSources="code.event"></j-code>
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
      value2: '',
      message: ['贾跃亭辞职', '可可西里申遗成功', '昆明水库泄洪垮塌', '联合国投票禁核', '北京雄安首开动车'],
      model1: false,
      model2: false,
      model3: false,
      model4: false,
      model6: false,
      model7: '',
      model8: '',
      model9: ''
    }
  },
  methods: {
    myCancelCallback () {
      alert('你点击了取消按钮！！')
    },
    myConfirmCallback () {
      alert('你点击了确定按钮！！')
    },
    myCloseModal () {
      alert('你点击了关闭按钮或者弹层按钮！！')
    },
    clickMe () {
      this.$QC.modal.show({
        width: 600,
        title: '这是js调用',
        content: '这是js调用的弹框内容',
        closed: true,
        isMarkClose: true,
        confirm: () => {
          alert('js调用的弹框你点击的确认按钮了')
        }
      })
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
  .click_me{
    width:40px;
    height:30px;
    background: #37ac68;
    border:none;
  }
</style>
