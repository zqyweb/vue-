//入口文件
import Vue from 'vue'


//配置路由 第一步：导入路由的包
import VueRouter from 'vue-router'
//第二步：安装路由模块
Vue.use(VueRouter)


//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)


//导入MUI的样式
import './lib/mui/css/mui.min.css'

//导入MUI extra的样式
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)


//配置路由第三步：导入自己的router.js路由模块
import router from './router.js'

//导入APP根组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render: c=>c(app),
  router//配置路由第四步：挂载路由对象到vm实例上
})