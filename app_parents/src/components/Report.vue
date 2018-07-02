<template>
  <!--排行榜-->
  <div>
    <mt-header class="Report-header" title="成绩趋势">
      <router-link to="/Task" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="Report-content">
      <div id="myChart" class="myChart"></div>
      <div id="myChart1" class="myChart"></div>
    </div>

  </div>

</template>

<script>
  import { Header } from 'mint-ui';
  import echarts from 'echarts'
  export default {
    name: "Report",
    mounted(){
      this.drawLine();
      this.drawLine1();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '月考成绩' },
          tooltip: {},
          xAxis: {
            data: ["一月","二月","三月","四月","五月","六月","七月","八月"]
          },
          yAxis: {},
          series: [{
            name: '成绩',
            type: 'bar',
            data: [50, 62, 76, 83, 89, 95,96,89]
          }]
        });
      },
      drawLine1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart.setOption({
          title: { text: '月考成绩曲线图' },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ["一月","二月","三月","四月","五月","六月","七月","八月"]
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [50, 62, 76, 83, 89, 95,96,89],
            type: 'line'
          }]
        });
      }
    }
  }
</script>

<style scoped>
  .Report-header {
    background-color: #B3C0D1;
    font-size: 1.6rem;
    line-height: 3rem;
    width: 100%;
    height: 50px;
  }

  .myChart {
    width: 100%;
    height: 400px;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }

  .Report-content {
    width: 100%;
    height: 580px;
    overflow: scroll;
  }
</style>
