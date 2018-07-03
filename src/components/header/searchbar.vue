<style scoped>
	/* 顶部搜索框 */
	.search_wrap{
		width: 1200px;
		margin:0 auto;
	}
	.search_left_wrap{
		float: left;
	}
	.search_left_wrap img.foodlogo_icon{
		display: block;
		width: 132px;
		height: 98px;
	}
	.search_middle_wrap{
		float: left;
		margin-top: 40px;
		margin-left: 200px;
	}
	.search_middle_wrap input.searchinformation{
		float: left;
		width: 450px;
		height: 24px;
		border: 2px solid #F40;
		outline: none;
		text-indent: 5px;
	}
	.search_middle_wrap button.submitsearch{
		float: left;
		width: 60px;
		height: 30px;
		background-color: #F40;
		border: 1px solid #F40;
		color: #FFF;
		outline: none;
	}
</style>


<template>
	<div class="search_wrap">
      <div class="search_left_wrap">
        <router-link :to="{path: '/'}">
          <img
          	class="foodlogo_icon" 
          	:src="foodlogo">
        </router-link>
      </div>
      <!-- <div class="search_middle_wrap">
        <form>
          <input 
          	class="searchinformation" 
          	type="text" 
          	v-model="searchfoodinformation">
          <button 
          	class="submitsearch" 
          	type="submit">搜索</button>
        </form>
      </div> -->
      <shoppingcart></shoppingcart>
      <div class="div_clear"></div>
    </div>
</template>


<script>
	import shoppingcart from './shoppingcart.vue'

	export default{
		data(){
			return {
				foodlogo: require('./../../assets/pic04.png'),
				searchfoodinformation: ''
			}
		},
		components: {
			shoppingcart
		}
	}
</script>