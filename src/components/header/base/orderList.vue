<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 600px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #ff4500;
  color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.6);
  -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.6);
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>


<template>
  <div class="order-wrap">
    <h3>您的订单</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        您的昵称：{{ this.$root.username }}
      </div>
      <div class="order-list-option">
        选择商品类别：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th 
            v-for="head in tableHeads" 
            @click="changeOrderType(head)" 
            :class="{active:head.active}">{{ head.label }}</th>
        </tr>
        <tr 
          v-for="item in tableData"
          :key="item.period">
          <td v-for="head in tableHeads">{{ item[head.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VSelection from '@/components/header/base/selection'
import VDatePicker from '@/components/header/base/datepicker'
import _ from 'lodash'
export default {
  components: {
    VSelection,
    VDatePicker
  },
  data () {
    return {
      query: '', // 关键词
      productId: 0,
      products: [
        {
          label: '健康零食',
          value: 0
        },
        {
          label: '饼干',
          value: 1
        },
        {
          label: '早点下午茶',
          value: 2
        },
        {
          label: '中式糕点',
          value: 3
        },
        {
          label: '西式糕点',
          value: 4
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '商品名称',
          key: 'goodsName'
        },
        {
          label: '商品类型',
          key: 'buyType'
        },
        {
          label: '单价',
          key: 'goodsPrice'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'totalPrice'
        },
        {
          label: '付款方式',
          key: 'bankName'
        }
      ],
      currentOrder: 'asc',
      tableData: []
    }
  },
  watch: {
    query () {
      this.getList()
    }
  },
  computed: {
    /*tableDate(){
      return this.$store.getters.getOrderList
    }*/
  },
  methods: {
    productChange (obj) {
      /*this.$store.commit('updateParams',{
        key: 'productId',
        val: obj.value 
      })*/
      this.productId = obj.value
      this.getList()
    },
    getList () {
      let reqParams = {
        orderId: this.orderId,
        goodsName: this.goodsName,
        buyType: this.buyType,
        goodsPrice: this.goodsPrice,
        buyNum: this.buyNum,
        totalPrice: this.totalPrice,
        bankName: this.bankName
      }
      this.$http.post('/api/getOrderList', reqParams)
      .then((res) => {
        this.tableData = res.data.data.list
      }, (err) => {
        console.log('err:'+ err)
      })
    },
    // 排序方法
    changeOrderType (headItem) {
      this.tableHeads.map((item) => {
        item.active = false
        return item
      })
      headItem.active = true
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      }
      else if (this.currentOrder === 'desc') {
        this.currentOrder = 'asc'
      }
      this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
    }
  },
  // 页面刷新首先获取json数据
  mounted () {
    this.getList()
    //this.$store.dispatch('fetchOrderList')
    //console.log(this.$store)
  }
}
</script>