let code = {}

code.overview = {}

code.overview.zh = `
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
从场景上说，\`qc-modal\` 的作用是美化系统自带的 \`alert\`、\`confirm\` 和 \`prompt\`,在保留当前页面状态的情况下，告知用户并承载相关操作。。
`

code.base = {}

code.base.zh = `
* 基本用法。可以使用 \`v-model\` 双向绑定数据以是否展示弹框。
* 可使用\`title\`配置弹框的头部信息，\`content\`配置弹框展示的内容(支持插入html文本块)
* 当需要扩展头底部时，可使用\`slot\`插入自己定制的头底部dom，其name为\`footer\` 和 \`header\`
\`\`\`javascript
<template>
  <div class="input-warp">
    <button class="click_me" @click="model1=true">点我</button>
    <qc-modal v-model="model1" title="这是一个弹框" content="这是一块内容区域" :width="600"></qc-modal>
    <p>{{model1}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model1: false
    }
  }
}
</script>
\`\`\`
`

code.close = {}
code.close.zh = `
* 通过设置\`closed\`显示删除按钮。
* 可以设置\`is-mark-close\`决定是否点击外层modal关闭弹框，为\`true\`则可以关闭
\`\`\`javascript
<template>
  <div class="input-warp">
    <button class="click_me" @click="model2=true">点我</button>
    <qc-modal :is-mark-close="false" :closed="true" v-model="model2" title="这是一个弹框2" content="这是一块内容区域2" :width="600"></qc-modal>
    <p>{{model2}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model2: false
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

code.button = {}
code.button.zh = `
* 使用\`confirm-text\`可配置确认按钮文本内容，\`cancel-text\`可配置取消按钮文本内容
* 使用\`confirm-button\`可配置确认按钮样式，其配置继承button组件的props配置，\`cancel-button\`可配置取消按钮样式，其配置继承button组件的props配置
* 使用\`show-confirm\`可配置是否显示确认按钮，\`show-cancel\`可配置是否显示取消按钮
\`\`\`javascript
<template>
  <div class="input-warp">
    <button class="click_me" @click="model3=true">点我</button>
    <qc-modal :closed="true" v-model="model3" title="这是一个弹框3" content="这是一块内容区域3" :width="600" confirm-text="confirm" cancel-text="cancel"></qc-modal>
    <p>{{model3}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        model3: false
      }
    }
  }
</script>
\`\`\`
`

code.event = {}
code.event.zh = `
* \`confirm-callback\`，点击确认按钮派发的事件。
* \`cancel-callback\` 点击取消按钮派发的事件。
* \`close-modal\` 点击关闭按钮或者外部弹层派发的事件。
\`\`\`javascript
<template>
  <div class="input-warp">
    <button class="click_me" @click="model4=true">点我</button>
    <qc-modal :is-mark-close="true" :closed="true" v-model="model4" title="这是一个弹框4" content="这是一块内容区域4" :width="600" 
    @cancel-callback="myCancelCallback" @confirm-callback="myConfirmCallback" @close-modal="myCloseModal"></qc-modal>
    <p>{{model4}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        model4: false
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
      }
    }
  }
</script>
\`\`\`
`
code.scroll = {}
code.scroll.zh = `
* 通过设置属性\`scrollable\`设置是否显示滚动条。
\`\`\`javascript
<template>
  <div class="input-warp">
    <button class="click_me" @click="model6=true">点我</button>
    <qc-modal :is-mark-close="true" :scrollable="true" :closed="true" v-model="model6" title="这是一个弹框5" content="这是一块内容区域5" :width="600" ></qc-modal>
    <p>{{model6}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        model6: false
      }
    }
  }
</script>
\`\`\`
`

code.js = {}
code.js.zh = `
* 有些时候我们不想在html书写dom结构来调用弹框，而是希望能够在JavaScript中直接通过方法去调用，\` this.$QC.modal.show\`就是可以通过js方法调用，其所有配置继承modal组件的props。
\`\`\`javascript
<template>
  <div class="input-warp">
    <button class="click_me" @click="clickMe">点我</button>
  </div>
</template>
<script>
  export default {
    methods: {
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
\`\`\`
`

code.config = {}
code.config.zh = `
### qc-modal props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value      |   false     |    Boolean   | 是否显示弹框，为true显示  |
| width   |    默认为520       |    [Number, String]  |  设置弹框宽度 |
| title   |    默认''         |    String   |  设置弹框头部信息 |
| closed |     可不传，默认为false      |    Boolean   |  是否显示关闭按钮 |
| is-mark-close      |      默认为false      |    Boolean   | 是否通过点击外层弹层关闭弹框 |
| confirm-text      |      默认为'确定'      |    String   | 修改确认按钮文本 |
| cancel-text      |      默认为'取消'       |    String   | 修改取消按钮文本 |
| confirm-button      |     默认为{}      |    Object   | 确认按钮样式配置，继承button组件的props |
| cancel-button      |      默认为{}       |    Object   | 取消按钮样式配置，继承button组件的props |
| scrollable     |    默认为false  |    Boolean   | 是否允许弹框出现滚动条 |
| content      |      默认为''      |    String   | 配置弹框内容，可以是html文本块 |
| button-position      |      默认是'right'      |    String   | 按钮位置 |
| confirm     |     默认为(){}      |    Function   | 确认按钮回调事件 |
| cancel     |     默认为(){}      |    Function   | 取消按钮回调事件 |
| show-cancel     |      默认为true      |    Boolean   | 是否显示取消按钮 |
| show-confirm     |    默认为true |    Boolean   | 是否显示确认按钮 |
| disabled-confirm      |      默认为false      |    Boolean   | 是否禁用取消按钮 |

### qc-modal emit
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| close-modal      |   -    |    -   |  点击关闭按钮或者外部弹层回调事件 |
| cancel-callback     |   -    |    -   |  点击取消按钮回调事件 |
| confirm-callback    |   -    |    -   |  点击确认按钮回调事件 |
`
export default code
