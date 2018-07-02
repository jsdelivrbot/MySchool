<template>
    <!--在此处添加渲染的内容-->
    <div id="msgApp">
        <p class="title_index">通知</p>
       
        <!-- 分隔栏 -->
        <!-- <div class="line--6px-ccc"></div> -->
        <!-- msg主内容 -->
        <div class="bscroll-msg" ref="wrapper">
            <div class="bscroll-container-msg">
 <!-- 通知头部 -->
        <div class="msgHeader">
            <div class="msgHeader-item" @touchstart="informShow" v-fb>
                <div class="msgHeader-item-icon">
                    <img class=" msgHeader-item-img" src="./img/xiaoxitongzhi1.png" alt="">
                    <!-- <p class="el-icon-erp-message msgHeader-item-icon-p"></p> -->
                </div>
                <div class="msgHeader-item-p">
                    <p class="msgHeader-item-p-text">通知</p>
                </div>
            </div>
            <div class="msgHeader-item" @touchstart="patriarchShow" v-fb>
                <div class="msgHeader-item-icon">
                    <img class=" msgHeader-item-img" src="./img/xiaoxitongzhi2.png" alt="">
                    <!-- <p class="el-icon-erp-message msgHeader-item-icon-p"></p> -->
                </div>
                <div class="msgHeader-item-p">
                    <p class="msgHeader-item-p-text">家长留言</p>
                </div>
            </div>
            <div class="msgHeader-item" @touchstart="studentShow" v-fb>
                <div class="msgHeader-item-icon">
                    <img class=" msgHeader-item-img" src="./img/xiaoxitongzhi3.png" alt="">
                    <!-- <p class="el-icon-erp-message msgHeader-item-icon-p"></p> -->
                </div>
                <div class="msgHeader-item-p">
                    <p class="msgHeader-item-p-text">学生留言</p>
                </div>
            </div>
        </div>
                <!-- 引入通知条目的component -->
                <v-inform v-show="infromIsShow"></v-inform> 
                <!-- 引入家长留言条目的component -->
                <v-patriarch v-show="patriarchIsShow"></v-patriarch>
                <!-- 引入学生留言条目的component -->
                <v-student v-show="studentIsShow"></v-student>
            </div>
        </div>
    </div>
    
</template>

<script type="text/ecmascript-6">
import Bscroll from "better-scroll";

import inform from "./inform/inform";
import patriarch from "./patriarch/patriarch";
import student from "./student/student";

//将渲染的内容导出
export default {
  data() {
    return {
      infromIsShow: false,
      patriarchIsShow: true,
      studentIsShow: false
    };
  },
  methods: {
    informShow() {
      this.infromIsShow = true;
      this.patriarchIsShow = false;
      this.studentIsShow = false;
    },
    patriarchShow() {
      this.infromIsShow = false;
      this.patriarchIsShow = true;
      this.studentIsShow = false;
    },
    studentShow() {
      this.infromIsShow = false;
      this.patriarchIsShow = false;
      this.studentIsShow = true;
    }
  },
  components: {
    "v-inform": inform,
    "v-patriarch": patriarch,
    "v-student": student
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        bounce: true,
        momentumLimitDistance: 5
      });
    });
  }
};
</script>

<style scoped>
#msgApp {
  width: 100%;
}
.msgHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  padding: 12px 0;
  border-bottom: 1px #e7e7e7 solid;
  width: 100%;
  top: 0;
  background: #ffffff;
}
.msgHeader .msgHeader-item {
  margin: 0 auto;
  height: 100%;
}
.msgHeader .msgHeader-item .msgHeader-item-icon {
  width: 100%;
  height: 60px;
  text-align: center;
}
.msgHeader .msgHeader-item .msgHeader-item-icon .msgHeader-item-img {
  width: 55px;
  height: 55px;
  line-height: 50px;
}
.msgHeader .msgHeader-item .msgHeader-item-p {
  text-align: center;
  height: 20px;
}
.msgHeader .msgHeader-item .msgHeader-item-p .msgHeader-item-p-text {
  color: #8b8a8a;
  font-size: 1.2rem;
  /* line-height: 20px; */
}
/* .line--6px-ccc{
    background: #eeeeee;
    width: 100%;
    height: 10px;
    border-bottom: 1px #e7e7e7 solid; 
    position: absolute;
    top: 140px;
} */
.bscroll-msg {
  width: 100%;
  position: absolute;
  overflow: hidden;
  bottom: 50px;
  top: 65px;
  left: 0;
  background: #f3f3f3;
  /* height: 100%-135px; */
}
.bscroll-container-msg {
  /* height: 800px; */
  width: 100%;
  background: #ffffff;
}
</style>
