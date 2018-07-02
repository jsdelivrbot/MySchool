<template>
  <!--月考成绩-->
  <el-container>
    <el-header style="height: 52px" class="Test-el-header">
      <router-link to="/Task">
        <i class="el-icon-arrow-left"></i>
        <div class="jieye-back">返回</div>
      </router-link>
      <span class="Test-el-header-title">月考成绩</span>
    </el-header>
    <div class="Test-date">
      <p style="color: #404040"> 选择时间段：</p>
      <div class="Test-date-item">
        <input  id="startDate" onfocus="this.blur();" placeholder="请输入开始日期" type="text" @click="openPicker">--<input onfocus="this.blur();"  id="endDate"
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
      height="500"
      :row-class-name="tableRowClassName"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="考试详情">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="score"
        label="成绩">
      </el-table-column>
    </el-table>
  </el-container>

</template>

<script>
  import {DatetimePicker} from 'mint-ui';

  export default {
    methods: {
      GMTToStr(time){
        let date = new Date(time)
        let Str=date.getFullYear() + '-' +
          (date.getMonth() + 1) + '-' +
          date.getDate()
        return Str
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3 || rowIndex === 5 || rowIndex === 7) {
          return 'success-row';
        }
        return '';
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
      },

    },
    data() {
      return {
        pickerValue: '',
        pickerValueEnd: '',
        tableData3: [{
          date: '2016-05-03',
          name: '张媛媛',
          score: '88',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-02',
          name: '朱凯莉',
          score: '88',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          score: '78',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          score: '66',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          score: '88',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          score: '70',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          score: '90',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          score: '78',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          score: '48',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          score: '86',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          score: '86',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          score: '86',
          desc: '这里是日考详情'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          score: '86',
          desc: '这里是日考详情'
        }]
      }
    }
  }
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    text-align: center;
    line-height: 55px;
  }

  .Test-header {
    width: 100%;
    height: 35px;
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #ebf4e6;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-icon-arrow-left {
    color: #fdfdfd;
    font-size: 1.8rem;
  }

  .jieye-back {
    font-size: 1.6rem;
    display: inline;
    color: #fdfdfd;
  }

  .Test-el-header {
    width: 100%;
    height: 32px;
    position: fixed;
    text-align: left;
  }

  a {
    text-decoration: none;
  }

  .Test-el-header-title {
    margin-left: 7rem;
    color: #f7f7f7;
    font-size: 1.6rem;
  }

  .Test-date {
    margin-top: 70px;
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
