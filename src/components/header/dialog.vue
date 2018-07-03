<style scoped>
	.dialog-wrap {
	  z-index: 10;
	  position: fixed;
	  width: 100%;
	  height: 100%;
	}
	.dialog-cover {
	  background: #000;
	  opacity: .3;
	  position: fixed;
	  z-index: 5;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	}
	.dialog-content {
	  width: 50%;
	  position: fixed;
	  max-height: 50%;
	  overflow: auto;
	  background: #fff;
	  top: 20%;
	  left: 50%;
	  margin-left: -25%;
	  z-index: 10;
	  border: 2px solid #464068;
	  padding: 2%;
	  line-height: 1.6;
	}
	.dialog-close {
	  position: absolute;
	  right: 5px;
	  top: 0;
	  width: 20px;
	  height: 20px;
	  line-height: 20px;
	  text-align: center;
	  cursor: pointer;
	}
	.dialog-close:hover {
	  color: #4fc08d;
	}

	.drop-enter-active {
	  transition: all .5s;
	}
	.drop-leave-active {
	  transition: all .3s;
	}
	.drop-enter {
	  transform: translateY(-500px);
	}
	.drop-leave-active {
	  transform: translateY(-500px);
	}

	.fade-enter-active,
	.fade-leave-active{
		transition: opacity .5s;
	}
	.fade-enter,
	.fade-leave-to{
		opacity: 0;
	}
</style>


<template>
	<div>
		<div 
			class="dialog-wrap" 
			v-if="isShow">
			<!-- 黑色背景 -->
			<div 
				class="dialog-cover"
				@click="closeMyself"
				v-if="isShow"></div>
			<transition name="drop">
				<div class="dialog-content" v-if="isShow">
					<p 
						class="dialog-close"
						@click="closeMyself">×</p>
					<slot>empty</slot>
				</div>
			</transition>
		</div>
	</div>
</template>


<script>
	export default{
		props: {
			isShow: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return {

			}
		},
		methods: {
			closeMyself(){
				this.$emit('on-close')
			}
		}
	}
</script>