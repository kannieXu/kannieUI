let code = {}

code.overview = {}

code.overview.zh = `
基本表单组件 \`qc-select\`，用于当选项过多时，使用下拉菜单展示并选择内容。
\`qc-select\`支持单选、多选、搜索(不支持远程搜索)，以及键盘快捷操作。
`

code.base = {}

code.base.zh = `
* 基本用法。可以使用 \`v-model\` 双向绑定数据。
* 单选时，\`value\` 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据\`qc-option\`的value来返回选中的数据。
* 在展开选择器后，可以使用键盘的up和down快速上下选择，按下Enter选择，按下Esc收起选择器。
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-select v-model="model1">
      <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
    </qc-select>
    <p>{{model1}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: ['贾跃亭辞职', '可可西里申遗成功', '昆明水库泄洪垮塌', '联合国投票禁核', '北京雄安首开动车'],
      model1: ''
    }
  }
}
</script>
\`\`\`
`

code.disabled = {}
code.disabled.zh = `
* 通过给\`qc-select\`设置属性\`disabled\`禁用整个选择器。
* 通过给\`qc-option\`设置属性\`disabled\`可以禁用当前项
\`\`\`javascript
<template>
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
</template>
<script>
export default {
  data () {
    return {
      message: ['贾跃亭辞职', '可可西里申遗成功', '昆明水库泄洪垮塌', '联合国投票禁核', '北京雄安首开动车'],
      model2: ''
    }
  }
}
</script>
\`\`\`
`
code.clear = {}
code.clear.zh = `
* 通过设置属性\`clearable\`可以清空已选项，仅适用于单选模式
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-select v-model="model3" clearable>
      <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
    </qc-select>
    <p>{{model3}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: ['贾跃亭辞职', '可可西里申遗成功', '昆明水库泄洪垮塌', '联合国投票禁核', '北京雄安首开动车'],
        model3: ''
      }
    }
  }
</script>
\`\`\`
`

code.group = {}
code.group.zh = `
* 使用\`qc-option-group\`可将选项进行分组
\`\`\`javascript
<template>
  <qc-select v-model="model4">
    <qc-option-group title="热门城市">
      <qc-option v-for="(item,index) in message2" :value="item.value" :key="item.value" :disabled="index===1">{{ item.label }}</qc-option>
    </qc-option-group>
    <qc-option-group title="热门动漫">
      <qc-option v-for="(item,index) in message3" :value="item.value" :key="item.value" >{{ item.label }}</qc-option>
    </qc-option-group>
  </qc-select>
  <p>{{model4}}</p>
</template>
<script>
  export default {
    data () {
      return {
        model4: '',
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
            label: '广州市'
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
        ]
      }
    }
  }
</script>
\`\`\`
`

code.multiple = {}
code.multiple.zh = `
* 设置属性 \`multiple\`，可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。
* 可设置\`multiple-show\`来决定是否要把多选选中的内容在输入框中显示，\`false\`只显示多选数据的第一条
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-select v-model="model5" multiple>
      <qc-option v-for="(item,index) in message" :value="item" :key="index"></qc-option>
    </qc-select>
    <p>{{model5}}</p>
  </div>
  <div class="input-warp">
    <qc-select v-model="model11" multiple :multiple-limit="3" :multiple-show="false">
      <qc-option v-for="(item,index) in message4" :value="item" :label="item.label" :key="index"></qc-option>
    </qc-select>
    <p>{{model11}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: ['贾跃亭辞职', '可可西里申遗成功', '昆明水库泄洪垮塌', '联合国投票禁核', '北京雄安首开动车'],
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
        model11: []
      }
    }
  }
</script>
\`\`\`
`
code.filterable = {}
code.filterable.zh = `
* 通过设置属性\`filterable\`可以开启搜索模式。单选和多选都支持搜索模式。
\`\`\`javascript
<template>
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
</template>
<script>
  export default {
    data () {
      return {
        message: ['贾跃亭辞职', '可可西里申遗成功', '昆明水库泄洪垮塌', '联合国投票禁核', '北京雄安首开动车'],
        model6: '',
        model7: []
      }
    }
  }
</script>
\`\`\`
`

code.size = {}
code.size.zh = `
* \`qc-select\`有三种尺寸：大、默认（中）、小
* 通过设置\`size\`为\`large\`、\`normal\`、\`small\`设置为大、中和小尺寸，不设置为默认（中）尺寸。
\`\`\`javascript
<template>
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
</template>
<script>
  export default {
    data () {
      return {
        message: ['贾跃亭辞职', '可可西里申遗成功', '昆明水库泄洪垮塌', '联合国投票禁核', '北京雄安首开动车'],
        model8: '',
        model9: '',
        model10: []
      }
    }
  }
</script>
\`\`\`
`

code.config = {}
code.config.zh = `
### qc-elect props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value      |   空     |    [String, Number, Array]   |  指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array |
| multiple   |    可不传，默认为false       |    Boolean  |  是否支持多选 |
| multipleLimit   |    可不传(默认0)         |    Number   |  多选时用户最多可以选择的项目数，为 0 则不限制 |
| disabled |     可不传，默认为false      |    Boolean   |  是否禁用 |
| clearable      |      默认为false      |    Boolean   | 是否可以清空选项，只在单选时有效 |
| filterable      |      默认为false       |    Boolean   | 是否支持搜索 |
| size      |      -       |    String   | 选择框大小，可选值为large和small或者不填 |
| placeholder      |     请选择      |    String   | 选择框默认文字 |
| no-data-text      |      无数据       |    String   | 选项为空时显示的文字 |
| no-match-text      |    无匹配数据  |    string   | 搜索条件无匹配时显示的文字 |
| multiple-show      |      默认为true      |    Boolean   | 是否在输入框显示所有选中的label值 |
| getLabel      |      可使用@getLabel="fn"取值      |    -   | 获取当前选中的label值 |

### qc-option props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value      |   无     |    [String, Number]   |  选项值，默认根据此属性值进行筛选，必填 |
| label   |    -      |    String  |  选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案 |
| disabled   |    可不传，默认为false         |    Boolean   |  是否禁用当前项  |

### qc-option-group props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| title      |   空     |    String   |  分组的组名 |
`
export default code
