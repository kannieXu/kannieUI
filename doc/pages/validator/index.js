let code = {}

code.overview = {}

code.overview.zh = `
\`validator\` 提供了表单验证功能，通过Vue自定义实现核心功能，现阶段包括了正则验证，相同值验证，不同值验证，区间值验证，空值验证，提供了直接在input标签应用验证失败的报错提示、在组件使用向父组件传递错误信息和异步校验。
`

code.base = {}

code.base.zh = `
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:reg="{id:'phone',format:'Mobile',title:'电话'}" />
    <div v-qyValidator-msg:phone></div>
  </div>
</template>
\`\`\`
`
code.showPages = {}
code.showPages.zh = `
* 默认规则使用,展示代码为验证UserName(4-16位数字或字母) (具体规则请看最下面表格)
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:reg="{id:'username',format:'UserName',title:'username'}" />
    <div v-qyValidator-msg:username></div>
  </div>
</template>
\`\`\`
`

code.realName = {}
code.realName.zh = `
* 正则表达式使用,展示代码为验证中文名
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:reg="{id:'RealName',format:/^[\u4e00-\u9fa5 ]{2,10}$/,title:'RealName'}" />
    <div v-qyValidator-msg:RealName></div>
  </div>
</template>
\`\`\`
`
code.nonvoid = {}
code.nonvoid.zh = `
* 验证输入是否为空值
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:nonvoid="{id:'nonvoid',format:true,title:'nonvoid'}" />
    <div v-qyValidator-msg:nonvoid></div>
  </div>
</template>
\`\`\`
`

code.equal = {}
code.equal.zh = `
* 验证值是否相等
\`\`\`javascript
<template>
  <div>
    <input type='text' v-model="valueText" placeholder="请输入手机号" v-qyValidator-input:reg="{id:'test',format:'Mobile',title:'Mobile'}" />
    <div v-qyValidator-msg:test></div><br>
    <input type='text' v-qyValidator-input:reg="{id:'mytest',format:'valueText',title:'Mobile'}" />
    <div v-qyValidator-msg:mytest></div>
  </div>
</template>
<script>
  data () {
    return {
      valueText: null
    }
  }
</script>
\`\`\`
`
code.limit = {}
code.limit.zh = `
* 验证值是否在规定区间内
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:limit="{id:'limit',format:[6,10],title:'区间'}" />
    <div v-qyValidator-msg:limit></div>
</template>
\`\`\`
`

code.currentPage = {}
code.currentPage.zh = `
* 如果input封装成一个组件，那么需要用到'v-qyValidator-error'这一个指令，通过在父组件传入验证规则，子组件的input会通过emit'errormsg'告诉父组件验证失败信息
\`\`\`javascript
<template>
  <div>
    <my-input :validator-obj="validatorObj" @errormsg='msgPrint'></my-input>
    <div>{{printVal}}</div>
  </div>
</template>
<script>
import myInput from './myinput.vue'
export default {
  data () {
    return {
      validatorObj: {
        id: 'myInput',
        format: 'Mobile',
        title: '电话',
        request: '这是组件的测试'
      },
      printVal: ''
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
\`\`\`
* myinput组件里的代码
\`\`\`javascript
<template>
  <div class="input">
    <input type="text" v-qyValidator-input:reg="validatorObj">
    <div v-qyValidator-error:id="{id:id}"></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    props: {
      validatorObj: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        id: this.validatorObj.id
      }
    }
  }
</script>
\`\`\`
`

code.go = {}
code.go.zh = `
* validaotr里面自定义一套报错规则，需要注意的是规则的主体是用户通过title传入，所以title值是必须传入，除非传入用户自己自定义的错误信息
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:limit="{id:'limit',format:[6,10],title:'区间'}" />
    <div v-qyValidator-msg:limit></div>
  </div>
</template>
\`\`\`
`
code.goTo = {}
code.goTo.zh = `
* validaotr可通过request传入自定义的错误信息，此时title可不传
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:limit="{id:'mylimiT',format:[6,10],request:'你输入的区间值出错啦！！'}" />
    <div v-qyValidator-msg:mylimiT></div>
  </div>
</template>
\`\`\`
`

code.changepage = {}
code.changepage.zh = `
* 用户可通过async传入后台接口地址，请求方式，数据类型进行异步校验(暂不支持跨域)，另外由于后台接口返回格式无法统一，所以需要传入后台定义的错误信息字段名及验证成功的状态码，status为状态码,code为字段名
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:reg="{id:'async',format:'Mobile',async:obj,urlcode:'msg',status:4001,code:'code'}" />
    <div v-qyValidator-msg:async></div>
  </div>
</template>
<script>
  data () {
    return {
      obj: {
        url: 'http://localhost:8080/static/data.json', 
        type: 'GET',
        dataType: 'json'
      }
    }
  }
</script>
\`\`\`
`

code.click = {}
code.click.zh = `
* 如果用户需要通过点击提交时验证一遍需要验证的表单，可用'v-qyValidator-final-check:method',后面keys是一个数组，里面为需要验证的表单id
\`\`\`javascript
<template>
  <div>
    <input type='text' v-qyValidator-input:limit="{id:'click',format:[6,10],request:'你输入的区间值出错啦！'}" />
    <div v-qyValidator-msg:click></div>
    <br>
    <button style="width:100px;height:100px;background: #ccc;border:none" v-qyValidator-final-check:method="{keys:['click']}"></button>
  </div>
</template>
\`\`\`
`

code.config = {}
code.config.zh = `
| name        | description |
| ----------- |-------------|
| UserName      | 用户名数字或者字母(4-16位) |
| Password   |  密码数字或者字母还有部分特殊符号，密码长度6-16 |
| Mobile   |  手机号码 |
| RealName |  中文名 |
| IdCard   | 身份证 |
| BankNum  | 银行卡 |
| Money    | 金额 |
| Email    | 邮箱 |
`
export default code
