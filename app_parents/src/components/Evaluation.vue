<template>
  <!--量化评价-->
  <div>
    <mt-header class="Evaluation-header" title="量化评价">
      <router-link to="/Task" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div id="myChart" class="myChart"></div>
  </div>

</template>

<script>
  import { Header } from 'mint-ui';
  export default {
    name: "Evaluation",
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption( {
          title: {
            //这里是图表标题
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: { },
          radar: [
            {
              indicator: [
                {text: '及格率', max: 100},
                {text: '出勤率', max: 100},
                {text: '及格率', max: 100},
                {text: '及格率', max: 100},
                {text: '写博客', max: 100}
              ],
              radius: 80,
              center: ['50%','50%'],
            },
          ],
          series: [
            {
              type: 'radar',
              tooltip: {
              },
              data: [
                {
                  value: [60,60,73,85,70],
                 // name: '某同学'
                }
              ]
            },
          ]
        });
      }
    }
  }
</script>

<style scoped>
  .Evaluation-header {
    background-color: #B3C0D1;
    font-size: 1.6rem;
    width: 100%;
    height: 50px;
  }
  .myChart {
    width: 100%;
    height: 300px;
    background-color: #fdfdfd;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
