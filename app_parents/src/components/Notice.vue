<template>
  <!--公告通知-->
  <div>
    <mt-header class="Notice-header" title="公告通知">
      <router-link to="/Home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="Notice-content">
      <div class="Notice-content-ChildContent">
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
             清明假期安排 <i class="header-icon el-icon-info"></i>
            </template>
            <div class="Notice-content-desc">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div class="Notice-content-person">马哥</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              清明假期安排 <i class="header-icon el-icon-info"></i>
            </template>
            <div class="Notice-content-desc">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div class="Notice-content-person">马哥</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              清明假期安排 <i class="header-icon el-icon-info"></i>
            </template>
            <div class="Notice-content-desc">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div class="Notice-content-person">马哥</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              清明假期安排 <i class="header-icon el-icon-info"></i>
            </template>
            <div class="Notice-content-desc">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div class="Notice-content-person">马哥</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>

</template>

<script>
  import { Header } from 'mint-ui';
  export default {
    name: "Notice"
  }
</script>

<style scoped>
  .Notice-header {
    background-color: #B3C0D1;
    font-size: 1.6rem;
    width: 100%;
    height: 50px;
  }

  .Notice-content {
    width: 100%;
    height: 590px;
    overflow: hidden;
  }

  .Notice-content-person {
    text-align: end;
    color: #9da2d7;
  }

  .Notice-content-ChildContent {
    margin: 0 auto;
    width: 90%;
    height: 100%;
  }

  .Notice-content-desc {
    color: #4c4c4c;
    text-indent: 2rem;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
