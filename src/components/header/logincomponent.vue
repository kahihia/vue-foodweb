<style>
	.login_wrap{
		text-align:center;
	}
</style>


<template>
	<div 
		class="login_wrap" 
		v-show="logininformation.showloginpage">
        <h3>{{ logininformation.logintitle }}</h3>
        <p v-show="logininformation.showTishi">{{ logininformation.tishi }}</p>
        <input type="text" placeholder="请输入用户名" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button 
        	class="loginbtn" 
        	v-on:click="login">{{ logininformation.logintitle }}</button>
        <span
        	class="changelogin" 
        	v-on:click="ToRegister">{{ logininformation.changeloginpage }}</span>
    </div>
</template>


<script>
	export default{
		props: ['logininformation'],
		data(){
			return {

			}
		}
	}
</script>