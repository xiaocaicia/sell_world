// 导入 Vue
import Vue from 'vue'

// 导入 Button 组件
<<<<<<< HEAD
import { Button, Grid, GridItem, Image, List, Cell, PullRefresh,Lazyload, SwipeItem,Swipe, Stepper, Toast, Icon, Tabbar, TabbarItem,SubmitBar, Card } from 'vant'

// 挂载 Button 组件
Vue.use(Button)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(List)
Vue.use(Cell)
Vue.use(PullRefresh)
Vue.use(Lazyload)
Vue.use(SwipeItem)
Vue.use(Swipe)
Vue.use(Stepper)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(SubmitBar)
Vue.use(Card)

=======
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
>>>>>>> develop
