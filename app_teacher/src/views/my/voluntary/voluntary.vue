<template>
    <div id="voluntaryApp">
         <!-- 修改密码 -->
        <div class="voluntaryApp-top">
            <div class="voluntaryApp-title">
                <p class="voluntaryApp-title-text">志愿服务</p>
                <p class="voluntaryApp-cancel el-icon-erp-fanhui" @touchend="goRouter($event,'my')"></p>
                <p class="voluntaryApp-accomplish el-icon-erp-plus-add" @touchend="goRouter($event,'addVoluntary')"></p>
            </div>
        </div>
        <div class="voluntaryApp-inputBox">
            <input type="text" class="voluntaryApp-inputBox-input" placeholder="活动名称"/>
        </div>
        <div class="bscroll-voluntary" ref="wrapper">
            <div class="bscroll-container-voluntary">

                <div class="voluntaryApp-list">
                    <div class="voluntaryApp-list-item">
                        <p class="voluntaryApp-list-item-p">
                            活动名称：
                            <span class="voluntaryApp-list-item-p-span">520课工场UI设计大赛</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动地点：
                            <span class="voluntaryApp-list-item-p-span">双桥2049课工场创意学院</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动时间：
                            <span class="voluntaryApp-list-item-p-span">2018-6-1~6-2</span>
                        </p>
                        <p class="voluntaryApp-list-item-btn btn-blue" v-fb>
                            我要参与    
                        </p>
                    </div>
                    <div class="voluntaryApp-list-item">
                        <p class="voluntaryApp-list-item-p">
                            活动名称：
                            <span class="voluntaryApp-list-item-p-span">520课工场UI设计大赛</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动地点：
                            <span class="voluntaryApp-list-item-p-span">双桥2049课工场创意学院</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动时间：
                            <span class="voluntaryApp-list-item-p-span">2018-6-1~6-2</span>
                        </p>
                        <p class="voluntaryApp-list-item-btn btn-blue" v-fb>
                            我要参与    
                        </p>
                    </div>
                    <div class="voluntaryApp-list-item">
                        <p class="voluntaryApp-list-item-p">
                            活动名称：
                            <span class="voluntaryApp-list-item-p-span">520课工场UI设计大赛</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动地点：
                            <span class="voluntaryApp-list-item-p-span">双桥2049课工场创意学院</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动时间：
                            <span class="voluntaryApp-list-item-p-span">2018-6-1~6-2</span>
                        </p>
                        <p class="voluntaryApp-list-item-btn btn-green" v-fb>
                            已参与    
                        </p>
                    </div>
                    <div class="voluntaryApp-list-item">
                        <p class="voluntaryApp-list-item-p">
                            活动名称：
                            <span class="voluntaryApp-list-item-p-span">520课工场UI设计大赛</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动地点：
                            <span class="voluntaryApp-list-item-p-span">双桥2049课工场创意学院</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动时间：
                            <span class="voluntaryApp-list-item-p-span">2018-6-1~6-2</span>
                        </p>
                        <p class="voluntaryApp-list-item-btn btn-green" v-fb>
                            已参与    
                        </p>
                    </div>
                    <div class="voluntaryApp-list-item">
                        <p class="voluntaryApp-list-item-p">
                            活动名称：
                            <span class="voluntaryApp-list-item-p-span">520课工场UI设计大赛</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动地点：
                            <span class="voluntaryApp-list-item-p-span">双桥2049课工场创意学院</span>
                        </p>
                        <p class="voluntaryApp-list-item-p">
                            活动时间：
                            <span class="voluntaryApp-list-item-p-span">2018-6-1~6-2</span>
                        </p>
                        <p class="voluntaryApp-list-item-btn btn-gray" v-fb>
                            已结束    
                        </p>
                    </div>
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
       goRouter(e,routerUrl){
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

<style>
@import './voluntary.css'
</style>
