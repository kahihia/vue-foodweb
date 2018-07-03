<style>
	.products_goods_wrap{
		margin: 50px auto 20px;
		width: 1200px;
		height: 100%;
		min-height: 400px;
	}
	.products_goods_wrap li.products_goods{
		float: left;
		display: block;
		padding: 0;
		margin-bottom: 10px;
		margin: 0 50px;
		width: 200px;
	}
	.products_goods_pic{
		width: 200px;
		height: 200px;
		cursor: pointer;
	}
	.products_goods_pic img.goods_pic{
		width: 200px;
		height: 200px;
	}
	.products_goods_name{
		/* 名字不换行，多余的名字显示.. */
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.products_goods_name .name{
		color: #5a5a5a;
		font-size: 13px;
		cursor: pointer;
	}

	/* 鼠标滑过的样式 */
	.products_goods_name .name:hover{
		color: #0064d4;
	}
	.products_goods_name .classify{
		color: #ed4916;
		font-size: 12px;
	}
	.expensive_price .text{
		color: #acacac;
		font-size: 12px;
	}
	.expensive_price .price{
		font-size: 12px;
		color: #666;
		text-decoration: line-through;
	}
	.normal_price .text{
		color: #acacac;
		font-size: 12px;
	}
	.normal_price .price{
		color: #ff3c00;
		font-size: 12px;
	}

	.backgroundimage_wrap{
		width: 192px;
	    height: 18px;
	    line-height: 18px;
	    text-align: center;
	    color: #a6a6a6;
	    font-size: 13px;
	    font-family: microsoft yahei;
	    margin-bottom: 10px;
	    margin-top: 10px;
	}
</style>


<template>
	<ul class="products_goods_wrap">
    	<li
    		class="products_goods"
    		v-for="(list,index) in message">
    		<router-link
    			:to="{name: 'productdescription',
    				params: {
    					productimg: list.goodspic,
    					productname: list.goodsname,
    					productclassify: list.goodsclassify,
    					marketprice: list.marketprice,
    					presentprice: list.presentprice,
    					backgroundtext: list.backgroundtext,
    					backgroundimg: list.backgroundimg,
    					remainproductcounts: list.productcounts
    				}
    			}">
	            <div 
	            	class="products_goods_pic">
	              	<img 
	              		class="goods_pic" 
	              		:src="list.goodspic">
	            </div>
	        </router-link>
            <div class="products_goods_name">
              	<span class="name">{{ list.goodsname }}</span>
              	<br/>
              	<span class="classify">{{ list.goodsclassify }}</span>
            </div>
            <div class="products_goods_price" @click="selectproduct(index)">
              	<div class="expensive_price">
	                <span class="text">市场价:</span>
	                <span class="price">
	                	￥{{ list.marketprice }}
	                </span>
              	</div>
              	<div class="normal_price">
	                <span class="text">价格:</span>
	                <span class="price">
	                	￥{{ list.presentprice }}
	                </span>
              	</div>
            </div>
            <div 
            	class="backgroundimage_wrap"
            	:style="{backgroundImage: 'url('+ list.backgroundimg +')'}">{{ list.backgroundtext }}</div>
			<!-- <div class="products_goods_description">
				<span>{{ list.descriptiontext }}</span>
			</div> -->
      	</li>
      	<div class="div_clear"></div>
    </ul>
</template>


<script>
	import { eventBus } from '@/eventBus'

	export default{
		props: ['message'],
		data(){
			return {
			}
		},
		mounted(){
		},
		methods: {
			selectproduct(index){
				this.$root.productid=index;
			}
		}
	}
</script>