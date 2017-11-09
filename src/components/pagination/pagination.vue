<template>
  <div class="pagination" v-if="totalPage>1">
    <span class="pagination_prev" @click="prePage" :class="{'pagination__disabled':cur===1}">上一页</span>
    <ul class="pagination_ul" v-show="cur>=shows&&totalPage>shows">
      <li class="pagination_ul__list" @click="choosePage(1)">1</li>
      <span class="pagination_ul_ellipsis">. . .</span>
    </ul>
    <ul class="pagination_ul">
      <li class="pagination_ul__list" :class="{'pagination_ul__active':item==cur}" v-for="item in list" @click="choosePage(item)">{{item}}</li>
    </ul>
    <ul class="pagination_ul" v-show="cur<shows&&totalPage>shows">
      <span class="pagination_ul_ellipsis">. . .</span>
      <li class="pagination_ul__list" @click="choosePage(totalPage)">{{totalPage}}</li>
    </ul>
    <span class="pagination_next" @click="nextPage" :class="{'pagination__disabled':cur===totalPage}">下一页</span>
    <template v-if="go!==false">
      <div class="pagination_turn">
        <span class="pagination_turn_span">到</span>
        <input class="pagination_turn_input" type="text" v-model="goPageNum" @keyup.enter="goPage">
        <span>页</span>
      </div>
      <span class="pagination_btn" @click="goPage">确定</span>
    </template>
  </div>
</template>
<style type="text/css" lang="scss">
  @import "../../styles/mixin";
  .pagination{
    display: inline-block;
    margin: 20px 0;
    padding-right: 10px;
    font-size: 14px;
    line-height: 38px;
    color: $pagination_font_color;
    overflow: hidden;
  } 
  .pagination_prev{
    display: block;
    float: left;
    margin-right: 5px;
    width: 78px;
    text-align: center;
    cursor: pointer;
    border: 1px solid $pagination_border_color;
    color: $pagination_font_color;
    background-color: $pagination_white;
  }
  .pagination_next{
    display: block;
    float: left;
    margin-right: 5px;
    width: 78px;
    text-align: center;
    cursor: pointer;
    border: 1px solid $pagination_border_color;
    color: $pagination_font_color;
    background-color: $pagination_white;
  } 
  .pagination_prev:hover{
    border: 1px solid $pagination_bg_color;
  }
  .pagination_next:hover{
    border: 1px solid $pagination_bg_color;
  }
  
 .pagination__disabled{
    background-color: $pagination_dash;
    cursor: default;
    color: $pagination_disabled_color;
    border: 1px solid $pagination_disabled_border;
  }
  .pagination__disabled:hover{
    border: 1px solid $pagination_disabled_border;
  }
  .pagination_ul_ellipsis{ 
    display: block;
    float: left;
    margin-right: 5px;
    font-size: 16px;
    text-align: center;
  }
  .pagination_turn{
    float: left;
    margin: 0 15px;
  }
  .pagination_turn_span{
    display: block;
    float: left;
    margin-right: 5px;
  }
  .pagination_turn_input{
    float: left;
    width: 38px;
    height: 38px;
    margin: 0 5px;
    text-align: center;
    line-height: 38px;
    padding: 0;
    border: 1px solid $pagination_border_color;
  }
  .pagination_turn_input:focus{
    border: 1px solid $pagination_bg_color;
  }
  .pagination_btn{
    display: block;
    float: left;
    margin-right: 5px;
    width: 78px;
    text-align: center;
    line-height: 38px;
    background: $pagination_bg_color;
    color: $pagination_white;
    cursor: pointer;
  }
  .pagination .btn:hover{
    border: 1px solid $pagination_bg_color;
  }
  .pagination_ul{
    float: left;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .pagination_ul__list{
    float: left;
    width: 38px;
    margin-right: 5px;
    text-align: center;
    cursor: pointer;
    color: $pagination_font_color;
    border: 1px solid $pagination_border_color;
    background-color: $pagination_white;
  }
  .pagination_ul__list:hover{
    border: 1px solid $pagination_bg_color;
  }
  .pagination_ul__active{
    background: $pagination_bg_color;
    color: $pagination_white;
  }
  .pagination_ul__active:hover{
    border: 1px solid $pagination_bg_color;
  }
</style>
<script type="text/javascript">
  export default {
    props: {
      totalLists: {
        type: Number,
        required: true
      },
      showLists: {
        type: Number,
        required: true
      },
      showPages: {
        type: Number,
        default: 3
      },
      go: {
        type: Boolean,
        default: false
      },
      currentPage: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        cur: this.currentPage || 1,
        goPageNum: 1
      }
    },
    computed: {
      shows () {
        return this.showPages ? parseInt(this.showPages) : 3
      },
      totalPage () {
        let show = parseInt(this.showLists)
        let remainder = this.totalLists % show
        if (remainder) {
          return parseInt(this.totalLists / show) + 1
        } else {
          return this.totalLists / show
        }
      },
      // 计算要展示的页码列表
      list () {
        if (this.totalPage >= this.shows) {
          if (this.cur < this.shows) {
            return this.showArr(1)
          } else if (this.cur > this.totalPage - this.shows + 1) {
            return this.showArr(this.totalPage - this.shows + 1)
          } else {
            return this.showArr(this.cur - parseInt(this.shows / 2))
          }
        } else {
          let arr = []
          for (let i = 1; i < this.totalPage + 1; i++) {
            arr.push(i)
          }
          return arr
        }
      },
      showfinalList () {
        return this.cur + parseInt(this.shows / 2) < this.totalPage && this.list[this.list.length - 1] < this.totalPage
      }
    },
    watch: {
      currentPage (v) {
        this.cur = v
      },
      cur (v) {
        console.log(v)
      },
      goPageNum (newVal, oldVal) {
        let value = Number(newVal)
        if (isNaN(value)) {
          this.goPageNum = oldVal
        } else {
          this.goPageNum = newVal
        }
      }
    },
    methods: {
      choosePage (item) {
        this.cur = item
        this.goPageNum = item
        this.$emit('changepage', this.cur)
      },
      nextPage () {
        if (this.cur === this.totalPage) {
          return false
        }
        this.cur++
        this.goPageNum = this.cur
        this.$emit('changepage', this.cur)
      },
      prePage () {
        if (this.cur === 1) {
          return false
        }
        this.cur--
        this.goPageNum = this.cur
        this.$emit('changepage', this.cur)
      },
      goPage () {
        if (this.goPageNum <= this.totalPage && this.goPageNum >= 1) {
          this.cur = this.goPageNum
          this.$emit('changepage', this.cur)
        } else {
          return false
        }
      },
      showArr (start) {
        let arr = []
        for (let i = 0; i < this.shows; i++) {
          arr.push(start + i)
        }
        return arr
      }
    }
  }
</script>
