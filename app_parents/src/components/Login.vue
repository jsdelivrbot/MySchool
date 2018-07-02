<template class="bg">
  <!--在此处添加渲染的内容-->

  <div class="Login">
    <div class="Login-content">
      <div class="Login-logo">
        <img src="../../static/img/weiyun.png" style="width:100%;height:auto;" alt="">
      </div>
      <input id="userName" v-model="userName" placeholder="请输入用户名" class="input" type="text">
      <input id="passWord" v-model="passWord" placeholder="请输入密码" class="input" type="password">
      <div class="forgetPassword">忘记密码</div>
      <button @click="toHome" class="btnLogin" id="login">登 录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        msg: "",
        userName:'',
        passWord:'',

      };
    },
    methods: {
      toHome() {
        //跳转到Home.vue
        if(this.userName=='' || this.passWord==''){
          MessageBox('提示', '请输入用户名或密码！');
        }else if(this.userName!='admin' || this.passWord!='admin'){
          MessageBox('提示', '用户名或密码错误！');
        }else{
          this.$router.replace('/Home')
        }
      },

    },
    components: {},
  }
</script>

<style>
  /**渲染内容的样式**/
  .input {
    margin-top: 20px;
    background-color: transparent;
    outline: none;
    font-size: 1.4rem;
    border: 0px;
    border-bottom: 1px solid #cccccc;
    height: 40px;
    width: 70%;
  }

  .Login {
    text-align: center;
    width: 100%;
    height: 100%;
    background: #fbfbfb;
  }

  .btnLogin {
    color: #545454;
    border: 1px solid #cccccc;
    border-radius: 100px;
    margin: 55px auto;
    width: 68%;
    height: 42px;
    background-color: #fbfbfb;
    outline: none;
  }

  .Login-content {
    text-align: center;
    padding-top: 120px;
    height: 520px;
  }

  .forgetPassword {
    letter-spacing: 1px;
    margin-top: 20px;
    color: #4c4c4c;
    font-size: 1.3rem;
    width: 100px;
    height: 20px;
    right: 40px;
    position: absolute;

  }


  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #808080;
    letter-spacing: 2px;
    font-size:1.2rem;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #808080;
    letter-spacing: 2px;
    font-size:1.2rem;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #808080;
    letter-spacing: 2px;
    font-size:1.2rem;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #808080;
    letter-spacing: 2px;
    font-size:1.2rem;
  }
  input:-webkit-autofill { box-shadow: 0 0 0px 1000px #fbfbfb inset !important;}

  .Login-logo {
    padding-bottom: 20px;
    margin: 0 auto;
    width:95px;
    height: 95px;
  }

  .bg {
    background: #fbfbfb;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
