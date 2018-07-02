<template>
  <!--结业考试-->
  <el-container>
    <el-header style="height: 52px" class="Test-el-header">
      <router-link to="/Task">
        <i class="el-icon-arrow-left"></i>
        <div class="jieye-back">返回</div>
      </router-link>
      <span class="Test-el-header-title">结业考试</span>
    </el-header>
    <el-table class="el-content-table"
      :data="tableData3"
      height="575"
      :row-class-name="tableRowClassName"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="机试">
              <span>{{ props.row.ComScore }}</span>
            </el-form-item>
            <el-form-item label="笔试">
              <span>{{ props.row.WriteScore }}</span>
            </el-form-item>
            <el-form-item label="考试内容">
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
        label="是否通过">
      </el-table-column>
    </el-table>
  </el-container>

</template>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3 || rowIndex === 5 || rowIndex === 7) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '朱凯莉',
          score: '是',
          ComScore: '88',
          WriteScore: '90',
          desc: 'S1结业考试'
        }, {
          date: '2016-05-02',
          name: '张媛媛',
          score: '否',
          ComScore: '59',
          WriteScore: '90',
          desc: 'S1结业考试'
        }, {
          date: '2016-05-04',
          name: '姚国旺',
          score: '是',
          ComScore: '88',
          WriteScore: '90',
          desc: 'S1结业考试'
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
    height: 50px;
    width: 100%;
    position: fixed;
    text-align: left;
  }

  .el-content-table {
    margin-top: 60px;
  }
  a{
    text-decoration: none;
  }

  .Test-el-header-title {
    margin-left: 7rem;
    color: #f7f7f7;
    font-size: 1.6rem;
  }
  *{
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance:none;
  }
</style>
