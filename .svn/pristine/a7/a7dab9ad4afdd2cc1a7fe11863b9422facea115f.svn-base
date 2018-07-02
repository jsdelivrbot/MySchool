<template>
    <div id="AttendanceApp">
        <v-publicTop :topTitle="titleName" :backRouterUrl="'/school'"></v-publicTop>
        <div class="bscroll-ad" ref="wrapper">
            <div class="bscroll-container-ad">
                <div class="adApp-main-top">
                    <div class="adApp-mian-top-item">
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
                    <div class="adApp-mian-top-item">
                        <el-button type="primary">搜索</el-button>
                    </div>
                    <div class="adApp-mian-top-item">
                        <el-button type="success">开始打卡</el-button>
                    </div>
                </div>
                <div class="adApp-main-stateShow">
                    <div class="adApp-main-stateShow-center">
                        <el-button type="success">正常</el-button>
                        <el-button type="primary">请假</el-button>
                        <el-button type="warning">迟到</el-button>
                        <el-button type="info">早退</el-button>
                        <el-button type="danger">旷课</el-button>
                    </div>
                </div>
                <div class="adApp-main-list">
                    <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>张三</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>8:30</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>5:00</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="info">早退</el-button>
                        </div>
                    </div>
                    <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>李四</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>7:30</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>5:30</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="success">正常</el-button>
                        </div>
                    </div>
                    <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>王五</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>请假</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>请假</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="primary">请假</el-button>
                        </div>
                    </div>
                    <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>赵六</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>旷课</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>旷课</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="danger">旷课</el-button>
                        </div>
                    </div>
                     <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>陈七</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>7:30</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>5:00</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="warning">迟到</el-button>
                        </div>
                    </div>
                    <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>张三</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>8:30</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>5:00</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="info">早退</el-button>
                        </div>
                    </div>
                    <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>李四</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>7:30</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>5:30</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="success">正常</el-button>
                        </div>
                    </div>
                    <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>王五</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>请假</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>请假</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="primary">请假</el-button>
                        </div>
                    </div>
                    <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>赵六</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>旷课</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>旷课</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="danger">旷课</el-button>
                        </div>
                    </div>
                     <div class="adApp-main-list-item">
                        <div class="adApp-main-list-item-img">
                            <img src="http://img5.imgtn.bdimg.com/it/u=832101073,2523374224&fm=27&gp=0.jpg" alt="">
                        </div>
                        <div class="adApp-main-list-item-name">
                            <span>陈七</span>
                        </div>
                        
                        <div class="adApp-main-list-item-time">
                            <p class="adApp-main-list-item-time-AM">
                                早：<span>7:30</span>
                            </p>
                            <p class="adApp-main-list-item-time-PM">
                                晚：<span>5:00</span>
                            </p>
                        </div>
                        <div class="adApp-main-list-item-state">
                            <el-button type="warning">迟到</el-button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from "better-scroll";
    import publicTop from '@/views/public/publicTop'
    //将渲染的内容导出
    export default{
        data(){
            return {
                titleName:"班级考勤",
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
        methods: {},
        components: {
            "v-publicTop":publicTop
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
@import './attendance.css';
</style>
