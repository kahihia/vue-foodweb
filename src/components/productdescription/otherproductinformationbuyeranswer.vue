<style>
	.four_columns_contents_forth{
		margin-top: 10px;
		height: 200px;
	}
	.four_columns_contents_forth_text{
		border-top: 2px solid #B0B0B0;
		background-image: url(./../../assets/contents_first.png);
		background-repeat: repeat-x;
		background-position: 0 0;
		padding: 10px;
	}
	.four_columns_contents_forth_text .forth_title{
		float: left;
		color: #333;
		font-size: 18px;
		font-weight: 600;
		font-family: 'Microsoft Yahei';
	}
	.four_columns_contents_forth_text .forth_record{
		float: left;
		margin-left: 10px;
	}
	.four_columns_contents_forth_text .forth_text{
		float: right;
		height: 25px;
		width: 60px;
		text-align: center;
		background-image: url(./../../assets/forth_text.gif);
		background-repeat: no-repeat;
		background-position: 0 0;
		padding:0 14px;
		border: 1px solid #cb3a00;
	}
	.four_columns_contents_forth_text .forth_text>span{
		color: #FFF;
		line-height: 25px;
	}
	.forth_column_text{
		clear: both;
		margin-top: 20px;
	}
</style>


<template>
	<div class="four_columns_contents_forth">
		<div class="four_columns_contents_forth_text">
			<span class="forth_title">买家问答</span>
			<span class="forth_record">共0条记录</span>
			<div class="forth_text">
				<span>我要提问</span>
			</div>
			<div class="div_clear"></div>
		</div>
		<div class="forth_column_text">
			<span>暂无提问信息</span>
		</div>
	</div>
</template>


<script>
	export default{
		name: 'otherproductinformationbuyeranswer',
		data(){
			return {

			}
		}
	}
</script>