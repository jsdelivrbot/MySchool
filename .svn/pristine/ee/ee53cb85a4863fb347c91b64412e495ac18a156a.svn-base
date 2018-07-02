<template>
    <div id="approveApp">
         <v-publicTop :topTitle="titleName" :backRouterUrl="'/my'"></v-publicTop>
         <div class="approveApp-topSelectBox">
            <el-select v-model="defaultSelected" placeholder="请选择">
                <el-option
                    v-for="item in classSelected"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                </el-option>
            </el-select>
        </div>
        <div class="bscroll-approve" ref="wrapper">
            <div class="bscroll-container-approve">
                
                <div class="approveApp-list">
                    <div class="approveApp-list-item" v-fb @touchend="showBox($event)">
                        <p class="approveApp-list-item-p">
                            学生姓名：
                            <span class="approveApp-list-item-p-span">张三</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假类型：
                            <span class="approveApp-list-item-p-span">病假</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假原因：
                            <span class="approveApp-list-item-p-span">身体不舒服，要去医院看大夫，学习诚可贵，小命价更高</span>
                        </p>
                        <p class="approveApp-list-item-btn btn-blue" v-fb>
                            待审批    
                        </p>
                    </div>
                    <div class="approveApp-list-item" v-fb>
                        <p class="approveApp-list-item-p">
                            学生姓名：
                            <span class="approveApp-list-item-p-span">李四</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假类型：
                            <span class="approveApp-list-item-p-span">事假</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假原因：
                            <span class="approveApp-list-item-p-span">我们村要和隔壁村对山歌了，我不去的话，我们村可能会输</span>
                        </p>
                        <p class="approveApp-list-item-btn btn-green" v-fb>
                            已同意    
                        </p>
                    </div>
                    <div class="approveApp-list-item" v-fb>
                        <p class="approveApp-list-item-p">
                            学生姓名：
                            <span class="approveApp-list-item-p-span">王五</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假类型：
                            <span class="approveApp-list-item-p-span">事假</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假原因：
                            <span class="approveApp-list-item-p-span">我就是要请假，我就是要请假，我就是要请假，我就是要请假，我就是要请假</span>
                        </p>
                        <p class="approveApp-list-item-btn btn-red" v-fb>
                            未同意    
                        </p>
                    </div>

                    <div class="approveApp-list-item" v-fb>
                        <p class="approveApp-list-item-p">
                            学生姓名：
                            <span class="approveApp-list-item-p-span">张三</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假类型：
                            <span class="approveApp-list-item-p-span">病假</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假原因：
                            <span class="approveApp-list-item-p-span">身体不舒服，要去医院看大夫，学习诚可贵，小命价更高</span>
                        </p>
                        <p class="approveApp-list-item-btn btn-blue">
                            待审批    
                        </p>
                    </div>
                    <div class="approveApp-list-item" v-fb>
                        <p class="approveApp-list-item-p">
                            学生姓名：
                            <span class="approveApp-list-item-p-span">李四</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假类型：
                            <span class="approveApp-list-item-p-span">事假</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假原因：
                            <span class="approveApp-list-item-p-span">我们村要和隔壁村对山歌了，我不去的话，我们村可能会输</span>
                        </p>
                        <p class="approveApp-list-item-btn btn-green" v-fb>
                            已同意    
                        </p>
                    </div>
                    <div class="approveApp-list-item" v-fb>
                        <p class="approveApp-list-item-p">
                            学生姓名：
                            <span class="approveApp-list-item-p-span">王五</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假类型：
                            <span class="approveApp-list-item-p-span">事假</span>
                        </p>
                        <p class="approveApp-list-item-p">
                            请假原因：
                            <span class="approveApp-list-item-p-span">我就是要请假，我就是要请假，我就是要请假，我就是要请假，我就是要请假</span>
                        </p>
                        <p class="approveApp-list-item-btn btn-red" v-fb>
                            未同意    
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <!-- 详情 -->
        <div id="approveDesc">
            <div class="approveDesc-top">
                <p class="approveDesc-top-title-text">请假详情</p>
                <p class="approveDesc-cancel" @touchend="hideBox($event)">取消</p>
            </div>
            <div class="approveDesc-content">
                <div class="approveDesc-content-box">
                    <p class="approveDesc-content-box-p">
                        学员姓名：
                        <span class="">张三</span>
                    </p>
                    <p class="approveDesc-content-box-p">
                        所属班级：
                        <span class="">TCMP058</span>
                    </p>
                    <p class="approveDesc-content-box-p">
                        请假类型：
                        <span class="">病假</span>
                    </p>
                    <p class="approveDesc-content-box-p">
                        教员意见：
                        <span class="">未审批</span>
                    </p>
                    <p class="approveDesc-content-box-p">
                        班主任意见：
                        <span class="">已同意</span>
                    </p>
                    <p class="approveDesc-content-box-p">
                        请假原因：
                        <span class="approveDesc-content-box-p-span">
                            身体不舒服，要去医院看大夫，学习诚可贵，小命价更高，希望老师准假，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        </span>
                    </p>
                    <div class="approveDesc-content-box-btnBox">
                        <div class="approveDesc-content-box-btnBox-btn approveDesc-content-box-btnBox-agree" v-fb>同意</div>
                        <div class="approveDesc-content-box-btnBox-btn approveDesc-content-box-btnBox-disagree" v-fb>不同意</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Bscroll from "better-scroll"
    import publicTop from '@/views/public/publicTop'
    //将渲染的内容导出
    export default{
        data(){  
            return {
                 titleName:"我的审批",
                 defaultSelected: '',
                 classSelected: [{
                        value: 'MP058',
                        label: 'TCMP058'
                    }, {
                        value: 'MP060',
                        label: 'TCMP060',
                        // disabled: true
                    }, {
                        value: 'MP062',
                        label: 'TCMP062'
                    }],
            }
        },
        methods: {
            showBox(e){
                console.log("show");
                document.getElementById("approveDesc").style.zIndex = "1000";
                document.getElementById("approveDesc").style.opacity = "1";
                document.getElementById("approveDesc").style.top = "0px";
            },
            hideBox(e,boxName){
                document.getElementById("approveDesc").style.zIndex = "0";
                document.getElementById("approveDesc").style.opacity = "0";
                document.getElementById("approveDesc").style.top = "1200px";
            },
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
            });
        },

    }
</script>

<style>
@import './approve.css'
</style>
