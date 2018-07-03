<style>
	/* 联系我们的下面的样式 */
	.picture_organize{
	    position: relative;
	    width: 1200px;
	    height: 300px;
	    margin: 20px auto 0;
	}
	.organize_backgroundimg_wrap{
	    position: absolute;
	    top: 0;
	    left: 50%;
	    margin-left: -343px;
	    width: 686px;
	    height: 285px;
	    overflow: hidden;
	}
	.organize_backgroundimg_wrap img.organize_backgroundimg{
	    height: 285px;
	    width: auto;
	}

	.organize_backgoundcolor_wrap{
	    display: block;
	    position: absolute;
	    top: 43px;
	    left: 50%;
	    margin-left: -316px;
	    width: 625px;
	    height: 195px;
	    border-color: rgb(237,73,22);
	    border-width: 4px;
	    border-style: solid;
	    background-color: rgb(237,73,22);
	    opacity: 0.85;
	}
	.organize_backgoundcolor_left{
	    float: left;
	    margin-left: 35px;
	    margin-top: 33px;
	}
	.organize_backgoundcolor_line{
	    float: left;
	    margin-left: 23px;
	    margin-top: 26px;
	    width: 2px;
	    height: 150px;
	    border-left: 2px solid #FFFFFF;
	}
	.organize_backgoundcolor_right{
	    float: left;
	    margin-top: 57px;
	    margin-left: 50px;
	}
	.organize_backgoundcolor_right span.organize_backgoundcolor_address_text,
	.organize_backgoundcolor_right span.organize_backgoundcolor_telephone_text,
	.organize_backgoundcolor_right span.organize_backgoundcolor_email_text{
	    font-family: 'microsoft yahei';
	    color: #FFFFFF;
	    font-size: 14px;
	    font-weight: bold;
	}

	.organize_backgoundcolor_address_wrap{
	    clear: both;
	}
	.organize_backgoundcolor_address_wrap img.organize_backgoundcolor_addressicon{
	    float: left;
	    margin-top: 2px;
	    margin-right: 10px;
	}
	.organize_backgoundcolor_address_wrap span.organize_backgoundcolor_address_text{
	    float: left;
	}

	.organize_backgoundcolor_telephone_wrap{
	    clear: both;
	    margin-top: 12px;
	}
	.organize_backgoundcolor_telephone_wrap img.organize_backgoundcolor_telephoneicon{
	    float: left;
	    margin-top: 2px;
	    margin-right: 10px;
	}
	.organize_backgoundcolor_telephone_wrap span.organize_backgoundcolor_telephone_text{
	    float: left;
	}

	.organize_backgoundcolor_email_wrap{
	    clear: both;
	    margin-top: 12px;
	}
	.organize_backgoundcolor_email_wrap img.organize_backgoundcolor_emailicon{
	    float: left;
	    margin-top: 2px;
	    margin-right: 10px;
	}
	.organize_backgoundcolor_email_wrap span.organize_backgoundcolor_email_text{
	    float: left;
	}
</style>


<template>
	<div class="picture_organize">
		<div class="organize_backgroundimg_wrap">
			<img
				class="organize_backgroundimg" 
				:src="organize_backgroundimg">
		</div>
		<div class="organize_backgoundcolor_wrap">
			<div class="organize_backgoundcolor_left">
				<img 
					class="organize_backgoundcolor_pic" 
					:src="organize_shoplogo">
			</div>
			<div class="organize_backgoundcolor_line"></div>
			<div class="organize_backgoundcolor_right">
				<div class="organize_backgoundcolor_address_wrap">
					<img
						class="organize_backgoundcolor_addressicon" 
						:src="contacticon.addressicon">
					<span class="organize_backgoundcolor_address_text">
						{{ contact.address }}
					</span>
					<div class="div_clear"></div>
				</div>
				<div class="organize_backgoundcolor_telephone_wrap">
					<img
						class="organize_backgoundcolor_telephoneicon" 
						:src="contacticon.telephoneicon">
					<span class="organize_backgoundcolor_telephone_text">
						{{ contact.telephone }}
					</span>
					<div class="div_clear"></div>
				</div>
				<div class="organize_backgoundcolor_email_wrap">
					<img
						class="organize_backgoundcolor_emailicon" 
						:src="contacticon.emailicon">
					<span class="organize_backgoundcolor_email_text">
						{{ contact.email }}
					</span>
					<div class="div_clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				organize_backgroundimg: require('@/assets/contentUs_pic1.jpg'),
				contact: {
					address: '某某省某某市某某区某某街道XXX号',
					telephone: '400-000-XXXX112233',
					email: 'moumoufootxxx@xxx.com'
				},
				organize_shoplogo: require('@/assets/contentUs_pic.png'),
				contacticon: {
					addressicon: require('@/assets/contentUs_location.png'),
					telephoneicon: require('@/assets/contentUs_phone.png'),
					emailicon: require('@/assets/contentUs_email.png')
				}
			}
		}
	}
</script>