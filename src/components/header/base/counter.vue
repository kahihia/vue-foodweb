<style>
	.counter_wrap::after{
		content: '';
		display: block;
		height: 0;
		clear: both;
	}
	.counts_btns{
		float: left;
		margin-left: 10px;
	}
	.counts_btns_left{
		display: block;
		float: left;
		width: 18px;
		height: 18px;
		background-image: url(./../../../assets/background_all.png);
		background-repeat: no-repeat;
		background-position: -68px -3px;
		margin-right: 3px;
	}
	.counts_notselect{
		cursor: not-allowed;
	}
	.counts_btns input.goodscounts{
		float: left;
		width: 57px;
		height: 13px;
		background-image: url(./../../../assets/background_all.png);
		background-repeat: no-repeat;
		background-position: -153px -3px;
		text-align: center;
		outline: none;
	}
	.counts_btns_right{
		display: block;
		float: left;
		width: 18px;
		height: 18px;
		background-image: url(./../../../assets/background_all.png);
		background-repeat: no-repeat;
		background-position: -88px -3px;
		margin-left: 3px;
	}
	.counts_kucun{
		float: left;
		font-size: 14px;
		font-family: 'SimSun';
	}
</style>


<template>
	<div class="counter_wrap">
		<div class="counts_btns">
			<a 
				class="counts_btns_left"
				:class="selectcounts ? '' : 'counts_notselect'"
				@click="countsReduce()"></a>
			<input 
				class="goodscounts" 
				type="text" 
				v-model="purchasecounts" 
				@keyup="fixNumber">
			<a 
				class="counts_btns_right"
				:class="selectcounts ? '' : 'counts_notselect'"
				@click="countsAdd()"></a>
			<div class="div_clear"></div>
		</div>
		<span class="counts_kucun">(库存{{ remainproductcounts }})</span>
	</div>
	
</template>


<script>
	export default{
		props: ['selectcounts','productcounts'],
		data(){
			return {
				purchasecounts: 1,
				min: 1,
				remainproductcounts: this.productcounts
			}
		},
		watch:{
			purchasecounts(){
				this.$emit('on-change',this.purchasecounts)
			}
		},
		methods: {
			countsAdd(){
				if(this.selectcounts){
					if(this.purchasecounts >= this.remainproductcounts){
						return 
					}
					this.purchasecounts++;
					this.remainproductcounts--;
				}
			},
			countsReduce(){
				if(this.selectcounts){
					if(this.purchasecounts <= this.min){
						return ;
					}
					this.purchasecounts--;
					this.remainproductcounts++;
				}
			},
			fixNumber(){
				let fix
				// 判断 如果输入的为string类型，则清除
				if(typeof this.purchasecounts === 'string'){
					fix = Number(this.purchasecounts.replace(/\D/g,''))
				}else{
					fix = this.purchasecounts
				}
				if(fix > this.remainproductcounts || fix < this.min){
					fix = this.min
				}
				this.purchasecounts = fix
			}
		}
	}
</script>