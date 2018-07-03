<style scoped>
	.order-wrap {
		position: relative;
	  margin-left: -15px;
	  width: 600px;
	  min-height: 200px;
	  overflow: hidden;
	}
	.order-wrap h3 {
	  font-size: 20px;
	  font-weight: bold;
	  margin-bottom: 20px;
	  margin-left: 3px;
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
	  background: #4fc08d;
	  color: #fff;
	  border: 1px solid #4fc08d;
	  cursor: pointer;
	}
	.order-list-table th.active {
	  background: #35495e;
	}


	.order-list-allprice{
		position: absolute;
		right: 2px;
		width: 185px;
		height: 45px;
		text-align: center;
		line-height: 45px;
		border: 1px solid #e3e3e3;
	}
	.order-list-allprice .allprice{
		font-size: 16px;
	}

	.buy-dialog-table {
	  	width: 100%;
	  	margin-bottom: 20px;
	}
	.buy-dialog-table td,
	.buy-dialog-table th{
		border: 1px solid #e3e3e3;
		text-align: center;
		padding: 5px 0;
	}
	.buy-dialog-table th {
	  	background: #4fc08d;
	  	color: #fff;
	  	border: 1px solid #4fc08d;
	}
</style>


<template>
	<div class="order-wrap">
	    <h3>购物车</h3>
	    <div class="order-list-table">
	      	<table class="buy-dialog-table">
				<tr>
					<th>商品名称</th>
					<th>商品类型</th>
					<th>购买数量</th>
					<th>单价</th>
					<th>总价</th>
				</tr>
				<tr>
					<td>{{ buyNum }}</td>
					<td>{{ buyType.label }}</td>
					<td>{{ period.label }}</td>
					<td>
					  <span v-for="item in versions">{{ item.label }}</span>
					</td>
					<td>{{ price }}</td>
				</tr>
	        </table>
			<div class="order-list-allprice">
				<span class="allprice">总价：</span>
			</div>
	    </div>
	  </div>
</template>


<script>
	export default{
		data(){
			return {
				//query: '',
		      //productId: 0,
		      //startDate: '',
		      //endDate: '',
		      tableHeads: [
		        {
		          label: '订单号',
		          key: 'orderId'
		        },
		        {
		          label: '购买商品',
		          key: 'product'
		        },
		        {
		          label: '单价',
		          key: 'version'
		        },
		        {
		          label: '数量',
		          key: 'buyNum'
		        },
		        {
		          label: '总价',
		          key: 'amount'
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
  methods: {
    productChange (obj) {
      this.productId = obj.value
      this.getList()
    },
    getStartDate (date) {
      this.startDate = date
      this.getList()
    },
    getEndDate (date) {
      this.endDate = date
      this.getList()
    },
    getList () {
      let reqParams = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      }
      this.$http.post('/api/getOrderList', reqParams)
      .then((res) => {
        this.tableData = res.data.list
      }, (err) => {

      })
    },
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
  mounted () {
    this.getList()
  }
	}
</script>