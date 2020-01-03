// 导入 Vue
import Vue from 'vue'

// 导入 Button 组件
import { 
    Button,
    Tabs,
    Tab,
    Grid,
    GridItem,
    Image,
    ImagePreview,
    Lazyload 
 } from 'vant'

// 挂载 Button 组件
Vue.use(Button)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(ImagePreview)
Vue.use(Lazyload, {
    lazyComponent: true
  });
