<template>
    <div id="jobStateApp">
        <v-publicTop :topTitle="titleName" :backRouterUrl="'/school'"></v-publicTop>
        <div class="bscroll-jobState" ref="wrapper">
            <div class="bscroll-container-jobState">
                <div class="jobStateApp-main-top">
                    <div class="jobStateApp-mian-top-item">
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
                    <div class="jobStateApp-mian-top-item">
                        <input type="text" v-model="inputStudentName" placeholder="学生姓名" class="input"/>
                    </div>
                    <!-- <div class="jobStateApp-mian-top-item">
                        <el-button type="primary">搜索</el-button>
                    </div> -->
                </div>
                <div class="jobStateApp-main-list">
                    <div class="jobStateApp-main-list-item">
                        <p class="jobStateApp-main-list-item-text">
                            学员姓名：<span>张三</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            联系电话：<span>18810030116</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            公司名称：<span>北大青鸟</span>
                        </p>
                        <div class="jobStateApp-main-list-item-salary">
                            <p class="jobStateApp-main-list-item-salary-text">
                                实习薪资：<span>5500</span>
                            </p>
                            <p class="jobStateApp-main-list-item-salary-text">
                                转正薪资：<span>8000</span>
                            </p>
                        </div>
                    </div>
                    <div class="jobStateApp-main-list-item">
                        <p class="jobStateApp-main-list-item-text">
                            学员姓名：<span>张三</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            联系电话：<span>18810030116</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            公司名称：<span>北大青鸟</span>
                        </p>
                        <div class="jobStateApp-main-list-item-salary">
                            <p class="jobStateApp-main-list-item-salary-text">
                                实习薪资：<span>5500</span>
                            </p>
                            <p class="jobStateApp-main-list-item-salary-text">
                                转正薪资：<span>8000</span>
                            </p>
                        </div>
                    </div>
                    <div class="jobStateApp-main-list-item">
                        <p class="jobStateApp-main-list-item-text">
                            学员姓名：<span>张三</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            联系电话：<span>18810030116</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            公司名称：<span>北大青鸟</span>
                        </p>
                        <div class="jobStateApp-main-list-item-salary">
                            <p class="jobStateApp-main-list-item-salary-text">
                                实习薪资：<span>5500</span>
                            </p>
                            <p class="jobStateApp-main-list-item-salary-text">
                                转正薪资：<span>8000</span>
                            </p>
                        </div>
                    </div>
                    <div class="jobStateApp-main-list-item">
                        <p class="jobStateApp-main-list-item-text">
                            学员姓名：<span>张三</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            联系电话：<span>18810030116</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            公司名称：<span>北大青鸟</span>
                        </p>
                        <div class="jobStateApp-main-list-item-salary">
                            <p class="jobStateApp-main-list-item-salary-text">
                                实习薪资：<span>5500</span>
                            </p>
                            <p class="jobStateApp-main-list-item-salary-text">
                                转正薪资：<span>8000</span>
                            </p>
                        </div>
                    </div>
                    <div class="jobStateApp-main-list-item">
                        <p class="jobStateApp-main-list-item-text">
                            学员姓名：<span>张三</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            联系电话：<span>18810030116</span>
                        </p>
                        <p class="jobStateApp-main-list-item-text">
                            公司名称：<span>北大青鸟</span>
                        </p>
                        <div class="jobStateApp-main-list-item-salary">
                            <p class="jobStateApp-main-list-item-salary-text">
                                实习薪资：<span>5500</span>
                            </p>
                            <p class="jobStateApp-main-list-item-salary-text">
                                转正薪资：<span>8000</span>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script scople>
    import Bscroll from "better-scroll";
    import publicTop from '@/views/public/publicTop'
    //将渲染的内容导出
    export default{
        data(){
            return {
                titleName:"就业情况",
                defaultSelected: "",
                inputStudentName:"",
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

<style>
@import './jobState.css';
</style>
