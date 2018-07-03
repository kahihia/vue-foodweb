<style>
	.content_onlineservice_wrap{
		position: fixed;
		top: 196px;
		right: 0px;
		z-index: 600;
		width: 191px;
		height: 300px;
	}
	.content_onlineservice{
		position: relative;
		right: 0;
		top: 0;
		width: 191px;
		height: 300px;
	}
	.content_onlineservice_kefu{
		width: 53px;
		height: 90px;
		display: block;
		position: absolute;
		right: 0;
		background-image: url(./../../assets/customerservice2.png);
		background-position-x:0px;
		background-position-y:0px;
		background-repeat: no-repeat;
	}
	.content_onlineservice_kefu>p{
		width: auto;
		color: #FFFFFF;
		position: absolute;
		left: 15px;
		top: 54px;
	}
	.content_onlineservice_one{
		width: 191px;
		height: 300px;
		display: block;
		position: relative;
		position: absolute;
		right: 0;
		background-image: url(./../../assets/customerservice1.png);
		background-repeat: no-repeat;
		background-position-x:0px;
		background-position-y:0px;
	}
	.content_onlineservice_one_left{
		color: #FFFFFF;
		padding-left: 27px;
		padding-top: 130px;
	}
	.content_onlineservice_online_kefu{
		color: #FFF;
	}
	.content_onlineservice_one_c{
		width: 84px;
		display: block;
		position: absolute;
		left: 72px;
		top: 67px;
	}
	/* 鼠标悬停触发事件 */
	.content_onlineservice_one_c>ul>li:hover a{
		background-color: rgb(137,137,137);
		color: rgb(255,255,255);
		background-image: url(./../../assets/customer_service_qqover.png);
	}

	.content_onlineservice_one_c>ul>li{
		width: 84px;
		text-align: left;
		overflow: hidden;
		margin: 5px;
	}
	.content_onlineservice_one_c>ul>li>a{
		height: 25px;
		color: rgb(125,125,125);
		text-align: left;
		line-height: 25px;
		display: block;
		background-image: url(./../../assets/new_online_2.png);
		background-repeat: no-repeat;
		background-position-x: 8px;
		background-position-y: center;
		border-radius: 0px;
		padding-left: 30px;
	}

	.fade-enter-active, .fade-leave-active{
		transition: all .3s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
</style>

<template>
	<div 
		class="content_onlineservice_wrap"
		@mouseleave="hidekefuicon">
		<div class="content_onlineservice">
			<transition name="fade" mode="out-in">
				<div 
					class="content_onlineservice_kefu"
					@mouseenter="changekefuicon"
					v-show="!showkefu">
					<p>客服</p>
				</div>
			</transition>
			<transition name="fade" mode="out-in">
				<div 
					class="content_onlineservice_one"
					v-show="showkefu">
					<div class="content_onlineservice_one_left">
						<span class="content_onlineservice_online_kefu">
							在线<br>客服
						</span>
					</div>
					<div class="content_onlineservice_one_c">
						<ul>
							<li v-for="list in kefu">
								<a href="http://wpa.qq.com/msgrd?v=3&uin=123456&site=qq&Menu=yes">{{ list.kefuorder }}</a>
							</li>
						</ul>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				showkefu: false,
				kefu: [
					{kefuorder: '客服一号'},
					{kefuorder: '客服二号'},
					{kefuorder: '客服三号'},
					{kefuorder: '客服四号'}
				]
			}
		},
		methods: {
			changekefuicon(){
				this.showkefu = true
			},
			hidekefuicon(){
				this.showkefu = false
			}
		}
	}
</script>