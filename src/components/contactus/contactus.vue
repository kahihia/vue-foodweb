<style>
	
</style>


<template>
	<div>
		<!-- 路径 -->
		<pathway></pathway>

		<!-- 产品中心页面内导航栏 -->
		<foodproductsnav></foodproductsnav>

		<!-- 联系我们及其文字 -->
		<textheadlines :message="headlines"></textheadlines>

		<!-- 图片重叠 -->
		<addresspicture></addresspicture>


		<!-- 地图 -->
		<!-- <shopmap></shopmap> -->
	</div>
</template>


<script>
	import pathway from './../public/pathway.vue'
	import foodproductsnav from './../products/foodproductsnav.vue'
	import textheadlines from './../public/textheadlines.vue'
	import addresspicture from './addresspicture.vue'
	import shopmap from './shopmap.vue'

	export default{
		data(){
			return {
				headlines: {
					title: '联系我们',
					contents: '特色服务体质为你呈现不一样的服务，品质保障，购物无忧'
				}
			}
		},
		components: {
			pathway,
			foodproductsnav,
			textheadlines,
			addresspicture,
			shopmap
		}
	}
</script>