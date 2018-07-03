<style>
	
</style>


<template>
	<div>
		<!-- 产品中心页面内导航栏
		<foodproductsnav></foodproductsnav> -->

		<!-- 路径 -->
		<pathway></pathway>

		<!-- 产品中心及其文字 -->
		<textheadlines :message="headlines"></textheadlines>

		<!-- 排序框 -->
		<pricesort></pricesort>				
		
		<!-- 商品陈列 -->
		<foodproducts :message="bestsellgoods"></foodproducts>
	</div>
</template>


<script>
	import foodproductsnav from './foodproductsnav.vue'
	import pathway from './../public/pathway.vue'
	import textheadlines from './../public/textheadlines.vue'
	import pricesort from './../public/pricesort.vue'
	import foodproducts from './../public/foodproducts.vue'
	import { eventBus } from '@/eventBus'

	export default{
		name: 'foodwebproduct',
		data(){
			return {
				headlines: {
					title: '产品中心',
					contents: '特色服务体质为你呈现不一样的服务，品质保障，购物无忧'
				},
				productgoods: [],
				bestsellgoods: [
					{
						goodspic: require('@/assets/goods_description_01.jpg'),
						goodsname: '法式马卡龙全可可脂巧克力礼盒装',
						goodsclassify: '饼干',
						marketprice: '5.90',
						presentprice: '4.90',
						productcounts: '150'
					},
					{
						goodspic: require('@/assets/goods_02.jpg'),
						goodsname: '芬特乐牌  石榴苹果葡萄果汁',
						goodsclassify: '果汁',
						marketprice: '5.90',
						presentprice: '4.80',
						productcounts: '25'
					},
					{
						goodspic: require('@/assets/goods_03.jpg'),
						goodsname: '友臣  肉松饼  经典原味',
						goodsclassify: '肉松饼',
						marketprice: '9.70',
						presentprice: '8.30',
						productcounts: '201'
					},
					{
						goodspic: require('@/assets/goods_04.jpg'),
						goodsname: '友臣  肉松饼1箱',
						goodsclassify: '肉松饼',
						marketprice: '9.70',
						presentprice: '8.20',
						productcounts: '225'
					},
					{
						goodspic: require('@/assets/goods_05.jpg'),
						goodsname: '三只松鼠  黄金肉松饼',
						goodsclassify: '肉松饼',
						marketprice: '9.70',
						presentprice: '8.00',
						productcounts: '457'
					},
					{
						goodspic: require('@/assets/goods_06.jpg'),
						goodsname: '友臣  肉松饼整箱  月饼饼干',
						goodsclassify: '肉松饼',
						marketprice: '9.70',
						presentprice: '8.80',
						productcounts: '60'
					},
					{
						goodspic: require('@/assets/goods_07.jpg'),
						goodsname: 'Richeese  丽芝士 雅嘉奶酪味玉米棒（膨化食品） 印度尼西亚进口',
						goodsclassify: '威化',
						marketprice: '9.90',
						presentprice: '9.00',
						productcounts: '72'
					},
					{
						goodspic: require('@/assets/goods_08.jpg'),
						goodsname: '丹夫  华夫饼（提拉米苏味)',
						goodsclassify: '华夫饼',
						marketprice: '9.90',
						presentprice: '8.90',
						productcounts: '45'
					},
					{
						goodspic: require('@/assets/goods_09.jpg'),
						goodsname: '益昌 三合一减少糖 白咖啡',
						goodsclassify: '咖啡',
						marketprice: '69.90',
						presentprice: '64.90',
						productcounts: '68'
					},
					{
						goodspic: require('@/assets/goods_10.jpg'),
						goodsname: '3合1榛果味白咖啡（固体饮料）',
						goodsclassify: '咖啡',
						marketprice: '69.90',
						presentprice: '62.90',
						productcounts: '85'
					},
					{
						goodspic: require('@/assets/goods_11.jpg'),
						goodsname: '三合一速溶咖啡',
						goodsclassify: '咖啡',
						marketprice: '69.90',
						presentprice: '59.90',
						productcounts: '56'
					},
					{
						goodspic: require('@/assets/goods_12.jpg'),
						goodsname: '良品铺子 奶香巴旦木',
						goodsclassify: '坚果',
						marketprice: '29.90',
						presentprice: '25.90',
						productcounts: '45'
					},
					{
						goodspic: require('@/assets/goods_13.jpg'),
						goodsname: 'Meadow Fresh纽麦福 全脂纯牛奶',
						goodsclassify: '牛奶',
						marketprice: '119.90',
						presentprice: '115.90',
						productcounts: '54'
					},
					{
						goodspic: require('@/assets/goods_14.jpg'),
						goodsname: '苹果果肉果粒饮料',
						goodsclassify: '果汁',
						marketprice: '14.90',
						presentprice: '10.90',
						productcounts: '56'
					},
					{
						goodspic: require('@/assets/goods_15.jpg'),
						goodsname: '帕斯卡草莓味巴氏热处理全脂酸奶',
						goodsclassify: '酸奶',
						marketprice: '119.00',
						presentprice: '115.90',
						productcounts: '54'
					},
					{
						goodspic: require('@/assets/goods_16.jpg'),
						goodsname: '光明 莫斯利安酸牛奶',
						goodsclassify: '酸奶',
						marketprice: '109.90',
						presentprice: '99.90',
						productcounts: '54'
					},
					{
						goodspic: require('@/assets/goods_17.jpg'),
						goodsname: '好丽友 提拉米苏 注心蛋类芯饼',
						goodsclassify: '派',
						marketprice: '23.80',
						presentprice: '21.80',
						productcounts: '10'
					},
					{
						goodspic: require('@/assets/goods_18.jpg'),
						goodsname: '好想你 健康情即食枣 一级',
						goodsclassify: '蜜饯',
						marketprice: '11.80',
						presentprice: '10.80',
						productcounts: '22'
					},
					{
						goodspic: require('@/assets/goods_19.jpg'),
						goodsname: '北田 蒟蒻糙米卷 蛋黄口味 160g 台湾地区进口',
						goodsclassify: '能量棒',
						marketprice: '11.90',
						presentprice: '10.90',
						productcounts: '21'
					},
					{
						goodspic: require('@/assets/goods_20.jpg'),
						goodsname: '达利园 好吃点比利时风味焦糖曲奇饼干咖啡味',
						goodsclassify: '焦糖饼干',
						marketprice: '17.90',
						presentprice: '16.90',
						productcounts: '24'
					},
					{
						goodspic: require('@/assets/goods_21.jpg'),
						goodsname: '微笑果园SMILE 墨西哥进口牛油果 9个装',
						goodsclassify: '水果',
						marketprice: '69.90',
						presentprice: '65.90',
						productcounts: '57'
					},
					{
						goodspic: require('@/assets/goods_22.jpg'),
						goodsname: '三只松鼠 蔓越莓曲奇饼260gx2袋休闲零食饼干糕点点心办公室小吃',
						goodsclassify: '曲奇',
						marketprice: '29.90',
						presentprice: '27.90',
						productcounts: '21'
					},
					{
						goodspic: require('@/assets/goods_23.jpg'),
						goodsname: '奥利奥原味夹心 (10+2) *3片促销装',
						goodsclassify: '夹心饼干',
						marketprice: '15.80',
						presentprice: '13.80',
						productcounts: '45'
					},
					{
						goodspic: require('@/assets/goods_24.jpg'),
						goodsname: '利葡 奶油味面包干',
						goodsclassify: '面包',
						marketprice: '24.90',
						presentprice: '20.90',
						productcounts: '47'
					}
				]
			}
		},
		created() {
			// 自定义方法
			eventBus.$on('change-message',(arr) => {
				this.bestsellgoods = arr
			})
			//this.productgoods = this.bestsellgoods
		},
		components: {
			foodproductsnav,
			pathway,
			textheadlines,
			pricesort,
			foodproducts
		}
	}
</script>