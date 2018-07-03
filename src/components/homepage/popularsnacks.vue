<style scoped>
	.mainicon_wrap{
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 520px;
	}
	.mainicon_main{
		position: absolute;
		left: 50%;
		margin-left: -960px;
		width: 1920px;
		height: 520px;
	}
	.mainicon_wrap>img{
		width: 1920px;
		min-width: 1200px;
		height: 520px;
	}
	.productclassificationlist_wrap{
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -600px;
		width: 170px;
		background-color: #F40;
		padding: 15px;
	}
	.productclassificationlist_wrap li.productclassificationlist{
		width: 184px;
		color: #FFF;
		padding: 10px 0;
		border-bottom: 1px solid #e9e9e9;
	}
	.sublist_wrap{
		width: 184px;
	}
	.sublist_wrap>span{
		float: left;
		font-size: 16px;
		font-weight: 700;
		color: #FFF;
		cursor: default;
	}

	.sublist_wrap .icon{
		display: block;
		float: right;
		margin-right: 10px;
		width: 7px;
		height: 24px;
		color: #FFF;
		background-image: url(./../../assets/icon.png);
		background-repeat: no-repeat;
		background-position: 0 5px;
	}
	.sublist_wrap>ul{
		clear: both;
	}
	.sublist_wrap>ul>li{
		float: left;
		margin-right: 8px;
	}
	.sublist_wrap>ul>li>a>span{
		color: #FFF;
	}
	/* 鼠标滑过样式 */
	.sublist_wrap>ul>li>a>span:hover{
		color: #ffc428;
	}

	.mainicon_text{
		position: absolute;
		top: 85px;
		left: 50%;
		margin-left: -150px;
	}
	.mainicon_text>span{
		font-size: 90px;
		font-family: Simhei;
		color: #FFF;
		letter-spacing: 6px;
	}
	.mainicon_bottom_text{
		position: absolute;
		top: 215px;
		left: 50%;
		margin-left: -170px;
		width: 422px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background-color: #F40;
	}
	.mainicon_bottom_text>span{
		color: #FFF;
		font-size: 18px;
		font-family: Miscrosoft YaHei;
		letter-spacing: 4px;
	}
</style>


<template>
	<div class="mainicon_wrap">
      <div class="mainicon_main">
        <img src="./../../assets/pic_main.jpg">
        <ul class="productclassificationlist_wrap">
          	<li
          		class="productclassificationlist"
          		v-for="list in productclassification">
              	<div class="sublist_wrap">
	                <span>{{ list.classificationname }}</span>
	                <div class="icon"></div>
	                <ul>
	                  	<li
	                  		v-for="item in list.classification">
		                    <a href="#">
		                      	<router-link 
		                      		tag="span"
	                				:to="{name: routerlinkproductname, params: { foodname: item.food, titlenavname: routerlinkproducttitle }}">
				                	{{ item.food }}
				                </router-link>
		                    </a>
	                  	</li>
	                  	<li class="div_clear"></li>
	                </ul>
	                <div class="div_clear"></div>
              	</div>
            </li>
            <div class="div_clear"></div>
        </ul>
        <div class="mainicon_text">
          <span>{{ popularsnackstext }}</span>
        </div>
        <div class="mainicon_bottom_text">
          <span>{{ describepopularsnackstext }}</span>
        </div>
        <div class="div_clear"></div>
      </div>
    </div>
</template>


<script>
	export default{
		data(){
			return {
				routerlinkproductname: 'foodwebproduct',
				routerlinkproducttitle: '产品中心',
				productclassification: [
					{
						classificationname: '饼干',
						classification: [
							{ 
								food: '曲奇',
								routerlink: 'foodwebproduct',
							},
              				{ food: '|' },
							{ 
								food: '威化',
								routerlink: 'foodwebproduct',
							},
              				{ food: '|' },
							{ 
								food: '夹心饼干',
								routerlink: 'foodwebproduct',
							},
              				{ food: '|' },
							{ 
								food: '焦糖饼干',
								routerlink: 'foodwebproduct',
							}
						]
					},
					{
						classificationname: '健康零食',
						routerlink: 'foodwebproduct',
			            classification: [
			              	{ 
			              		food: '能量棒',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '蜜罐',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '坚果',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '水果',
			              		routerlink: 'foodwebproduct',
			              	}
			            ]
					},
					{
						classificationname: '早点下午茶',
						routerlink: 'foodwebproduct',
			            classification: [
			              	{ 
			              		food: '牛奶',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '酸奶',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '果汁',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '咖啡',
			              		routerlink: 'foodwebproduct',
			              	}
			            ]
					},
					{
						classificationname: '中式糕点',
						routerlink: 'foodwebproduct',
			            classification: [
			              	{ 
			              		food: '肉松饼',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '凤梨酥',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '沙琪玛',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '麻花',
			              		routerlink: 'foodwebproduct',
			              	}
			            ]
					},
					{
						classificationname: '西式糕点',
						routerlink: 'foodwebproduct',
			            classification: [
			              	{ 
			              		food: '派',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '面包',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '华夫饼',
			              		routerlink: 'foodwebproduct',
			              	},
			              { food: '|' },
			              	{ 
			              		food: '蛋糕',
			              		routerlink: 'foodwebproduct',
			              		 }
			            ]
					}
				],
		        popularsnackstext: '人气零食',
		        describepopularsnackstext: '没吃过这些你不配做吃货！'
			}
		}
	}
</script>