<template>
  <!--孩子项目-->
  <div>
    <mt-header class="ChildProject-header" title="孩子项目">
      <router-link to="/Task" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="ChildProject-content">
      <div class="ChildProject-content-item">
        <p>整体项目进度</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="60"></el-progress>
      </div>
      <div class="ChildProject-content-item">
        <p>自学情况模块</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
      </div>
      <div class="ChildProject-content-item">
        <p>就业情况模块</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
      </div>
      <div class="ChildProject-content-item">
        <p>校长信箱模块</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
      </div>
      <div class="ChildProject-content-item">
        <p>日考成绩模块</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
      </div>

    </div>
  </div>


</template>

<script>
  import {Header} from 'mint-ui';

  export default {
    name: "ChildProject"
  }
</script>

<style scoped>
  .ChildProject-header {
    line-height: 3rem;
    background-color: #B3C0D1;
    font-size: 1.6rem;
    width: 100%;
    height: 50px;
  }

  .ChildProject-content {
    width: 100%;
    height: 200px;
  }

  .ChildProject-content-item {
    background-color: #fafafa;
    width: 95%;
    height: 80px;
    margin: 0 auto;
  }
  .ChildProject-content-item p{
    padding-top: 8px;
    width: 200px;
    height: 35px;
    margin-top: 10px;
    font-size: 1.4rem;
    color: #404040;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
