<template>
  <div id="app">
    <!-- 渲染 -->
    <router-view/>
    <!--快捷菜单-->
    <div class="App-shortcut-Menu" id="App-shortcut-Menu">
      <!--时间-->
      <div class="App-shortcut-Menu-Time" id="time">
        <h1>06/01<span>星期五</span></h1>
      </div>
      <!--快捷功能-->
      <div class="App-shortcut-Menu-block" id="block" @touchmove.prevent>
        <div class="App-shortcut-Menu-block-Item">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img src="http://stdl.qq.com/stdl/newtabcms/icon/1260_100.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>背面试题</span>
          </div>
        </div>
        <div class="App-shortcut-Menu-block-Item">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img class="table-img"
                 src="http://stdl.qq.com/stdl/newtabcms/icon/1236_100.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>班级新鲜事</span>
          </div>
        </div>
        <div class="App-shortcut-Menu-block-Item">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img class="table-img"
                 src="http://stdl.qq.com/stdl/newtabcms/icon/0011_100.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>在线听课</span>
          </div>
        </div>
        <div class="App-shortcut-Menu-block-Item">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img class="table-img"
                 src="http://stdl.qq.com/stdl/newtabcms/icon/0015_100.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>班级考勤</span>
          </div>
        </div>
        <div class="App-shortcut-Menu-block-Item">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img class="table-img"
                 src="http://stdl.qq.com/stdl/newtabcms/icon/1262_100.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>在线听课</span>
          </div>
        </div>
        <div class="App-shortcut-Menu-block-Item">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img class="table-img"
                 src="http://stdl.qq.com/stdl/newtabcms/icon/1261_100.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>说句心里话</span>
          </div>
        </div>
        <div class="App-shortcut-Menu-block-Item">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img class="table-img"
                 src="http://stdl.qq.com/stdl/newtabcms/icon/0061_100.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>项目进度</span>
          </div>
        </div>
        <!--关闭按钮-->
        <span @touchstart.stop="shortcutMenuClose()"
              class="App-shortcut-Menu-Close ">×</span>
      </div>

    </div>
    <!--公共底部-->
    <div class="App-bottom">

      <div class="App-bottom-item" @touchstart="toHome($event)">
        <div class="App-bottom-item-top">
          <i class="el-icon-hbl-message el-icon-hbl-color-blue"></i>
        </div>
        <div class="App-bottom-item-bottom ">
          <p class="el-icon-hbl-color-blue">消息</p>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toTask($event)">
        <div class="App-bottom-item-top">
          <i class="el-icon-hbl-homepage el-icon-hbl-color-gray"></i>
        </div>
        <div class="App-bottom-item-bottom">
          <p class="el-icon-hbl-color-gray">任务</p>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="shortcutMenu()">
        <!--中心-->
        <div class="app-bottom-item-middle">
          <i class="el-icon-hbl-addition_fill el-icon-hbl-color-blue"></i>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toWork($event)">
        <div class="App-bottom-item-top">
          <i class="el-icon-hbl-manage el-icon-hbl-color-gray"></i>
        </div>
        <div class="App-bottom-item-bottom">
          <p class="el-icon-hbl-color-gray"> 工作</p>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toPersonal($event)">
        <div class="App-bottom-item-top">
          <i class="el-icon-hbl-people el-icon-hbl-color-gray"></i>
        </div>
        <div class="App-bottom-item-bottom">
          <p class="el-icon-hbl-color-gray">我</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {
      toHome: function (e) {
        //跳转到Home.vue
        this.$router.replace('/')
      },
      toTask: function (e) {
        //跳转到Task.vue
        this.$router.replace('/Task')
      },
      toWork: function (e) {
        //跳转到Work.vue
        this.$router.replace('/Work')
      },
      toPersonal: function (e) {
        //跳转到Personal.vue
        this.$router.replace('/Personal')
      },
      shortcutMenu: function () {
        //快捷菜单
        document.getElementById("App-shortcut-Menu").style.zIndex = "1000";
        document.getElementById("App-shortcut-Menu").style.opacity = ".98";
        document.getElementById("block").style.bottom = "70px";
        document.getElementById("block").style.opacity = "1";
        document.getElementById("time").style.top = "0px";
      },
      shortcutMenuClose: function () {
        document.getElementById("App-shortcut-Menu").style.zIndex = "-100";
        document.getElementById("App-shortcut-Menu").style.opacity = "0";
        document.getElementById("block").style.bottom = "-300px";
        document.getElementById("block").style.opacity = "0";
        document.getElementById("time").style.top = "-300px";
      }
    }
  }
