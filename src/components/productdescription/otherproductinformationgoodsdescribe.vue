<style>
	.four_columns_contents_first{
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

	.four_columns_contents_first_column ul.goodsdescribe_wrap{
		border-bottom: 2px solid #d7d7d7;
	}
	.four_columns_contents_first_column ul.goodsdescribe_wrap li.goodsdescribe{
		float: left;
		width: 180px;
		padding: 5px 10px;
	}
	.four_columns_contents_first_column ul.goodsdescribe_wrap li.goodsdescribe>span{
		color: #333333;
		font-weight: 600;
		font-size: 14px;
	}
	/* .four_columns_contents_first_column>div{
		text-align: right;
	} */
	.first_column_text{
		margin-top: 20px;
	}
</style>


<template>
	<div class="four_columns_contents_first">
		<div class="four_columns_contents_first_text">
			<span class="title_text">商品描述</span>
		</div>
		<div class="four_columns_contents_first_column">
			<ul class="goodsdescribe_wrap">
				<li
					class="goodsdescribe"
					v-for="list in goodsdescribekinds">
					<span class="goodsdescribekind_text">{{ list.goodsdescribekind }}</span>
				</li>
				<div class="div_clear"></div>
			</ul>
		</div>
		<div class="first_column_text">
			<span>暂无商品信息</span>
		</div>
	</div>
</template>


<script>
	export default{
		name: 'otherproductinformationgoodsdescribe',
		data(){
			return {
				goodsdescribekinds: [
					{ goodsdescribekind: ' 早餐' },
					{ goodsdescribekind: ' 零食' },
					{ goodsdescribekind: ' 下午茶' }
				]
			}
		}
	}
</script>