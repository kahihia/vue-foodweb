<style>
	/* 产品中心页面内导航栏 */
	.products_column{
		width: 1200px;
		margin: 50px auto 0;
	}

	.products_column_main{
		padding: -2px;
		margin-top: 20px;
		width: 100%;
		box-shadow: 0px 1px 5px #888888;
		border-top: 2px solid #F40;
		border-bottom: 1px solid #d2d2d2;
		border-right: 1px solid #d2d2d2;
		border-left: 1px solid #d2d2d2;
	}
	.products_column_main div.products_column_main_item{
		border-bottom:1px solid #e9e9e9; 
		border-left:1px solid #e9e9e9; 
		border-right:1px solid #e9e9e9; 
		margin-left: 10px;
		margin-right: 10px;
	}
	.products_main_first{
		border-top: 1px solid #e9e9e9;
		margin-top: 5px;
	}
	.products_main_last{
		border-bottom: 1px solid #e9e9e9;
		margin-bottom: 5px;
	}
	.products_column_main_item ul.products_main_foodproducts_wrap{
		float: left;
		line-height: 35px;
		margin-left: 8px;
	}
	.products_column_main_item ul.products_main_foodproducts_wrap li.products_main_foodproducts{
		float: left;
		margin-left: 5px;
		margin-right: 5px;
	}

	/* 鼠标滑过样式 */
	.products_column_main_item ul.products_main_foodproducts_wrap li.products_main_foodproducts .foodproduct:hover{
		color: #F40;
	}


	.products_main_classify{
		position: relative;
		float: left;
		width: 153px;
		height: 39px;
		background-color: #fafafa;
		color: #333333;
		font-size: 14px;
		font-weight: bold;
		line-height: 39px;
		border-right: 1px solid #e9e9e9;
	}
	.products_main_classify span.products_main_classifyname{
		position: absolute;
		right: 15px;
	}
	.products_line{
		font-size: 10px;
		font-family: SimSun;
		color: #E9E9E9;
		font-weight: normal;
		height: 20px;
		line-height: 40px;
	}
</style>


<template>
	<div class="products_column">
		<div class="products_column_main">
			<div 
				class="products_column_main_item"
				v-for="(list,index) in foodproductsnav"
				:class="[index === foodproductsnav.length-1 ? 'products_main_last' : '' , index === 0 ? 'products_main_first' : '']">
				<div class="products_main_classify">
					<span class="products_main_classifyname">{{ list.foodproductsclassify }}</span>
				</div>
				<ul class="products_main_foodproducts_wrap">
					<li
						class="products_main_foodproducts"
						v-for="item in list.foodproducts">
						<a>
							<router-link 
								class="foodproduct"
								tag="span"
								:to="{name: routerlinkproductname, params: { foodname: item.foodproduct, titlenavname: routerlinkproducttitle }}">
								{{ item.foodproduct }}
							</router-link>
						</a>
					</li>
					<div class="div_clear"></div>
				</ul>
				<div class="div_clear"></div>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				routerlinkproductname: 'foodwebproduct',
				routerlinkproducttitle: '产品中心',
				foodproductsnav: [
					{
						foodproductsclassify: '饼干',
						foodproducts: [
							{ foodproduct: '曲奇' },
							{ foodproduct: '|' },
							{ foodproduct: '威化' },
							{ foodproduct: '|' },
							{ foodproduct: '夹心饼干' },
							{ foodproduct: '|' },
							{ foodproduct: '焦糖饼干' }
						]
					},
					{
						foodproductsclassify: '健康零食',
						foodproducts: [
							{ foodproduct: '能量棒' },
							{ foodproduct: '|' },
							{ foodproduct: '蜜饯' },
							{ foodproduct: '|' },
							{ foodproduct: '坚果' },
							{ foodproduct: '|' },
							{ foodproduct: '水果' }
						]
					},
					{
						foodproductsclassify: '早点下午茶',
						foodproducts: [
							{ foodproduct: '牛奶' },
							{ foodproduct: '|' },
							{ foodproduct: '酸奶' },
							{ foodproduct: '|' },
							{ foodproduct: '果汁' },
							{ foodproduct: '|' },
							{ foodproduct: '咖啡' }
						]
					},
					{
						foodproductsclassify: '中式糕点',
						foodproducts: [
							{ foodproduct: '肉松饼' },
							{ foodproduct: '|' },
							{ foodproduct: '凤梨酥' },
							{ foodproduct: '|' },
							{ foodproduct: '沙琪玛' },
							{ foodproduct: '|' },
							{ foodproduct: '麻花' }
						]
					},
					{
						foodproductsclassify: '西式糕点',
						foodproducts: [
							{ foodproduct: '派' },
							{ foodproduct: '|' },
							{ foodproduct: '面包' },
							{ foodproduct: '|' },
							{ foodproduct: '华夫饼' },
							{ foodproduct: '|' },
							{ foodproduct: '蛋糕' }
						]
					}
				]
			}
		}
	}
</script>