<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_disabled": "禁用状态",
      "eg_base_clear": "清空",
      "eg_base_group": "分组",
      "eg_base_multiple": "多选模式",
      "eg_base_filterable": "搜索",
      "eg_base_size": "尺寸",
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
          <qc-select v-model="model1">
            <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
          </qc-select>
          <p>{{model1}}</p>
        </div>
        <j-code :langSources="code.base"></j-code><br>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_disabled') }}</div>
        <div class="input-warp">
          <qc-select disabled>
            <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
          </qc-select>
          <div style="width: 100%; height: 10px;"></div>
          <qc-select v-model="model2">
            <qc-option v-for="(item,index) in message" :value="item" :key="index" :disabled="index===1"></qc-option>
          </qc-select>
          <p>{{model2}}</p>
        </div>
        <j-code :langSources="code.disabled"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_clear') }}</div>
        <div class="input-warp">
          <qc-select v-model="model3" clearable>
            <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
          </qc-select>
          <p>{{model3}}</p>
        </div>
        <j-code :langSources="code.clear"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_group') }}</div>
        <div class="input-warp">
          <qc-select v-model="model4">
            <qc-option-group title="热门城市">
              <qc-option v-for="(item,index) in message2" :value="item.value" :key="item.value" :disabled="index===1">{{ item.label }}</qc-option>
            </qc-option-group>
            <qc-option-group title="热门动漫">
              <qc-option v-for="(item,index) in message3" :value="item.value" :key="item.value" >{{ item.label }}</qc-option>
            </qc-option-group>
          </qc-select>
          <p>{{model4}}</p>
        </div>
        <j-code :langSources="code.group"></j-code>
      </div>
       <div class="components-view">
        <div class="view-title">{{ $t('eg_base_multiple') }}</div>
        <div class="input-warp">
          <qc-select v-model="model5" multiple :multiple-limit="3">
            <qc-option v-for="(item,index) in message4" :value="item" :label="item.label" :key="index"></qc-option>
          </qc-select>
          <p>{{model5}}</p>
        </div>
        <div class="input-warp">
          <qc-select v-model="model11" multiple :multiple-limit="3" :multiple-show="false">
            <qc-option v-for="(item,index) in message4" :value="item" :label="item.label" :key="index"></qc-option>
          </qc-select>
          <p>{{model11}}</p>
        </div>
        <j-code :langSources="code.multiple"></j-code><br>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_filterable') }}</div>
        <div class="input-warp">
          <qc-select v-model="model6" filterable>
            <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
          </qc-select>
          <p>{{model6}}</p>
          <div style="width:100%;height:10px;"></div>
          <qc-select v-model="model7" multiple filterable>
            <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
          </qc-select>
          <p>{{model7}}</p>
        </div>
        <j-code :langSources="code.filterable"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_size') }}</div>
        <div class="input-warp">
          <qc-select v-model="model8" size="large">
            <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
          </qc-select>
          <p>{{model8}}</p>
          <div style="width:100%;height:10px;"></div>
          <qc-select v-model="model9">
            <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
          </qc-select>
          <p>{{model9}}</p>
          <div style="width:100%;height:10px;"></div>
          <qc-select v-model="model10" multiple size="small">
            <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
          </qc-select>
          <p>{{model10}}</p>
        </div>
        <j-code :langSources="code.size"></j-code>
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
      model1: '',
      model2: '',
      model3: '',
      model4: '',
      model5: [{
        value: 'ONE PIECE',
        label: '海贼王'
      },
      {
        value: 'Detective Conan',
        label: '名侦探柯南'
      },
      {
        value: 'chongqing',
        label: '重庆市'
      }],
      model6: '',
      model7: [],
      model8: '',
      model9: '',
      model10: [],
      model11: [],
      message2: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ],
      message3: [
        {
          value: 'ONE PIECE',
          label: '海贼王'
        },
        {
          value: 'Detective Conan',
          label: '名侦探柯南'
        },
        {
          value: 'HOKAGE',
          label: '火影忍者'
        },
        {
          value: 'BLEACH',
          label: '死神'
        },
        {
          value: 'Young jump',
          label: '一拳超人'
        },
        {
          value: 'Attack on Titan',
          label: '进击的巨人'
        }
      ],
      message4: []
    }
  },
  methods: {
    testIconClick () {
      console.log('on-icon-click')
    }
  },
  created () {
    setTimeout(() => {
      this.message4 = [
        {
          value: 'ONE PIECE',
          label: '海贼王'
        },
        {
          value: 'Detective Conan',
          label: '名侦探柯南'
        },
        {
          value: 'HOKAGE',
          label: '火影忍者'
        },
        {
          value: 'BLEACH',
          label: '死神'
        },
        {
          value: 'Young jump',
          label: '一拳超人'
        },
        {
          value: 'Attack on Titan',
          label: '进击的巨人'
        }
      ]
    }, 2000);
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
