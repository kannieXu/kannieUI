import qcModal from './modal.vue'
import Vue from 'vue'
const QcModalConfirm = Vue.extend(qcModal)
const createElm = function () {
  const elm = document.createElement('div')
  elm.id = 'app-createElement'
  document.body.appendChild(elm)
  return elm
}
const destroyVM = function (vm) {
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el)
}
export default {
  show (propsData) {
    propsData.value = true
    return new QcModalConfirm({
      el: createElm(),
      propsData,
      watch: {
        isShow (val) {
          if (!val) {
            destroyVM(this)
            this.$destroy()
          }
        }
      }
    })
  }
}
export {
  qcModal
}
