let code = {}

code.overview = {}

code.overview.zh = `
\`pagination\` 提供了简单的分页组件用法。
`

code.base = {}

code.base.zh = `
\`\`\`javascript
<template>
  <div>
    <pagination :total-lists="200" :show-lists="10"></pagination>
  </div>
</template>
\`\`\`
`
code.showPages = {}
code.showPages.zh = `
\`\`\`javascript
<template>
  <pagination :total-lists="200" :show-lists="10" :show-pages="5"></pagination>
</template>
\`\`\`
`
code.currentPage = {}
code.currentPage.zh = `
\`\`\`javascript
<template>
  <pagination :total-lists="total" :show-lists="10" :show-pages="5" :currentPage="2"></pagination>
</template>
\`\`\`
`

code.go = {}
code.go.zh = `
\`\`\`javascript
<template>
  <pagination :total-lists="200" :show-lists="10" :show-pages="5" :go="true"></pagination>
</template>
\`\`\`
`

code.changepage = {}
code.changepage.zh = `
\`getPage\`是用户自己自定义的函数
\`\`\`javascript
<template>
  <pagination @changepage="getPage" :total-lists="200" :show-lists="10" :show-pages="5"></pagination>
</template>
<script>
  methods: {
    getPage (val) {
      console.log(val) //val为当前激活状态的页码数
    }
  }
</script>
\`\`\`
`
code.config = {}
code.config.zh = `
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| totalLists      | 必传     |    Number   |  分页的总条目数 |
| showLists   |    必传         |    Number   |  每一页显示的条目数 |
| showPages   |    可不传(默认显示3页)         |    Number   |  分页显示的页码数 |
| go |      可不传(默认不开启输入页码跳转)       |    Boolean   |  开启输入页码跳转功能 |
| currentPage      |      可不传(默认显示页码激活状态为第一页)       |    Number   | 改变分页组件页码数的激活状态为第几页 |
| changepage      |      绑定自定义函数       |    Function   | 组件emit当前页码数，通过changepage绑定的函数拿到当前页码数 |
`
export default code
