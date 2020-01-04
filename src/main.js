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

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'


// 头部组件引入
Vue.component('my-header', Header)

// 底部组件引入
Vue.component('my-footer', Footer)

// 评论组件
Vue.component('publish_pl', PublishPL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
