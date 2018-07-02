<template>
  <!--班级新鲜事-->
  <div>
    <mt-header class="ClassEvent-header" title="班级新鲜事">
      <router-link to="/Task" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--班级新鲜事一个Demo Div-->
    <div class="ClassEvent-content">
      <div class="ClassEvent-content-item">
        <div class="ClassEvent-content-item-imges">
          <img src="../../static/img/ClassEvent.jpg" style="width:100%; height: auto;" alt="">
        </div>
        <div class="ClassEvent-content-item-info">
          <p>班级新鲜事</p>
          <p style="font-size: 1.3rem;color: #919191">{{currentDate}}</p>
        </div>
      </div>
      <div class="ClassEvent-content-item">
        <div class="ClassEvent-content-item-imges">
          <img src="../../static/img/ClassEvent.jpg" style="width:100%; height: auto;" alt="">
        </div>
        <div class="ClassEvent-content-item-info">
          <p>班级新鲜事</p>
          <p style="font-size: 1.3rem;color: #919191">{{currentDate}}</p>
        </div>
      </div>
      <div class="ClassEvent-content-item">
        <div class="ClassEvent-content-item-imges">
          <img src="../../static/img/ClassEvent.jpg" style="width:100%; height: auto;" alt="">
        </div>
        <div class="ClassEvent-content-item-info">
          <p>班级新鲜事</p>
          <p style="font-size: 1.3rem;color: #919191">{{currentDate}}</p>
        </div>
      </div>
      <div class="ClassEvent-content-item">
        <div class="ClassEvent-content-item-imges">
          <img src="../../static/img/ClassEvent.jpg" style="width:100%; height: auto;" alt="">
        </div>
        <div class="ClassEvent-content-item-info">
          <p>班级新鲜事</p>
          <p style="font-size: 1.3rem;color: #919191">{{currentDate}}</p>
        </div>
      </div>
      <div class="ClassEvent-content-item">
        <div class="ClassEvent-content-item-imges">
          <img src="../../static/img/ClassEvent.jpg" style="width:100%; height: auto;" alt="">
        </div>
        <div class="ClassEvent-content-item-info">
          <p>班级新鲜事</p>
          <i style="font-size: 1.3rem;color: #919191">{{currentDate}}</i>
        </div>
      </div>
      <div class="ClassEvent-content-item">
        <div class="ClassEvent-content-item-imges">
          <img src="../../static/img/ClassEvent.jpg" style="width:100%; height: auto;" alt="">
        </div>
        <div class="ClassEvent-content-item-info">
          <p>班级新鲜事</p>
          <p style="font-size: 1.3rem;color: #919191">{{currentDate}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {Header} from 'mint-ui';

  export default {
    name: "ClassEvent",
    data() {
      return {
        currentDate: '2017-1-1'
      };
    }
  }
</script>

<style scoped>
  .ClassEvent-header {
    background-color: #B3C0D1;
    font-size: 1.6rem;
    width: 100%;
    height: 50px;
  }

  .ClassEvent-content-item {
    float: left;
    margin-top: 10px;
    margin-left: 15px;
    width: 156px;
    height: 200px;
    -moz-box-shadow: 0px 5px 8px #a8a8a8;
    -webkit-box-shadow: 0px 5px 8px #a8a8a8;
    box-shadow: 0px 5px 8px #a8a8a8;
    border-radius: 5px;
    overflow: hidden;
  }

  .ClassEvent-content {
    width: 100%;
    padding-top: 5px;
    height: 580px;
    overflow: scroll;
  }

  .ClassEvent-content-item-imges{
    width: 100%;
    height: 130px;
    overflow: hidden;
  }

  .ClassEvent-content-item-info {
    opacity: ;
    width: 100%;
    height: 70px;
    background-color: white;
    text-align: center;
  }
  .ClassEvent-content-item-info p{
    font-size: 1.4rem;
    line-height: 2.8rem;
    color: #404040;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
