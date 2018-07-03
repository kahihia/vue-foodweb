<style>
</style>


<template>
	<div>
		<foodproductsnav></foodproductsnav>
		<!-- 商品图和详细介绍 -->
		<productinformationdescription 
			:productimg="this.$route.params.productimg"
			:productname="this.$route.params.productname"
			:productclassify="this.$route.params.productclassify"
			:marketprice="this.$route.params.marketprice"
			:presentprice="this.$route.params.presentprice"
			:backgroundtext="this.$route.params.backgroundtext"
			:backgroundimg="this.$route.params.backgroundimg"
			:remainproductcounts="this.$route.params.remainproductcounts">		
		</productinformationdescription>

		<!-- 下面关于商品的一栏 -->
		<otherproductinformation></otherproductinformation>
	</div>
</template>


<script>
	import foodproductsnav from './../products/foodproductsnav.vue'
	import productinformationdescription from './productinformationdescription.vue'
	import otherproductinformation from './otherproductinformation.vue'

	export default{
		name: 'productdescription',
		data(){
			return {

			}
		},
		created(){
		},
		components: {
			foodproductsnav,
			productinformationdescription,
			otherproductinformation
		}
	}
</script>