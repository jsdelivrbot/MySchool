<template>
    <div id="lastTestApp">
        <v-publicTop :topTitle="titleName" :backRouterUrl="'/school'"></v-publicTop>
        <div class="bscroll-lastTest" ref="wrapper">
            <div class="bscroll-container-lastTest">
                <div class="lastTestApp-main-top">
            <div class="lastTestApp-mian-top-item">
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
            <div class="lastTestApp-mian-top-item">
                <input type="text" v-model="inputStudentName" placeholder="学生姓名" class="input"/>
            </div>
        </div>
                <div class="lastTestApp-main-list">
                    <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>张三</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./notPass.png" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>50</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>60</span>
                            </p>
                        </div>
                    </div>
                    <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>张三</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./notPass.png" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>50</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>60</span>
                            </p>
                        </div>
                    </div>
                    <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>张三</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./notPass.png" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>50</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>60</span>
                            </p>
                        </div>
                    </div>
                    <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>李四</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./pass.jpg" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>90</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>100</span>
                            </p>
                        </div>
                    </div>

                    <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>李四</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./pass.jpg" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>90</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>100</span>
                            </p>
                        </div>
                    </div>

                     <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>李四</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./pass.jpg" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>90</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>100</span>
                            </p>
                        </div>
                    </div>


                     <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>李四</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./pass.jpg" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>90</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>100</span>
                            </p>
                        </div>
                    </div>


                     <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>李四</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./pass.jpg" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>90</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>100</span>
                            </p>
                        </div>
                    </div>

                    <div class="lastTestApp-main-list-item">
                        <div class="lastTestApp-main-list-item-nameAndTime">
                            <p class="lastTestApp-main-list-item-nameAndTime-name">
                                姓名：<span>李四</span>
                            </p>
                            <p class="lastTestApp-main-list-item-nameAndTime-time">
                                2018-06-06
                            </p>
                        </div>
                        <div class="lastTestApp-main-list-item-isPass">
                            <img src="./pass.jpg" alt="">
                        </div>
                        <div class="lastTestApp-main-list-item-score">
                            <p class="lastTestApp-main-list-item-score-write">
                                笔试：<span>90</span>
                            </p>
                            <p class="lastTestApp-main-list-item-score-machine">
                                机试：<span>100</span>
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
                titleName:"结业考试",
                defaultSelected: '',
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
@import './lastTest.css';
</style>
