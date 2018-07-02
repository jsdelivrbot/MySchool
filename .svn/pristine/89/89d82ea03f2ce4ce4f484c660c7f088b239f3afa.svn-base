<template>
    <div id="myApp">
        <p class="title_index">我</p>
        <div class="bscroll-my" ref="wrapper">
            <div class="bscroll-container">
                <div class="myApp-top" v-fb  @touchend="toJump($event,'myDesc')">
                    <div href="javascript:;">
                        <img class="header-img" src="./img/wo1.png"/>
                    </div>
                    <div class="myApp-top-content">
                        <p class="myApp-top-content-teacherName">马守彬</p>
                        <p class="myApp-top-content-dept">职位:&nbsp;&nbsp;教员</p>
                    </div>
                    <div class="myApp-top-bianji" >
                        <p class="myApp-top-bianji-p">
                            <span class="myApp-top-bianji-p">编辑资料</span>
                            <span class="el-icon-erp-jiantou icon-youjiantou"></span>
                        </p>
                    </div>
                </div>

                <div class="myApp-main">
                    <ul class="myApp-main-ul">
                        <li class="myApp-main-ul-item" v-fb>
                            <a href="javascript:;">
                                <img class="myApp-main-ul-item-icon" src="./img/wo2.png"/>
                                <span class="myApp-main-ul-item-title">项目跟踪</span>
                                <span class="el-icon-erp-jiantou icon-youjiantou"></span>
                            </a>
                        </li>
                        <li class="myApp-main-ul-item" v-fb>
                            <a href="javascript:;">
                                <img class="myApp-main-ul-item-icon" src="./img/wo3.png"/>
                                <span class="myApp-main-ul-item-title">校长信箱</span>
                                <span class="el-icon-erp-jiantou icon-youjiantou"></span>
                            </a>
                        </li>
                        <li class="myApp-main-ul-item" v-fb @touchend="toJump($event,'approve')">
                            <a href="javascript:;">
                                <img class="myApp-main-ul-item-icon" src="./img/wo4.png"/>
                                <span class="myApp-main-ul-item-title">我的审批</span>
                                <span class="el-icon-erp-jiantou icon-youjiantou"></span>
                            </a>
                        </li>
                        <li class="myApp-main-ul-item" v-fb>
                            <a href="javascript:;">
                                <img class="myApp-main-ul-item-icon" src="./img/wo5.png"/>
                                <span class="myApp-main-ul-item-title">说句心里话</span>
                                <span class="el-icon-erp-jiantou icon-youjiantou"></span>
                            </a>
                        </li>
                        <li class="myApp-main-ul-item" v-fb @touchend="toJump($event,'voluntary')">
                            <a href="javascript:;">
                                <img class="myApp-main-ul-item-icon" src="./img/wo6.png"/>
                                <span class="myApp-main-ul-item-title">志愿服务</span>
                                <span class="el-icon-erp-jiantou icon-youjiantou"></span>
                            </a>
                        </li>
                        <li class="myApp-main-ul-item" v-fb>
                            <a href="javascript:;">
                                <img class="myApp-main-ul-item-icon" src="./img/wo7.png"/>
                                <span class="myApp-main-ul-item-title">参与决策</span>
                                <span class="el-icon-erp-jiantou icon-youjiantou"></span>
                            </a>
                        </li>  
			        </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6" scoped>
    import Bscroll from "better-scroll";
    //将渲染的内容导出
    export default{
        data(){
            return {}
        },
        methods: {
            toJump(e,routerUrl){
                this.$router.replace(routerUrl);
            }
        },
        components: {},
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
@import './my.css'
</style>
