<template>
    <div id="schoolApp">
        <p class="title_index">学校</p>
        <div class="bscroll-school" ref="wrapper">
            <div class="bscroll-container-school">
                <div class="schoolApp-classManage">
                    <p>班级管理</p>
                    <ul>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s1.png"/></p>
                            <p class="schoolApp-li-wz">学员定位</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s2.png"/></p>
                            <p class="schoolApp-li-wz">班级新鲜事</p>
                        </li>
                        <li @touchend="toJump($event,'studentAttendance')">
                            <p class="schoolApp-li-img"><img src="./img/s3.png"/></p>
                            <p class="schoolApp-li-wz">班级考勤</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s4.png"/></p>
                            <p class="schoolApp-li-wz">班级监控</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s5.png"/></p>
                            <p class="schoolApp-li-wz">班级课表</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s6.png"/></p>
                            <p class="schoolApp-li-wz">成绩群发</p>
                        </li>
                    </ul>
                </div>
                <div class="studentManage">
                    <p>学员管理</p>
                    <ul>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s7.png"/></p>
                            <p class="schoolApp-li-wz">学员趋势</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s8.png"/></p>
                            <p class="schoolApp-li-wz">日考成绩</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s9.png"/></p>
                            <p class="schoolApp-li-wz">月考成绩</p>
                        </li>
                        <li @touchend="toJump($event,'lastTest')">
                            <p class="schoolApp-li-img"><img src="./img/s10.png"/></p>
                            <p class="schoolApp-li-wz">结业考试</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s11.png"/></p>
                            <p class="schoolApp-li-wz">老师点评</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s12.png"/></p>
                            <p class="schoolApp-li-wz">学员情况</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s13.png"/></p>
                            <p class="schoolApp-li-wz">自学进度</p>
                        </li>
                        <li>
                            <p class="schoolApp-li-img"><img src="./img/s14.png"/></p>
                            <p class="schoolApp-li-wz">量化评价</p>
                        </li>
                        <li @touchend="toJump($event,'jobState')">
                            <p class="schoolApp-li-img"><img src="./img/s15.png"/></p>
                            <p class="schoolApp-li-wz">就业情况</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
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
#schoolApp{
    width: 100%;
    background: #ffffff;
}
.schoolApp-classManage{
	background: #FFFFFF;
}
.studentManage{
	background: #FFFFFF;
	border-top: 10px solid #f3f3f3; 
}
.schoolApp-classManage>p,.studentManage>p{
	font-size: 1.5rem;
    text-align: center;
    line-height: 40px;
}
.schoolApp-classManage ul,.studentManage ul{
	overflow: hidden;
}
.schoolApp-classManage li,.studentManage li{
	width: 33.3333%;
	height: 100px;
	position: relative;
	float: left;
	border-top: 1px solid #EBEBEB;
}
.schoolApp-classManage li:nth-child(2):after,.schoolApp-classManage li:nth-child(5):after,
.studentManage li:nth-child(2):after,.studentManage li:nth-child(5):after,
.studentManage li:nth-child(8):after{
	content:"";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: block;
	border-left: 1px solid #EBEBEB;
	border-right: 1px solid #EBEBEB;
	/*height: 100%;*/
}



.schoolApp-li-img{
	width: 26.5px;
	height: 26.5px;
	margin: 0 auto;
    margin-top: 20px;
}
.schoolApp-li-img img{
	width: 100%;
	display: block;
}
.schoolApp-li-wz{
	text-align: center;
	margin-top: 20px;
	font-size:1.3rem;
}
.bscroll-school{
    width: 100%;
    position: absolute;
    overflow: hidden;
    bottom: 50px;
    top: 65px;
    left: 0;
    background:#f3f3f3;
}
.bscroll-container-school{
    width: 100%;
    background: #ffffff;
}
</style>
