// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './assets/fonts/App_bottom_icon/iconfont.css'
import './assets/fonts/Home_Icon/iconfont.css'
import './assets/fonts/sider_bar_icon/iconfont.css'
import './assets/fonts/white_icon/iconfont.css'
import store from './store/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import echarts from 'echarts'
//全局导入Echarts表格
Vue.prototype.$echarts = echarts

Vue.use(MintUI)
Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
