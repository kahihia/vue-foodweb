<style>
	
</style>


<template>
	<div>
		<!-- 主图片和下拉栏 -->
	    <popularsnacks></popularsnacks>

	    <!-- 限量疯抢 -->
	    <foodlimit></foodlimit>

	    <!-- 今日特卖 -->
	    <todaysell></todaysell>

	    <!-- 畅销特卖 -->
	    <bestsell></bestsell>
	</div>
</template>


<script>
	import popularsnacks from './popularsnacks.vue'
  	import foodlimit from './foodlimit.vue'
  	import todaysell from './todaysell.vue'
  	import bestsell from './bestsell.vue'

	export default{
		name: 'foodwebhome',
		data(){
			return {

			}
		},
		components: {
	      	popularsnacks,
	      	foodlimit,
	      	todaysell,
	      	bestsell,
		}
	}
</script>