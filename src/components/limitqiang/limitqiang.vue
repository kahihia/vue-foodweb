<style>
	
</style>


<template>
	<div>
		<!-- 路径 -->
		<pathway></pathway>

		<!-- 产品中心页面内导航栏 -->
		<foodproductsnav></foodproductsnav>

		<!-- 限时秒杀及其文字 -->
		<textheadlines :message="headlines"></textheadlines>

		<!-- 商品陈列 -->
		<foodproducts :message="foodproductslist"></foodproducts>
	</div>
</template>


<script>
	import pathway from './../public/pathway.vue'
	import foodproductsnav from './../products/foodproductsnav.vue'
	import textheadlines from './../public/textheadlines.vue'
	import foodproducts from './../public/foodproducts.vue'

	export default{
		name: 'teambuy',
		data(){
			return {
				headlines: {
					title: '限时秒杀',
					contents: '特色服务体质为你呈现不一样的服务，品质保障，购物无忧'
				},
				foodproductslist: [
					{
						goodspic: require('@/assets/limitqiang_01.jpg'),
						goodsname: '达利园 牛角包 牛油味',
						marketprice: '9.50',
						presentprice: '4.50',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_02.jpg'),
						goodsname: '闲趣 韧性饼干 自然清咸原味',
						marketprice: '22.50',
						presentprice: '20.50',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_03.jpg'),
						goodsname: '康师傅 妙芙 欧式蛋糕 奶油口味',
						marketprice: '17.90',
						presentprice: '14.90',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_04.jpg'),
						goodsname: '比利时伯珍 黄油法式华夫饼干',
						marketprice: '8.90',
						presentprice: '4.90',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_05.jpg'),
						goodsname: '麦斯威尔 特浓速溶咖啡',
						marketprice: '59.50',
						presentprice: '39.90',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_06.jpg'),
						goodsname: '摩咕摩咕椰果芒果汁饮料',
						marketprice: '4.90',
						presentprice: '1.00',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_07.jpg'),
						goodsname: '海南红心木瓜8斤',
						marketprice: '65.90',
						presentprice: '50.90',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_08.jpg'),
						goodsname: 'Dole都乐 香蕉脆片',
						marketprice: '6.90',
						presentprice: '1.00',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_09.jpg'),
						goodsname: 'Pepperidg Farm非凡农庄 法式香草味夹心威化卷382g 印度尼西亚进口',
						marketprice: '43.90',
						presentprice: '59.90',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/limitqiang_10.jpg'),
						goodsname: 'Danisa皇冠 曲奇 罐装',
						marketprice: '19.90',
						presentprice: '9.90',
						backgroundimg: require('@/assets/time_over.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					}
				]
			}
		},
		components: {
			pathway,
			foodproductsnav,
			textheadlines,
			foodproducts
		}
	}
</script>