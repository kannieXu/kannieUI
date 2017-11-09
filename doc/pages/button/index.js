let code = {}

code.overview = {}

code.overview.zh = `
\`button\` 提供了简单的按钮组件用法。
`

code.base = {}

code.base.zh = `
* \`Button\` 组件默认提供7种主题，由\`type\`属性来定义，默认为\`default\`
\`\`\`javascript
<template>
  <div>
    <qc-button>默认按钮</qc-button>
    <qc-button type='primary'>主要按钮</qc-button>
    <qc-button type='text'>文字按钮</qc-button>
  </div>
</template>
\`\`\`
`
code.disabled = {}
code.disabled.zh = `
* 使用\`disabled\`属性来定义按钮是否可用，它接受一个\`Boolean\`值。
\`\`\`javascript
<template>
  <div>
    <qc-button type='primary' disabled>主要按钮</qc-button>
    <qc-button type='text' disabled>主要按钮</qc-button>
  </div>
</template>
\`\`\`
`
code.color = {}
code.color.zh = `
* 不同的颜色倾向代表不同的提示
\`\`\`javascript
<template>
  <div>
    <qc-button type='success'>成功按钮</qc-button>
    <qc-button type='warning'>警告按钮</qc-button>
    <qc-button type='danger'>危险按钮</qc-button>
    <qc-button type='info'>信息按钮</qc-button>
  </div>
</template>
\`\`\`
`
code.plain = {}
code.plain.zh = `
* 朴素按钮同样设置了不同的\`type\`属性对应的样式（可选值同上），默认为\`primary\`。可通过设置\`plain\`属性，它接受一个\`Boolean\`。
* 设置\`plain\`后，\`type\`虽然可以为\`text\`，但是是没有意义的，会显示为\`text button\`的样式。
\`\`\`javascript
<template>
  <div>
    <qc-button type='success' plain>成功按钮</qc-button>
    <qc-button type='warning' plain>警告按钮</qc-button>
    <qc-button type='danger' plain>危险按钮</qc-button>
    <qc-button type='info' plain>信息按钮</qc-button>
  </div>
</template>
\`\`\`
`
code.icon = {}
code.icon.zh = `
* 通过 \`icon\` 属性可以在输入框右边加一个图标(只对input有效); 
* \`icon-options\`是一个对象，里面可以传入两个值。\`class\`代表当前用户所要展示icon图标的类名；\`family\`代表当前用户字体图标配置好的font-family名字(目前没有一套较为完整的icon图标库，所以这个值相当于必传)
\`\`\`javascript
<template>
  <div>
    <qc-button type="success" icon :icon-options="{family: 'icomoon', class: 'icon-addcart'}">addCart</qc-button>
  </div>
\`\`\`
`


code.group = {}
code.group.zh = `
* 使用\`<qc-button-group>\`标签来嵌套你的按钮。
\`\`\`javascript
<template>
  <div>
    <qc-button-group>
      <qc-button type="success">成功按钮</qc-button>
      <qc-button type="primary">常用按钮</qc-button>
      <qc-button type="success" icon :icon-options="{family: 'icomoon', class: 'icon-addcart'}">addCart</qc-button>
    </qc-button-group> 
  </div>
</template>
\`\`\`
`

code.loading = {}
code.loading.zh = `
要设置为 \`loading\` 状态，只要设置\`loading\`属性为\`true\`即可
\`\`\`javascript
<template>
  <div>
    <qc-button type="primary" loading>loading</qc-button>
  </div>
</template>
\`\`\`
`
code.size = {}
code.size.zh = `
* 要设置为 \`loading\` 状态，只要设置\`loading\`属性为\`true\`即可
\`\`\`javascript
<template>
  <div>
    <qc-button size="large" type="primary">大型按钮</qc-button>
    <qc-button size="normal" type="primary">中型按钮</qc-button>
    <qc-button size="small" type="primary">小型按钮</qc-button>
  </div>
</template>
\`\`\`
`
code.borderRadius = {}
code.borderRadius.zh = `
* 可通过设置\`btn-width\`来给定\`button\`的宽度，该属性接收一个\`Number\`
* 可通过设置\`border-radius\`开启圆角，该属性接收\`Boolean\`，默认是\`false\`
\`\`\`javascript
<template>
  <div>
    <div>
      <qc-button type="success">默认宽度随文字长度改变</qc-button>
      <qc-button type="success" :btn-width="200">指定宽度</qc-button>
    </div>
    <br>
    <div>
      <qc-button type="success">默认不开启圆角</qc-button>
      <qc-button type="success" border-radius>开启圆角</qc-button>
    </div> 
  </div>
</template>
\`\`\`
`
code.verification = {}
code.verification.zh = `
* 可通过设置\`verification-code\`开启验证码，该属性接收一个\`Boolean\`,默认是\`false\`
* 可通过设置\`codeTime\`设置验证码等待时间，该属性接收一个\`Number\`,默认是\`60\`
* 开启验证码时，由于button默认是根据文字宽度变化，所以这里需要配置宽度，以防止\`button\`宽度变化
\`\`\`javascript
<template>
  <div>
    <qc-button type="success" verification-code :code-time="15" :btn-width="120">address</qc-button>
  </div>
</template>
\`\`\`
`

code.config = {}
code.config.zh = `
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| size      | 可不传(默认是中型)     |    String   |  尺寸(large,normal,small) |
| type   |    可不传(默认是default)        |    String   |  类型(primary,success,warning,danger,info,text) |
| plain   |    可不传(默认false)         |    Boolean   |  是否朴素按钮 |
| loading |      可不传(默认false)       |    Boolean   |  是否加载中状态 |
| disabled      |      可不传(默认false)       |    Boolean   | 是否禁用状态 |
| icon      |      可不传(默认false)       |    Boolean   | 是否开启图标 |
| icon-options      |      开启icon后必传       |    Object   | 配置图标的类名class和font-family |
| native-type   |    可不传(默认button)        |    String   |  原生 type 属性(button,submit,reset) |
| autofocus   |    可不传(默认false)         |    Boolean   |  是否默认聚焦 |
| btn-width |      可不传(默认跟随文字长度变化)       |    Number   |  自定义button宽度 |
| border-radius      |      可不传(默认false)       |    Boolean   | 是否开启圆角 |
| verification-code      |      可不传(默认false)       |    Boolean   | 是否开启验证码 |
| code-time      |      可不传(默认60)       |    Number   | 设置验证码时间 |
`
export default code
