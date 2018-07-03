<style>
	.products_column_title{
		margin: 50px auto 0;
		width: 1200px;
	}
	/* 锁定样式 */
	.locking_products_column{
		margin-top: 105px;
	}
	
	.products_column_title img.products_column_title_icon{
		float: left;
		width: 20px;
		height: 20px;
		margin-top: 2px;
	}
	.products_column_title span.products_column_title_text{
		color: #333;
		font-size: 14px;
	}
</style>


<template>
	<div class="products_column_title" :class="locking ? 'locking_products_column' : ''">
		<img
			class="products_column_title_icon" 
			src="@/assets/blackboard.png">
		<span class="products_column_title_text">网站首页</span>
		<span class="products_column_title_text">>></span>
		<span class="products_column_title_text">{{ this.$route.params.titlenavname }}</span>
	</div>
</template>


<script>
	import { eventBus } from '@/eventBus'

	export default{
		data(){
			return {
				locking: false
			}
		},
		mounted(){
			eventBus.$on('check-locking',(val) => {
				this.locking = val
			})
		}
	}
</script>