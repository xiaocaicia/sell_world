import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Home1 from '../components/home1.vue'

// 首页2 中间
import Home from '../views/home/home.vue'

// 商品列表
import GoodsList from '../views/goods/goods_list.vue'
// 商品详情
import GoodsDetails from '../views/goods/goods_details.vue'

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

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home1' },
  {
    path: '/home1',
    component: Home1,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/goods/list', component: GoodsList },
      { path: '/goods/details:id', component: GoodsDetails },
      { path: '/newslist', component: NewsList },
      { path: '/news/details:id', component: NewsDetails },
      { path: '/photo/list', component: PictureLists },
      { path: '/photo/Info/:id', component: PictureDetails },
      { path: '/search', component: Seach }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
