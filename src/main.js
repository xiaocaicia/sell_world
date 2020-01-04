import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入按需加载的 vant 组件
import './plugins/vant.js'
// 导入axios
import axios from 'axios'

// 全局css引入
import css from './assets/my_css/my_css.css'
import normalizecss from './assets/my_css/normalize.css'
<<<<<<< HEAD
=======

import normalizecss from './assets/my_css/normalize.css'

import normalizecss from './assets/my_css/normalize.css'
>>>>>>> 85f1ebe550fc5d94d0df9bdebaf82c595a9c3359

// 导入字体图标
import Font from './assets/font/iconfont.css'

// vant 插件

// 头部组件引入
import Header from './components/header.vue'
// 底部组件引入
import Footer from './components/footer.vue'

// 评论
import PublishPL from './components/publish_pl.vue'

Vue.config.productionTip = false

Vue.prototype.$http = axios
<<<<<<< HEAD
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

//定义一个全局事件过滤器
=======
<<<<<<< HEAD

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'


=======
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
// 定义一个全局时间过滤器
>>>>>>> 85f1ebe550fc5d94d0df9bdebaf82c595a9c3359
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const h = (dt.getHours() + '').padStart(2, '0')
  const f = (dt.getMinutes() + '').padStart(2, '0')
<<<<<<< HEAD
})
=======
  const s = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d}`
})

>>>>>>> develop
>>>>>>> 41a2898628ee89ae1b827bafdf29a8dae8063e8c
>>>>>>> 861b8c7bbef973d08e75f44a9dacfdd8a618b998
>>>>>>> 85f1ebe550fc5d94d0df9bdebaf82c595a9c3359
// 头部组件引入
Vue.component('my-header', Header)

// 底部组件引入
Vue.component('my-footer', Footer)

// 评论组件
Vue.component('publish_pl', PublishPL)
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const h = (dt.getHours() + '').padStart(2, '0')
  const f = (dt.getMinutes() + '').padStart(2, '0')
  const s = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${h}:${f}:${s}`
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
