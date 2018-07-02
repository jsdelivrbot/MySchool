<template>
     <div id="studentApp">
         <div class="student-main">
            <div class="student-main-item" v-fb>
                <div class="student-main-item-left">
                    <img class="student-main-item-left-headerImg"
                     src="http://img5.imgtn.bdimg.com/it/u=182926723,2506718122&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="student-main-item-right">
                    <p class="student-main-item-right-name">张三</p>
                    <p class="student-main-item-right-context">我是，孩子不听话就要打</p>
                </div>
                <div class="student-main-item-timeAndIsNew">
                    <p class="student-main-item-time">2018-12-12</p>
                    <p class="student-main-item-isNew"></p>
                </div>
            </div>
            <div class="student-main-item" v-fb>
                <div class="student-main-item-left">
                    <img class="student-main-item-left-headerImg"
                     src="http://p1.qzone.la/upload/4/a0484df7-f686-4c9d-afaa-e5273197abc5.jpg" alt="">
                </div>
                <div class="student-main-item-right">
                    <p class="student-main-item-right-name">李四</p>
                    <p class="student-main-item-right-context">听话就要打</p>
                </div>
                <div class="student-main-item-timeAndIsNew">
                    <p class="student-main-item-time">2018-12-12</p>
                    <p class="student-main-item-isNew"></p>
                </div>
            </div>
            <div class="student-main-item" v-fb>
                <div class="student-main-item-left">
                    <img class="student-main-item-left-headerImg"
                     src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="student-main-item-right">
                    <p class="student-main-item-right-name">李</p>
                    <p class="student-main-item-right-context">不听话就要打</p>
                </div>
                <div class="student-main-item-timeAndIsNew">
                        <p class="student-main-item-time">2018-12-12</p>
                        <p class="student-main-item-isNew"></p>
                    </div>
                </div>
            <div class="student-main-item" v-fb>
                <div class="student-main-item-left">
                    <img class="student-main-item-left-headerImg"
                     src="http://img4.imgtn.bdimg.com/it/u=1623709961,2120946365&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="student-main-item-right">
                    <p class="student-main-item-right-name">李asdf</p>
                    <p class="student-main-item-right-context">我是李要打</p>
                </div>
                <div class="student-main-item-timeAndIsNew">
                    <p class="student-main-item-time">2018-12-12</p>
                    <p class="student-main-item-isNew"></p>
                </div>
            </div>
            </div>  
          </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
    //将渲染的内容导出
    export default{
        data(){
            return {}
        },
        methods: {},
        components: {},

    }
</script>
<style scoped>
   /**渲染内容的样式**/
    .student-main-item{
        position: relative;
        padding: 14px 10px 0 14px;
        border-bottom: 1px #e7e7e7 solid; 
        overflow: hidden;
        padding-bottom: 14px;
    }
    .student-main-item .student-main-item-left{
        float: left;
        width: 50px;
    }
    .student-main-item .student-main-item-left .student-main-item-left-headerImg{
        width: 50px;
        height: 50px;
        -webkit-border-radius: 100%;
    }
    .student-main-item .student-main-item-right{
        width: 50%;
        float: left;
        padding-left: 14px;
    }
    .student-main-item .student-main-item-right .student-main-item-right-name{    
        height: 30px;
        font-size: 1.5rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height: 30px;
    }
    .student-main-item .student-main-item-right .student-main-item-right-context{
        height: 20px;
        line-height: 20px;  
        font-size: 1.3rem;
        color: #575757;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .student-main-item .student-main-item-timeAndIsNew{
        float: right;
        height: 60px;
        overflow: hidden;
        padding-right:10px; 
    }
    .student-main-item .student-main-item-time{
        color: #808080;
        font-size: 1.2rem;
        height: 30px;
        line-height: 30px;
    }
    .student-main-item .student-main-item-isNew{
        display: inline-block;
        float: right;
        width: 8px;
        height: 8px;
        background-color: rgb(218, 2, 2);
        -webkit-border-radius: 100%;
    }
</style>
