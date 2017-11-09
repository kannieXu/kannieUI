import { createComponent, createVM, destroyVM, fireEvent } from '../vm'
import data from './data.js'
import Component from '@/components/sku/sku.vue'
const sku = Component
describe('sku', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('淘宝', done => {
    vm = createVM({
      template: `
        <div>
          <sku :sku="skudata" :stock="stock" :prices="price" :quantity="quantity" :select-type="true" :categorise="skuCat"></sku>
        </div>
      `,
      data() {
        return {
          skudata: data,
          stock: 'stock',
          price: 'price',
          quantity: 'quantity',
          skuCat: data.standard
        }
      }
    }, true)
    const S1 = vm.$children[0].$el.querySelectorAll('.SKU_li')[0]
    vm.$nextTick(() => {
      fireEvent(S1, 'click')
      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.SKU__invalid').length).to.be.equal(4)
        expect(vm.$el.querySelectorAll('.SKU__invalid')[0].innerHTML).to.be.equal('X')
        vm.$el.querySelectorAll('.SKU__invalid')[0].click()
        expect(vm.$el.querySelectorAll('.SKU__invalid').length).to.be.equal(4)
        done()
      }, 1000);
    })
  })
  it('京东', done => {
    vm = createVM({
      template: `
        <div>
          <sku :sku="skudata" :stock="stock" :prices="price" :quantity="quantity" :select-type="false" :categorise="skuCat"></sku>
        </div>
      `,
      data() {
        return {
          skudata: data,
          stock: 'stock',
          price: 'price',
          quantity: 'quantity',
          skuCat: data.standard
        }
      }
    }, true)
    const S2 = vm.$children[0].$el.querySelectorAll('.SKU_li')[0]
    vm.$nextTick(() => {
      fireEvent(S2, 'click')
      expect(vm.$el.querySelectorAll('.SKU__invalid').length).to.be.equal(4)
      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.SKU__invalid')[0].innerHTML).to.be.equal('X')
        vm.$el.querySelectorAll('.SKU__invalid')[0].click()
        expect(vm.$el.querySelectorAll('.SKU__invalid').length).to.be.equal(2)
        expect(vm.$el.querySelectorAll('.SKU__invalid')[0].innerHTML).to.be.equal('黑色')
        done()
      }, 1000);
    })
  })
})