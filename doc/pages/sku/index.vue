<i18n>
  {
    "zh": {
      "eg_base": "效果展示",
      "eg_base_block": "淘宝交互方式用法",
      "eg_base_show": "京东交互方式用法",
      "eg_data": "数据格式展示"
    }
  }
</i18n>
<template>
    <div>
      <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base') }}</div>
        <sku :sku="skuGood" :stock="stock" :prices="price" :quantity="quantity" :select-type="true" :categorise="skuData" v-if="skuGood.stock&&skuGood.stock.length"></sku>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_block') }}</div>
         <sku :sku="skuGood" :stock="stock" :prices="price" :quantity="quantity" :select-type="true" :categorise="skuData" v-if="skuGood.stock&&skuGood.stock.length"></sku>
        <j-code :langSources="code.base"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_show') }}</div>
         <sku :sku="skuGood" :stock="stock" :prices="price" :quantity="quantity" :select-type="false" :categorise="skuData" v-if="skuGood.stock&&skuGood.stock.length"></sku>
        <j-code :langSources="code.showPages"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_base_config') }}</div>
        <j-code :overview="true" :langSources="code.config"></j-code>
      </div>
      <div class="components-view">
        <div class="view-title">{{ $t('eg_data') }}</div>
        <j-code :overview="true" :langSources="code.data"></j-code>
      </div>
    </div>
</template>

<script>
import code from './index.js'
import axios from 'axios'
export default {
  data () {
    return {
      code: code,
      skuGood: {
        stock: null
      },
      skuData: null,
      stock: 'stock',
      price: 'price',
      quantity: 'quantity'
    }
  },
  created () {
    axios.get('http://localhost:8888/static/sku.json').then((response) => {
      this.skuGood.stock = response.data.stock
      this.skuData = response.data.standard
    })
  }
}
</script>
<style lang="scss">
  .components-view{
    margin: 10px;
  }
</style>
