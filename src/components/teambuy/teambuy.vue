<style>
	
</style>


<template>
	<div>
		<!-- 路径 -->
		<pathway></pathway>

		<!-- 产品中心页面内导航栏 -->
		<foodproductsnav></foodproductsnav>

		<!-- 优惠团购及其文字 -->
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
					title: '实惠团购',
					contents: '特色服务体质为你呈现不一样的服务，品质保障，购物无忧'
				},
				foodproductslist: [
					{
						goodspic: require('@/assets/teambuy_01.jpg'),
						goodsname: '淘豆 手撕面包',
						marketprice: '21.80',
						presentprice: '14.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_02.jpg'),
						goodsname: '丹夫 华夫饼礼盒装 原味',
						marketprice: '8.90',
						presentprice: '4.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_03.jpg'),
						goodsname: '丹夫 华夫饼',
						marketprice: '7.90',
						presentprice: '4.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_04.jpg'),
						goodsname: '好丽友 双莓派 夹心蛋类芯饼',
						marketprice: '19.90',
						presentprice: '9.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_05.jpg'),
						goodsname: '安佳 超高温灭菌全脂牛奶 1L*12',
						marketprice: '115.90',
						presentprice: '99.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_06.jpg'),
						goodsname: '万多福 美国加州进口开心果 经典盐焗味',
						marketprice: '18.90',
						presentprice: '14.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_07.jpg'),
						goodsname: '北田 蒟蒻糙米卷 海苔味 台湾地区进口',
						marketprice: '10.90',
						presentprice: '4.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_08.jpg'),
						goodsname: 'Mixx 香蕉牛奶味夹心饼干',
						marketprice: '17.90',
						presentprice: '10.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_09.jpg'),
						goodsname: '趣多多香脆曲奇非常有米味',
						marketprice: '7.90',
						presentprice: '4.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
						backgroundtext: '已结束',
						descriptiontext: '早餐  零食  下午茶',
						productcounts: '0'
					},
					{
						goodspic: require('@/assets/teambuy_10.jpg'),
						goodsname: '丑柑正宗不知火丑橘丑八怪桔子',
						marketprice: '96.00',
						presentprice: '89.90',
						backgroundimg: require('@/assets/gift_pic.jpg'),
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