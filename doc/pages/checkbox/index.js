let code = {}

code.overview = {}

code.overview.zh = `
 基本组件 —— \`checkbox\`多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。。
`

code.base = {}

code.base.zh = `
* \`checkbox\` 组件可使用 v-model 可以双向绑定数据。
\`\`\`javascript
<template>
  <div>
    <qc-checkbox v-model="box1">Checkbox</qc-checkbox>
    <p>{{box1}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        box1: false
      }
    }
  }
</script>
\`\`\`
`

code.disabled = {}
code.disabled.zh = `
* 使用\`disabled\`属性来定义checkbox是否可用，它接受一个\`Boolean\`值。
\`\`\`javascript
<template>
  <div>
    <qc-checkbox v-model="box4" disabled>disabled</qc-checkbox>
    <qc-checkbox v-model="box5" disabled>被选中了</qc-checkbox>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        box4: false,
        box5: true
      }
    }
  }
</script>
\`\`\`
`
code.limit = {}
code.limit.zh = `
* 使用 \`min\` 和 \`max\` 属性能够限制可以被勾选的项目的数量。
\`\`\`javascript
<template>
  <div>
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
  </div>
</template>
<script>
  export default {
    data () {
      return {
        arr2: ['Luffy', 'Usopp']
      }
    }
  }
</script>
\`\`\`
`

code.group = {}
code.group.zh = `
* 使用\`qc-checkbox-group\`配合数组来生成组合。在组合使用时，\`qc-checkbox\` 使用 \`label\` 来自动判断选中状态。每个 \`qc-checkbox\` 的内容可以自定义，如不填写则默认使用 \`label\` 的值。
\`\`\`javascript
<template>
  <div>
    <qc-checkbox-group v-model="arr" 
        >
      <qc-checkbox label="twitter"><span>推特</span></qc-checkbox>
      <qc-checkbox label="facebook"><span>脸书</span></qc-checkbox>
      <qc-checkbox label="Alibaba"><span>阿里巴巴</span></qc-checkbox>
      <qc-checkbox label="Baidu"><span>百度</span></qc-checkbox>
    </qc-checkbox-group>
    <p>{{arr}}<p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        arr: ['Alibaba']
      }
    }
  }
</script>
\`\`\`
`

code.borderRadius = {}
code.borderRadius.zh = `
* 可通过设置\`border-radius\`开启圆角，该属性接收\`Boolean\`，默认是\`false\`
\`\`\`javascript
<template>
  <div>
    <qc-checkbox v-model="box2" border-radius>Checkbox</qc-checkbox>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        box2: false
      }
    }
  }
</script>
\`\`\`
`
code.checkboxBorder = {}
code.checkboxBorder.zh = `
* 可通过设置\`checkbox-border\`和\`checkbox-background\`来改变checkbox选中后显示的颜色，该属性接收一个\`String\`
\`\`\`javascript
<template>
  <div>
    <qc-checkbox v-model="box3" checkbox-border="#37ac68" checkbox-background="#37ac68">改变颜色</qc-checkbox>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        box3: false
      }
    }
  }
</script>
\`\`\`
`

code.config = {}
code.config.zh = `
\`qc-checkbox\` props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value      | 可不传(默认是false)     |    Boolean   |  只在单独使用时有效。可以使用 v-model 双向绑定数据 |
| label   |    -       |    [String, Number, Boolean]   |  只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中 |
| disabled   |    可不传(默认false)         |    Boolean   |   是否禁用当前项 |
| borderRadius |      可不传(默认false)       |    Boolean   |  是否显示圆角 |
| checkboxBorder      |      可不传       |    String   | 自定义选中颜色 |
| checkboxBackground      |      可不传       |    String   | 自定义选中颜色 |
`
code.config2 = {}
code.config2.zh = `
\`qc-checkbox-group\` props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value      |      可不传(默认是[])       |    Array   | 指定选中项目的集合，可以使用 v-model 双向绑定数据 |
| max      |      -       |    Number   | 可被勾选的 checkbox 的最大数量 |
`
export default code
