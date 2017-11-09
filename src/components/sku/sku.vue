<template>
  <div class="SKU">
    <span class="SKU__minMax" v-if="minPrice">{{minPrice}}元-{{maxPrice}}元</span><br>
    <span class="SKU__quantity"></span>
    <div class="SKU__content" ref="skuList">
      <ul v-for="(item,index) in categorise">
        {{categorise[index].name}} : <li class="SKU_li" v-for="(item,index) in categorise[index].element" :data-value="item.id" @click="tbHandler($event)">{{item.type}}</li>
      </ul>
    </div>
  </div>
</template>
<style type="text/css" scoped>
  .SKU{
    margin:50px auto;
    text-align: center;
  }
  .SKU__invalid{
    background: #ccc;
    border-color: #333;
  }
  .SKU__active{
    border: 1px solid red !important;
    background: #fff;
  }
  ul{
    list-style: none;
    margin-bottom: 20px;
  }
  .SKU_li{
    display: inline-block;
    width: 120px;
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: 1px solid #333;
    cursor: pointer;
    margin-left: 10px;
  }
</style>
<script>
export default {
  props: {
    categorise: {
      type: Array
    },
    sku: {
      type: Object
    },
    selectType: {
      type: Boolean,
      default: true
    },
    stock: {
      type: String
    },
    prices: {
      type: String
    },
    quantity: {
      type: String
    }
  },
  data () {
    return {
      filterData: {},
      SKUResult: {},
      priceArr: [],
      maxPrice: null,
      minPrice: null,
      priceRange: []
    }
  },
  methods: {
    selectData (data, name, length) {
      let that = this
      let Myquantity = this.quantity
      if (data instanceof Array) {
        if (name === that.stock) {
          let stockArr = []
          for (let i = 0; i < data.length; i++) {
            if (data[i][Myquantity]) {
              let quantityArr = []
              let string = ''
              for (let j = 0; j < length; j++) {
                string += data[i].standards[j].id + ';'
              }
              let newString = string.substring(0, string.length - 1)
              quantityArr[newString] = {
                'price': data[i].price,
                'count': data[i][Myquantity]
              }
              stockArr.push(quantityArr)
            }
            this.selectData(data[i], i)
          }
          for (let m = 0; m < stockArr.length; m++) {
            for (let item in stockArr[m]) {
              this.filterData[item] = stockArr[m][item]
            }
          }
        }
      } else if (data instanceof Object) {
        for (let item in data) {
          if (name === undefined) {
            this.selectData(data[item], item, this.categorise.length)
          } else {
            this.selectData(data[item], item)
          }
        }
      } else if (typeof data !== 'object') {
        if (name === that.prices) {
          this.priceArr.push(data)
          this.maxPrice = Math.max.apply(Math, this.priceArr)
          this.minPrice = Math.min.apply(Math, this.priceArr)
          this.priceRange[0] = this.minPrice
          this.priceRange[1] = this.maxPrice
        }
      }
    },
    getObjKeys (obj) {
      if (obj !== Object(obj)) {
        throw new TypeError('Invalid object')
      }
      var keys = []
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          keys[keys.length] = key
        }
      }
      return keys
    },
    addSkuResult (combArrItem, sku) {
      var key = combArrItem.join(';')
      if (this.SKUResult[key]) {
        this.SKUResult[key].count += sku.count
        this.SKUResult[key].prices.push(sku.price)
      } else {
        this.SKUResult[key] = {
          count: sku.count,
          prices: [sku.price]
        }
      }
    },
    combInArray (aData) {
      if (!aData || !aData.length) {
        return []
      }
      let len = aData.length
      let aResult = []
      for (let n = 1; n < len; n++) {
        let aaFlags = this.getCombFlags(len, n)
        while (aaFlags.length) {
          let aFlag = aaFlags.shift()
          let aComb = []
          for (let i = 0; i < len; i++) {
            aFlag[i] && aComb.push(aData[i])
          }
          aResult.push(aComb)
        }
      }
      return aResult
    },
    getCombFlags (m, n) {
      if (!n || n < 1) {
        return []
      }
      let aResult = []
      let aFlag = []
      let bNext = true
      let i, j, iCnt1
      for (i = 0; i < m; i++) {
        aFlag[i] = i < n ? 1 : 0
      }
      aResult.push(aFlag.concat())
      while (bNext) {
        iCnt1 = 0
        for (i = 0; i < m - 1; i++) {
          if (aFlag[i] === 1 && aFlag[i + 1] === 0) {
            for (j = 0; j < i; j++) {
              aFlag[j] = j < iCnt1 ? 1 : 0
            }
            aFlag[i] = 0
            aFlag[i + 1] = 1
            let aTmp = aFlag.concat()
            aResult.push(aTmp)
            if (aTmp.slice(-n).join('').indexOf('0') === -1) {
              bNext = false
            }
            break
          }
          aFlag[i] === 1 && iCnt1++
        }
      }
      return aResult
    },
    initSKU () {
      let i = this.getObjKeys(this.filterData)
      let j = this.getObjKeys(this.filterData)
      let skuKeys = this.getObjKeys(this.filterData)
      for (i = 0; i < skuKeys.length; i++) {
        let skuKey = skuKeys[i]
        let sku = this.filterData[skuKey]
        let skuKeyAttrs = skuKey.split(';')
        skuKeyAttrs.sort(function (value1, value2) {
          return parseInt(value1) - parseInt(value2)
        })
        let combArr = this.combInArray(skuKeyAttrs)
        for (j = 0; j < combArr.length; j++) {
          this.addSkuResult(combArr[j], sku)
        }
        this.SKUResult[skuKeyAttrs.join(';')] = {
          count: sku.count,
          prices: [sku.price]
        }
      }
    },
    initState () {
      let _this = this
      this.$nextTick(() => {
        _this.$el.querySelectorAll('.SKU_li').forEach(function (val) {
          let attr = val.getAttribute('data-value')
          if (!_this.SKUResult[attr]) {
            _this.addClass(val, 'SKU__active')
          }
        })
      })
    },
    addClass (obj, cls) {
      let objClass = obj.className
      let blank = (objClass !== '') ? ' ' : ''
      let added = objClass + blank + cls
      obj.className = added
    },
    hasClass (obj, cls) {
      let objClass = obj.className
      let objClassLst = objClass.split(/\s+/)
      let x = 0
      for (x in objClassLst) {
        if (objClassLst[x] === cls) {
          return true
        }
      }
      return false
    },
    removeClass (obj, cls) {
      let objClass = ' ' + obj.className + ' '
      objClass = objClass.replace(/(\s+)/gi, ' ')
      let removed = objClass.replace(' ' + cls + ' ', ' ')
      removed = removed.replace(/(^\s+)|(\s+$)/g, '')
      obj.className = removed
    },
    siblings (ele, Class) {
      let length = ele.length
      let that = this
      let computedLength = Array.from(ele).filter(function (val) {
        if (!that.hasClass(val, Class)) {
          return val
        }
      }).length
      if (length === computedLength) {
        return true
      } else {
        return false
      }
    },
    unique (arr) {
      let res = []
      let json = {}
      for (let i = 0; i < arr.length; i++) {
        if (!json[arr[i]]) {
          res.push(arr[i])
          json[arr[i]] = 1
        }
      }
      return res
    },
    sortArr (arr) {
      arr.sort(function (value1, value2) {
        return parseInt(value1) - parseInt(value2)
      })
      return arr
    },
    removeByValue (arr, val) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
          arr.splice(i, 1)
          break
        }
      }
    },
    tbHandler (ev) {
      let self = ev.target
      let that = this
      let dom = this.$refs.skuList.querySelectorAll('.SKU_li')
      if (that.selectType) {
        if (that.hasClass(self, 'SKU__invalid')) {
          return
        }
        if (that.hasClass(self, 'SKU__active')) {
          that.removeClass(self, 'SKU__active')
        } else {
          self.parentNode.querySelectorAll('.SKU_li').forEach(function (val) {
            that.removeClass(val, 'SKU__active')
          })
          that.addClass(self, 'SKU__active')
        }
      } else {
        if (that.hasClass(self, 'SKU__invalid')) {
          dom.forEach(function (val) {
            that.removeClass(val, 'SKU__active')
            that.removeClass(val, 'SKU__invalid')
          })
          that.addClass(self, 'SKU__active')
        } else if (that.hasClass(self, 'SKU__active')) {
          that.removeClass(self, 'SKU__active')
        } else {
          self.parentNode.querySelectorAll('.SKU_li').forEach(function (val) {
            that.removeClass(val, 'SKU__active')
          })
          that.addClass(self, 'SKU__active')
        }
      }
      let selectedObjs = that.$refs.skuList.querySelectorAll('.SKU__active')
      if (selectedObjs.length) {
        let selectedIds = []
        selectedObjs.forEach(function (val) {
          selectedIds.push(val.getAttribute('data-value'))
        })
        that.sortArr(selectedIds)
        let myPrices = null
        if (that.SKUResult[selectedIds.join(';')]) {
          myPrices = that.SKUResult[selectedIds.join(';')].prices
        }
        if (!myPrices) {
          let dataVal = self.getAttribute('data-value')
          let newSelectedIds = [].concat(selectedIds)
          let iArr = []
          that.removeByValue(newSelectedIds, dataVal)
          for (let k = 0; k < newSelectedIds.length; k++) {
            let arr = []
            arr[0] = dataVal
            arr[1] = newSelectedIds[k]
            if (!that.SKUResult[that.sortArr(arr).join(';')]) {
              iArr.push(newSelectedIds[k])
            }
          }
          for (let m = 0; m < dom.length; m++) {
            for (let n = 0; n < iArr.length; n++) {
              if (dom[m].getAttribute('data-value') === iArr[n]) {
                if (!that.hasClass(dom[m], 'SKU__invalid')) {
                  that.addClass(dom[m], 'SKU__invalid')
                }
              }
            }
          }
          for (let n = 0; n < iArr.length; n++) {
            that.removeByValue(selectedIds, iArr[n])
          }
          selectedObjs = that.$refs.skuList.querySelectorAll('.SKU__active')
          myPrices = that.SKUResult[selectedIds.join(';')].prices
        }
        that.maxPrice = Math.max.apply(Math, myPrices)
        that.minPrice = Math.min.apply(Math, myPrices)
        let len = selectedIds.length
        let filterResult = Array.from(dom).filter(function (val) {
          if (!that.hasClass(val, 'SKU__active')) {
            return val
          }
        })
        filterResult.forEach(function (val) {
          let testAttrIds = []
          let newData = []
          let domList = val.parentNode.querySelectorAll('.SKU_li')
          let dVal = val.getAttribute('data-value')
          for (let k = 0; k < selectedObjs.length; k++) {
            if (val.parentNode === selectedObjs[k].parentNode) {
              let siblingsSelectedObjId = selectedObjs[k].getAttribute('data-value')
              for (var i = 0; i < len; i++) {
                (selectedIds[i] !== siblingsSelectedObjId) && testAttrIds.push(selectedIds[i])
              }
            } else if (that.siblings(domList, 'SKU__active')) {
              testAttrIds = selectedIds.concat()
            }
            testAttrIds = testAttrIds.concat(dVal)
            if (testAttrIds.length > 1) {
              newData = that.unique(testAttrIds)
            } else {
              newData = testAttrIds
            }
            if (newData.length) {
              that.sortArr(newData)
              if (!that.SKUResult[newData.join(';')]) {
                if (!that.hasClass(val, 'SKU__invalid')) {
                  that.addClass(val, 'SKU__invalid')
                }
              } else {
                that.removeClass(val, 'SKU__invalid')
              }
            }
          }
        })
      } else {
        let dom = this.$refs.skuList.querySelectorAll('.SKU_li')
        let that = this
        dom.forEach(function (val) {
          that.SKUResult[val.getAttribute('data-value')] ? that.removeClass(val, 'SKU__invalid') : that.addClass(val, 'SKU__active')
        })
        this.minPrice = this.priceRange[0]
        this.maxPrice = this.priceRange[1]
      }
    }
  },
  created () {
    this.selectData(this.sku)
    this.initSKU()
    this.initState()
  }
}
</script>
