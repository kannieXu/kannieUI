let code = {}

code.overview = {}

code.overview.zh = `
基本表单组件，支持 \`input\` 和 \`textarea\` ，并在原生控件基础上进行了功能扩展，可以组合使用。
`

code.base = {}

code.base.zh = `
* border-radius为false,则input或者textarea没有圆角
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-input type="text" placeholder='请输入...' :border-radius="false">
    </qc-input>
  </div>
</template>
\`\`\`
`
code.borderRadius = {}
code.borderRadius.zh = `
* border-radius为true,则input或者textarea有圆角
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-input type="text" placeholder='请输入...' :border-radius="true">
    </qc-input>
  </div>
</template>
\`\`\`
`

code.disabled = {}
code.disabled.zh = `
* 通过添加disabled属性可设置为不可用状态。
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-input type="text" placeholder='请输入...' :border-radius="false" disabled>
    </qc-input>
  </div>
</template>
\`\`\`
`
code.icon = {}
code.icon.zh = `
* 通过 icon 属性可以在输入框右边加一个图标(只对input有效); 
* icon-options是一个对象，里面可以传入两个值。\`class\`代表当前用户所要展示icon图标的类名；\`family\`代表当前用户字体图标配置好的font-family名字(目前没有一套较为完整的icon图标库，所以这个值相当于必传)
* on-icon-click是icon触发的点击事件，可以通过 on-icon-click 钩子函数来在点击图标后执行需要的逻辑
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-input type="text" 
      placeholder='请输入...' 
      :border-radius="true" 
      :icon="true" 
      :icon-options="{class: 'icon-addcart', family: 'icomoon'}}"
      :on-icon-click="testIconClick">
    </qc-input>
  </div>
</template>
<script>
  export default {
    methods: {
      testIconClick () {
        console.log('on-icon-click')
      }
    }
  }
</script>
\`\`\`
`

code.text = {}
code.text.zh = `
* 通过设置属性 \`type\` 为 \`textarea\` 来使用文本域，用于多行输入。
* 通过设置属性 rows 控制文本域默认显示的行数(只对textarea有效)。
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-input v-model="value1" type="textarea" placeholder='请输入...' :border-radius="true" :rows="3">
    </qc-input>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value1: ''
      }
    }
  }
</script>
\`\`\`
`

code.autosize = {}
code.autosize.zh = `
* 设置属性 \`autosize\`，文本域会自动适应高度的变化(只对textarea有效)。
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-input v-model="value2" type="textarea" placeholder='请输入...' :border-radius="true" :autosize="true">
    </qc-input>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value2: ''
      }
    }
  }
</script>
\`\`\`
`
code.autosize2 = {}
code.autosize2.zh = `
* \`autosize\`也可以设定为一个对象，指定最小行数和最大行数(只对textarea有效)。
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-input type="textarea" placeholder='请输入...' :border-radius="true" :autosize="{minRows: 2,maxRows: 5}">
    </qc-input>
  </div>
</template>
\`\`\`
`
code.slot = {}
code.slot.zh = `
* 通过前置和后置的 \`slot\` 可以实现复合型的输入框。。
\`\`\`javascript
<template>
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
</template>
\`\`\`
`
code.size = {}
code.size.zh = `
* 输入框有三种尺寸：大、默认（中）、小
* 通过设置\`size\`为\`large\`、\`normal\`、\`small\`设置为大、中和小尺寸，不设置为默认（大）尺寸。
\`\`\`javascript
<template>
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
</template>
\`\`\`
`

code.number = {}
code.number.zh = `
* 当输入框只允许输入数字类型时，可配置\`is-number\`为\`true\`来限制输入框输入的数据类型
* 通过设置\`decimal-point-count\`的值来设置允许小数点后几位
\`\`\`javascript
<template>
   <div class="input-warp">
      <qc-input is-number type="text" placeholder='请输入...' :border-radius="false">
      </qc-input>
    </div>
    <div class="input-warp">
      <qc-input is-number :decimal-point-count="2" type="text" placeholder='请输入...' :border-radius="false">
      </qc-input>
    </div>
</template>
\`\`\`
`

code.config = {}
code.config.zh = `
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| type      | 非必传，默认为text     |    String   |  输入框类型，可选值为 text、password 或 textarea |
| value   |    需要双向绑定，默认为空         |    [String, Number]   |  绑定的值，可使用 v-model 双向绑定 |
| size   |    可不传(默认使用large)         |    String   |  输入框尺寸(small、normal、large) |
| placeholder |     -       |    String   |  占位文本 |
| disabled      |      默认为false      |    Boolean   | 设置输入框为禁用状态 |
| readonly      |      默认为false       |    Boolean   | 设置输入框为只读 |
| maxlength      |      -       |    Number   | 最大输入长度 |
| icon      |      默认为false       |    Boolean   | 输入框尾部图标，仅在 text 类型下有效 |
| icon-options      |      开启icon后必传       |    Object   | 配置尾部图标的类名和font-family |
| on-icon-click      |      -       |    function   | 点击 Input 内的图标的钩子函数 |
| rows      |      默认为2       |    Number   | 文本域默认行数，仅在 textarea 类型下有效 |
| autosize      |      默认为false       |    [Boolean,Object]   | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } |
| autofocus      |      默认为false       |    Boolean    |  自动获取焦点 |
| border-radius      |      默认为false       |    Boolean    |  input或textarea是否开启圆角 |
| is-number      |      默认为false       |    Boolean    |  是否只可以输入数字 |
| decimal-point-count      |      默认为0       |    Number    |  小数点后几位 |
`
export default code
