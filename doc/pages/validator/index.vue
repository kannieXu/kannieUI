<i18n>
  {
    "zh": {
      "eg_base": "表单验证效果展示(通过blur触发)",
      "eg_base_block": "基础用法 (format传入校验规则,v-qyValidator-msg通过绑定id(唯一)输出校验方校验失败信息)",
      "eg_base_show": "format使用方法",
      "eg_base_go": "错误信息的自定义",
      "eg_base_currentPage": "组件里的使用",
      "eg_base_changepage": "异步校验",
      "eg_base_method": "事件触发",
      "eg_base_config": "内部验证表"
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
        <input type='text' v-qyValidator-input:reg="{id:'phone',format:'Mobile',title:'电话'}" />
        <div v-qyValidator-msg:phone></div>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_block') }}</div>
        <input type='text' v-qyValidator-input:reg="{id:'Phone',format:'Mobile',title:'电话'}" />
        <div v-qyValidator-msg:Phone></div>
        <j-code :langSources="code.base"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_show') }}</div><br>
        <input type='text' v-qyValidator-input:reg="{id:'username',format:'UserName',title:'username'}" />
        <div v-qyValidator-msg:username></div>
        <j-code :langSources="code.showPages"></j-code><br>
        <input type='text' v-qyValidator-input:reg="{id:'RealName',format:/^[\u4e00-\u9fa5]{2,10}$/,title:'RealName'}" />
        <div v-qyValidator-msg:RealName></div>
        <j-code :langSources="code.realName"></j-code><br>
        <input type='text' v-qyValidator-input:nonvoid="{id:'nonvoid',format:true,title:'nonvoid'}" />
        <div v-qyValidator-msg:nonvoid></div>
        <j-code :langSources="code.nonvoid"></j-code><br>
        <input type='text' v-model="valueText" placeholder="请输入手机号" v-qyValidator-input:reg="{id:'test',format:'Mobile',title:'Mobile'}" />
        <div v-qyValidator-msg:test></div><br>
        <input type='text' v-qyValidator-input:reg="{id:'mytest',format:'valueText',title:'Mobile'}" />
        <div v-qyValidator-msg:mytest></div>
        <j-code :langSources="code.equal"></j-code><br>
        <div v-qyValidator-msg:test></div><br>
        <input type='text' v-qyValidator-input:limit="{id:'limit',format:[6,10],title:'区间'}" />
        <div v-qyValidator-msg:limit></div>
        <j-code :langSources="code.limit"></j-code><br>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_go') }}</div><br>
        <input type='text' v-qyValidator-input:limit="{id:'mylimit',format:[6,10],title:'区间'}" />
        <div v-qyValidator-msg:mylimit></div>
        <j-code :langSources="code.go"></j-code>
        <input type='text' v-qyValidator-input:limit="{id:'mylimiT',format:[6,10],request:'你输入的区间值出错啦！'}" />
        <div v-qyValidator-msg:mylimiT></div>
        <j-code :langSources="code.goTo"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_currentPage') }}</div><br>
        <my-input :validator-obj="validatorObj" @errormsg='msgPrint'></my-input>
        <div>{{printVal}}</div>
        <j-code :langSources="code.currentPage"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_changepage') }}</div>
        <input type='text' v-qyValidator-input:reg="{id:'async',format:'Mobile',async:obj,urlcode:'msg',status:4001,code:'code'}" />
        <div v-qyValidator-msg:async></div>
        <j-code :langSources="code.changepage"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_method') }}</div>
        <input type='text' v-qyValidator-input:limit="{id:'click',format:[6,10],request:'你输入的区间值出错啦！'}" />
        <div v-qyValidator-msg:click></div>
        <br>
        <button style="width:100px;height:30px;background: #ccc;border:none" v-qyValidator-final-check:method="{keys:['click']}">点我!!</button>
        <j-code :langSources="code.click"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_config') }}</div>
        <j-code :overview="true" :langSources="code.config"></j-code>
      </div>
    </div> 
</template>

<script>
import myInput from './myinput.vue'
import code from './index.js'
export default {
  data () {
    return {
      code: code,
      valueText: null,
      validatorObj: {
        id: 'myInput',
        format: 'Mobile',
        title: '电话',
        request: '这是组件的测试'
      },
      printVal: '',
      obj: {
        url: 'http://localhost:8080/static/data.json', 
        type: 'GET',
        dataType: 'json'
      }
    }
  },
  components: {
    myInput
  },
  methods: {
    msgPrint (val) {
      this.printVal = val
    }
  }
}
</script>
<style lang="scss">
  .components-view{
    margin: 10px;
  }
</style>
