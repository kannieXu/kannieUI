<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_ratio": "自适应宽高比",
      "eg_base_direction": "设置轮播方向",
      "eg_base_loop": "是否循环轮播",
      "eg_base_interval": "设置延时",
      "eg_base_duration": "设置轮播切换的动画时间",
      "eg_base_value": "设置轮播开始时展示第几张图片",
      "eg_base_fade": "渐隐渐现效果",
      "eg_base_trigger": "设置指示器的触发事件和设置切换箭头出现的触发事件",
      "eg_base_indicator": "是否自定义指示器",
      "eg_base_config": "配置参数"
    }
  }
</i18n>
<template>
    <div>
      <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_block') }}</div>
        <div class="box">
           <qc-swiper
          :height="400"
        >
          <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
            <p>这是第{{item}}张</p>
          </qc-swiper-item>
          </qc-swiper>
        </div>
        <j-code :langSources="code.base"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_ratio') }}</div>
        <div class="box2">
          <qc-swiper
            :ratio="1/3"
          >
            <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
              <p>这是第{{item}}张</p>
            </qc-swiper-item>
          </qc-swiper>
        </div>
        <j-code :langSources="code.ratio"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_direction') }}</div>
        <div class="container">
          <div class="inner">
            <qc-swiper
              :height="300"
              direction="horizontal"
            >
              <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
                <p>这是第{{item}}张</p>
              </qc-swiper-item>
            </qc-swiper>
          </div>
          <div class="inner">
            <qc-swiper
              :height="300"
              direction="vertical"
            >
              <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
                <p>这是第{{item}}张</p>
              </qc-swiper-item>
            </qc-swiper>
          </div>
        </div>
        <j-code :langSources="code.direction"></j-code>
      </div>
       <div class="components-view">
        <div class="view-title">{{ $t('eg_base_loop') }}</div>
        <div class="container">
          <div class="inner">
            <qc-swiper
              :height="300"
              :loop="true"
            >
              <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
                <p>这是第{{item}}张</p>
              </qc-swiper-item>
            </qc-swiper>
          </div>
          <div class="inner">
            <qc-swiper
              :height="300"
              :loop="false"
            >
              <qc-swiper-item v-for="(item,index) in 4" :key="item" :style="{background: index%2===0?'#99a9bf':'#d3dce6'}">
                <p>这是第{{item}}张</p>
              </qc-swiper-item>
            </qc-swiper>
          </div>
        </div>
        <j-code :langSources="code.loop"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_interval') }}</div>
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
        <j-code :langSources="code.interval"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_duration') }}</div>
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
        <j-code :langSources="code.duration"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_value') }}</div>
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
        <j-code :langSources="code.value"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_fade') }}</div>
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
        <j-code :langSources="code.fade"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_trigger') }}</div>
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
        <j-code :langSources="code.trigger"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_indicator') }}</div>
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
        <j-code :langSources="code.indicator"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_config') }}</div>
        <j-code :overview="true" :langSources="code.config"></j-code>
      </div>
    </div>
</template>

<script>
import code from './index.js'
export default {
  data () {
    return {
      code: code,
      index: 0,
      pageNum: 2
    }
  },
  methods: {
    getPage (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
  .components-view{
    margin: 10px;
  }
  .box{
    width: 600px;
    height:400px;
  }
  .box2{
    width:600px;
  }
  .qc-swiper_carousel_item p {
    font-size: 30px;
    color: #ffffff;
    line-height: 100px;
    text-align: center;
  }
  .container{
    overflow: hidden;
    height: auto;
    margin-top: 20px;
  }
  .container .inner{
    width: 400px;
    float:left;
    margin-right: 20px;
  }
  .btn{
    margin-top:20px;
    button{
      display: inline-block;
      width:60px;
      height:20px;
      background: #ccc;
      border: 1px solid #e5e5e5;
      cursor: pointer;
    }
  }
</style>
