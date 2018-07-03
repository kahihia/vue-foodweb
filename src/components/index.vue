<style>
  /* 公共样式 */
  body{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  span{
    font-size: 12px;
    color: #666666;
  }
  p{
    margin: 0;
    padding: 0;
  }
  input{
    outline: none;
  }
  .div_clear{
    clear: both;
    height: 0px;
  }


  .page{
      min-width: 1200px;
    }
    /* 顶部图片 */
  .top_pic_wrap{
    position: relative;
    height: 60px;
  }
  .top_pic{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-image: url(./../assets/pic01.png);
    background-repeat: no-repeat;
    background-position: center bottom;
  }

  .fade-enter-active, .fade-leave-active{
   transition: all .3s;
  }
  .fade-enter, .fade-leave-to{
   opacity: 0;
  }
</style>


<template>
  <div class="page" @click="resetComponent">
    <!-- 顶部图片 -->
    <div class="top_pic_wrap">
      <div class="top_pic"></div>
    </div>
    <!-- 顶部导航栏 -->
    <toplogin></toplogin>
    
    <!-- 顶部搜索框 -->
    <searchbar></searchbar>

    <!-- 主导航栏 -->
    <topmainnav></topmainnav>

    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>

    <!-- 客服部分 -->
    <kefu></kefu>

    <!-- 返回顶部 -->
    <returntop></returntop>

    <!-- 底部 -->
    <footercomponent></footercomponent>
  </div>
</template>


<script>
  import { eventBus } from '@/eventBus'
  import toplogin from './header/toplogin.vue'
  import searchbar from './header/searchbar.vue'
  import topmainnav from './header/topmainnav.vue'
  import kefu from './public/kefu.vue'
  import returntop from './public/returntop.vue'
  import footercomponent from './footer/footercomponent.vue'

  export default {
    data(){
      return{

      }
    },
    methods: {
      resetComponent() {
        eventBus.$emit('reset-component')
      }
    },
    components: {
      toplogin,
      searchbar,
      topmainnav,
      kefu,
      returntop,
      footercomponent
    }
  }
</script>