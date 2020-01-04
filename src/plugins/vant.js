// 导入 Vue
import Vue from 'vue'
// 导入 Button 组件
import { Search, CellGroup, Panel, Tag, Notify, SwipeCell, Field, Button, Grid, GridItem, Image, List, Cell, PullRefresh,Lazyload, SwipeItem,Swipe, Stepper, Toast, Icon, Tabbar, TabbarItem,SubmitBar, Card, Tabs, Tab, ImagePreview, Divider, Loading } from 'vant'


// 挂载 Button 组件
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(List)
Vue.use(Cell)
Vue.use(PullRefresh)
Vue.use(SwipeItem)
Vue.use(Swipe)
Vue.use(Stepper)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(SubmitBar)
Vue.use(Card)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(ImagePreview)
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Search)
Vue.use(CellGroup)
Vue.use(Panel)
Vue.use(Tag)
Vue.use(Notify)
Vue.use(SwipeCell)
Vue.use(Field)
Vue.use(Divider)
Vue.use(Loading)
  
