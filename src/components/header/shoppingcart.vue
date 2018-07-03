<style>
	.search_right_wrap{
		float: right;
		padding: 10px 15px;
		margin-top: 30px;
		margin-right: 140px;
		border: 1px solid rgb(102,102,102);
		cursor: pointer;
	}
	.search_left_shop{
		float: left;
		margin-right: 8px;
		background-image: url(./../../assets/shopping_all.png);
		background-repeat: no-repeat;
		background-position: 0 -207px;
		width: 18px;
		height: 30px;
	}
	.search_right_wrap div.shoppingcart_wrap{
		float: left;
		margin-top: 3px;
	}
	.search_right_text{
		color: #F40!important;
	}
	/*.search_right_wrap img.shoppingcart_icon{
		float: right;
		margin-top: 3px;
	}*/
</style>


<template>
	<div>
		<div
			class="search_right_wrap" 
			@click="shoppingClick">
	        <span class="search_left_shop"></span>
	        <div class="shoppingcart_wrap">
	        	<span>购物车</span>
	        </div>
	        <!-- <img 
	        	class="shoppingcart_icon" 
	        	:src="shoppingcarticon"> -->
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

		<!-- 购物车 -->
 	    <!--<my-dialog 
	    	:is-show="isShowShoppingDialog"
	    	@on-close="closeDialog('isShowShoppingDialog')">
	    	<shopping-form></shopping-form>
	    </my-dialog> -->
	</div>
</template>


<script>
	import Dialog from './dialog'
	import LoginForm from './loginForm'
	import ShoppingForm from './shoppingForm'

	export default{
		data(){
			return {
				shoppingcarticon: require('./../../assets/pic05.png'),
				isShowLoginDialog: false
			}
		},
		methods: {
			shoppingClick(){
				if(this.$root.loginUsername){
					this.$router.push({ name: 'orderList' })
				}else{
					this.isShowLoginDialog=true;
				}
			},
			closeDialog(attr){
				this[attr]=false;
			},
			onSuccessLog(data){
				this.closeDialog('isShowLoginDialog');
				this.$root.username = data.data.username;
				this.$root.loginUsername = true;
			}
		},
		components: {
			MyDialog: Dialog,
			LoginForm,
			ShoppingForm
		}
	}
</script>