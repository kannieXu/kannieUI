let code = {}

code.overview = {}

code.overview.zh = `
\`qc-slide\` 用于轮播多块内容时使用，这里不提供布局的解决方案，根据项目需求定制布局。
`

code.base = {}

code.base.zh = `
* \`qc-slide\`需要传入\`list\`属性，该属性是一屏中共有多少块元素，不传会抛出错误
\`\`\`javascript
<template>
  <div class="box">
    <qc-slide
      :list="3"
    >
      <qc-slide-item v-for="(item, key) in 5" :key="key">
        <p class="content" :style="{background: key%2===0?'#ccc':'#f8f8ff'}">这是第{{item}}条信息</p>
      </qc-slide-item>
    </qc-slide>
  </div>
</template>
<style lang="scss">
  .box{
    width: 400px;
    height:120px;
    margin:auto;
  }
  .qc-slide_carousel{
    width: 100%;
  }
  .content{
    padding:0;
    margin:0;
    height: 40px;
    line-height: 40px;
  }
</style>
\`\`\`
`


code.direction = {}
code.direction.zh = `
* 可通过设置\`direction\`设置切换方向，默认是\`vertical\`
\`\`\`javascript
<template>
  <div class="container">
    <qc-slide
      :list="3"
      direction="horizontal"
    >
      <qc-slide-item v-for="(item, key) in 5" :key="key" class="container-item">
        <p class="container-content" :style="{background: key%2===0?'#ccc':'#f8f8ff'}">这是第{{item}}条信息</p>
      </qc-slide-item>
    </qc-slide>
  </div>
</template>
<style lang="scss">
  .container{
    width: 900px;
    height: 150px;
    margin: auto;
    .container-item{
      width: 300px;
      display: inline-block;
      height: 150px;
      text-align:center;
      .container-content{
        line-height:150px;
      }
    }
  }
</style>
\`\`\`
`
code.interval = {}
code.interval.zh = `
* 可通过设置\`interval\`设置切换延时，默认是\`3000\`
\`\`\`javascript
<template>
  <div class="box">
    <qc-slide
      :list="3"
      :interval="4000"
    >
      <qc-slide-item v-for="(item, key) in 5" :key="key">
        <p class="content" :style="{background: key%2===0?'#ccc':'#f8f8ff'}">这是第{{item}}条信息</p>
      </qc-slide-item>
    </qc-slide>
  </div>
</template>
<style lang="scss">
  .box{
    width: 400px;
    height:120px;
    margin:auto;
  }
  .qc-slide_carousel{
    width: 100%;
  }
  .content{
    padding:0;
    margin:0;
    height: 40px;
    line-height: 40px;
  }
</style>
\`\`\`
`

code.auto = {}
code.auto.zh = `
* 可通过设置\`is-auto\`设置是否自动切换，默认是\`false\`
\`\`\`javascript
<template>
 <div class="box">
    <qc-slide
      :list="3"
      :is-auto="false"
    >
      <qc-slide-item v-for="(item, key) in 5" :key="key">
        <p class="content" :style="{background: key%2===0?'#ccc':'#f8f8ff'}">这是第{{item}}条信息</p>
      </qc-slide-item>
    </qc-slide>
  </div>
</template>
<style lang="scss">
  .box{
    width: 400px;
    height:120px;
    margin:auto;
  }
  .qc-slide_carousel{
    width: 100%;
  }
  .content{
    padding:0;
    margin:0;
    height: 40px;
    line-height: 40px;
  }
</style>
\`\`\`
`
code.duration = {}
code.duration.zh = `
* 可通过设置\`is-auto\`设置是否自动切换，默认是\`false\`
\`\`\`javascript
<template>
  <div class="container">
    <qc-slide
      :list="3"
      :duration="400"
      direction="horizontal"
    >
      <qc-slide-item v-for="(item, key) in 5" :key="key" class="container-item">
        <p class="container-content" :style="{background: key%2===0?'#ccc':'#f8f8ff'}">这是第{{item}}条信息</p>
      </qc-slide-item>
    </qc-slide>
  </div>
</template>
<style lang="scss">
  .container{
    width: 900px;
    height: 150px;
    margin: auto;
    .container-item{
      width: 300px;
      display: inline-block;
      height: 150px;
      text-align:center;
      .container-content{
        line-height:150px;
      }
    }
  }
</style>
\`\`\`
`

code.indicator = {}
code.indicator.zh = `
* 具体根据业务场景定
\`\`\`javascript
<template>
  <div class="container">
    <qc-slide
      :list="3"
      direction="horizontal"
      ref="slide"
    >
      <qc-slide-item v-for="(item, key) in 5" :key="key" class="container-item">
        <p class="container-content" :style="{background: key%2===0?'#ccc':'#f8f8ff'}">这是第{{item}}条信息</p>
      </qc-slide-item>
    </qc-slide>
  </div>
  <div class="indicator">
    <button 
      @click="$refs.slide.handelPrev()"
      @mouseenter.stop="$refs.slide.stop()" 
      @mouseleave.stop="$refs.slide.autoPlay()"
    >prev</button>
    <button 
      @click="$refs.slide.handelNext()"
      @mouseenter.stop="$refs.slide.stop()" 
      @mouseleave.stop="$refs.slide.autoPlay()"
    >next</button>
  </div>
</template>
<style lang="scss">
  .container{
    width: 900px;
    height: 150px;
    margin: auto;
    .container-item{
      width: 300px;
      display: inline-block;
      height: 150px;
      text-align:center;
      .container-content{
        line-height:150px;
      }
    }
  }
  .indicator{
    margin-top: 20px;
    text-align:center;
  }
</style>
\`\`\`
`

code.config = {}
code.config.zh = `
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| direction      | 可不传(默认vertical)     |    String   |  切换方向 |
| interval   |    可不传(默认3000)         |    Number   |  切换时间间隔，单位毫秒 |
| list   |    必传        |    Number   |  当前一屏展示的内容有多少个 |
| isAuto |      可不传(默认true)       |    Boolean   |  是否自动切换 |
| duration      |      可不传(默认300)       |    Number   | 切换动画时间，最多(1000)毫秒 |
`
export default code
