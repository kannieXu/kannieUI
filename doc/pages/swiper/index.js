let code = {}

code.overview = {}

code.overview.zh = `
\`qc-swiper\` 常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
`

code.base = {}

code.base.zh = `
* 通过给定\`height\`确定容器高度，默认\`300\`
\`\`\`javascript
<template>
  <div>
    <qc-swiper
      :height="300"
    >
      <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
        <p>这是第{{item}}张</p>
      </qc-swiper-item>
    </qc-swiper>
  </div>
</template>
\`\`\`
`
code.ratio = {}
code.ratio.zh = `
* 如果不想设置高度时，为了使图片比例不失真，可以通过设置\`ratio\`属性设置高度和宽度的比例，该属性接收\`Number\`
\`\`\`javascript
<template>
  <div>
    <qc-swiper
      :ratio="1/3"
    >
      <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
        <p>这是第{{item}}张</p>
      </qc-swiper-item>
    </qc-swiper>
  </div>
</template>
\`\`\`
`
code.direction = {}
code.direction.zh = `
* 可通过设置\`direction\`的值来改变轮播方向，默认是\`horizontal\`横向轮播
\`\`\`javascript
<template>
  <div>
    <qc-swiper
      :height="300"
      direction="horizontal"
    >
      <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
        <p>这是第{{item}}张</p>
      </qc-swiper-item>
    </qc-swiper>
    <br>
    <qc-swiper
      :height="300"
      direction="vertical"
    >
      <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
        <p>这是第{{item}}张</p>
      </qc-swiper-item>
    </qc-swiper>
  </div>
</template>
\`\`\`
`

code.loop = {}
code.loop.zh = `
* 可通过设置\`loop\`的值来设置轮播是否循环,默认是\`true\`
\`\`\`javascript
<template>
  <div>
    <qc-swiper
      :height="300"
      :loop="true"
    >
      <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
        <p>这是第{{item}}张</p>
      </qc-swiper-item>
    </qc-swiper>
    <br>
    <qc-swiper
      :height="300"
      :loop="false"
    >
      <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
        <p>这是第{{item}}张</p>
      </qc-swiper-item>
    </qc-swiper>
  </div>
</template>
\`\`\`
`

code.interval = {}
code.interval.zh = `
* 可通过\`interval\`属性设置轮播图轮播延时，当\`interval\`设置为\`0\`时，轮播图关闭自动轮播，默认设置\`3000\`
\`\`\`javascript
<template>
  <div class="container">
    <div class="inner">
      <qc-swiper
        :height="300"
        :interval="5000"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
    <div class="inner">
      <qc-swiper
        :height="300"
        :interval="0"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
  </div>
</template>
\`\`\`
`
code.duration = {}
code.duration.zh = `
* 可通过\`duration\`属性设置轮播图动画时间，默认设置\`500\`
\`\`\`javascript
<template>
  <div class="container">
    <div class="inner">
      <qc-swiper
        :height="300"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
    <div class="inner">
      <qc-swiper
        :height="300"
        :duration="1000"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
  </div>
</template>
\`\`\`
`
code.value = {}
code.value.zh = `
* 可通过双向绑定值改变第一次轮播展示的图片,同时\`qc-swiper\`每次展示的图片的\`index\`，可以通过监听这个双向绑定值获得
\`\`\`javascript
<template>
  <div class="container">
    <div class="inner">
      <qc-swiper
        :height="300"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
    <div class="inner">
      <qc-swiper
        :height="300"
        v-model="pageNum"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        pageNum: 2
      }
    }
  }
</script>
\`\`\`
`
code.fade = {}
code.fade.zh = `
* 可通过设置\`fade\`的值为\`true\`设置轮播图轮播的效果为渐隐渐现，默认为\`false\`
\`\`\`javascript
<template>
  <div class="container">
    <div class="inner">
      <qc-swiper
        :height="300"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
    <div class="inner">
      <qc-swiper
        :height="300"
        :fade="true"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
  </div>
</template>
\`\`\`
`
code.trigger = {}
code.trigger.zh = `
* 可通过设置\`trigger\`的值设置轮播图指示器触发的事件方式，默认是\`click\`
* 可通过设置\`arrow\`的值设置轮播图左右箭头出现的方式，默认是\`hover\`
\`\`\`javascript
<template>
  <div class="container">
    <div class="inner">
      <qc-swiper
        :height="300"
        trigger="hover"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
    <div class="inner">
      <qc-swiper
        :height="300"
        arrow="always"
      >
        <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
          <p>这是第{{item}}张</p>
        </qc-swiper-item>
      </qc-swiper>
    </div>
  </div>
</template>
\`\`\`
`
code.indicator = {}
code.indicator.zh = `
* 可通过设置\`indicator\`的值为\`true\`取消默认配置的左右箭头和指示器,默认是\`false\`
* 通过在\`qc-swiper\`绑定ref，调用组件里面的方法，用户可自定义指示器和左右箭头的布局方式,只需要在自定义的div加入插槽名\`indicators\`
\`\`\`javascript
<template>
  <div class="box">
    <qc-swiper
      :height="300"
      :indicator="true"
      ref="indicatorDom"
    >
      <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
        <p>这是第{{item}}张</p>
      </qc-swiper-item>
    </qc-swiper>
    <div slot='indicators' class="btn">
      <button @click="$refs.indicatorDom.pre()">前</button>
      <button @click="$refs.indicatorDom.next()">后</button>
      <button @click="$refs.indicatorDom.goto(0)">0</button>
      <button @click="$refs.indicatorDom.goto(1)">1</button>
      <button @click="$refs.indicatorDom.goto(2)">2</button>
      <button @click="$refs.indicatorDom.goto(3)">3</button>
    </div>
  </div>
</template>
\`\`\`
`
code.config = {}
code.config.zh = `
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| height      | 可不传(默认300)     |    Number   |  容器高度 |
| ratio   |    可不传         |    Number   |  设置容器高宽比 |
| direction   |    可不传(默认horizontal)         |    String   |  轮播切换方向(vertical或horizontal) |
| loop |      可不传(默认true)       |    Boolean   |  是否设置循环播放 |
| interval      |      可不传(默认3000)       |    Number   | 自动切换的时间间隔，单位为毫秒 |
| duration      |      可不传(默认500)       |    Number   | 切换效果的动画时间，单位为毫秒 |
| value      | 可不传(默认0)     |    Number   |  初始状态激活的幻灯片的索引，从 0 开始 |
| fade   |    可不传(默认false)         |    Boolean   |  设置切换效果为渐隐渐现 |
| indicator   |    可不传(默认false)         |    Boolean   |  是否自定义指示器和轮播左右箭头 |
| trigger |      可不传(默认click)       |    String   |  指示器的触发方式(click或hover) |
| arrow      |      可不传(默认hover)       |    String   | 切换箭头的显示时机(always/hover/never) |
`
export default code
