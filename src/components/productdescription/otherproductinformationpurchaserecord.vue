<style>
	.four_columns_contents_second{
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

	.four_columns_contents_first_column>ul{
		border-bottom: 2px solid #d7d7d7;
	}
	.four_columns_contents_first_column>ul>li{
		float: left;
		width: 180px;
		padding: 5px 10px;
	}
	.four_columns_contents_first_column>ul>li>span{
		color: #333333;
		font-weight: 600;
		font-size: 14px;
	}
	.four_columns_contents_first_column>div{
		text-align: right;
	}
</style>


<template>
	<div class="four_columns_contents_second">
		<div class="four_columns_contents_first_text">
			<span class="title_text">购买记录</span>
		</div>
		<div class="four_columns_contents_first_column">
			<ul>
				<li>
					<span>购买人</span>
				</li>
				<li>
					<span>会员级别</span>
				</li>
				<li>
					<span>数量</span>
				</li>
				<li>
					<span>属性</span>
				</li>
				<li>
					<span>购买时间</span>
				</li>
				<div class="div_clear"></div>
			</ul>
			<div>
				<span>总计0条记录</span>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		name: 'otherproductinformationpurchaserecord',
		data(){
			return {

			}
		}
	}
</script>