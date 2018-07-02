<template>
  <!--班级监控-->
  <div class="ClassVideo">
    <mt-header class="ClassVideo-header" title="班级监控">
      <router-link to="/Task" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <div class="ClassVideo-content">
        <!--<my-video class="school-video" :sources="video.sources" :options="video.options"></my-video>-->
        <div style="width: 100%;height: 400px;display: inline-block;float: left; overflow: hidden">
          <!--摄像头控制-->
          <!--<table width="100%" cellspacing="0" colspan="5">-->
            <!--<tbody><tr align="center">-->
              <!--<td height="40"><img src="../../static/img/ptz_26.gif" @click="goto(3);" width="38" height="38">-->
                <!--<img src="../../static/img/ptz_29.gif" onclick="goto(6);" width="38" height="38">-->
                <!--<img src="../../static/img/ptz_19.gif" onclick="goto(1);" width="38" height="38">-->
                <!--<img src="../../static/img/ptz_34.gif" onclick="goto(2);" width="38" height="38">-->
                <!--<img src="../../static/img/ir0.gif" onclick="goto(10);" width="38" height="38" id="hwx" value="0"></td>-->
            <!--</tr>-->
            <!--</tbody></table>-->
          <img src="http://192.168.1.126:81/videostream.cgi?user=admin&amp;pwd=&amp;res=0"  class="overflowingVertical">
        </div>
      </div>
      <div class="ClassVideo-content-Desc">

      </div>
    </div>
  </div>

</template>
<script>
  import { Header } from 'mint-ui';
  // import myVideo from 'vue-video'
  export default {
    name: "ClassVideo",
    data () {
      return {
        // video: {
        //   sources: [{
        //     src: '../../static/video/example.mp4',
        //     type: 'video/mp4'
        //   }],
        //   options: {
        //     autoplay: true,
        //     poster: 'http://covteam.u.qiniudn.com/poster.png'
        //   }
        // }
      }
    },
    components: {
      // myVideo
    },
    // methods:{
    //   goto(num){
    //     if(num==3){/*向左*/
    //       $.get("http://192.168.1.126:81/cgi-bin/decoder_control.cgi?onestep=0&command=3&user=admin&pwd=&res=0&1528198941885","",function(result){},"text");
    //     }else if(num==6){/*向右*/
    //       $.get("http://192.168.1.126:81/cgi-bin/decoder_control.cgi?onestep=0&command=6&user=admin&pwd=&res=0&1528199095641","",function(result){},"text");
    //     }else if(num==1){/*向上*/
    //       $.get("http://192.168.1.126:81/cgi-bin/decoder_control.cgi?onestep=0&command=1&user=admin&pwd=&res=0&1528199146944","",function(result){},"text");
    //     }else if(num==2){/*关闭红外线*/
    //       $.get("http://192.168.1.126:81/cgi-bin/decoder_control.cgi?onestep=0&command=2&user=admin&pwd=&res=0&1528199157170","",function(result){},"text");
    //     }else if(num==10) {
    //       var val = $("#hwx").attr("value");
    //       alert(val);
    //       if (val == 0) {
    //         /*打开红外线*/
    //         $("#hwx").attr("value","1");
    //         $.get("http://192.168.1.126:81/cgi-bin/set_ir_gpio.cgi?val=1&loginuse=admin&loginpas=&1528203769294", "", function (result) {
    //         }, "text");
    //       } else {
    //         /*关闭红外线*/
    //         $("#hwx").attr("value","0");
    //         $.get("http://192.168.1.126:81/cgi-bin/set_ir_gpio.cgi?val=0&loginuse=admin&loginpas=&1528203742725", "", function (result) {
    //         }, "text");
    //       }
    //     }
    //   }
    // }
  }
</script>

<style scoped>
  .ClassVideo-header {
    background-color: #B3C0D1;
    font-size: 1.6rem;
    width: 100%;
    height: 50px;
  }
  .ClassVideo-content {
    width: 100%;
    height: 400px;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
  .ClassVideo-content-Desc {
    width: 100%;
    height: 50px;
    background-color: #fcfcfc;
  }
</style>
