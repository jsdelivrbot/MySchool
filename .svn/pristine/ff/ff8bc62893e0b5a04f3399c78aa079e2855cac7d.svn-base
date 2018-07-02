<template>
  <div id="home">
    <p class="title_index">教师端</p>
    <div id="home-main">
      <div class="bscroll-home" ref="wrapper">
        <div class="bscroll-container-home">
          <mt-navbar v-model="classSelected">
            <mt-tab-item id="1">TCMP058</mt-tab-item>
            <mt-tab-item id="2">TCMP060</mt-tab-item>
            <mt-tab-item id="3">TCMP062</mt-tab-item>
          </mt-navbar>

          <!-- tab-container -->
          <mt-tab-container v-model="classSelected">
            <mt-tab-container-item id="1">
              <p class="home-main-mkTitle-p">班级出勤</p>
              <div class="home-main-bjkq">
                  <img src="./img/shouye_03.png" />
                  <ul class="home-main-bjkq-ft">
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb1"></div>
                      <div class="home-main-bjkq-ftx2">74%</div>
                      <div class="home-main-bjkq-ftx3">正常</div>
                    </li>
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb2"></div>
                      <div class="home-main-bjkq-ftx2">14%</div>
                      <div class="home-main-bjkq-ftx3">迟到</div>       
                    </li>
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb3"></div>
                      <div class="home-main-bjkq-ftx2">3%</div>
                      <div class="home-main-bjkq-ftx3">旷课</div>
                    </li>
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb4"></div>
                      <div class="home-main-bjkq-ftx2">3%</div>
                      <div class="home-main-bjkq-ftx3">早退</div>
                    </li>
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb5"></div>
                      <div class="home-main-bjkq-ftx2">6%</div>
                      <div class="home-main-bjkq-ftx3">请假</div>
                    </li>
                  </ul>
              </div>
              <p class="home-main-mkTitle-p">作业完成比例</p>
              <div class="zywc">
                <p class="zywc-tit">总人数&nbsp;<span>35</span></p>
                  <div class="zywc-hx"></div>
                  <div class="zywc-lt">
                    <p>26</p>
                    <div>完成</div>
                  </div>
                  <div class="zywc-sx"></div>
                  <div class="zywc-rt">
                    <p>9</p>
                    <div>未完成</div>
                  </div>
              </div>
              <!-- <p class="home-main-mkTitle-p">项目完成进度</p>
              <div class="xmmc">
                <div class="xmmc-lt">
                  <p><span>项目名称：</span>武松打虎</p>
                  <p><span>小组：</span>第一组</p>
                  <p><span>组员：</span>张三、李四、王五</p>
                </div>
                <div class="xmmc-rt">
                    <div class="m-progress">
                        <div class="progress-numb">50%</div>
                        <div class="wave" style="height: 50%"></div>
                    </div>
                </div>
              </div>
              <div class="xmmc">
                <div class="xmmc-lt">
                  <p><span>项目名称：</span>武松打虎</p>
                  <p><span>小组：</span>第一组</p>
                  <p><span>组员：</span>张三、李四、王五</p>
                </div>
                <div class="xmmc-rt">
                    <div class="m-progress">
                        <div class="progress-numb">50%</div>
                        <div class="wave" style="height: 50%"></div>
                    </div>
                </div>
              </div>
              <div class="xmmc x-foot">
                <div class="xmmc-lt">
                  <p><span>项目名称：</span>武松打虎</p>
                  <p><span>小组：</span>第一组</p>
                  <p><span>组员：</span>张三、李四、王五</p>
                </div>
                <div class="xmmc-rt">
                    <div class="m-progress">
                        <div class="progress-numb">50%</div>
                        <div class="wave" style="height: 50%"></div>
                    </div>
                </div>
              </div> -->

            </mt-tab-container-item>

            <mt-tab-container-item id="2">
              <p class="home-main-mkTitle-p">班级出勤</p>
              <div class="home-main-bjkq-no">
                <div class="bjkq-no">
                  <img src="./img/bjkq-no.png" />
                  <p>该班级今天没课哦~</p>
                </div>
              </div>
              <p class="home-main-mkTitle-p">作业完成比例</p>
              <div class="zywc">
                <p class="zywc-tit">总人数&nbsp;<span>35</span></p>
                  <div class="zywc-hx"></div>
                  <div class="zywc-lt">
                    <p>26</p>
                    <div>完成</div>
                  </div>
                  <div class="zywc-sx"></div>
                  <div class="zywc-rt">
                    <p>9</p>
                    <div>未完成</div>
                  </div>
              </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="3">
               <p class="home-main-mkTitle-p">班级出勤</p>
              <div class="home-main-bjkq">
                  <img src="./img/shouye_03.png" />
                  <ul class="home-main-bjkq-ft">
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb1"></div>
                      <div class="home-main-bjkq-ftx2">74%</div>
                      <div class="home-main-bjkq-ftx3">正常</div>
                    </li>
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb2"></div>
                      <div class="home-main-bjkq-ftx2">14%</div>
                      <div class="home-main-bjkq-ftx3">迟到</div>       
                    </li>
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb3"></div>
                      <div class="home-main-bjkq-ftx2">3%</div>
                      <div class="home-main-bjkq-ftx3">旷课</div>
                    </li>
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb4"></div>
                      <div class="home-main-bjkq-ftx2">3%</div>
                      <div class="home-main-bjkq-ftx3">早退</div>
                    </li>
                    <li class="home-main-bjkq-ftx">
                      <div class="home-main-bjkq-ftx1 toWorkb5"></div>
                      <div class="home-main-bjkq-ftx2">6%</div>
                      <div class="home-main-bjkq-ftx3">请假</div>
                    </li>
                  </ul>
              </div>
              <p class="home-main-mkTitle-p">作业完成比例</p>
              <div class="zywc">
                <p class="zywc-tit">总人数&nbsp;<span>35</span></p>
                  <div class="zywc-hx"></div>
                  <div class="zywc-lt">
                    <p>26</p>
                    <div>完成</div>
                  </div>
                  <div class="zywc-sx"></div>
                  <div class="zywc-rt">
                    <p>9</p>
                    <div>未完成</div>
                  </div>
              </div>
            </mt-tab-container-item>

          </mt-tab-container>
          
        </div>
      </div>

    </div>   
  </div>
</template>

<script scoped>
  import Bscroll from "better-scroll";
  export default {
    data() {
      return {
        classSelected:"1"
      }
    },
    methods: {

    },
    created(){},
    mounted(){
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
            bounce: true,
            momentumLimitDistance: 5,
            click:true,
            })
        });
    },
    name: 'home'
  }
</script>

<style>
@import './home.css' 
</style>
