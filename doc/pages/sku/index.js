let code = {}

code.overview = {}

code.overview.zh = `
* \`sku\`是一个比较特殊的用于商城的组件，传统形式\`sku\`是通过每选一个规格对应请求一次后台。
* 这里将其封装成一个前端组件，后台只需要一次返回所有规格组合对应的价格，库存，skuId等数据即可。
* 由于\`sku\`界面UI设计不一致，这里只提供方法，用户需要根据UI图重新设计对应的样式，目前参考了京东和淘宝的交互方式 
`

code.base = {}

code.base.zh = `
\`\`\`javascript
<template>
  <div>
    <sku :sku="skuGood" :stock="stock" :prices="price" :quantity="quantity" :select-type="true" :categorise="skuData" v-if="skuGood.stock&&skuGood.stock.length"></sku>
  </div>
</template>
\`\`\`
`
code.showPages = {}
code.showPages.zh = `
\`\`\`javascript
<template>
  <sku :sku="skuGood" :stock="stock" :prices="price" :quantity="quantity" :select-type="false" :categorise="skuData" v-if="skuGood.stock&&skuGood.stock.length"></sku>
</template>
\`\`\`
`

code.config = {}
code.config.zh = `
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| sku      | 必传     |    Object   |  后台返回的所有组装后的规格的对象集合 |
| categorise   |    必传         |    Array   |  后台返回的所有规格种类 |
| stock：   |    必传        |    String   |  后台返回的代表所有组装后规格的对象的字段名 |
| prices |      必传      |    String   |  每一种规格分类的价格字段名 |
| quantity：      |      必传      |    String   | 每一种规格分类的库存字段名 |
| select-type      |      可不填，默认使用淘宝交互方式       |    Boolean   | sku交互方式的选择类型，分京东和淘宝两种 |
`

code.data = {}
code.data.zh = `
\`standards为规格组合其中的一条数据\`

\`standard为规格种类\`
\`\`\`javascript
{
  "stock": [{
    "standards": [{
      "name": "颜色",
      "value": "黑色",
      "id": 10
    }, {
      "name": "尺寸",
      "value": "S",
      "id": 22
    }, {
      "name": "容量",
      "value": "40",
      "id": 32
    }],
    "quantity": 0,
    "price": "20",
    "sku": "F43"
  }],
  "standard":[
  {
    "name": "颜色",
    "element": [{
        "type": "黑色",
        "id":10 
      },{
         "type": "白色",
        "id":11  
      },{
        "type": "红色",
        "id":12 
      }]
  }, {
    "name": "尺寸",
    "element": [{
        "type": "X",
        "id":20 
      },{
         "type": "M",
        "id":21  
      },{
        "type": "S",
        "id":22 
      }]
  }, {
    "name": "容量",
    "element": [{
        "type": "20",
        "id":30 
      },{
         "type": "30",
        "id":31  
      },{
        "type": "40",
        "id":32 
      }]
  }]
}
\`\`\`
`

export default code
