<style>
	.four_columns_contents_third{
		margin-top: 10px;
		height: 200px;
	}
	.four_columns_contents_first_text{
		border-top: 2px solid #B0B0B0;
		background-image: url(./../../assets/contents_first.png);
		background-repeat: repeat-x;
		background-position: 0 0;
		padding: 10px;
	}
	.four_columns_contents_first_text span.title_text{
		color: #333;
		font-size: 18px;
		font-weight: 600;
		font-family: 'Microsoft Yahei';
	}
	.four_columns_contents_third_column .third_column_grade>span{
		float: left;
		line-height: 28px;
	}
	.four_columns_contents_third_column .third_column_grade .grade_five{
		float: left;
		padding-left: 135px;
		height: 24px;
		background-image: url(./../../assets/icon_grade.jpg);
		background-position: 0 -200px;
		background-repeat: no-repeat;
	}
	.third_column_text{
		clear: both;
		margin-top: 20px;
	}
</style>


<template>
	<div class="four_columns_contents_third">
		<div class="four_columns_contents_first_text">
			<span class="title_text">顾客评论</span>
		</div>
		<div class="four_columns_contents_third_column">
			<div class="third_column_grade">
				<span>商品满意度：</span>
				<div class="grade_five">5星</div>
				<div class="div_clear"></div>
			</div>
			<div class="third_column_text">
				<span>暂无评价信息</span>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		name: 'otherproductinformationcustomerreviews',
		data(){
			return {

			}
		}
	}
</script>