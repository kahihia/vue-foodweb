<style>
	.toptitle_wrap{
		position: relative;
		width: 1200px;
		height: 245px;
	}
	.toptitle_wrap img.toptitle_img{
		width: 1200px;
		height: 245px;
	}
	.shopping_icon{
		position: absolute;
		top: 50px;
		left: 50%;
		margin-left: -192px;
	}
	.toptitle_text_wrap{
		position: absolute;
		top: 77px;
		left: 50%;
		margin-left: -102px;
	}
	.toptitle_text_wrap span.toptitle_text{
		color: #FFF;
		font-size: 41px;
		font-family: 'Miscrosoft YaHei';
	}
	.toptitle_wrap .someone_say{
		top: 52px;
	}
	.someone_say{
		position: absolute;
		top: 46px;
		left: 50%;
		margin-left: 80px;
	}
	.someone_say_text{
		position: absolute;
		top: 27px;
		left: 50%;
		margin-left: -50px;
		width: 100px;
		text-align: center;
	}
	.someone_say_text span.english_text{
		font-size: 26px;
		font-weight: 700;
		color: #FFF;
		font-family: Arial Black;
	}
</style>


<template>
	<div class="toptitle_wrap">
        <img 
        	class="toptitle_img" 
        	:src="message.toptitleimg">
        <div class="shopping_icon">
          	<img :src="message.shoppingicon">
        </div>
        <div class="toptitle_text_wrap">
          	<span class="toptitle_text">{{ message.toptitletext }}</span>
        </div>
        <div class="someone_say">
          	<img src="./../../assets/someone_say.png">
          	<div class="someone_say_text">
            	<span class="english_text">{{ message.englishtext }}</span>
          	</div>
        </div>
  	</div>
</template>


<script>
	export default{
		props: ['message'],
		data(){
			return{
				
			}
		},
		computed: {
		}
	}
</script>