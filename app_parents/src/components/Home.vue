<template>
  <div id="Home">
    <!--主体-->
    <div class="Home-Middle">
      <div class="bscroll" ref="wrapper">
        <div class="bscroll-container">
          <!--头部搜索框-->
          <div class="Home-Middle-Top">
            <i class="el-icon-hbl-sousuo"></i>
            <div class="Home-Middle-Top-Input" @touchstart.stop="search()">
              搜索成员、消息
            </div>
          </div>
          <!--消息栏目-->
          <div class="Home-Middle-Item">
            <div class="Home-Middle-Item-content Chat-AtTheTop" @touchstart="toNotice">
              <div class="Home-Middle-Item-content-Left">
                <img class="table-img"
                     src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png">
              </div>
              <div class="Home-Middle-Item-content-Right">
                <div class="Home-Middle-Item-content-Right-Top">
                  <p class="Top-P WordsDoNotChange Font-color">公告通知<span class="Top-Span">18/03/19</span></p>
                </div>
                <div class="Home-Middle-Item-content-Right-Bottom">
                  <p class="Bottom-P WordsDoNotChange">   清明节假期安排通知...</p>
                </div>
              </div>
            </div>
            <div class="Home-Middle-Item-content">
              <div class="Home-Middle-Item-content-Left">
                <img class="table-img"
                     src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/4bc2aed1-f197-49c5-ac90-51623bf98e25_40x40.png">
              </div>
              <div class="Home-Middle-Item-content-Right">
                <div class="Home-Middle-Item-content-Right-Top">
                  <p class="Top-P WordsDoNotChange Font-color">姚老师<span class="Top-Span">18/03/19</span></p>
                </div>
                <div class="Home-Middle-Item-content-Right-Bottom">
                  <p class="Bottom-P WordsDoNotChange">哈哈哈</p>
                </div>
              </div>
            </div>
            <div class="Home-Middle-Item-content">
              <div class="Home-Middle-Item-content-Left">
                <img class="table-img"
                     src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/4bc2aed1-f197-49c5-ac90-51623bf98e25_40x40.png">
              </div>
              <div class="Home-Middle-Item-content-Right">
                <div class="Home-Middle-Item-content-Right-Top">
                  <p class="Top-P WordsDoNotChange Font-color">马老师<span class="Top-Span">18/03/19</span></p>
                </div>
                <div class="Home-Middle-Item-content-Right-Bottom">
                  <p class="Bottom-P WordsDoNotChange">哈哈哈</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--插件-->
    <div class="Plug-search" @touchmove.prevent ref="plugSearch">
      <div class="Plug-search-Top">
        <div class="Plug-search-Top-Left">
          <i class="el-icon-hbl-sousuo"></i>
          <input @touchstart type="text" class="Plug-search-Top-Left-Input" id="searchInput"
                 placeholder="搜索消息" ref="searchInput">
        </div>
        <div class="Plug-search-Top-Right">
          <p class="Plug-search-Top-Right-P" @touchstart.stop="cancelSearch()">
            取消
          </p>
        </div>
      </div>
      <div class="Plug-search-Bottom">
        <div class="Plug-search-Bottom-Item">
          <p>输入搜索关键字</p>
        </div>
      </div>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">
  import Bscroll from "better-scroll";
  export default {
    data () {
      return {}
    },
    methods: {
      search: function () {
        this.$refs.plugSearch.style.zIndex = "1000";
        this.$refs.plugSearch.style.opacity = ".95";
        this.$refs.searchInput.style.width = "95%";
        this.$refs.searchInput.focus();


      },
      toNotice:function(){
        this.$router.replace('/Notice')
      },
      cancelSearch: function () {
        this.$refs.plugSearch.style.zIndex = "-100";
        this.$refs.plugSearch.style.opacity = "0";
        this.$refs.searchInput.style.width = "10%";
        this.$refs.searchInput.blur();
      },
      createMessage: function () {
        const h = this.$createElement;
        this.$notify({
          title: '提示',
          message: '这是一条会自动关闭的消息',

        });
      },

    },

    mounted(){

      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          bounce: true,
          momentumLimitDistance: 5
        })
      });
    },
  }
</script>

