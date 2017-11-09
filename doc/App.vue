<template>
  <div id="app" class="components-root">
  <nav class="components-nav">
    <div class="components-group">
      <router-link active-class="router-active" to="index">
        <span class="cn-name">组件首页</span>
      </router-link>
    </div>
    <p class="components-title">交互型组件</p>
    <div class="components-group">
      <router-link active-class="router-active" to="pagination">
        <span class="cn-name">分页组件</span>
      </router-link>
      <router-link active-class="router-active" to="swiper">
        <span class="cn-name">Swiper组件</span>
      </router-link>
      <router-link active-class="router-active" to="slide">
        <span class="cn-name">Slide组件</span>
      </router-link>
      <router-link active-class="router-active" to="modal">
        <span class="cn-name">modal弹框组件</span>
      </router-link>
      <router-link active-class="router-active" to="step">
        <span class="cn-name">step步骤组件</span>
      </router-link>
    </div>
    <p class="components-title">表单验证组件</p>
    <div class="components-group">
      <router-link active-class="router-active" to="validator">
        <span class="cn-name">qcValidator</span>
      </router-link>
      <router-link active-class="router-active" to="radio">
        <span class="cn-name">Radio组件</span>
      </router-link>
      <router-link active-class="router-active" to="select">
        <span class="cn-name">Select组件</span>
      </router-link>
      <router-link active-class="router-active" to="input">
        <span class="cn-name">Input组件</span>
      </router-link>
      <router-link active-class="router-active" to="checkbox">
        <span class="cn-name">Checkbox组件</span>
      </router-link>
      <router-link active-class="router-active" to="button">
        <span class="cn-name">Button组件</span>
      </router-link>
    </div>
    <p class="components-title">特殊组件</p>
    <div class="components-group">
      <router-link active-class="router-active" to="sku">
        <span class="cn-name">SKU组件</span>
      </router-link>
    </div>
  </nav>
    <div class="components-router-view">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
  @import './assets/mixin';
  .components-root{
    display: flex;
    flex-direction: row;
    .components-nav{
      width: 120px;
      padding: 0 10px 10px 10px;
      text-align: center;
      .components-group{
        padding: 5px;
        margin-bottom: 10px;
      }
      .components-title{
        background: #ededed;
        padding: 4px 0;
      }
      a{
        display: block;
        padding-bottom: 10px;
        color: #999;
        font-size: 14px;
        margin-bottom: 5px;
        &.router-active{
          color: #e41b23;
        }     
      }    
    }
  }
  .components-router-view{
    width: 0;
    flex: 1 1 auto;
    padding-right: 140px;
  }     
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
</style>
