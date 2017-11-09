<i18n>
  {
    "zh": {
      "eg_base_block": "基础用法",
      "eg_base_direction": "切换方向",
      "eg_base_interval": "切换延时",
      "eg_base_isAuto": "是否自动切换",
      "eg_base_duration": "切换动画时间",
      "eg_base_indicators": "自定义指示器和左右切换箭头",
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
          <qc-slide
            :list="3"
          >
            <qc-slide-item v-for="(item, key) in 5" :key="key">
              <p class="content" :style="{background: key%2===0?'#ccc':'#f8f8ff'}">这是第{{item}}条信息</p>
            </qc-slide-item>
          </qc-slide>
        </div>
        <j-code :langSources="code.base"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_direction') }}</div>
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
        <j-code :langSources="code.direction"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_interval') }}</div>
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
        <j-code :langSources="code.interval"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_isAuto') }}</div>
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
        <j-code :langSources="code.auto"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_duration') }}</div>
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
        <j-code :langSources="code.duration"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_indicators') }}</div>
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
    }
  }
}
</script>
<style lang="scss">
  .components-view{
    margin: 10px;
  }
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
  .container{
    width: 900px;
    height: 150px;
    margin: auto;
    overflow:hidden;
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
