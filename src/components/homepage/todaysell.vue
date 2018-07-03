<style scoped>
	.specialsell_wrap{
		width: 1200px;
		margin: 40px auto 0;
	}
	.specialsell_wrap .specialsellfood_wrapper{
		position: relative;
		height: 375px;
		overflow: hidden;
	}
	.specialsell_wrap ul.specialsellfood_wrap{
		position: absolute;
		left: 0;
		margin-top: 20px;
		width: 2400px;
		height: 355px;
	}
	.specialsell_wrap ul.specialsellfood_wrap li.specialsellfood{
		float: left;
		position: relative;
		width: 240px;
		text-align: center;
		margin: 0 30px;
	}

	.specialsell_name_wrap{
		position: absolute;
		top:-7px;
		left: 50%;
		margin-left: -93px;
	}
	.specialsell_name_wrap_left{
		font-size: 50px;
		font-family: Times New Roman;
		margin-right: 126px;
	}
	.specialsell_name_wrap_right{
		font-size: 50px;
		font-family: Times New Roman;
	}
	.specialsell_name{
		text-align: center;
	}
	.specialsell_name_title{
		font-size: 24px;
		font-family: 'Miscrosoft YaHei';
	}
	.specialsell_name_english{
		font-size: 13px;
		color: rgb(51,51,51);
		font-family: 'Miscrosoft YaHei',Arial;
	}
	.specialsell_bottom_name_wrap{
		text-align: center;
	}
	.specialsell_bottom_name{
		color: rgb(102,102,102);
		font-size: 16px;
		font-weight: 700;
		font-family: 'Miscrosoft YaHei';
	}
	.specialsell_price{
		width: 150px;
		height: 41px;
		background-color: rgba(237,73,22,1);
		text-align: center;
		margin-left: 44px;
		margin-top: 22px;
		line-height: 40px;
		border-radius: 50px;
		cursor: pointer;
		transition: 0.3s ease-in-out;
	}
	.specialsell_price span.specialsell_price_text{
		color: #FFF;
		font-family: 'Miscrosoft YaHei';
	}

	/* 鼠标滑过价格文字的背景颜色变化 */
	.specialsell_price:hover{
		transition: 0.3s ease-in-out;
		background-color: #151926;
	}

	.specialsell_img{
		width: 230px;
		height: 219px;
		cursor: pointer;
	}
	.specialsell_img_show{
		width: 230px;
		height: 219px;
	}
	.specialsell_img_hide{
		display: none;
		margin-left: 10px;
		width: 230px;
		height: 219px;
	}
</style>


