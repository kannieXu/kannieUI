import { createComponent, createVM, destroyVM, fireEvent } from '../vm'
import Component from '@/directives/QY-Validator.js'
const Validator = new Component()
describe('Validator', () =>{
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('blur', done => {
    vm = createVM({
      template: `
        <div>
          <input type='text' v-qyValidator-input:reg="{id:'phone',format:'Mobile',title:'电话'}" />
          <div v-qyValidator-msg:phone></div>
        </div>
      `
    }, true, Validator)
    const I = vm.$el.querySelector('input')
    I.value = 13192538228
    vm.$nextTick(() => {
      fireEvent(I, 'blur')
      setTimeout(() => {
        expect(vm.$el.querySelector('.qyValidator-msg-hidden')).to.be.exist
        done()
      }, 1000);
    })
  })
})