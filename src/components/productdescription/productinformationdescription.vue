<style scoped>
	.goods_description_wrap{
		position: relative;
		width: 1200px;
		margin: 90px auto 0;
	}

	.goods_description_pic{
		display: block;
		position: relative;
		float: left;
		width: 300px;
		height: 300px;
	}
	.goods_description_pic .productimg{
		width: 300px;
		height: 300px;
	}

	/* 详细查看图片的样式 */
	.detial_see_wrap{
		display: block;
		z-index: 1000;
		position: absolute;
		top: 0;
		left: 0;
		width: 300px;
		height: 300px;
		cursor: move;
	}
	.goods_description_detailed_see{
		display: block;
		position: absolute;
		z-index: 1;
		width: 150px;
		height: 150px;
		background-image: url(./../../assets/goods_description_see.png);
		background-repeat: repeat;
		cursor: move;
	}
	.goods_description_detailed_div{
		z-index: 200;
		display: block;
		position: absolute;
		top: 0;
		left: 300px;
		width: 300px;
		height: 300px;
		background-color: #FFF;
		overflow: hidden;
	}
	.detail_sobig_img{
		position: absolute;
		top: 0;
		left: 0;
		width: 600px;
		height: 600px;
	}


	.goods_description_others_name_wrap{
		float: left;
		margin-left: 20px;
	}
	.goods_description_others{
		width: 880px;
		border-bottom: 1px solid #e2e2e2;
	}
	.goods_description_others_name .goods_description_name{
		margin-left: 5px;
		line-height: 33px;
		font-size: 20px;
		font-weight: bold;
		color: #454545;
	}
	.goods_description_others .goods_description_others_img,
	.goods_description_others .goods_description_others_name{
		float: left;
	}
	.goods_description_others::after{
		content: '';
		display: block;
		width: 0;
		height: 0;
		clear: both;
	}


	.goods_description_others_price_wrap{
		margin-top: 20px;
	}
	.now_price_text{
		font-size: 14px;
		font-family: 'SimSun';
	}
	.now_price_wrap .now_price{
		text-decoration: line-through;
	}

	.reduce_price_text{
		font-size: 14px;
		font-family: 'SimSun';
	}
	.reduce_price{
		color: #ff5022;
		font-size: 20px;
		font-weight: bold;
		margin-left: 10px;
	}


	.goods_description_others_counts_wrap{
		margin-top: 20px;
	}
	.goods_description_others_counts_wrap .counts_text{
		float: left;
		font-size: 14px;
		font-family: 'SimSun';
	}
	

	.goods_description_others_btns_wrap{
		margin-top: 20px;
	}
	.goods_description_others_btns_wrap .now_buy{
		float: left;
		width: 130px;
		height: 36px;
		text-align: center;
		line-height: 36px;
		background-color: #ff4500;
		border-radius: 2px;
		box-shadow:  0 1px 2px 0 rgba(0,0,0,.6);
		cursor: pointer;
	}
	.goods_description_others_btns_wrap .now_buy span.now_buy_text{
		color: #FFF;
		font-size: 16px;
	}
	.goods_description_others_btns_wrap .join_shopping{
		float: left;
		margin-left: 10px;
		width: 130px;
		height: 34px;
		text-align: center;
		line-height: 34px;
		background-color: #eaeaea;
		border: 1px solid #cacaca;
		border-radius: 2px;
		box-shadow:  0 1px 2px 0 rgba(0,0,0,.6);
		cursor: pointer;
	}
	.goods_description_others_btns_wrap .join_shopping span.join_shopping_text{
		color: #6f6f6f;
		font-size: 16px;
	}


	.buy-dialog-title {
	  	font-size: 16px;
	  	font-weight: bold;
	}
	.buy-dialog-btn {
	  	margin-top: 20px;
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

	.button {
	  	background: #4fc08d;
	  	color: #fff;
	  	display: inline-block;
	  	padding: 10px 20px;
	  	cursor: pointer;
	}
	.button:hover {
	  	background: #4fc08d;
	}

	.goods_description_others_wrapper{
		margin-top: 10px;
		min-height: 54px;
		border-radius: 5px;
		background-color: #bebebe;
		color: #FFF;
	}
	.goods_description_others_wrapper .goods_description_others_wrap{
		padding-left: 5px;
	}
	.goods_description_others_price{
		float: left;
		padding-left: 15px;
	}
	.goods_description_others_price .currency,
	.goods_description_others_price .sale-price,
	.goods_description_others_over .over-text{
		font-size: 30px;
		color: #FFF;
		font-family: Arial,Helvetica,sans-serif;
		line-height: 54px;
		font-weight: bold;
	}
	.goods_description_others_over{
		float: right;
		margin: 0 5px 0 15px;
	}
</style>


<template>
	<div class="goods_description_wrap">
		<div 
			class="goods_description_pic"
			@mouseenter="showcheckeddetailelement=true"
			@mouseleave="showcheckeddetailelement=false">
			<img 
				class="productimg" 
				:src="productimg">
			<span
				v-show="showcheckeddetailelement"
				@mouseenter="showcheckeddetailelement=true"
				class="goods_description_detailed_see"
				:style="{ left: followcheckedx+'px', top: followcheckedy+'px'}"></span>
			<div 
				class="detial_see_wrap"
				@mousemove="checkeddetailproduct($event)">
			</div>
		</div>
		<!-- 查看大清晰图片 -->
		<div
			v-show="showcheckeddetailelement" 
			class="goods_description_detailed_div">
			<img 
				class="detail_sobig_img"
				:src="productimg"
				:style="{ left: -followcheckedx*2 +'px', top: -followcheckedy*2 +'px'}">
		</div>
		<div class="goods_description_others_name_wrap">
			<div class="goods_description_others">
				<div class="goods_description_others_img">
					<img 
					v-show="cheapselling!=null"
					class="goods_description_icon" 
					:src="this.backgroundimg == this.checkimg.time ? this.getimg.time : this.getimg.gift" >
				</div>
				<div class="goods_description_others_name">
					<span class="goods_description_name">{{ productname }}</span>
				</div>
			</div>
			<!-- <div class="goods_description_others_line"></div> -->
			<div class="goods_description_others_price_wrap">
				<div class="now_price_wrap">
					<span class="now_price_text">市场价:</span>
					<span class="now_price">￥{{ marketprice }}</span>
				</div>
				<div class="reduce_price_wrap" v-show="cheapselling==null">
					<span class="reduce_price_text">价格:</span>
					<span class="reduce_price">￥{{ presentprice }}</span>
				</div>
				<div>
					
				</div>
			</div>
			<div class="goods_description_others_counts_wrap">
				<div class="counts_text">
					<span>数量:</span>
				</div>
				<counter 
					:productcounts="remainproductcounts"
					:selectcounts="cheapselling==null" 
					@on-change="onParamChange('buyNum',$event)"></counter>
			</div>

			<div 
				class="goods_description_others_btns_wrap"
				v-show="cheapselling==null">
				<div class="now_buy" @click="showPayDialog">
					<span class="now_buy_text">立即购买</span>
				</div>
				<div class="join_shopping">
					<span class="join_shopping_text">加入购物车</span>
				</div>
				<div class="div_clear"></div>
			</div>

			<!-- 限时结束 -->
			<div 
				class="goods_description_others_wrapper"
				v-show="cheapselling!=null">
				<ul class="goods_description_others_wrap">
					<li class="goods_description_others_price">
						<span class="currency">￥</span>
						<span class="sale-price">{{ presentprice }}</span>
					</li>
					<li class="goods_description_others_over">
						<span class="over-text">{{ backgroundtext }}</span>
					</li>
				</ul>
			</div>


			<!-- 登录 -->
	        <my-dialog 
	        	:is-show="isShowLoginDialog"
	        	@on-close="closeDialog('isShowLoginDialog')">
        		<div>
        			<div style="color:red;font-size: 18px;text-align: center;font-weight: bold;">请先登录!!</div>
        			<login-form @has-log="onSuccessLog"></login-form>
        		</div>
	        </my-dialog>


			<my-dialog 
				:is-show="isPayDialogShow" 
				@on-close="closeDialog('isPayDialogShow')">
				<table class="buy-dialog-table">
					<tr>
						<th>商品名称</th>
						<th>商品类型</th>
						<th>购买数量</th>
						<th>单价</th>
						<th>总价</th>
					</tr>
					<tr>
						<td>{{ productname }}</td>
						<td>{{ productclassify }}</td>
						<td>{{ buyNum }}</td>
						<td>{{ presentprice }}</td>
						<td>{{ totalprice }}</td>
					</tr>
		        </table>
		        <h3 class="buy-dialog-title">请选择银行</h3>
		        <bank-chooser @on-change="onChangeBanks"></bank-chooser>
		        <div class="button buy-dialog-btn" @click="confirmBuy">
		        	确认购买
		        </div>
			</my-dialog>
			<my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
		        支付失败！
		    </my-dialog>
		    <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order>
		</div>
		<div class="div_clear"></div>
	</div>
</template>


<script>
	import counter from './../header/base/counter'
	import Dialog from './../header/dialog'
	import LoginForm from './../header/loginForm'
	import shoppingForm from './../header/shoppingForm'
	import BankChooser from './../header/base/bankChooser'
	import CheckOrder from './../header/base/checkOrder'
	import _ from 'lodash'

	export default{
		props: ['productimg','productname','productclassify','marketprice','presentprice','backgroundtext','backgroundimg','remainproductcounts'],
		data(){
			return {
				isPayDialogShow: false,
				showcheckeddetailelement: false,
				followcheckedx: 0,
				followcheckedy: 0,
				goodsName: '',// 商品名称
				buyNum: 1,// 商品数量
				buyType: '',// 商品类型
				nowPrice: 0,// 商品价格
				bankId: null,
				bankName: '',
				orderId: null,
				isShowErrDialog: false,
				isShowCheckOrder: false,
				isShowLoginDialog: false,
				cheapselling: this.backgroundtext,
				checkimg: {
					gift: require('@/assets/gift_pic.jpg'),
					time: require('@/assets/time_over.jpg')
				},
				getimg: {
					gift: require('@/assets/gift.jpg'),
					time: require('@/assets/time.jpg')
				}
			}
		},
		methods: {
			checkeddetailproduct (e){
				this.followcheckedx = e.offsetX - 75;
				this.followcheckedy = e.offsetY - 75;
				/* 边缘判断*/
				if(this.followcheckedx>=150){
					this.followcheckedx=150;
				}
				if(this.followcheckedy>=150){
					this.followcheckedy=150;
				}
				if(this.followcheckedx<0){
					this.followcheckedx=0;
				}
				if(this.followcheckedy<0){
					this.followcheckedy=0;
				}
			},
			onParamChange(attr,val){
				this[attr] = val;
				//this.getPrice()
			},
			getPrice(){
				//this.isPayDialogShow = true;
				let reqParams = {
					goodsname: this.productname,
					buyType: this.productclassify,
					price: this.presentprice,
					buyNumber: this.buyNum,
					//totalPrice: this.totalprice
				}
				this.$http.post('/api/getPrice', reqParams)
				.then((res) => {
					console.log(res)
					//this.price = res.data.amount
				})
			},
			closeDialog(attr){
				this[attr] = false;
			},
			onChangeBanks(bankObj){
				this.bankId = bankObj.id;
				this.bankName = bankObj.label;
			},
			showPayDialog(){
				if(this.$root.loginUsername){
					this.isPayDialogShow=true;
				}else{
					this.isShowLoginDialog=true;
				}
			},
			hideErrDialog () {
		      	this.isShowErrDialog = false
		    },
		    hideCheckOrder () {
		      	this.isShowCheckOrder = false
		    },
		    onSuccessLog(data){
				this.closeDialog('isShowLoginDialog');
				this.$root.username = data.data.username;
				this.$root.loginUsername = true;
			},
			confirmBuy(){
				// 创建订单
			    let reqParams = {
			        goodsname: this.productname,
					buyType: this.productclassify,
					price: this.presentprice,
			        buyNumber: this.buyNum,
					totalPrice: this.totalprice,
			        bankName: this.bankName
			    }
			    this.$http.post('api/createOrder',reqParams,{emulateJSON : true})
			    .then((res) => {
			        console.log(res.data.data)
			        this.orderId = res.data.data.orderId
			        this.isShowCheckOrder = true
			        this.isPayDialogShow = false
			    }, (err) => {
			       	this.isShowBuyDialog = false
			        this.isShowErrDialog = true
			        console.log('err:'+err)
			    })
			}
		},
		computed: {
			totalprice(){
				return (this.buyNum * this.presentprice).toFixed(2);
			}
		},
		mounted() {
			//this.getPrice()
		},
		components: {
			MyDialog: Dialog,
			LoginForm,
			shoppingForm,
			BankChooser,
			counter,
			CheckOrder
		}
	}
</script>