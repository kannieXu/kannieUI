import Vue from 'vue'
import {
  pagination,
  sku,
  qcButtonGroup,
  qcButton,
  qcCheckbox,
  qcCheckboxGroup,
  qcInput,
  qcSlide,
  qcSlideItem,
  qcSwiper,
  qcSwiperItem,
  qcSelect,
  qcOption,
  qcOptionGroup,
  qcRadio,
  qcRadioGroup,
  qcModal,
  modal,
  qcStep,
  qcStepGroup
} from './components'
import {kValidator} from './directives'
const Components = {
  pagination,
  sku,
  qcButtonGroup,
  qcButton,
  qcCheckbox,
  qcCheckboxGroup,
  qcInput,
  qcSlide,
  qcSlideItem,
  qcSwiper,
  qcSwiperItem,
  qcSelect,
  qcOption,
  qcOptionGroup,
  qcRadio,
  qcRadioGroup,
  qcModal,
  qcStep,
  qcStepGroup
}
Vue.prototype.$QC = {
  'modal': modal
}
const Directives = {
  //
}
const install = (Vue, options) => {
  if (install.installed) {
    return
  }
  Object.keys(Components).forEach(key => Vue.component(key, Components[key]))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  kValidator
}
export default {
  install
}
