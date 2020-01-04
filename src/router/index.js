import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页2 中间
import Home from '../views/home/home.vue'

// 商品列表
import GoodsList from '../views/goods/goods_list.vue'
// 商品详情
import GoodsDetails from '../views/goods/goods_details.vue'
// 商品介绍
import GoodsDesc from '../views/goods/goodsdesc.vue'

// 搜索
import Seach from '../views/home/search.vue'
// 新闻咨询
import NewsList from '../views/news/news_list.vue'

// 新闻详情
import NewsDetails from '../views/news/news_details.vue'

//图片列表
import PictureLists from '../views/picture/picture_lists.vue'

//图片详情
import PictureDetails from '../views/picture/picture_details.vue'

<<<<<<< HEAD
// 会员
import Vip from '../views/vip/vip.vue'
// 添加商品
import AddGoods from '../views/home/addgoods.vue'
=======
import ShopCar from '../views/goods/shop_car.vue'

>>>>>>> e607bff97d769da441dd12193f549a701ede40aa
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home1' },
  {
    path: '/home1',
    component: Home1,
<<<<<<< HEAD
    redirect:'/home',
    children: [
      { path: '/home', component: Home },
      { path: '/goods/list', component: GoodsList },
      { path: '/goods/details/:id', component: GoodsDetails },
      { path: '/newslist', component: NewsList },
      { path: '/news/details/:id', component: NewsDetails },
      { path: '/photo/list', component: PictureLists },
      { path: '/photo/Info/:id', component: PictureDetails },
      { path: '/search', component: Seach },
      { path: '/member', component: Vip },
      { path: '/addgoods', component: AddGoods }
=======
<<<<<<< HEAD
    redirect:'/home',
    children: [
      { path: '/home', component: Home },
      { path: '/goods/list', component: GoodsList },
      { path: '/goods/details:id', component: GoodsDetails },
      { path: '/newslist', component: NewsList },
      { path: '/news/details:id', component: NewsDetails },
=======
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/goods/list', component: GoodsList },
<<<<<<< HEAD
      { path: '/goods/details:id', component: GoodsDetails },
      { path: '/newslist', component: NewsList },
      { path: '/news/details:id', component: NewsDetails },
      { path: '/photo/list', component: PictureLists },
      { path: '/search', component: Seach },
      { path: '/photo/Info:id', component: PictureDetails }
=======
<<<<<<< HEAD
      { path: '/goods/details/:id', component: GoodsDetails },
      { path: '/goods/goodsdesc/:id', component: GoodsDesc },
      { path: '/goods/shopcar', component: ShopCar },
      { path: '/news/list', component: NewsList },
      { path: '/news/details:id', component: NewsDetails },
>>>>>>> 85f1ebe550fc5d94d0df9bdebaf82c595a9c3359
      { path: '/photo/list', component: PictureLists },
      { path: '/search', component: Seach },
<<<<<<< HEAD
      { path: '/photo/Info:id', component: PictureDetails }
=======
      { path: '/photo/Info/:id', component: PictureDetails }
=======
      { path: '/goods/details:id', component: GoodsDetails },
      { path: '/newslist', component: NewsList },
      { path: '/news/details:id', component: NewsDetails },
      { path: '/photo/list', component: PictureLists },
      { path: '/photo/Info/:id', component: PictureDetails },
      { path: '/search', component: Seach }
>>>>>>> develop
>>>>>>> 861b8c7bbef973d08e75f44a9dacfdd8a618b998
>>>>>>> 85f1ebe550fc5d94d0df9bdebaf82c595a9c3359
>>>>>>> e607bff97d769da441dd12193f549a701ede40aa
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
