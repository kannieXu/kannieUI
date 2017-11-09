import { createComponent, createVM, destroyVM, fireEvent } from '../vm'
import Component from '@/components/pagination/pagination.vue'
const pagination = Component
describe('pagination', () => {
  let vm
  afterEach(() => { // 在本区块的每个测试用例之后执行
    destroyVM(vm)
  })
  it('create', done => {// 测试用例
    vm = createComponent(pagination, true)
    vm.totalLists = 200
    vm.showLists = 10
    vm.cur = 2
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.pagination_ul__list').length).to.be.equal(4)
      setTimeout(() => {
        expect(vm.$el.querySelector('.pagination_ul__active').innerHTML).to.be.equal('2')
        done()
      }, 1000);
    })
  })  

  it('showpage', done => {
    vm = createComponent(pagination, true)
    vm.totalLists = 100
    vm.showLists = 10
    vm.showPages = 5
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.pagination_ul__list').length).to.be.equal(6)
      setTimeout(() => {
        expect(vm.$el.querySelector('.pagination_ul__active').innerHTML).to.be.equal('1')
        done()
      }, 1000);
    })
  })

  it('goto', done => {
    vm = createComponent(pagination, true)
    vm.totalLists = 100
    vm.showLists = 10
    vm.cur = 2
    vm.go = true
    vm.$nextTick(() => {
      vm.goPageNum = 10
      expect(vm.$el.querySelector('.pagination_turn_input')).to.exist // 断言目标既不是null也不是undefined
      vm.$el.querySelector('.pagination_btn').click()
      setTimeout(() => {
        expect(vm.$el.querySelector('.pagination__disabled')).to.exist       
        done()
      }, 1000);
    })
  })

  it('click', done => {
    vm = createComponent(pagination, true)
    vm.totalLists = 100
    vm.showLists = 10
    vm.cur = 1
    vm.$nextTick(() => {
      vm.$el.querySelectorAll('.pagination_ul__list')[2].click()
      setTimeout(() => {
        expect(vm.$el.querySelector('.pagination_ul__active').innerHTML).to.equal('3')       
        done()
      }, 1000);
    })
  })

  it('emit', done => {
    vm = createVM({
      template: `
        <div>
          <pagination @changepage="getPage" :total-lists="100" :show-lists="10"></pagination>
        </div>
      `,
      data(){
        return {
          currval: null
        }
      },
      methods: {
        getPage(val) {
          this.currval = val
        }
      },
      components: {
        pagination: pagination
      }
    }, true)
    const p1 = vm.$children[0].$el.querySelector('.pagination_next')
    vm.$nextTick(() => {
      fireEvent(p1, 'click')
      setTimeout(() => {
        expect(vm.$data.currval).to.be.equal(2)
        done()
      }, 1000);
    })
  })
})