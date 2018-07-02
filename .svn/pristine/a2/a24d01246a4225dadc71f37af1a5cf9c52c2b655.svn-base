<template>
  <!--孩子出勤-->
  <div>
    <mt-header class="ChildDuty-header" title="孩子出勤">
      <router-link to="/Task" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="ChildDuty-content">
      <div class="Test-date">
        <p style="color: #404040"> 选择时间段：</p>
        <div class="Test-date-item">
          <input id="startDate" onfocus="this.blur();" placeholder="请输入开始日期" type="text" @click="openPicker">--<input onfocus="this.blur();" id="endDate"
                                                                                              placeholder="请输入结束日期"
                                                                                              type="text"
                                                                                              @click="openPickerEnd">
        </div>
        <mt-datetime-picker
          ref="picker"
          type="date"
          v-model="pickerValue"
          @confirm="handleConfirm">
        </mt-datetime-picker>
        <mt-datetime-picker
          ref="picker1"
          type="date"
          v-model="pickerValueEnd"
          @confirm="handleConfirmEnd">
        </mt-datetime-picker>
      </div>
      <el-table
        :data="tableData3"
        height="510"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="100">
        </el-table-column>
        <el-table-column
          prop="morn"
          label="上午"
          width="80">
        </el-table-column>
        <el-table-column
          prop="after"
          label="下午">
        </el-table-column>
        <el-table-column
          prop="night"
          label="晚自习">
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
  import { Header } from 'mint-ui';
  export default {
    methods: {
      GMTToStr(time){
        let date = new Date(time)
        let Str=date.getFullYear() + '-' +
          (date.getMonth() + 1) + '-' +
          date.getDate()
        return Str
      },
      //时间转换
      openPicker() {
        this.$refs.picker.open();
      },
      openPickerEnd() {
        this.$refs.picker1.open();
      },
      handleConfirmEnd() {
       //console.log(this.pickerValueEnd);
       let endTime=this.GMTToStr(this.pickerValueEnd);
        document.getElementById("endDate").value = endTime;
      },
      handleConfirm() {
        let startTime=this.GMTToStr(this.pickerValue);
        document.getElementById("startDate").value = startTime;
      }
    },
    data() {
      return {
        pickerValue: '',
        pickerValueEnd: '',
        tableData3: [{
          date: '2016-05-03',
          morn: '正常',
          after: '正常',
          night:'迟到'
        }, {
          date: '2016-05-02',
          morn: '请假',
          after: '正常',
          night:'旷课'
        }, {
          date: '2016-05-04',
          morn: '正常',
          after: '正常',
          night:'迟到'
        }, {
          date: '2016-05-01',
          morn: '请假',
          after: '正常',
          night:'迟到'
        }, {
          date: '2016-05-08',
          morn: '正常',
          after: '正常',
          night:'旷课'
        }, {
          date: '2016-05-06',
          morn: '请假',
          after: '正常',
          night:'迟到'
        }, {
          date: '2016-05-07',
          morn: '正常',
          after: '旷课',
          night:'迟到'
        }, {
          date: '2016-05-07',
          morn: '正常',
          after: '正常',
          night:'迟到'
        }, {
          date: '2016-05-07',
          morn: '正常',
          after: '旷课',
          night:'迟到'
        }, {
          date: '2016-05-07',
          morn: '正常',
          after: '正常',
          night:'旷课'
        }, {
          date: '2016-05-07',
          morn: '正常',
          after: '正常',
          night:'迟到'
        }, {
          date: '2016-05-07',
          morn: '正常',
          after: '正常',
          night:'迟到'
        }, {
          date: '2016-05-07',
          morn: '正常',
          after: '正常',
          night:'迟到'
        }, {
          date: '2016-05-07',
          morn: '正常',
          after: '正常',
          night:'迟到'
        }]
      }
    }
  }
</script>

<style scoped>
  .ChildDuty-header {
    background-color: #B3C0D1;
    font-size: 1.6rem;
    width: 100%;
    height: 50px;
    line-height: 3rem;
  }

  .ChildDuty-content {
    width: 100%;
    background-color: #fefefe;
  }

  .Test-date {
    margin-top: 10px;
  }

  .Test-date p {
    text-align: center;
    font-size: 1.5rem;
  }

  .Test-date-item {
    margin-top: 7px;
    width: 100%;
    height: 40px;
    text-align: center;
  }
  input {
    width: 145px;
    height: 26px;
    text-indent: 8px;
  }
</style>
