<style>
	.bestsell_wrap{
		width: 1200px;
		margin: 40px auto 0;
	}
</style>


<template>
	<div class="bestsell_wrap">
      	<toptitle :message="toptitlemessage"></toptitle>
        <foodproducts :message="bestsellgoods"></foodproducts>
    </div>
</template>


<script>
	import toptitle from './toptitle.vue'
	import pricesort from './../public/pricesort.vue'
	import foodproducts from './../public/foodproducts.vue'

	export default{
		data(){
			return {
				toptitlemessage: {
					toptitleimg: require('./../../assets/pic08.png'),
					shoppingicon: require('./../../assets/sale.png'),
					toptitletext: '畅销特卖',
					englishtext: 'SELL'
				},
				bestsellgoods: [
					{
						goodspic: require('./../../assets/goods_01.jpg'),
						goodsname: '地扪  西梅汁',
						goodsclassify: '果汁',
						marketprice: '5.90',
						presentprice: '4.90'
					},
					{
						goodspic: require('./../../assets/goods_02.jpg'),
						goodsname: '芬特乐牌  石榴苹果葡萄果...',
						goodsclassify: '果汁',
						marketprice: '5.90',
						presentprice: '4.90'
					},
					{
						goodspic: require('./../../assets/goods_03.jpg'),
						goodsname: '友臣  肉松饼  经典原味',
						goodsclassify: '肉松饼',
						marketprice: '9.70',
						presentprice: '8.80'
					},
					{
						goodspic: require('./../../assets/goods_04.jpg'),
						goodsname: '友臣  肉松饼1箱',
						goodsclassify: '肉松饼',
						marketprice: '9.70',
						presentprice: '8.80'
					},
					{
						goodspic: require('./../../assets/goods_05.jpg'),
						goodsname: '三只松鼠  黄金肉松饼',
						goodsclassify: '肉松饼',
						marketprice: '9.70',
						presentprice: '8.80'
					},
					{
						goodspic: require('./../../assets/goods_06.jpg'),
						goodsname: '友臣  肉松饼整箱  月饼饼...',
						goodsclassify: '肉松饼',
						marketprice: '9.70',
						presentprice: '8.80'
					},
					{
						goodspic: require('./../../assets/goods_07.jpg'),
						goodsname: 'Richeese  丽芝士...',
						goodsclassify: '威化',
						marketprice: '9.90',
						presentprice: '8.80'
					},
					{
						goodspic: require('./../../assets/goods_08.jpg'),
						goodsname: '丹夫  华夫饼（提拉米苏味...',
						goodsclassify: '华夫饼',
						marketprice: '9.90',
						presentprice: '8.90'
					}
				]
			}
		},
		components: {
			toptitle,
			pricesort,
			foodproducts
		}
	}
</script>