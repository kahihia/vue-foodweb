<style scoped>
	.limitqiang_wrap{
		width: 1200px;
		margin: 40px auto 0;
	}

	.limit_pic01{
		position: relative;
		float: left;
	}
	.limit_pic01 img.qiang_img{
		width: 413px;
		height: 346px;
	}
	.limit_pic01 div.qiang_text_wrap{
		position: absolute;
		top: 48px;
		left: 42px;
	}
	.limit_pic01 .line{
		width: 157px;
		height: 6px;
		border-top: 6px solid #a21524;
	}
	.limit_pic01 .name span.name_text{
		color: #a21524;
		font-family: 'Miscrosoft YaHei';
		font-size: 24px;
		font-weight: 700;
	}
	.limit_pic01 .Englishname span.englishname_text{
		font-weight: 500;
		color: #a21524;
		font-family: 'Miscrosoft YaHei';
		font-size: 12px;
	}


	.limit_pic02{
		position: relative;
		float: left;
	}
	.limit_pic02 img.qiang_img{
		width: 786px;
		height: 346px;
	}
	.limit_pic02 div.qiang_text_wrap{
		position: absolute;
		top: 48px;
		left: 42px;
	}
	.limit_pic02 .line{
		width: 151px;
		height: 6px;
		border-top: 6px solid #FFFFFF;
	}
	.limit_pic02 .name span.name_text{
		color: #FFFFFF;
		font-family: 'Miscrosoft YaHei';
		font-size: 24px;
		font-weight: 700;
	}
	.limit_pic02 .Englishname{
		width: 160px;
	}
	.limit_pic02 .Englishname span.englishname_text{
		font-weight: 500;
		color: #FFFFFF;
		font-family: 'Miscrosoft YaHei';
		font-size: 12px;
	}



	.limit_pic03{
		position: relative;
		float: left;
	}
	.limit_pic03 img.qiang_img{
		width: 721px;
		height: 327px;
	}
	.limit_pic03 div.qiang_text_wrap{
		position: absolute;
		top: 48px;
		left: 42px;
	}
	.limit_pic03 .line{
		width: 224px;
		height: 3px;
		border-top: 3px solid #a21524;
	}
	.limit_pic03 .name span.name_text{
		color: #a21524;
		font-family: 'Miscrosoft YaHei';
		font-size: 24px;
		font-weight: 700;
	}
	.limit_pic03 .line_left{
		float: left;
		margin-top: 11px;
		width: 72px;
		height: 2px;
		border-top: 2px solid #a21524;
	}
	.limit_pic03 .Englishname{
		float: left;
		margin: 0 5px;
		width: 70px;
	}
	.limit_pic03 .Englishname span.englishname_text{
		font-weight: 500;
		color: #a21524;
		font-family: 'Miscrosoft YaHei';
		font-size: 12px;
	}
	.limit_pic03 .line_right{
		float: left;
		margin-top: 11px;
		width: 72px;
		height: 2px;
		border-top: 2px solid #a21524;
	}


	.limit_pic04{
		position: relative;
		float: left;
		margin-left: 18px;
	}
	.limit_pic04 img.qiang_img{
		width: 461px;
		height: 327px;
	}
	.limit_pic04 div.qiang_text_wrap{
		position: absolute;
		top: 48px;
		left: 42px;
	}
	.limit_pic04 .line{
		width: 145px;
		height: 3px;
		border-top: 3px solid #FFFFFF;
	}
	.limit_pic04 .name span.name_text{
		color: #FFFFFF;
		font-family: 'Miscrosoft YaHei';
		font-size: 24px;
		font-weight: 700;
	}
	.limit_pic04 .line_left{
		float: left;
		margin-top: 11px;
		width: 45px;
		height: 2px;
		border-top: 2px solid #FFFFFF;
	}
	.limit_pic04 .Englishname{
		float: left;
		width: 44px;
		margin: 0 5px;
	}
	.limit_pic04 .Englishname span.englishname_text{
		font-weight: 500;
		color: #FFFFFF;
		font-family: 'Miscrosoft YaHei';
		font-size: 12px;
	}
	.limit_pic04 .line_right{
		float: left;
		margin-top: 11px;
		width: 45px;
		height: 2px;
		border-top: 2px solid #FFFFFF;
	}
</style>


<template>
	<div class="limitqiang_wrap">
      	<toptitle :message="toptitlemessage"></toptitle>
      	<div 
      		v-for="list in qianginformation"
      		:class="list.classname">
	        <img
	        	class="qiang_img" 
	        	:src="list.qiangimg">
	        <div class="qiang_text_wrap">
	          	<div class="line"></div>
	          	<div class="name">
	            	<span class="name_text">{{ list.qiangname }}</span>
	          	</div>
	          	<div class="line_left"></div>
	          	<div class="Englishname">
	            	<span class="englishname_text">{{ list.qiangenglishname }}</span>
	          	</div>
	          	<div class="line_right"></div>
	        </div>
      	</div>
      <div class="div_clear"></div>
    </div>
</template>


<script>
	import toptitle from './toptitle.vue'

	export default{
		data(){
			return {
				toptitlemessage: {
					toptitleimg: require('./../../assets/pic06.png'),
					shoppingicon: require('./../../assets/shopping.png'),
					toptitletext: '限量疯抢',
					englishtext: 'ROB'
				},
				qianginformation: [
					{
						classname: 'limit_pic01',
						qiangimg: require('./../../assets/qiang01.png'),
						qiangname: '蓝莓软曲奇饼',
						qiangenglishname: 'BLUEBERRY SOFT COOKIES'
					},
					{
						classname: 'limit_pic02',
						qiangimg: require('./../../assets/qiang02.png'),
						qiangname: '闲趣 韧性饼干',
						qiangenglishname: 'INTERESTING TENACITY BISCUITS'
					},
					{
						classname: 'limit_pic03',
						qiangimg: require('./../../assets/qiang03.png'),
						qiangname: '达利园 牛角包牛油味',
						qiangenglishname: 'CROISSANT'
					},
					{
						classname: 'limit_pic04',
						qiangimg: require('./../../assets/qiang04.png'),
						qiangname: '闲益昌白咖啡',
						qiangenglishname: 'COFFEE'
					}
				]
			}
		},
		components: {
			toptitle
		}
	}
</script>