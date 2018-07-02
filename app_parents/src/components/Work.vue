<template>
  <!--动态-->
  <div id="Work">
    <div class="bscroll" ref="wrapper" @touchmove="load" @touchend="close">
      <div class="bscroll-container">
        <div class="Work-item-swiper">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../static/img/xiaoyuan.jpg" style="width:100%;height:auto;" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../static/img/health.jpg" style="width:100%;height:auto;" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../static/img/liuyan.jpg" style="width:100%;height:auto;" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="Work-item">
          <div class="Work-item-left">
            <div class="Work-item-blueBox"></div>
            <div class="Work-item-left-icon">
              <img src="../../static/img/touxiang.jpg" style="width:100%;height:auto;" alt="">
            </div>
          </div>
          <div class="Work-item-right">
            <div class="Work-item-right-name">朱家长</div>
            <div class="Work-item-right-text">今天孩子表现好好好不错</div>
            <div class="Work-item-right-small">7天前</div>
          </div>
        </div>
        <div class="Work-item">
          <div class="Work-item-left">
            <div class="Work-item-blueBox"></div>
            <div class="Work-item-left-icon">
              <img src="../../static/img/touxiang.jpg" style="width:100%;height:auto;" alt="">
            </div>
          </div>
          <div class="Work-item-right">
            <div class="Work-item-right-name">王家长</div>
            <div class="Work-item-right-text">学校的环境不错，老师也挺好</div>
            <div class="Work-item-right-small">2018-05-01</div>
          </div>
        </div>
        <div class="Work-item">
          <div class="Work-item-left">
            <div class="Work-item-blueBox"></div>
            <div class="Work-item-left-icon">
              <img src="../../static/img/touxiang.jpg" style="width:100%;height:auto;" alt="">
            </div>
          </div>
          <div class="Work-item-right">
            <div class="Work-item-right-name">李家长</div>
            <div class="Work-item-right-text">孩子成绩有下滑,不知道什么情况</div>
            <div class="Work-item-right-small">2018-04-18</div>
          </div>
        </div>
        <div class="Work-item">
          <div class="Work-item-left">
            <div class="Work-item-blueBox"></div>
            <div class="Work-item-left-icon">
              <img src="../../static/img/touxiang.jpg" style="width:100%;height:auto;" alt="">
            </div>
          </div>
          <div class="Work-item-right">
            <div class="Work-item-right-name">王家长</div>
            <div class="Work-item-right-text">学校的活动挺好的</div>
            <div class="Work-item-right-small">2018-04-09</div>
          </div>
        </div>
      </div>
    </div>
    <!--匿名发布动态-->
    <div class="talk-cicle" @click="toWriteNew">
      <img src="../../static/img/yezi.png" style="width:80%;height:auto;" alt="">
    </div>
  </div>

</template>
<script>
  import Bscroll from "better-scroll";
  import {Swipe, SwipeItem} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import {Popup} from 'mint-ui';
  import {Header} from 'mint-ui';
  export default {
    data () {
      return {
        show: false,
      }
    },
    methods: {
      load: function () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
      },
      toWriteNew:function(){
        this.$router.replace('/WriteNew')
      },
      close: function () {
        Indicator.close();
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          bounce: true,
          momentumLimitDistance: 5
        });
      });
    },
    components: {
      Popup,
      Header
    }
  }
</script>

<style scoped>
  #Work {
    width: 100%;
  }

  .Work-item {
    position: relative;
    border-radius: 10px;
    margin: 12px auto;
    text-align: center;
    width: 95%;
    height: 100px;
    background-color: #fefefe;
    border: 1px solid #f6f6f6;
  }

  .bscroll {
    background-color: #f7f7f7;
    width: 100%;
    position: absolute;
    overflow: hidden;
    bottom: 50px;
    top: 55px;
  }

  .Work-item-left {
    float: left;
    width: 30%;
    height: 80px;
    padding-top: 15px;
  }

  .Work-item-left-icon {
    margin: 0 auto;
    width: 70px;
    height: 70px;
    background-color: #cee9de;
    border-radius: 50%;
  }

  .Work-item-right {
    float: right;
    width: 70%;
    height: 80px;
    padding-top: 15px;
  }

  .Work-item-blueBox {
    border-radius: 2px;
    box-shadow: 1px 1px 1px 1px #CCCCCC;
    top: -6px;
    right: 30px;
    position: absolute;
    width: 40px;
    height: 13px;
    background-color: RGB(34, 215, 187);
  }

  .talk-cicle {
    position: fixed;
    bottom: 60px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 60%;
    overflow: hidden;
  }

  .Work-item-swiper {
    width: 100%;
    height: 180px;
  }

  .mint-popup-4 {
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    text-align: center;
  }

  .Work-item-right-text {
    margin-left: 20px;
    font-size: 1.3rem;
    width: 100px;
    height: 30px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
  }
/*匿名发布的内容*/
  .Work-item-right-name {
    margin-left: 0px;
    text-align: start;
    font-size: 1.4rem;
    width: 100px;
    height: 30px;
  }

  /*时间小字体*/
  .Work-item-right-small {
    font-size: 1.2rem;
    width: 100px;
    height: 22px;
    float: right;
    color: #7b7b7b;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
