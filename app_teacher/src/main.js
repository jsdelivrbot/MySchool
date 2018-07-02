// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//
import vueFeedback from 'vue-feedback'
//导入base.css 和 icon
import '../static/icon/iconfont.css'
import '../static/base/base.css'
//引入vuex
import Vuex from 'vuex'
//引入store
import createStore from './store/store'

//引入 MuseUI
import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'

//引入 MintUI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vueFeedback)
Vue.use(Vuex)
Vue.use(MuseUI)
Vue.use(Mint)

//获取store
const store = createStore();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  watch: {
    $route(to, from) {
      let UserStatus = localStorage.getItem("UserStatus");//用户登录状态
      //做个假
      localStorage.setItem("UserStatus",'测试用户');

      if (to.name == "login") {
        this.$store.commit("updateAppBottomShow",false);
        this.$store.commit("state_performAnimation_True");
        this.$store.commit("state_In");
        console.log(1);
      } else {
        if (UserStatus != null) {
          console.log("有用户");
          console.log(UserStatus);
          //去 首页
          if (to.name == "home") {
            this.$store.commit("updateAppBottomShow",true);
            this.$store.commit  ("state_performAnimation_False");
            if (from.name == "login") {
              this.$store.commit("state_performAnimation_True");
              this.$store.commit("state_Out");
            }
          }
          //去 msg
          else if (to.name == "msg") {
            this.$store.commit("updateAppBottomShow",true);
            //不执行动画
            this.$store.commit("state_performAnimation_False");
            if (from.name == "informDesc") {
              this.$store.commit("state_performAnimation_True");
              this.$store.commit("state_Out");
            }
          }
          //去 school
          else if (to.name == "school") {
            this.$store.commit("updateAppBottomShow",true);
            //不执行动画
            this.$store.commit("state_performAnimation_False");
            if (from.name == "studentAttendance"||from.name == "lastTest"||from.name == "jobState") {
              this.$store.commit("state_performAnimation_True");
              this.$store.commit("state_Out");
            }
          }
          //去 my
          else if (to.name == "my") {
            this.$store.commit("updateAppBottomShow",true);//显示底部导航
            this.$store.commit("state_performAnimation_False");//不启用动画
            if (from.name == "myDesc"||from.name == "voluntary"||from.name == "approve") {
              this.$store.commit("state_performAnimation_True");
              this.$store.commit("state_Out");
            }
          }
          //二级 子页面
          else if (to.name == "informDesc") {
            this.$store.commit("updateAppBottomShow",false);
            this.$store.commit("state_performAnimation_True");
            this.$store.commit("state_In");
          }
          else if (to.name == "studentAttendance") {
            this.$store.commit("updateAppBottomShow",false);
            this.$store.commit("state_performAnimation_True");
            this.$store.commit("state_In");
          }
          else if (to.name == "lastTest") {
            this.$store.commit("updateAppBottomShow",false);
            this.$store.commit("state_performAnimation_True");
            this.$store.commit("state_In");
          }
          else if (to.name == "jobState") {
            this.$store.commit("updateAppBottomShow",false);
            this.$store.commit("state_performAnimation_True");
            this.$store.commit("state_In");
          }
          else if (to.name == "myDesc") {
            this.$store.commit("updateAppBottomShow",false);
            this.$store.commit("state_performAnimation_True");
            this.$store.commit("state_In");
          }
          else if (to.name == "voluntary") {
            this.$store.commit("updateAppBottomShow",false);
            this.$store.commit("state_performAnimation_True");
            this.$store.commit("state_In");
          }
          else if (to.name == "approve") {
            this.$store.commit("updateAppBottomShow",false);
            this.$store.commit("state_performAnimation_True");
            this.$store.commit("state_In");
          }
        } else {
          console.log("空的");
          // this.$store.commit("state_show_False");
          // this.$router.replace("/login");
        }
      }
    }
  }
});
