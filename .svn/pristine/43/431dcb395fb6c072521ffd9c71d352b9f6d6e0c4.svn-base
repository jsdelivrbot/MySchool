<template>
    <div id="myDescApp">
        <v-publicTop :topTitle="titleName" :backRouterUrl="'/my'"></v-publicTop>
        <div class="bscroll-myDesc" ref="wrapper">
            <div class="bscroll-container">
                <div class="myDescApp-headerImg" v-fb>
                    <p class="myDescApp-headerImg-p">头像</p>
                    <p class="el-icon-erp-jiantou icon-yjt"></p>
                    <img src="../img/wo1.png" alt="">
                </div>
                <div class="myDescApp-itemBox" v-fb @touchend="showBox($event,'name')">
                    <p class="myDescApp-itemBox-p">姓名</p>
                    <p class="el-icon-erp-jiantou icon-yjt"></p>
                    <p class="myDescApp-itemBox-name">马守彬</p>
                </div>
                <div class="myDescApp-itemBox" v-fb @touchend="showBox($event,'phone')">
                    <p class="myDescApp-itemBox-p">电话</p>
                    <p class="el-icon-erp-jiantou icon-yjt"></p>
                    <p class="myDescApp-itemBox-name">13800138000</p>
                </div>
                <div class="myDescApp-itemBox" v-fb @touchend="showBox($event,'email')">
                    <p class="myDescApp-itemBox-p">邮箱</p>
                    <p class="el-icon-erp-jiantou icon-yjt"></p>
                    <p class="myDescApp-itemBox-name">abc@163.com</p>
                </div>
                <div class="myDescApp-itemBox" v-fb @touchend="showBox($event,'pwd')">
                    <p class="myDescApp-itemBox-p">修改密码</p>
                    <p class="el-icon-erp-jiantou icon-yjt"></p>
                </div>
                <div class="myDescApp-itemBox" v-fb>
                    <p class="myDescApp-itemBox-p">职务</p>
                    <p class="myDescApp-itemBox-name">教员</p>
                </div>
                <p class="line-my"></p>
                <p class="myDescApp-logOut" v-fb  @touchend="logOut($event)">退出登录</p>
            </div>
        </div> 
        <!-- 修改姓名 -->
        <div id="updateNameBox">
            <div class="updateNameBox-top">
                <p class="updateNameBox-top-title-text">设置姓名</p>
                <p class="myDesc-cancel" @touchend="hideBox($event,'name')">取消</p>
                <p class="myDesc-accomplish" @touchend="toUpdate($event,'name')">完成</p>
            </div>
            <input type="text" class="inputTeacherName" v-model="teacherInfo.teacherName"/>
        </div>
        <!-- 修改电话 -->
        <div id="updatePhoneBox">
            <div class="updatePhoneBox-top">
                <p class="updatePhoneBox-top-title-text">设置电话</p>
                <p class="myDesc-cancel" @touchend="hideBox($event,'phone')">取消</p>
                <p class="myDesc-accomplish" @touchend="toUpdate($event,'phone')">完成</p>
            </div>
            <input autofocus type="text" class="inputTeacherPhone" v-model="teacherInfo.teacherPhone"/>
        </div>
        <!-- 修改邮箱 -->
        <div id="updateEmailBox">
            <div class="updateEmailBox-top">
                <p class="updateEmailBox-top-title-text">设置邮箱</p>
                <p class="myDesc-cancel" @touchend="hideBox($event,'email')">取消</p>
                <p class="myDesc-accomplish" @touchend="toUpdate($event,'email')">完成</p>
            </div>
            <input autofocus type="text" class="inputTeacherEmail" v-model="teacherInfo.teacherEamil"/>
        </div>
        <!-- 修改密码 -->
        <div id="updatePwdBox">
            <div class="updatePwdBox-top">
                <p class="updatePwdBox-top-title-text">修改密码</p>
                <p class="myDesc-cancel" @touchend="hideBox($event,'pwd')">取消</p>
                <p class="myDesc-accomplish" plain @touchend="toUpdate($event,'pwd')">完成</p>
            </div>
            <p class="updatePwdBox-top-inputTitle updatePwdBox-top-inputTitle-one">当前密码：</p>
            <input autofocus type="text" class="inputTeacherPwdOld" v-model="teacherInfo.teacherPwdOld"/>
            <p class="updatePwdBox-top-inputTitle">新密码：</p>
            <input type="password" class="inputTeacherPwdNew" v-model="teacherInfo.teacherPwdNew"/>
            <p class="updatePwdBox-top-inputTitle">再次输入新密码：</p>
            <input type="password" class="inputTeacherPwdNew" v-model="teacherInfo.teacherPwdNew2"/>
        </div>
    </div>