<style scoped>
  #Home {
    width: 100%;
  }



  .Home-Middle {
    width: 100%;
    background-color: #f8f8f8;
  }

  .Home-Middle .Home-Middle-Top {
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    line-height: 40px;
    padding-top: 5px;

    position: relative;
  }

  .Home-Middle .Home-Middle-Top i {
    position: absolute;
    left: 20px;
    top: 14px;
    font-size: 2.2rem;
    color: #515151;
  }

  .Home-Middle .Home-Middle-Top .Home-Middle-Top-Input {
    outline: none;
    background-color: #f8f8f8;
    border: 0;
    text-indent: 4em;
    width: 99%;
    -webkit-border-radius: 10px;
    height: 95%;
    color: rgba(82, 82, 82, 0.83);
    font-size: 1.3rem;
    -webkit-user-select: text;
  }

  .Home-Middle .Home-Middle-Item {
    width: 100%;
    background-color: #fcfcfc;
  }

  .bscroll {
    width: 100%;
    position: absolute;
    overflow: hidden;
    bottom: 50px;
    top: 55px;

  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content {
    width: 99%;
    height: 50px;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 5px;
    padding-top: 5px;
    margin: 0 auto;

  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content .Home-Middle-Item-content-Left {
    width: 15%;
    height: 50px;
    padding-top: 3px;
    text-align: center;
    float: left;
  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content .Home-Middle-Item-content-Left img {
    width: 45px;
    height: 45px;
    -webkit-border-radius: 100%;
  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content .Home-Middle-Item-content-Right {
    width: 85%;
    height: 100%;
    float: left;
  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content .Home-Middle-Item-content-Right .Home-Middle-Item-content-Right-Top {
    width: 100%;
    height: 55%;

    line-height: 25px;
  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content .Home-Middle-Item-content-Right .Home-Middle-Item-content-Right-Top .Top-P {
    font-size: 1.6rem;
    position: relative;
    text-indent: 5px;
    color: #181818;
  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content .Home-Middle-Item-content-Right .Home-Middle-Item-content-Right-Top .Top-Span {
    position: absolute;
    right: 10px;
    font-size: 1.1rem;
    color: #a3a3a3;
  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content .Home-Middle-Item-content-Right .Home-Middle-Item-content-Right-Bottom {
    width: 100%;
    height: 45%;
    line-height: 20px;
  }

  .Home-Middle .Home-Middle-Item .Home-Middle-Item-content .Home-Middle-Item-content-Right .Home-Middle-Item-content-Right-Bottom .Bottom-P {
    font-size: 1.3rem;
    color: #8d8d8d;
    text-indent: 5px;
  }

  .Plug-search {
    width: 100%;
    height: 900px;
    background-color: #f9f9f9;
    position: fixed;
    top: -1px;

    z-index: -100;
    transition: all linear .2s;
    opacity: 0;

  }

  .Plug-search .Plug-search-Top {
    width: 100%;
    height: 48px;
    background-color: #ffffff;
    padding-top: 3px;
  }

  .Plug-search .Plug-search-Top .Plug-search-Top-Left {

    width: 83%;
    height: 100%;
    float: left;
    text-align: right;
    line-height: 48px;;
  }

  .Plug-search .Plug-search-Top .Plug-search-Top-Left i {
    position: absolute;
    left: 24px;
    top: 18px;
    font-size: 2rem;
    color: #515151;
  }

  .Plug-search .Plug-search-Top .Plug-search-Top-Left .Plug-search-Top-Left-Input {
    outline: none;
    background-color: #f8f8f8;
    border: 0;
    text-indent: 3.1em;
    width: 10%;
    -webkit-border-radius: 10px;
    height: 35px;
    font-size: 1.3rem;
    -webkit-user-select: text;
    transition: all linear .2s;
  }

  .Plug-search .Plug-search-Top .Plug-search-Top-Right {
    width: 17%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 48px;
  }

  .Plug-search .Plug-search-Top .Plug-search-Top-Right .Plug-search-Top-Right-P {
    font-size: 1.5rem;
    color: #5c5c5c;
  }

  .Plug-search .Plug-search-Bottom {
    width: 100%;
    height: 500px;
  }

  .Plug-search .Plug-search-Bottom .Plug-search-Bottom-Item {
    width: 100%;
    height: 70px;
    text-align: center;
    line-height: 70px;

  }

  .Plug-search .Plug-search-Bottom .Plug-search-Bottom-Item p {
    color: rgba(111, 111, 111, 0.83);
    font-size: 1.7rem;
  }

  /*文字不换行*/
  .WordsDoNotChange {
    display: block; /*转为块级元素*/
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
  }

  /*置顶*/
  .Chat-AtTheTop {
    background-color: rgba(255, 237, 189, 0.27);
  }
  *{*{
      -webkit-tap-highlight-color: rgba(255,0,0,0);
      -webkit-appearance:none;
    }
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
