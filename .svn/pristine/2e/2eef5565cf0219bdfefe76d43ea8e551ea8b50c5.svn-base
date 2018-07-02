<template>
    <!--在此处添加渲染的内容-->
    <div id="loginApp">
         <p class="title_index">登录</p>
         <div class="loginApp-content">
             <input type="text" @touchend="updateIsFocus('name')"
                class="loginApp-content-inputLoginTeacherNameOrPhone" v-model="teacherNameOrPhone" placeholder="用户名/手机号"/>
             <input type="password"  @touchend="updateIsFocus('pwd')"
                class="loginApp-content-inputLoginTeacherPwd" v-model="teacherPwd" placeholder="密码"/>
             <button class="loginApp-content-btnLogin" v-fb @touchend="toLogin">登录</button>
             <p class="loginApp-content-forgetPwd">
                 <span v-fb>忘记密码</span>
             </p>
         </div>
        <el-alert
            v-show="alertIsShow"
            title="请填写完整信息"
            type="error">
        </el-alert>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui'
    export default{
        data(){
            return {
                teacherNameOrPhone:"",
                teacherPwd:"",
                alertIsShow:false,
                nameIsFocus:"v-focus",
                pwdIsFocus:"",
            }
        },
        methods: {
            toLogin(){
                console.log(this.alertIsShow)
                if(this.teacherNameOrPhone == '' || this.teacherPwd == ''){
                    this.alertIsShow = true;
                    return;
                }
                console.log(Indicator);
                Indicator.open('正在登录...')
                setTimeout(() => {
                    Indicator.close()
                    this.$router.replace('/home')
                }, 1000);
                // 访问api
               
            },
            updateIsFocus(inputType){
                if(inputType == 'name'){
                    this.nameIsFocus = "v-focus";
                }else{
                    this.pwdIsFocus = "v-focus";
                }
            }
        },
        created(){
        }
    }
</script>

<style>
#loginApp{
    width:100%;
}
#loginApp .loginApp-content{
    padding: 155px 12px 12px 12px;
}
#loginApp .loginApp-content .loginApp-content-inputLoginTeacherNameOrPhone{
    display: block;
    background: #ffffff;
    border: 1px #dddddd solid;
    border-bottom: none;
    width: 300px;
    height: 55px;
    margin: 0 auto;
    font-size: 1.5rem;
    padding-left: 8px;
   -webkit-border-radius: 0;
   user-select: text;
}
#loginApp .loginApp-content .loginApp-content-inputLoginTeacherPwd{
    display: block; 
    background: #fcfbfb;
    border: 1px #dddddd solid;  
    border-top: 2px #f1f1f1 solid;
    width: 300px;
    height: 55px;
    margin: 0 auto;
    font-size: 1.5rem;
    padding-left: 8px;
   -webkit-border-radius: 0;
   user-select: text;
}
#loginApp .loginApp-content .loginApp-content-btnLogin{
    display: block;
    background: #00A5EB;
    color: #ffffff;
    border: 1px #00A5EB solid;
    width: 310px;
    height: 50px;
    margin: 20px auto 10px auto;
    font-size: 1.5rem;
   -webkit-border-radius: 5px;
}
#loginApp .loginApp-content .loginApp-content-forgetPwd{
    text-align: center;
    font-size: 1.2rem;
    color: #8d8d8d;
    height: 40px;
}
#loginApp .loginApp-content .loginApp-content-forgetPwd span{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
}
#loginApp .el-alert{
    width: 60%;
    padding: 10px 16px;
    margin: 0 auto;
    z-index: 1500;
}
</style>