<style scoped>
	/* 底部样式 */
	.footer_wrap{
		margin-top: 40px;
		width: 100%;
		height: 200px;
		background-color: rgb(31,36,55);
	}
	.footer{
		position: relative;
		width: 1200px;
		height: 200px;
		margin: 0 auto;
	}
	.footer div.guarantee_wrap{
		float: left;
		margin-right: 60px;
		margin-top: 35px;
	}
	.footer div.guarantee_wrap img.guarantee_icon{
		float: left;
		width: 80px;
		height: 80px;
	}
	.footer div.guarantee_wrap span.guarantee_text{
		float: left;
		line-height: 70px;
		color: #FFF;
		font-size: 18px;
	}
	.first_div{
		margin-left: 200px;
	}
	.footer .footer_shopremarks_wrap{
		position: absolute;
		bottom: 10px;
		width: 100%;
	}
	.footer_wrap .footer .footer_shopremarks_wrap span.remark_text{
		font-size: 12px;
		color: #FFF;
		line-height: 10px;
		margin-left: 20px;
	}

	.footer_shopremarks_wrap .text_04{
		width: 269px;
		height: 13px;
		text-align: center;
		margin-top: 2px;
	}
	.footer_wrap .footer .footer_shopremarks_wrap .text_04{
		margin-left: 173px;
	}
	.footer_shopremarks_wrap .footer_shopremarks_top{
		width: 100%;
		text-align: center;
	}
	.footer_shopremarks_wrap .footer_shopremarks_bottom{
		width: 100%;
		text-align: center;
	}
</style>


<template>
	<footer class="footer_wrap">
      	<div class="footer">
      		<div
      			class="guarantee_wrap"
      			:class="index===0 ? 'first_div' : ''"
      			v-for="(list,index) in guarantees">
      			<img
      				class="guarantee_icon" 
      				:src="list.icon">
      			<span class="guarantee_text">{{ list.guarantee }}</span>
      		</div>
	        <div class="footer_shopremarks_wrap">
	        	<div class="footer_shopremarks_top">
		        	<span class="remark_text">{{ shopremarks.businesslicense }}</span>
		        	<span class="remark_text">{{ shopremarks.foodlicense }}</span>
		        	<span class="remark_text">{{ shopremarks.icpnumber }}</span>
		        </div>
		        <div class="footer_shopremarks_bottom">
		        	<span class="remark_text">{{ shopremarks.copyright }}</span>
		        </div>
	        </div>
      	</div>
    </footer>
</template>


<script>
	export default{
		data(){
			return {
				guarantees: [
					{
						icon: require('./../../assets/produce.png'),
						guarantee: '正品保障'
					},
					{
						icon: require('./../../assets/email.png'),
						guarantee: '40元包邮'
					},
					{
						icon: require('./../../assets/seven_days.png'),
						guarantee: '七天无理由退货'
					},
					{
						icon: require('./../../assets/reduce_price.png'),
						guarantee: '天天特价'
					}
				],
				shopremarks: {
					businesslicense: '营业执照:5XX915XXXX88167',
					foodlicense: '食品流通许可证:SPXXX05X5X02100XX',
					icpnumber: '渝ICP备1XX0030X2号-1',
					copyright: 'Copyright©2015 某某电子商务有限公司版权所有'
				}
			}
		}
	}
</script>