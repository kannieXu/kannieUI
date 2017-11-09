<template>
  <div class="qc-swiper_carousel_item">
    <slot></slot>
  </div>
</template>

<style scoped>
  .qc-swiper_carousel_item{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
  }
  .qc-swiper_carousel_item img{
    width: 100%;
    height: 100%;
  }
</style>
