<template>
  <!--在此处添加渲染的内容-->
  <div class="home">
    <transition name="fade" @touchmove.stop.prevent>
      <!-- 是关闭侧栏菜单，类似一层遮罩的效果 -->
      <div class="menu-mask" v-show="isRellyShow" @click="hideSide"></div>
    </transition>

    <transition name="slide-fade">
      <!-- 是侧栏代码部分 -->
      <div class="side-content" v-show="isRellyShow">
        <div class="side-top-cicleIcon" @click="sheetVisible=true">
          <!--<img-->
            <!--src="http://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%A4%B4%E5%83%8F&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=3085308739,531605364&os=1188064660,1543932535&simid=4150249183,501218094&pn=270&rn=1&di=74158722000&ln=3984&fr=&fmq=1390280702008_R&fm=&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=f0&oriquery=%E5%A4%B4%E5%83%8F&objurl=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201510%2F30%2F20151030190015_2fk8x.png&rpstart=0&rpnum=0&adpicid=0">-->
          <img src="../../static/img/touxiang.jpg" style="width:100%;height:auto;" alt="">
        </div>
        <div class="side-content-information">
          <div class="userName" @click="updateName">{{userName}}</div><div class="updateName"><img src="../../static/img/update.png" alt=""></div>

          <div class="side-content-nextDiv"></div>
        </div>
        <!--菜单-->
        <div class="side-content-menu">
          <!--@touchstart="Toheadmaster" 跳转到校长信箱-->
          <div class="side-content-menu-item" @touchstart="Toheadmaster">
            <i class="icon-icon-p_xinfeng el-icon-hbl-color-gray"></i>
            <span class="span-font">校长信箱</span>
          </div>
          <div class="side-content-menu-item">
            <i class="icon-liuyan el-icon-hbl-color-gray"></i>
            <span class="span-font">师生留言</span>
          </div>
          <div class="side-content-menu-item">
            <i class="icon-fuwu el-icon-hbl-color-gray"></i>
            <span class="span-font">志愿服务</span>
          </div>
          <div class="side-content-menu-item" @touchstart="ToEvaluation">
            <i class="icon-dianping el-icon-hbl-color-gray"></i>
            <span class="span-font">量化评价</span>
          </div>

        </div>
        <div class="side-bottom">
          <div class="side-bottom-tool">
            <i class="icon-shezhi el-icon-hbl-color-gray"></i>
            <span>设置</span>
          </div>
          <div class="side-bottom-exit">
            <i class="icon-tuichu el-icon-hbl-color-gray"></i>
            <span @click="toLogin">退出</span>
          </div>
        </div>
      </div>
    </transition>
    <div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Actionsheet} from 'mint-ui';
  import {MessageBox} from 'mint-ui';
  export default {
    components: {
      Actionsheet
    },
    data () {
      return {
        userName:"我是小可爱",
        sheetVisible: false,
        actions: []
      }
    },
    methods: {
        updateName:function () {
            MessageBox.prompt('编辑名称', {
                classList:"",
              inputValidator: (val) => {
                if (val === null) {
                  return true;//初始化的值为null，不做处理的话，刚打开MessageBox就会校验出错，影响用户体验
                }
                return !(val.length < 6 || val.length > 8)
              }, inputErrorMessage: '长度必须在3~8位',
              inputValue: "nihao",
            }).then((val) => {
              console.info('confirm,value is' + val.value)
            }, () => {
              console.info('cancel')
            })
        },
      hideSide: function () {
        this.$store.dispatch('hideSideBar');
      },
      toLogin: function () {
        MessageBox({
          title: '提示',
          message: '确定退出吗?',
          showCancelButton: true
        });
      },
      takePhoto: function () {
        MessageBox({
          title: '提示',
          message: '拍照中',
          showCancelButton: true
        });
      },
      openAlbum:function () {
        MessageBox({
          title: '提示',
          message: '选择照片',
          showCancelButton: true
        });
      },
     Toheadmaster: function () {
       this.$store.dispatch('hideSideBar');
       this.$router.replace('/Headmaster');
     },
      ToEvaluation:function () {
        this.$store.dispatch('hideSideBar');
        this.$router.replace('/Evaluation');
      }

    },
    computed: {
      isRellyShow(){
        return this.$store.getters.isShowMethod;
      }
    },
    mounted: function () {
      this.actions = [
        {
          name: '拍照',
          method: this.takePhoto
        },
        {
          name: '从相册中选择',
          method: this.openAlbum
        }
      ]
    }
  }
</script>

<style scoped>
  .el-icon-hbl-color-gray {
    color: rgba(254, 254, 254, 0.93);
    font-size: 1.9rem;
  }

  .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  }

  .side-content {
    position: relative;
    z-index: 11;
    position: fixed;
    width: 85%;
    height: 100%;
    background: url("../assets/img/1.jpg") no-repeat;
    background-size: 100% 100%;
    top: 0;
    left: 0;
    bottom: 0;
    -webkit-overflow-scrolling: touch;
  }

  .fade-enter-to, .fade-leave-to {
    transition: opacity 0.3s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .slide-fade-enter-to, .slide-fade-leave-to {
    transition: transform 0.3s;
    transform: translate(0px, 0px);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    -webkit-transform: translate(-286px, 0px);
    transform: translate(-286px, 0px);
    -webkit-transition: opacity 0.3s ease-in-out 0.3s, -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
  }

  .side-bottom {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: -3px;
  }

  .side-bottom-tool {
    margin-left: 20%;
    float: left;
    width: 40%;
    height: 100%;
    color: #fefefe;
    font-size: 1.5rem;
  }

  .side-bottom-exit {
    float: left;
    width: 40%;
    height: 100%;
    color: #fefefe;
    font-size: 1.5rem;
  }

  .side-content-information {
    margin: 50px auto;
    width: 82%;
    height: 150px;
    border: 2px solid #fffddf;
    position: relative;
  }

  .side-content-nextDiv {
    margin: 150px auto;
    width: 95%;
    height: 8px;
    border: 1px solid #fffddf;
  }

  .side-content-menu {
    margin: 20px auto;
    width: 80%;
    height: 300px;
    padding-top: 1px;
  }

  .side-content-menu-item {
    margin: 20px 0px 0px 20px;
    width: 40%;
    height: 30px;
    color: #fefefe;
    font-size: 1.4rem;
  }

  .span-font {
    margin-left: 4px;
  }

  .side-top-cicleIcon {
    z-index: 999;
    left: 40%;
    top: 15px;
    position: absolute;
    overflow: hidden;
    margin-top: 6px;
    display: inline-block;
    height: 60px;
    width: 60px;
    border-radius: 60%;
    background-color: #636363;
    border: 2px solid #fffddf;
  }

  .userName {
    position: absolute;
    top: 60px;
    left: 70px;
    width: 100px;
    height: 30px;
    font-size: 1.5rem;
    color:  #fffddf;
    overflow: hidden;
  }
  .updateName img{
    position: absolute;
    top: 57px;
    right: 50px;
    width: 30px;
    height: 28px;
    font-size: 1.4rem;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
