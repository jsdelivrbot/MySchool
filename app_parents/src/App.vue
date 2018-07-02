<template>
  <div id="app">
    <!-- 渲染 -->　　　　　　
      <router-view></router-view>
    <!--公共头部-->
    <div class="App-top" v-show="isShow">
      <div class="App-top-cicleIcon" @click="showSide" slot="overwrite-left">
        <img src="../static/img/touxiang.jpg" style="width:100%;height:auto;" alt="">
      </div>
      <div class="item-top">{{msg}} <i class="el-icon-hbl-tianjiayonghu Font-color"></i></div>
    </div>
    <side-bar></side-bar>
    <!--公共底部-->
    <div class="App-bottom" v-show="isShow">
      <div class="App-bottom-item" @touchstart="toHome($event,0)">
        <div class="App-bottom-item-top">
          <i class="el-icon-hbl-message el-icon-hbl-color-blue app-bottom-icon"></i>
        </div>
        <div class="App-bottom-item-bottom ">
          <p class="el-icon-hbl-color-blue app-bottom-font">消息</p>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toTask($event,1)">
        <div class="App-bottom-item-top">
          <i class="el-icon-hbl-homepage el-icon-hbl-color-gray app-bottom-icon"></i>
        </div>
        <div class="App-bottom-item-bottom">
          <p class="el-icon-hbl-color-gray app-bottom-font">在校园</p>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toWork($event,2)">
        <div class="App-bottom-item-top">
          <i class="el-icon-hbl-manage el-icon-hbl-color-gray app-bottom-icon"></i>
        </div>
        <div class="App-bottom-item-bottom">
          <p class="el-icon-hbl-color-gray app-bottom-font">动态</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../node_modules/vue/dist/vue.js"></script>
<script>
  import SideBar from './components/sideBar.vue'

  export default {
    components: {'side-bar': SideBar},
    name: 'app',
    //监听路由变化
    watch: {
      $route(to, from) {
        //console.log(to);
        //console.log(from);
        //console.log(this.$route.path);
        if (this.$route.path == '/Home' || this.$route.path == "/Task" || this.$route.path == "/Work") {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
        if (to.path == '/Home' || to.path == "/Task" || to.path == "/Work") {
          this.isShow = true;
        }
      }
    },
    data() {
      return {
        msg: "消息",
        isShow: false,
        transitionName: 'slide-right'
      };
    },
    methods: {
      toHome(e, index) {
        //跳转到Home.vue
        this.toSelected(index);
        this.msg = "消息";
        this.$router.replace('/Home')
      },
      toTask(e, index) {
        //跳转到Task.vue
        this.toSelected(index);
        this.msg = "在校";
        this.$router.replace('/Task')
      },
      toWork(e, index) {
        //跳转到Work.vue
        this.toSelected(index);
        this.msg = "动态";
        this.$router.replace('/Work')
      },
      showSide: function () {
        this.$store.dispatch('showSideBar')
      },
      toSelected(index) {
        //拿到所有的底部图标
        let footer_icons = document.getElementsByClassName("app-bottom-icon");//el-icon-hbl-color-blue
        //所有的底部文字
        let footer_fonts = document.getElementsByClassName("app-bottom-font");//el-icon-hbl-color-gray
        for (let i = 0; i < footer_icons.length; i++) {
          let icon = footer_icons[i];
          let font = footer_fonts[i];
          icon.classList.remove('el-icon-hbl-color-blue');
          icon.classList.add('el-icon-hbl-color-gray');
          font.classList.remove('el-icon-hbl-color-blue');
          font.classList.add('el-icon-hbl-color-gray');
        }
        footer_icons[index].classList.remove('el-icon-hbl-color-gray');
        footer_icons[index].classList.add('el-icon-hbl-color-blue');
        footer_fonts[index].classList.remove('el-icon-hbl-color-gray');
        footer_fonts[index].classList.add('el-icon-hbl-color-blue');
      },
    }
  }
</script>

<style scoped>

  /* 图标颜色||字体颜色 - 开始 */
  .el-icon-hbl-color-blue {
    color: RGB(34, 215, 187)
  }

  .el-icon-hbl-color-gray {
    color: rgba(145, 145, 145, 0.93);
  }

  /* 图标颜色||字体颜色 - 结束 */

  /* 公共头部  - 开始 */
  Font-color {
    color: #434343;
    font-family: 黑体;
  }

  .App-top {
    -moz-box-shadow: 0px 3px 7px #e7e7e7;
    -webkit-box-shadow: 0px 3px 7px #e7e7e7;
    box-shadow: 0px 3px 7px #e7e7e7;
    -webkit-user-select: none;
    width: 100%;
    height: 55px;
    position: fixed;
    top: -1px;
    background-color: white;
  }

  .App-top .item-top {
    margin-top: 5px;
    float: right;
    width: 55%;
    height: 40px;
    line-height: 40px;
    letter-spacing: 3px;
    color: #55693b;
    text-align: start;
    font-size: 1.6rem;
    position: relative;
  }

  .App-top i {
    position: absolute;
    right: 20px;
    font-size: 2rem;
    top: 14px;
    color: #434343;
  }

  /*圆角图标*/
  .App-top-cicleIcon {
    border: 1px solid #e2e2e2;
    margin-left: 15px;
    overflow: hidden;
    margin-top: 6px;
    display: inline-block;
    height: 38px;
    width: 38px;
    border-radius: 60%;
    background-color: #636363;
  }

  /* 公共头部  - 结束 */

  /* 公共底部  - 开始 */
  .App-bottom {
    -moz-box-shadow: 0px -3px 7px #f0f0f0;
    -webkit-box-shadow: 0px -3px 7px #f0f0f0;
    box-shadow: 0px -3px 7px #f0f0f0;
    z-index: 1;
    border-top: solid #eeeeee 1px;
    -webkit-user-select: none;
    width: 100%;
    height: 54px;
    background-color: #fdfdfd;
    position: fixed;
    bottom: -1px;
  }

  .App-bottom .App-bottom-item {
    margin-left: 7px;
    margin-top: -1px;
    width: 31%;
    height: 100%;
    float: left;

  }

  .App-bottom .App-bottom-item .App-bottom-item-top {
    padding-top: 4px;
    width: 100%;
    height: 60%;
    text-align: center;

  }

  .App-bottom .App-bottom-item .App-bottom-item-top i {
    font-size: 3rem;
    font-weight: 100;
  }

  .App-bottom .App-bottom-item .app-bottom-item-middle i {
    font-size: 5rem;
    /*font-size: 7rem;*/
    margin: 0 auto;
    /*padding-bottom: 16px;*/
  }

  .App-bottom .App-bottom-item .App-bottom-item-bottom {
    margin-top: -2px;
    width: 100%;
    height: 40%;
  }

  .App-bottom .App-bottom-item .App-bottom-item-bottom p {
    width: 100%;
    text-align: center;
    font-size: 1rem;
  }

  /* 公共底部  - 结束 */

</style>
