<template>
  <div id="Work">
    <!--固定头部-->
    <div class="Work-Top">
      <p @touchstart="createMessage()" class="Font-color">工作</p>
    </div>
    <div class="Work-Top-seize"></div>

    <!--主体-->
    <div class="Work-Middle">
      <div class="bscroll" ref="wrapper">
        <div class="bscroll-container">


          <!--模块内容 begin-->
          <div class="Work-Middle-content">

            <!--工作模块 begin-->
            <div class="Work-Middle-Item">
              <div class="Work-Middle-Item-content" v-fb>
                <div class="Work-Middle-Item-content-Img">
                  <img class="table-img" src="http://stdl.qq.com/stdl/newtabcms/icon/1260_100.png">
                </div>
                <div class="Work-Middle-Item-context-character">
                  <p class="context-character">日程</p>
                </div>
              </div>
              <div class="Work-Middle-Item-content" v-fb>
                <div class="Work-Middle-Item-content-Img">
                  <img class="table-img" src="http://stdl.qq.com/stdl/newtabcms/icon/1236_100.png">
                </div>
                <div class="Work-Middle-Item-context-character">
                  <p class="context-character">网盘</p>
                </div>
              </div>
              <div class="Work-Middle-Item-content" v-fb>
                <div class="Work-Middle-Item-content-Img">
                  <img class="table-img"
                       src="http://stdl.qq.com/stdl/newtabcms/icon/0011_100.png">
                </div>
                <div class="Work-Middle-Item-context-character">
                  <p class="context-character">通讯录</p>
                </div>
              </div>
              <div class="Work-Middle-Item-content" v-fb>
                <div class="Work-Middle-Item-content-Img">
                  <img class="table-img" src="http://stdl.qq.com/stdl/newtabcms/icon/0015_100.png">
                </div>
                <div class="Work-Middle-Item-context-character">
                  <p class="context-character">成员</p>
                </div>
              </div>
              <div class="Work-Middle-Item-content" v-fb>
                <div class="Work-Middle-Item-content-Img">
                  <img class="table-img" src="http://stdl.qq.com/stdl/newtabcms/icon/1262_100.png">
                </div>
                <div class="Work-Middle-Item-context-character">
                  <p class="context-character">任务</p>
                </div>
              </div>

              <div class="Work-Middle-Item-content" v-fb>
                <div class="Work-Middle-Item-content-Img">
                  <img class="table-img" src="../assets/images/more.png">
                </div>
                <div class="Work-Middle-Item-context-character">
                  <p class="context-character">更多</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Bscroll from "better-scroll";
  export default {
    data() {
      return {};
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
  #Work {
    width: 100%;
  }

  /*固定头部*/
  .Work-Top {
    background-color: #ffffff;
    width: 100%;
    height: 45px;
    box-shadow: 1px 1px 1px #f4f4f4;
    position: fixed;
    top: -1px;
    z-index: 20;
    line-height: 45px;
  }

  .Work-Top p {
    text-align: center;
    font-size: 1.5rem;
    position: relative;
  }

  .Work-Top p i {
    position: absolute;
    right: 20px;
    font-size: 2rem;
    top: 15px;
    color: #434343;
  }

  .Font-color {
    color: #434343;
    font-family: 黑体;
  }

  .Work-Top-seize {
    width: 100%;
    height: 45px;
    position: relative;
    top: -1px;
  }

  /*主体内容*/
  .Work-Middle {
    width: 100%;
    background-color: #f8f8f8;
    height: 900px;
  }

  .bscroll {
    width: 100%;
    position: absolute;
    overflow: hidden;
    bottom: 50px;
    top: 45px;
    background-color: #f8f8f8;
  }

  .bscroll-container {
    width: 100%;
    height: 900px;
    background-color: #f8f8f8;
  }

  .Work-Middle .Work-Middle-content .Work-Middle-Item .Work-Middle-Item-content {
    width: 33%;
    height: 120px;
    border: 0.5px solid #f1f1f1;
    float: left;
    background-color: #ffffff;
  }

  /*暂时代矢量图片*/
  .Work-Middle
  .Work-Middle-content
  .Work-Middle-Item
  .Work-Middle-Item-content
  .Work-Middle-Item-content-Img {
    text-align: center;
    position: relative;
    top: 30px;
  }

  /*矢量图调整*/
  .Work-Middle
  .Work-Middle-content
  .Work-Middle-Item
  .Work-Middle-Item-content
  .Work-Middle-Item-content-Img
  .table-img {
    width: 20%;

    border-radius: 100%;
  }

  /*文字*/
  .Work-Middle
  .Work-Middle-content
  .Work-Middle-Item
  .Work-Middle-Item-content
  .Work-Middle-Item-context-character {
    text-align: center;
    position: relative;
    top: 30px;
    font-size: 1.3rem;
    color: #5c5c5c;
  }
</style>
