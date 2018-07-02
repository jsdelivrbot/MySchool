<template>
  <div id="app">
    <!-- 渲染 -->
    <transition  :name="'vux-pop-' + (performAnimation?(direction==true?'in':'out'):'')">
      <keep-alive>
         <router-view  class="router-view" ></router-view>
      </keep-alive>
    </transition>
    <!-- + 号 -->
    <div class="App-shortcut-Menu" id="App-shortcut-Menu">
      <!--时间-->
      <div class="App-shortcut-Menu-Time" id="time">
        <h1>06/08<span>星期六</span></h1>
      </div>
      <!--快捷功能-->
      <div class="App-shortcut-Menu-block" id="block" @touchmove.prevent>
       
        <div class="App-shortcut-Menu-block-Item" @touchend="toTest($event)">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img class="table-img"
                 src="../static/img/bzzy-plus.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>布置作业</span>
          </div>
        </div>
        <div class="App-shortcut-Menu-block-Item">
          <div class="App-shortcut-Menu-block-Item-Top">
            <img class="table-img"
                  src="../static/img/zxhd-plus.png">
          </div>
          <div class="App-shortcut-Menu-block-Item-Bottom">
            <span>在线互动</span>
          </div>
        </div>
        <!--关闭按钮-->
        <span @touchstart.stop="plusClose()"
              class="App-shortcut-Menu-Close">×</span>
      </div>

    </div>
    <!--公共底部-->
    <div class="App-bottom" v-if="appBottomIsShow">
      <div class="App-bottom-item" @touchstart="toHome($event,0)">
        <div class="App-bottom-item-top">
          <!-- el-icon-erp-homepage el-icon-hbl-color-blue app-bottom-icon -->
          <i :class="'app-bottom-icon ' +(homeSelected ? ' el-icon-hbl-color-blue el-icon-erp-homepage_fill':'el-icon-hbl-color-gray el-icon-erp-homepage')"></i>
        </div>
        <div class="App-bottom-item-bottom ">
          <p :class="'app-bottom-font '+(homeSelected ? '  el-icon-hbl-color-blue':'el-icon-hbl-color-gray')">首页</p>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toMsg($event,1)">
        <div class="App-bottom-item-top">
          <i :class="'app-bottom-icon ' +(msgSelected ? 'el-icon-erp-message_fill el-icon-hbl-color-blue':'el-icon-erp-message el-icon-hbl-color-gray')"></i>
        </div>
        <div class="App-bottom-item-bottom">
          <p :class="'app-bottom-font '+(msgSelected ? '  el-icon-hbl-color-blue ':'el-icon-hbl-color-gray')">通知</p>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toPlus($event)">
        <!--中心-->
        <div class="app-bottom-item-middle">
          <i class="el-icon-erp-tianjia-yin el-icon-hbl-color-blue"></i>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toSchool($event,2)">
        <div class="App-bottom-item-top">
          <i :class="'app-bottom-icon ' +(schoolSelected ? ' el-icon-hbl-color-blue el-icon-erp-manage_fill':'el-icon-erp-manage el-icon-hbl-color-gray')"></i>
        </div>
        <div class="App-bottom-item-bottom">
          <p :class="'app-bottom-font '+(schoolSelected ? '  el-icon-hbl-color-blue':'el-icon-hbl-color-gray')">学校</p>
        </div>
      </div>
      <div class="App-bottom-item" @touchstart="toMy($event,3)">
        <div class="App-bottom-item-top">
          <i :class="'app-bottom-icon ' +(mySelected ? ' el-icon-hbl-color-blue el-icon-erp-mine_fill':'el-icon-erp-mine el-icon-hbl-color-gray')"></i>
        </div>
        <div class="App-bottom-item-bottom">
          <p :class="'app-bottom-font '+(mySelected ? '  el-icon-hbl-color-blue':'el-icon-hbl-color-gray')">我</p>
        </div>
      </div>
    </div>
   
  </div>

</template>

