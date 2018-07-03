<style>
	/* 下面关于商品的一栏 */
	.four_columns{
		width: 1200px;
		margin: 50px auto 0;
	}
	.four_columns_title_wrap{
		width: 1200px;
		height: 39px;
		border-bottom: 1px solid #aaa099;
	}
	.four_columns_title_wrap li.four_columns_title{
		float: left;
		margin: 0 1px -1px 0;
		width: 132px;
		height: 39px;
		text-align: center;
		border: 1px solid #aaa099;
		border-bottom: none;
		background-image: url(./../../assets/four_columns_off.png);
		background-repeat: no-repeat;
		background-position: 0 0;
		cursor: pointer;
	}
	.four_columns_title_wrap .four_columns_title_first{
		margin-left: 10px;
	}
	.four_columns_title_wrap li.four_columns_title span.title_text{
		font-family: 'SimSun';
		width: 100%;
		height: 100%;
		font-size: 14px;
		line-height: 40px;
	}


	/* 鼠标点击按钮样式 */
	.four_columns .four_columns_title_wrap .cur{
		background-image: url(./../../assets/four_columns_on.png);
		background-repeat: no-repeat;
		background-position: 0 0;
	}


	.four_columns_footer{
		margin-top: 10px;
	}
	.four_columns_footer_previous>span{

	}
	.four_columns_footer_next{

	}


	.fade-enter-active, .fade-leave-active{
		transition: all .3s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
</style>


<template>
	<div class="four_columns">
		<ul class="four_columns_title_wrap">
			<li
        		v-for="(list,index) in othercolumns"
        		:key="list.id"
        		@click="selectedcolumns=index"
        		:class="selectedcolumns===index?'cur':''"
				class="four_columns_title">
				<span class="title_text">{{ list.columnsname }}</span>
			</li>
		</ul>
		<otherproductinformationbuyeranswer
			v-show="selectedcolumns===0"></otherproductinformationbuyeranswer>
		<otherproductinformationcustomerreviews
			v-show="selectedcolumns===1"></otherproductinformationcustomerreviews>
		<otherproductinformationgoodsdescribe
			v-show="selectedcolumns===2"></otherproductinformationgoodsdescribe>
		<otherproductinformationpurchaserecord
			v-show="selectedcolumns===3"></otherproductinformationpurchaserecord>
		<div class="four_columns_footer">
			<div class="four_columns_footer_previous">
				<span>上一个：无</span>
			</div>
			<div class="four_columns_footer_next">
				<span>下一个：</span>
			</div>
		</div>
	</div>
</template>


<script>
	import otherproductinformationbuyeranswer from './otherproductinformationbuyeranswer.vue'
	import otherproductinformationcustomerreviews from './otherproductinformationcustomerreviews.vue'
	import otherproductinformationgoodsdescribe from './otherproductinformationgoodsdescribe.vue'
	import otherproductinformationpurchaserecord from './otherproductinformationpurchaserecord.vue'

	export default{
		data(){
			return{
				othercolumns: [
					{ 
						columnsname: '商品信息',
					},
					{ 
						columnsname: '购买记录',
					},
					{ 
						columnsname: '顾客评论',
					},
					{ 
						columnsname: '买家问答',
					}
				],
				selectedcolumns: 0
			}
		},
		components: {
			otherproductinformationbuyeranswer,
			otherproductinformationcustomerreviews,
			otherproductinformationgoodsdescribe,
			otherproductinformationpurchaserecord
		}
		/*watch: {
			clickcolumn(val){
				if(typeof(Storage)!== 'undefined'){

				}
			}
		}*/
	}
</script>