<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_clear": "关闭",
      "eg_base_group": "按钮交互",
      "eg_base_multiple": "按钮回调事件",
      "eg_base_filterable": "是否显示滚动条",
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
          <button class="click_me" @click="model1=true">点我</button>
          <qc-modal v-model="model1" title="这是一个弹框" content="这是一块内容区域" :width="600"></qc-modal>
          <p>{{model1}}</p>
        </div>
        <j-code :langSources="code.base"></j-code><br>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_clear') }}</div>
        <div class="input-warp">
          <button class="click_me" @click="model2=true">点我</button>
          <qc-modal :is-mark-close="false" :closed="true" v-model="model2" title="这是一个弹框2" content="这是一块内容区域2" :width="600"></qc-modal>
          <p>{{model2}}</p>
        </div>
        <j-code :langSources="code.close"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_group') }}</div>
        <div class="input-warp">
          <button class="click_me" @click="model3=true">点我</button>
          <qc-modal :closed="true" v-model="model3" title="这是一个弹框3" content="这是一块内容区域3" :width="600" confirm-text="confirm" cancel-text="cancel"></qc-modal>
          <p>{{model3}}</p>
        </div>
        <j-code :langSources="code.button"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_multiple') }}</div>
        <div class="input-warp">
          <button class="click_me" @click="model4=true">点我</button>
          <qc-modal :is-mark-close="true" :closed="true" v-model="model4" title="这是一个弹框4" content="这是一块内容区域4" :width="600" @cancel-callback="myCancelCallback" @confirm-callback="myConfirmCallback" @close-modal="myCloseModal"></qc-modal>
          <p>{{model4}}</p>
        </div>
        <j-code :langSources="code.event"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_filterable') }}</div>
        <div class="input-warp">
          <button class="click_me" @click="model6=true">点我</button>
          <qc-modal :is-mark-close="true" :scrollable="true" :closed="true" v-model="model6" title="这是一个弹框5" content="这是一块内容区域5" :width="600" ></qc-modal>
          <p>{{model6}}</p>
        </div>
        <j-code :langSources="code.scroll"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_filterable') }}</div>
        <div class="input-warp">
          <button class="click_me" @click="clickMe">点我</button>
        </div>
        <j-code :langSources="code.js"></j-code>
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
