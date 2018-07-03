<style>
	/* 最后侧返回顶部按钮 */
	.return_top_wrap{
		display: block;
		position: fixed;
		right: 0;
		bottom: 100px;
		width: 40px;
		height: 40px;
		background-image: url(./../../assets/btn_all.png);
		background-position: -589px 0;
		background-repeat: no-repeat;
		cursor: pointer;
	}

	/* 鼠标悬停样式 */
	.return_top_wrap:hover{
		background-position: -589px -42px;
	}
</style>

<template>
	<div 
		v-show="showreturntop"
		class="return_top_wrap"
		@click="renturnTop()">
		<a 
			class="return_top" 
			:title="returntop"
			v-show="showreturntop"></a>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				returntop: '返回顶部',
				showreturntop: false
			}
		},
		methods: {
			renturnTop(){
				if(document.documentElement.scrollTop!=0){
					var interval=setInterval(()=>{
						document.documentElement.scrollTop=document.documentElement.scrollTop-40;
						if(document.documentElement.scrollTop==0){
							clearInterval(interval);
						}
					},10)
				}
			},
			showreturntopicon(){
				this.showreturntop=true;
			},
			hidereturntopicon(){
				this.showreturntop=false;
			}
		},
		created(){
			setInterval(()=>{
				if(document.documentElement.scrollTop>=200){
					this.showreturntopicon();
				}
				if(document.documentElement.scrollTop<200){
					this.hidereturntopicon();
				}
			},50)
		}
	}
</script>