</template>

<script>
    import Bscroll from "better-scroll"
    import publicTop from '@/views/public/publicTop'
    //将渲染的内容导出
    export default{
        data(){
            return {
                titleName:"个人信息",
                teacherInfo:{
                    teacherName:"马守彬",
                    teacherPhone:"13800138000",
                    teacherEamil:"abc@163.com",
                    teacherPwdOld:"",
                    teacherPwdNew:"",
                    teacherPwdNew2:"",
                },
            }
        },
        methods: {
            logOut(e){
                this.$router.replace('/login');
            },
            showAlert(){
                this.$notify({
                    title: '提示',
                    message: '请输入完整信息',
                    type: 'warning'
                });
            },
            showBoxTransition(DomId){
                document.getElementById(DomId).style.zIndex = "1000";
                document.getElementById(DomId).style.opacity = "1";
                document.getElementById(DomId).style.top = "0px";
            },
            hideBoxTransition(DomId){
                document.getElementById(DomId).style.zIndex = "0";
                document.getElementById(DomId).style.opacity = "0";
                document.getElementById(DomId).style.top = "1200px";
            },
            showBox(e,boxName){
                if(boxName == 'name'){
                   this.showBoxTransition("updateNameBox")
                }else if(boxName == 'phone'){
                    this.showBoxTransition("updatePhoneBox")
                }else if(boxName == 'email'){
                    this.showBoxTransition("updateEmailBox")
                }else if(boxName == 'pwd'){
                    this.showBoxTransition("updatePwdBox")
                }
            },
            hideBox(e,boxName){
                if(boxName == 'name'){
                   this.hideBoxTransition("updateNameBox")
                }else if(boxName == 'phone'){
                    this.hideBoxTransition("updatePhoneBox")
                }else if(boxName == 'email'){
                    this.hideBoxTransition("updateEmailBox")
                }else if(boxName == 'pwd'){
                    this.hideBoxTransition("updatePwdBox")
                    this.teacherInfo.teacherPwdOld = ""
                    this.teacherInfo.teacherPwdNew = ""
                    this.teacherInfo.teacherPwdNew2 = ""
                }
            },
            toUpdate(e,boxName){
                if(boxName == 'name'){
                   this.hideBoxTransition("updateNameBox")
                }else if(boxName == 'phone'){
                    this.hideBoxTransition("updatePhoneBox")
                }else if(boxName == 'email'){
                    this.hideBoxTransition("updateEmailBox")
                }else if(boxName == 'pwd'){
                    this.showAlert();
                    // this.hideBoxTransition("updatePwdBox")
                    this.teacherInfo.teacherPwdOld = ""
                    this.teacherInfo.teacherPwdNew = ""
                    this.teacherInfo.teacherPwdNew2 = ""
                }
            }
        },
        components: {
            "v-publicTop":publicTop,
        },
         mounted(){
           this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.wrapper, {
                bounce: true,
                momentumLimitDistance: 5
                })
                // scroll.refresh()
            });
        },

    }
</script>

<style>
@import './myDesc.css';
.bscroll-myDesc{
    width: 100%;
    position: absolute;
    overflow: hidden;
    bottom: 0;
    top: 65px;
    left: 0;
    background: #f3f3f3;
}
.bscroll-container{
    height: 120%;
    width: 100%;
    background: #f3f3f3;
}

</style>
