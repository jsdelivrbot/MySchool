<template>
  <div id="Task">
    <div id="wrap" class="box">
      <div v-for="(list,index) in navLists" class="nav" @touchstart="reds(index)">
        <div class="aaa">
          <i>
            <i :class="[ (''+list.icon),  {'red': (changeRed == index)} ]"></i>
          </i>
          <p :class="{ red:changeRed == index}">{{list.text}}</p>
        </div>

      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        navLists: [
          {
            "text": "首页",
            "icon": "el-icon-hbl-message"
          },
          {
            "text": "组件",
            "icon": "el-icon-hbl-homepage"
          },
          {

            "icon": "el-icon-hbl-addition_fill"
          },
          {
            "text": "我们",
            "icon": "el-icon-hbl-manage"
          },
          {
            "text": "他们",
            "icon": "el-icon-hbl-people"
          }
        ],
        aa: " color: red",
        changeRed: 0
      }
    },
    methods: {
      reds: function (index) {

        if (index === 1) {

          this.$router.replace('/Personal')
        }
        this.changeRed = index;
      }
    }

  }
</script>

<style scoped>
  #Task {
    width: 100%;
    height: 1000px;
    background-color: #ffffff;
  }

  .box {
    height: 100px;
  }

  .nav {
    width: 20%;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }

  .red {
    color: red;
  }

</style>