</script>

<style>

  /* 图标颜色||字体颜色 - 开始 */
  .el-icon-hbl-color-blue {
    color: RGB(34, 215, 187)
  }

  .el-icon-hbl-color-gray {
    color: rgba(118, 118, 118, 0.93);
  }

  /* 图标颜色||字体颜色 - 结束 */

  /* 公共底部  - 开始 */
  .App-bottom {
    -webkit-user-select: none;
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: -1px;
  }

  .App-bottom .App-bottom-item {
    width: 20%;
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

  .App-bottom .App-bottom-item .app-bottom-item-middle {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;

  }

  .App-bottom .App-bottom-item .app-bottom-item-middle i {
    font-size: 5rem;
    /*font-size: 7rem;*/
    margin: 0 auto;
    /*padding-bottom: 16px;*/
  }

  .App-bottom .App-bottom-item .App-bottom-item-bottom {
    width: 100%;
    height: 40%;
  }

  .App-bottom .App-bottom-item .App-bottom-item-bottom p {
    width: 100%;
    text-align: center;
    font-size: 1rem;
  }

  /* 公共底部  - 结束 */
  .App-shortcut-Menu {

    width: 100%;
    height: 1200px;

    position: fixed;
    top: 0;
    z-index: -100;
    transition: all 0.3s ease;
    opacity: 0;
    background-color: #fbfbfb;
  }

  .App-shortcut-Menu .App-shortcut-Menu-Time {
    width: 100%;
    height: 150px;
    background-color: #fbfbfb;
    line-height: 150px;
    text-indent: 4em;
    position: fixed;
    top: -300px;
    transition: all 0.3s ease;
  }

  .App-shortcut-Menu .App-shortcut-Menu-Time h1 {
    font-size: 4rem;
    font-family: "Courier New", Courier, monospace;
    color: #535353;

  }

  .App-shortcut-Menu .App-shortcut-Menu-Time span {
    font-size: 2rem;
    font-family: 楷体;
    color: #535353;
  }

  .App-shortcut-Menu .App-shortcut-Menu-block {
    position: fixed;
    width: 100%;
    height: 400px;
    bottom: -300px;
    opacity: 0;
    transition: all 0.3s ease;

  }

  .App-shortcut-Menu .App-shortcut-Menu-block .App-shortcut-Menu-block-Item {
    width: 33.3333%;
    height: 100px;
    float: left;
    text-align: center;
    margin-bottom: 30px;

  }

  .App-shortcut-Menu .App-shortcut-Menu-block .App-shortcut-Menu-block-Item .App-shortcut-Menu-block-Item-Top {
    width: 100%;
    height: 60px;

  }

  .App-shortcut-Menu .App-shortcut-Menu-block .App-shortcut-Menu-block-Item .App-shortcut-Menu-block-Item-Top img {
    width: 60px;
    height: 100%;
    -webkit-border-radius: 100%;
  }

  .App-shortcut-Menu .App-shortcut-Menu-block .App-shortcut-Menu-block-Item .App-shortcut-Menu-block-Item-Bottom {
    width: 100%;
    height: 20%;
    text-indent: 1px;
    line-height: 20px;
    margin-top: 7px;
  }

  .App-shortcut-Menu .App-shortcut-Menu-block .App-shortcut-Menu-block-Item .App-shortcut-Menu-block-Item-Bottom span {
    font-size: 1.2rem;
    color: rgba(104, 104, 104, 0.88);
  }

  .App-shortcut-Menu .App-shortcut-Menu-Close {
    width: 50px;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0px;
    font-weight: bold;
    font-size: 3rem;
    left: 0px;
    right: 0px;
    margin: auto;
    color: #4c4c4c;
    text-align: center;
    -webkit-user-select: none;
  }
</style>
