import Vue from 'vue'
import App from './App'
import './assets/main.scss'
import './assets/icon/style.css'
import router from './router'
import kannieUI from '../src/index.js'
import {kValidator} from '../src/index.js'
import VueMarkdown from 'vue-markdown'
import JCode from './tools/code'
Vue.component('JCode', JCode)
Vue.component('VueMarkdown', VueMarkdown)
Vue.use(kannieUI)
Vue.use(kValidator)
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh'
})
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
