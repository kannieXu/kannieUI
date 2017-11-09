import Vue from 'vue'
import Router from 'vue-router'
import pagination from '../pages/pagination/index.vue'
import validator from '../pages/validator/index.vue'
import input from '../pages/input/index.vue'
import checkbox from '../pages/checkbox/index.vue'
import button from '../pages/button/index.vue'
import swiper from '../pages/swiper/index.vue'
import slide from '../pages/slide/index.vue'
import select from '../pages/select/index.vue'
import radio from '../pages/radio/index.vue'
import sku from '../pages/sku/index.vue'
import modal from '../pages/modal/index.vue'
import step from '../pages/step/index.vue'
import index from '../pages/index.vue'
Vue.use(Router)
export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: pagination
    },
    {
      path: '/validator',
      name: 'validator',
      component: validator
    },
    {
      path: '/sku',
      name: 'sku',
      component: sku
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/slide',
      name: 'slide',
      component: slide
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/modal',
      name: 'modal',
      component: modal
    },
    {
      path: '/step',
      name: 'step',
      component: step
    }
  ]
})
