<template>
    <div id="informDescApp">
        <v-publicTop :topTitle="titleName" :backRouterUrl="'/msg'"></v-publicTop>   
        <div class="bscroll" ref="wrapper">
            <div class="bscroll-container">
                <div class="informDesc-main">
                    <p class="informDesc-main-title">关于端午节的放假通知</p>
                    <div class="informDesc-main-publisherAndTime">
                        <p class="informDesc-main-publisherAndTime-people">马守彬的通告</p>
                        <p class="informDesc-main-publisherAndTime-time">2018-06-06</p>
                    </div>
                    <div class="informDesc-main-content">
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">1、放假时间：</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;下周一到下周三，放假时间为三天</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <!-- <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p>
                       <p><span style="font-family: 黑体, SimHei; font-size: 16px;">2、请大家根据放假通知提前做好自己的工作安排，并检查各种设施、设备、尤其是电脑机箱样品</span></p> -->
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
                titleName:"通知详情"
            }
        },
        methods: {},
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

<style scoped>
/**渲染内容的样式**/
@import './informDesc.css'
</style>
