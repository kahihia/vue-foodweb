import Vue from 'vue'
import Router from 'vue-router' // 导入
import foodwebhome from '@/components/homepage/foodwebhome.vue'
import foodwebproduct from '@/components/products/foodwebproduct.vue'
import teambuy from '@/components/teambuy/teambuy.vue'
import limitqiang from '@/components/limitqiang/limitqiang.vue'
import contactus from '@/components/contactus/contactus.vue'
import productdescription from '@/components/productdescription/productdescription.vue'
import otherproductinformationgoodsdescribe from '@/components/productdescription/otherproductinformationgoodsdescribe.vue'
import otherproductinformationpurchaserecord from '@/components/productdescription/otherproductinformationpurchaserecord.vue'
import otherproductinformationcustomerreviews from '@/components/productdescription/otherproductinformationcustomerreviews.vue'
import otherproductinformationbuyeranswer from '@/components/productdescription/otherproductinformationbuyeranswer.vue'
import OrderListPage from '@/components/header/base/orderList'

// 注册
Vue.use(Router)
// 实例化
export default new Router({
  mode: 'history', // 去除#
  routes: [
    // 网站首页
    {
      path: '/',
      name: 'foodwebhome',
      component: foodwebhome
    },
    // 产品中心
    {
      path: '/product',
      name: 'foodwebproduct',
      component: foodwebproduct,
      /*children: [
        {
          path: 'productdescription',
          name: 'productdescription',
          components: productdescription
        }
      ]*/
    },
    // 优惠团购
    {
      path: '/teambuy',
      name: 'teambuy',
      component: teambuy
    },
    // 限时秒杀
    {
      path: '/limitqiang',
      name: 'limitqiang',
      component: limitqiang
    },
    // 联系我们
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    }, 
    // 产品详细信息
    {
      path: '/productdescription',
      name: 'productdescription',
      component: productdescription,
      // 子路由
      /*children: [
        // 商品详细信息
        {
          path: 'otherproductinformationgoodsdescribe',
          name: 'otherproductinformationgoodsdescribe',
          component: otherproductinformationgoodsdescribe
        },
        // 购买记录
        {
          path: 'otherproductinformationpurchaserecord',
          name: 'otherproductinformationpurchaserecord',
          component: otherproductinformationpurchaserecord
        },
        // 顾客评论
        {
          path: 'otherproductinformationcustomerreviews',
          name: 'otherproductinformationcustomerreviews',
          component: otherproductinformationcustomerreviews
        },
        // 买家问答
        {
          path: 'otherproductinformationbuyeranswer',
          name: 'otherproductinformationbuyeranswer',
          component: otherproductinformationbuyeranswer
        },
        // 重定向
        {
          path: '*',
          redirect: 'otherproductinformationgoodsdescribe'
        }
      ]*/
    },
    // 订单列表
    {

      path: '/orderList',
      name: 'orderList',
      component: OrderListPage
    },
    /*// 登录注册
    {
      path: '/login',
      name: 'login',
      component: login
    },*/
    // 重定向
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// 全局路由守卫
/*router.beforeEach((to,from,next) => {
  console.log('come on!');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  next();
})*/