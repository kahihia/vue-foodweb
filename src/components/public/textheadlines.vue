<style>
	.text_headlines_wrap{
		width: 1200px;
		margin: 80px auto 0;
	}
	.text_headlines_title{
	    width: 1200px;
	    text-align: center;
	}
	.text_headlines_title span.text_headlines{
	    font-family: 'microsoft yahei';
	    font-size: 36px;
	    letter-spacing: 5px;
	    color: rgb(237,73,22);
	}
	.text_headlines_contents_wrap{
	    width: 1200px;
	    text-align: center;
	}
	.text_headlines_contents_wrap span.text_headlines_contents{
	    font-family: 'microsoft yahei';
	    font-size: 14px;
	    letter-spacing: 5px;
	    color: rgb(237,73,22);
	}
	.teamBuy_text_line{
	    width: 1200px;
	    height: 1px;
	    border-top: 1px solid #ed4916;
	}
</style>


<template>
	<div class="text_headlines_wrap">
		<div class="text_headlines_title">
			<span class="text_headlines">{{ message.title }}</span>
		</div>
		<div class="text_headlines_contents_wrap">
			<span class="text_headlines_contents">{{ message.contents }}</span>
		</div>
		<div class="teamBuy_text_line"></div>
	</div>
</template>


<script>
	export default{
		props: ['message'],
		data(){
			return {

			}
		}
	}
</script>