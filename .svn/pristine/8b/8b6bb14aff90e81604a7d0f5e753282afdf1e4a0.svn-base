<template>
  <!--在校主页-->
  <div id="inschool">
    <div class="bscroll" ref="wrapper">
      <div class="bscroll-container">
        <div class="inschool-item-img">
          <img src="../../static/img/logo-img.jpg" style="width:100%;height:auto;" alt="">
        </div>
        <div class="schoolApp-classManage">
          <ul>
            <li>
              <p class="schoolApp-li-img"><img src="../../static/img/s1.png"/></p>
              <p class="schoolApp-li-wz">孩子位置</p>
            </li>
            <li @touchmove.stop.prevent @touchstart="toChildProject">
              <p class="schoolApp-li-img"><img src="../../static/img/s2.png"/></p>
              <p class="schoolApp-li-wz">孩子项目</p>
            </li>
            <li @touchstart="toChuqin">
              <p class="schoolApp-li-img"><img src="../../static/img/s3.png"/></p>
              <p class="schoolApp-li-wz">孩子出勤</p>
            </li>
            <li @touchmove.stop.prevent @touchstart="toClassVideo">
              <p class="schoolApp-li-img"><img src="../../static/img/s4.png"/></p>
              <p class="schoolApp-li-wz">班级监控</p>
            </li>
            <li @touchmove.stop.prevent @touchstart="toClassEvent">
              <p class="schoolApp-li-img"><img src="../../static/img/s5.png"/></p>
              <p class="schoolApp-li-wz">班级新鲜事</p>
            </li>
            <li>
              <p class="schoolApp-li-img"><img src="../../static/img/s11.png"/></p>
              <p class="schoolApp-li-wz">孩子心里话</p>
            </li>
            <li @touchmove.stop.prevent @touchstart="toReport">
              <p class="schoolApp-li-img"><img src="../../static/img/pahang.png"/></p>
              <p class="schoolApp-li-wz">成绩趋势</p>
            </li>
            <li @touchmove.stop.prevent @touchstart="toActivity">
              <p class="schoolApp-li-img"><img src="../../static/img/s7.png"/></p>
              <p class="schoolApp-li-wz">参与活动</p>
            </li>
            <li @touchmove.stop.prevent @touchstart="toDayTest">
              <p class="schoolApp-li-img"><img src="../../static/img/s9.png"/></p>
              <p class="schoolApp-li-wz">日考成绩</p>
            </li>
            <li @touchmove.stop.prevent @touchstart="toMonthTest">
              <p class="schoolApp-li-img"><img src="../../static/img/s10.png"/></p>
              <p class="schoolApp-li-wz">月考成绩</p>
            </li>
            <li @touchmove.stop.prevent  @touchstart="toJieye">
              <p class="schoolApp-li-img"><img src="../../static/img/s6.png"/></p>
              <p class="schoolApp-li-wz">结业考试</p>
            </li>
            <li @touchmove.stop.prevent @touchstart="toMore">
              <p class="schoolApp-li-img"><img src="../../static/img/more.png"/></p>
              <p class="schoolApp-li-wz">更多</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--遮罩层显示-->
    <!--<transition name="fade" @touchmove.stop.prevent>-->
      <!--<div class="Shadow" @touchstart="close" v-show="isShow">-->

      <!--</div>-->
    <!--</transition>-->
  </div>
</template>
<script>
  import Bscroll from "better-scroll";
  import {Toast} from 'mint-ui';
  import {Popup} from 'mint-ui';
  import {Header} from 'mint-ui';
  export default {
    data() {
      return {
        popupVisible4: false,
      }
    },
    methods: {
      toMore: function () {
        Toast({
          message: '在开发中呢亲',
          position: 'bottom',
          duration: 1000
        });
      },
      toChuqin: function () {
        this.$router.replace('/ChildDuty')
      },
      toJieye: function () {
        this.$router.replace('/JieyeTest')
      },
      toDayTest: function () {
        this.$router.replace('/DayTest')
      },
      toMonthTest: function () {
        this.$router.replace('/MonthTest')
      },
      toActivity: function () {
        this.$router.replace('/Activity')
      },
      toClassVideo:function () {
        this.$router.replace('/ClassVideo')
      },
      toChildProject:function () {
        this.$router.replace('/ChildProject')
      },
      toReport:function () {
        this.$router.replace('/Report')
      },
      toClassEvent:function () {
        this.$router.replace('/ClassEvent')
      }
    },
    mounted()
    {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          bounce: true,
          momentumLimitDistance: 5
        })
      });
    }
    ,
    components: {
      Popup,
      Header
    }
  }
</script>

<style scoped>
  ul li {
    list-style: none;
  }

  .schoolApp-classManage {
    background: #FFFFFF;
  }

  .schoolApp-classManage > p {
    text-indent: 20px;
    font-size: 1.4rem;
    text-align: start;
    line-height: 40px;
    color: #aeaeae;
  }

  .schoolApp-classManage ul {
    overflow: hidden;
  }

  .schoolApp-classManage li {
    width: 33.3333%;
    height: 100px;
    position: relative;
    float: left;
    border-top: 1px solid #f4f4f4;
  }

  .schoolApp-classManage li:nth-child(2):after, .schoolApp-classManage li:nth-child(5):after,
  .schoolApp-classManage li:nth-child(8):after, .schoolApp-classManage li:nth-child(11):after,
  .schoolApp-classManage li:nth-child(13):after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    border-left: 1px solid #f4f4f4;
    border-right: 1px solid #f4f4f4;
    /*height: 100%;*/
  }

  .schoolApp-li-img {
    width: 26.5px;
    height: 26.5px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .schoolApp-li-img img {
    width: 100%;
    display: block;
  }

  .schoolApp-li-wz {
    text-align: center;
    margin-top: 20px;
    font-size: 1.3rem;
  }

  .bscroll {
    background-color: #f7f7f7;
    width: 100%;
    position: absolute;
    overflow: hidden;
    bottom: 50px;
    top: 55px;
  }

  .inschool-item-img {
    margin-bottom: 5px;
    width: 100%;
    height: 140px;
    overflow: hidden;
  }

  #inschool {
    width: 100%;
  }

  .Shadow {
    padding-top: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .6s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .Shadow-item {
    margin: 0 auto;
    width: 80%;
    height: 400px;
    background-color: white;
    border: 1px solid #CCCCCC;
    border-radius: 3%;
  }

  /*表格样式*/
  table {
    margin-top: 10px;
    border-collapse: collapse;
    width: 100%;
  }

  table tr, td {
    height: 40px;
    font-size: 1.4rem;
    text-align: center;
    border: 1px solid #69dcef;
  }
  .mint-popup-4 {
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    text-align: center;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
