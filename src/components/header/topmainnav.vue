<style scoped>
	.mainnav_wrap{
		z-index: 2;
		position: relative;
		width: 100%;
		background-color: rgb(31,36,55);
	}
	/* 导航栏锁定样式 */
	.locking_mainnav_wrap{
		position: fixed;
		top: 0;
	}

	.mainnav_main{
		width: 1200px;
		height: 55px;
		margin: 0 auto;
	}
	.mainnav_left{
		float: left;
		width: 200px;
		height: 55px;
		background-color: rgb(201,48,0);
		text-align: center;
	}
	.mainnav_left>span{
		color: #FFF;
		font-weight: 700;
		font-size: 16px;
		line-height: 55px;
	}
	.mainnav_right{
		margin: 0 auto;
		width: 650px;
	}
	.mainnav_right li.mainnav_right_wrap{
		float: left;
		width: 130px;
		height: 55px;
		text-align: center;
		line-height: 55px;
		cursor: pointer;
	}
	.mainnav_right li.mainnav_right_wrap span.mainnav_text{
		color: #FFF;
		font-weight: 700;
		font-size: 16px;
	}

	/* 鼠标滑动样式 */
	.mainnav_right .mainnav_right_wrap:hover{
		background-color: #FFF;
	}
	.mainnav_right .mainnav_right_wrap:hover .mainnav_text{
		color: rgb(237,73,22);
	}
</style>


<template>
	<div class="mainnav_wrap" :class="locking ? 'locking_mainnav_wrap' : ''">
      	<div class="mainnav_main">
	        <div class="mainnav_left" v-show="!locking">
	          	<span>所有产品分类</span>
	        </div>
	        <ul class="mainnav_right">
	        	<router-link 
	        		class="main_list_title"
	        		v-for="list in topmainnav"
	        		:key="list.id"
	        		:to="{name: list.routerlink, params: {titlenavname: list.mainnav}}">
		        	<li class="mainnav_right_wrap">
		        		<span class="mainnav_text">
		        			{{ list.mainnav }}
		        		</span>
		        	</li>
	       	 	</router-link>
	        </ul>
	        <div class="div_clear"></div>
      	</div>
    </div>
</template>


<script>
	import { eventBus } from '@/eventBus'

	export default{
		data(){
			return {
				topmainnav: [
					{ 
						routerlink: 'foodwebhome',
						mainnav: '网站首页'
					},
					{ 
						routerlink: 'foodwebproduct',
						mainnav: '产品中心' 
					},
					{ 
						routerlink: 'teambuy',
						mainnav: '优惠团购' 
					},
					{ 
						routerlink: 'limitqiang',
						mainnav: '限时秒杀' 
					},
					{ 
						routerlink: 'contactus',
						mainnav: '联系我们' 
					}
				],
				locking: false,
				showproductlist: false
			}
		},
		methods: {
			lockingtopmainnav(){
				this.locking = true;
				eventBus.$emit('check-locking', this.locking)
			},
			nolockingtopmainnav(){
				this.locking = false;
				eventBus.$emit('check-locking', this.locking)
			}
		},
		created(){
			setInterval(()=>{
				if(document.documentElement.scrollTop>=200){
					this.lockingtopmainnav();
				}else{
					this.nolockingtopmainnav();
				}
			},50)
		}
	}
</script>