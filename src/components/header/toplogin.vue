<style scoped>
	/* 顶部导航栏 */
	.topnav_wrap{
		width: 100%;
		background-color: #eeeeee;
		user-select: none;
	}
	.topnav_main{
		margin: 0 auto;
		width: 1200px;
		height: 43px;
	}
	.topnav_main_left{
		float: left;
	}
	.topnav_main_left span.shoppingslogan{
		float: left;
		line-height: 40px;
	}
	.topnav_main_login{
		float: left;
		margin-left: 20px;
		line-height: 38px;
	}
	.topnav_main_right{
		float: right;
		margin-right: 100px;
		line-height: 40px;
	}
	.topnav_main_collect{
		float: left;
		margin-right: 10px;
		cursor: pointer;
	}
	.topnav_main_collect .collection{
		float: left;
		margin-top: 6px;
		margin-right: 3px;
	}
</style>


<template>
    <div class="topnav_wrap">
      	<div class="topnav_main">
	        <div class="topnav_main_left">
	          	<span class="shoppingslogan">{{ shoppingslogan }}</span>
	          	<div class="topnav_main_login">
	          		<a @click="inLoginPage">
	          			<span>{{ this.$root.username }}</span>
	          		</a>
	          		<span v-if="this.$root.username!==''">|</span>
	          		<a 
	          			v-if="this.$root.username!==''"
	          			@click="quit">
	          			<span>退出</span>
	          		</a>
		            <a 
		            	v-if="this.$root.username===''"
		            	class="login_wrap" 
		            	@click="loginClick()">
		              	<span class="login">登录</span>
		            </a>
		            <span v-if="this.$root.username===''">|</span>
		            <a 
		            	v-if="this.$root.username===''"
		            	class="register_wrap" 
		            	@click="registerClick()">
		              	<span class="register">注册</span>
		            </a>
	          	</div>
	        </div>

	        <!-- <a href="" @click="quit()">注销登录</a> -->

	        <!-- <login 
	        	:showlogin="showlogin"
	        	@showchangeloginpage="changeLoginPage"></login> -->
		
			<!-- 登录 -->
	        <my-dialog 
	        	:is-show="isShowLoginDialog"
	        	@on-close="closeDialog('isShowLoginDialog')">
	        	<login-form @has-log="onSuccessLog"></login-form>
	        </my-dialog>

			<!-- 注册 -->
	        <my-dialog 
	        	:is-show="isShowRegisterDialog"
	        	@on-close="closeDialog('isShowRegisterDialog')">
	        	<register-form></register-form>
	        </my-dialog>

	        <div class="topnav_main_right">
	          	<div 
	          		class="topnav_main_collect"
	          		@click="addFavorite">
		            <img
		            	class="collection" 
		            	:src="collection.collectionicon">
		            <span class="collectionpage">{{ collection.collectionpage }}</span>
	         	</div>
	         	<div 
	         		class="topnav_main_collect"
	         		@click="setHome(this)">
	         		<img
	         			class="collection" 
	         			:src="home.homepageicon">
	         		<span>{{ home.homepage }}</span>
	         	</div>
	        </div>
	        <div class="div_clear"></div>
      	</div>
    </div>
</template>


<script>
	import { setCookie,getCookie,delCookie } from './../../assets/js/cookie.js'
	import Dialog from './dialog'
	import LoginForm from './loginForm'
	import RegisterForm from './registerForm'

	export default{
		data(){
			return {
				shoppingslogan: '欢迎来到某某商品商城',
				collection: {
					collectionpage: '收藏本页',
					collectionicon: require('./../../assets/pic02.png')
				},
				home: {
					homepage: '设为首页',
					homepageicon: require('./../../assets/pic02.png')
				},
				//username: this.$root.username,
				showlogin: false,
				isShowLoginDialog: false,
				isShowRegisterDialog: false
			}
		},
		/*mounted(){
			/*页面挂载获取保存的cookie值，渲染到页面上
            let uname = getCookie('username')
            this.name = uname
            /*如果cookie不存在，则跳转到登录页
            if(uname == ""){
                this.$router.push('/')
            }
		},*/
		methods: {
			changeLoginPage(val){
				this.showlogin=val;
			},
			loginClick(){
				//this.showlogin=true;
				this.isShowLoginDialog = true;
			},
			registerClick(){
				//this.isShowRegisterDialog = true;
				alert('测试用户名必须包括@，测试密码1至6位')
			},
			closeDialog(attr){
				this[attr] = false;
			},
			onSuccessLog(data){
				this.$root.username = data.data.username
				this.closeDialog('isShowLoginDialog')
				this.$root.loginUsername=true;
			},
			inLoginPage(){
				this.$router.push({path: '/orderList'})
			},
			quit(){
				this.$root.username='';
				this.$root.loginUsername=false;
				this.$router.push({path: '/'});
			},
			/* 设为首页 */
			setHome(obj){
				var url = window.location.href;
				try{
					obj.style.behavior='url(#default#homepage)';
					obj.setHomePage(url);
				}catch(e){
					if(window.netscape){
						try{
							netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
						}catch(e){
							alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
						}
						var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                    	prefs.setCharPref('browser.startup.homepage', vrl);
					}else{
						alert('抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页')
					}
				}
			},
			/* 收藏本页 */
			addFavorite(url,title){
				var url = window.location.href,
					title = document.title;
				try{
					window.external.addFavorite(url, title);
				}catch(e){
					try{
						window.sidebar.addPanel(title, url, "");
					}catch(e){
						alert('抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加"')
					}
				}
			}
		},
		components: {
			MyDialog: Dialog,
			LoginForm,
			RegisterForm
		}
	}
</script>