<script>
  import {mapState,mapGetters} from 'vuex'   
  function back_interceptor(){
     var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
    console.log(hiddenProperty);
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    console.log(visibilityChangeEvent);
    var onVisibilityChange = function(){
      if (!document[hiddenProperty]) {    
          console.log('页面非激活');
      }else{
          console.log('页面激活')
      }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);  
  }
  // back_interceptor();
  
  export default {
    data(){
      return {
        homeSelected:false,
        msgSelected:false,
        schoolSelected:false,
        mySelected:false,
      }
    },
    methods:{
      toTest(e){
        // this.$router.replace('/test');
      },
      toHome(e,index){
        this.toSelected(index);
        this.$router.replace('/home');
      },
      toMsg(e,index){
        this.toSelected(index);  
        this.$router.replace('/msg');
      },
      toSchool(e,index){
        this.toSelected(index);  
        this.$router.replace('/school');
      },
      toMy(e,index){
        this.toSelected(index);  
        this.$router.replace('/my');
      },
      toPlus(e){

      },
      toPlus: function () {
        //快捷菜单
        document.getElementById("App-shortcut-Menu").style.zIndex = "1000";
        document.getElementById("App-shortcut-Menu").style.opacity = ".98";
        document.getElementById("block").style.bottom = "70px";
        document.getElementById("block").style.opacity = "1";
        document.getElementById("time").style.top = "0px";
      },
      plusClose: function () {
        document.getElementById("App-shortcut-Menu").style.zIndex = "-100";
        document.getElementById("App-shortcut-Menu").style.opacity = "0";
        document.getElementById("block").style.bottom = "-300px";
        document.getElementById("block").style.opacity = "0";
        document.getElementById("time").style.top = "-300px";
      },
      toSelected(index){
       if(index == 0){
          this.homeSelected=true
          this.msgSelected=false
          this.schoolSelected=false
          this.mySelected=false
       }else if(index == 1){
          this.homeSelected=false
          this.msgSelected=true
          this.schoolSelected=false
          this.mySelected=false
       }
       else if(index == 2){
          this.homeSelected=false
          this.msgSelected=false
          this.schoolSelected=true
          this.mySelected=false
       }
       else if(index == 3){
          this.homeSelected=false
          this.msgSelected=false
          this.schoolSelected=false
          this.mySelected=true
       }
      }
    },
    computed:{
      ...mapState({
        appBottomIsShow: state => state.appBottomShow,
        direction: state => state.direction,
        performAnimation: state => state.performAnimation
      })
    },
    created(){
      this.homeSelected = true
    },
    name: 'App'
  }
</script>

<style>
#app{
  height: 100%;
}
 /* 图标颜色||字体颜色 - 开始 */
  .el-icon-hbl-color-blue {
    color: #01B6E5
  }

  .el-icon-hbl-color-gray {
    color: rgba(179, 179, 179, 0.93);
  }

 /* 公共底部  - 开始 */
  .App-bottom {
    -webkit-user-select: none;
    width: 100%;
    height: 50px;
    background-color: rgb(253, 253, 253);
    position: fixed;
    bottom: -1px;
    border-top: 1px #f5f5f5 solid
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
    font-size: 4.5rem;
    margin: 0 auto;
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

/* + 号 */
  .App-shortcut-Menu {
    width: 100%;
    height: 1200px;
    position: fixed;
    top: 0;
    z-index: -100;
    transition: all 0.3s ease;
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.96);
  }

  .App-shortcut-Menu .App-shortcut-Menu-Time {
    width: 100%;
    height: 300px;
    line-height: 300px;
    text-indent: 4em;
    position: fixed;
    top: -300px;
    transition: all 0.3s ease;
  }

  .App-shortcut-Menu .App-shortcut-Menu-Time h1 {
    font-size: 4rem;
    color: #535353;

  }

  .App-shortcut-Menu .App-shortcut-Menu-Time span {
    font-size: 2rem;
    color: #535353;
  }

  .App-shortcut-Menu .App-shortcut-Menu-block {
    position: fixed;
    width: 100%;
    height: 120px;
    bottom: -300px;
    opacity: 0;
    transition: all 0.3s ease;

  }

  .App-shortcut-Menu .App-shortcut-Menu-block .App-shortcut-Menu-block-Item {
    width: 50%;
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
    background: #FFFFFF;
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

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  /* opacity: 0; */
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  /* opacity: 0; */
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  /* opacity: 0; */
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  /* opacity: 0; */
  transform: translate3d(-100%, 0, 0);
}
</style>
