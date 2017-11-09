let code = {}

code.overview = {}

code.overview.zh = `
基本表单组件\`radio\` ，主要用于一组可选项单项选择，或者单独用于切换到选中状态。
`

code.base = {}

code.base.zh = `
* 使用 v-model 可以双向绑定数据。
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-radio v-model="model1" label="apple"></qc-radio>
    <p>{{model1}}</p>
    <qc-radio v-model="model2" label="apple">Apple</qc-radio>
    <p>{{model2}}</p>
  </div>
</template>
<script>
  export default {
    date () {
      return {
        model1: false,
        model2: false
      }
    }
  }
</script>
\`\`\`
`
code.group = {}
code.group.zh = `
* 使用\`qc-radio-group\`实现一组互斥的选项组。在组合使用时，\`qc-radio\` 使用 \`label\` 来自动判断。每个 \`qc-radio\` 的内容可以自定义，如不填写则默认使用 \`label\` 的值。
\`\`\`javascript
<template>
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
</template>
<script>
  export default {
    date () {
      return {
        group: '',
        group2: 'apple'
      }
    }
  }
</script>
\`\`\`
`

code.disabled = {}
code.disabled.zh = `
* 通过添加\`disabled\`属性可设置为不可用状态。
\`\`\`javascript
<template>
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
</template>
<script>
  export default {
    date () {
      return {
        group3: '',
        model3: true
      }
    }
  }
</script>
\`\`\`
`

code.vertical = {}
code.vertical.zh = `
* 通过设置\`vertical\`可垂直显示
\`\`\`javascript
<template>
  <div class="input-warp">
    <qc-radio-group v-model="group4" vertical>
      <qc-radio label="apple"></qc-radio>
      <qc-radio label="apple1"></qc-radio>
      <qc-radio label="apple2"></qc-radio>
    </qc-radio-group>
    <p>{{group4}}</p>
  </div>
</template>
<script>
  export default {
    date () {
      return {
        group4: ''
      }
    }
  }
</script>
\`\`\`
`

code.config = {}
code.config.zh = `
### qc-radio的Props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value      | 非必传，默认为false     |    Boolean   |  只在单独使用时有效。可以使用 v-model 双向绑定数据 |
| label   |    -        |    [String, Number]   |  只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目 |
| disabled      |     非必传,默认为false       |    Boolean    |  是否禁用当前项 |
| change      |     派发的event(通过@change="fn"调用)      |    -    |  在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 |
  
### qc-radio-group的Props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value      |   -     |    [String, Number]   |   指定当前选中的项目数据。可以使用 v-model 双向绑定数据 |
| vertical   |   非必传，默认为false       |    Boolean   |  是否垂直排列 |
| change      |     派发的event(通过@change="fn"调用)      |    -    | 在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发 |
`
export default code
