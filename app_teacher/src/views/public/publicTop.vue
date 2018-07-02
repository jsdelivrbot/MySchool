<template>
    <!--在此处添加渲染的内容-->
    <div id="publicTop">
        <p class="publicTop-title-text" v-text="topTitle"></p>
        <p class="el-icon-erp-fanhui icon-back" @touchend="goBack($event)"></p>
    </div>
</template>

<script type="text/ecmascript-6">
    //将渲染的内容导出
    export default{
        props:["topTitle","backRouterUrl"],
        methods: {
            goBack(e){
                this.$router.replace(this.backRouterUrl)
            }
        }
    }
</script>

<style>
#publicTop{
  padding-top: 20px;
  position: fixed;
  width: 100%;
  background: #00A5EB; 
}
#publicTop .publicTop-title-text{
  color: #ffffff;
  text-align: center;
  line-height:45px;
  font-size: 1.6rem;
  z-index: 20;
}
#publicTop .icon-back{
    color: #ffffff;
    line-height:45px;
    font-size: 1.8rem;
    z-index: 30;
    top: 20px;
    position: absolute;
    padding: 0 15px 0 10px;
}
</style>