<template>
	<div class="specialsell_wrap">
      	<toptitle :message="toptitlemessage"></toptitle>
      	<div 
      		class="specialsellfood_wrapper"
      		@mouseenter="stopautosellfood()"
      		@mouseleave="goonautosellfood()">
      		<ul 
      			class="specialsellfood_wrap"
      			:style="{left: leftnum + 'px'}">
	      		<li
	      			class="specialsellfood"
	      			v-for="list in todaysellfood">
		          	<div class="specialsell_name_wrap">
		            	<span class="specialsell_name_wrap_left">{</span>
		            	<span class="specialsell_name_wrap_right">}</span>
		          	</div>
		          	<div class="specialsell_name">
		            	<span class="specialsell_name_title">
		            		{{ list.goodsname }}
		            	</span>
		            	<br>
		            	<span class="specialsell_name_english">
		            		{{ list.englishkind }}
		            	</span>
		          	</div>
		          	<router-link 
		          		tag="div"
		          		:to="{ name: 'productdescription',
		          			   params: {
		          			   	productimg: list.todaysellfoodshowimg,
		    					productname: list.goodsname,
		    					productclassify: list.goodsclassify,
		    					marketprice: list.marketprice,
		    					presentprice: list.presentprice
		          			   }
		          			}"
		          		class="specialsell_img">
		            	<img 
		            		class="specialsell_img_show"
		            		:src="list.todaysellfoodshowimg">
		          	</router-link>
		          	<div class="specialsell_bottom_name_wrap">
		            	<span class="specialsell_bottom_name">
		            		{{ list.goodsclassify }}
		            	</span>
		          	</div>
		          	<router-link 
		          		tag="div"
		          		:to="{ name: 'productdescription',
		          			   params: {
		          			   	productimg: list.todaysellfoodshowimg,
		    					productname: list.goodsname,
		    					productclassify: list.goodsclassify,
		    					marketprice: list.marketprice,
		    					presentprice: list.presentprice,
		    					remainproductcounts: list.productcounts
		          			   }
		          			}"
		          		class="specialsell_price">
		            	<span class="specialsell_price_text">{{ list.presentprice }}疯抢</span>
		          	</router-link>
		        </li>
		        <div class="div_clear"></div>
	      	</ul>
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
					toptitleimg: require('./../../assets/pic07.png'),
					shoppingicon: require('./../../assets/sale.png'),
					toptitletext: '今日特卖',
					englishtext: 'CHEAP'
				},
				todaysellfood: [
					{
						goodsname: '皇冠  曲奇',
						englishkind: 'COOKIES',
						todaysellfoodshowimg: require('./../../assets/sell_show_01.jpg'),
						goodsclassify: '曲奇',
						marketprice: '40.00',
						presentprice: '19.90',
						productcounts: '890'
					},
					{
						goodsname: '非凡  威化',
						englishkind: 'WAFER',
						todaysellfoodshowimg: require('./../../assets/sell_show_02.jpg'),
						goodsclassify: '威化卷',
						marketprice: '60.00',
						presentprice: '40.90',
						productcounts: '520'
					},
					{
						goodsname: '红心木瓜8斤',
						englishkind: 'PAWPAW',
						todaysellfoodshowimg: require('./../../assets/sell_show_03.jpg'),
						goodsclassify: '水果',
						marketprice: '69.90',
						presentprice: '50.90',
						productcounts: '40'
					},
					{
						goodsname: '夹心饼干',
						englishkind: 'BISCUIT',
						todaysellfoodshowimg: require('./../../assets/sell_show_04.jpg'),
						goodsclassify: '夹心饼干',
						marketprice: '25.00',
						presentprice: '16.90',
						productcounts: '100'
					},
					{
						goodsname: '皇冠  曲奇',
						englishkind: 'COOKIES',
						todaysellfoodshowimg: require('./../../assets/sell_show_01.jpg'),
						goodsclassify: '曲奇',
						marketprice: '40.00',
						presentprice: '19.90',
						productcounts: '890'
					},
					{
						goodsname: '非凡  威化',
						englishkind: 'WAFER',
						todaysellfoodshowimg: require('./../../assets/sell_show_02.jpg'),
						goodsclassify: '威化卷',
						marketprice: '60.00',
						presentprice: '40.90',
						productcounts: '520'
					},
					{
						goodsname: '红心木瓜8斤',
						englishkind: 'PAWPAW',
						todaysellfoodshowimg: require('./../../assets/sell_show_03.jpg'),
						goodsclassify: '水果',
						marketprice: '69.90',
						presentprice: '50.90',
						productcounts: '40'
					},
					{
						goodsname: '夹心饼干',
						englishkind: 'BISCUIT',
						todaysellfoodshowimg: require('./../../assets/sell_show_04.jpg'),
						goodsclassify: '夹心饼干',
						marketprice: '25.00',
						presentprice: '16.90',
						productcounts: '100'
					}
				],
				leftnum: 0,
				autosellfood: true
			}
		},
		components: {
			toptitle
		},
		methods: {
			autoPlay(){
				setInterval(() => {
					if(this.autosellfood){
						this.leftnum--
						if(this.leftnum <= -1200){
							this.leftnum = 0
						}
					}
				},20)
			},
			goonautosellfood(){
				this.autosellfood = true
			},
			stopautosellfood(){
				this.autosellfood = false
			}
		},
		created(){
			this.autoPlay()
		}
	}
</script>