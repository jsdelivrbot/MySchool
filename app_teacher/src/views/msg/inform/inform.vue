<template>
    <div id="informApp">
            <div class="inform-content">

                  <div class="inform-content-item" v-fb  @touchstart="toInformDesc($event)">
                    <div class="inform-content-item-warpper">
                        <p class="inform-content-item-warpper-title">
                            关于清明通知
                        </p>
                        <p class="inform-content-item-warpper-context">
                            今天放假好好好玩好好好好休息
                        </p>
                    </div>
                    <div class="inform-content-item-timeAndIsNew">
                       <p class="inform-content-item-time">2018-12-12</p>
                        <!-- <p class="inform-content-item-isNew">·</p> -->
                    </div>
                </div>
                 <div class="inform-content-item" v-fb @touchstart="toInformDesc2($event)">
                    <div class="inform-content-item-warpper">
                        <p class="inform-content-item-warpper-title">
                           的通知
                        </p>
                        <p class="inform-content-item-warpper-context">
                            今天放假好好好玩好好asdfsadf休息好好玩好好休息
                        </p>
                    </div>
                    <div class="inform-content-item-timeAndIsNew">
                       <p class="inform-content-item-time">2018-12-12</p>
                        <p class="inform-content-item-isNew"></p>
                    </div>
                </div>
                 <div class="inform-content-item" v-fb>
                    <div class="inform-content-item-warpper">
                        <p class="inform-content-item-warpper-title">
                            关于清明
                        </p>
                        <p class="inform-content-item-warpper-context">
                            今天放假好好
                        </p>
                    </div>
                    <div class="inform-content-item-timeAndIsNew">
                       <p class="inform-content-item-time">2018-12-12</p>
                        <!-- <p class="inform-content-item-isNew">·</p> -->
                    </div>
                </div>
                 <div class="inform-content-item" v-fb>
                    <div class="inform-content-item-warpper">
                        <p class="inform-content-item-warpper-title">
                            关于节放假的通知
                        </p>
                        <p class="inform-content-item-warpper-context">
                            今天放
                        </p>
                    </div>
                    <div class="inform-content-item-timeAndIsNew">
                       <p class="inform-content-item-time">2018-12-12</p>
                        <p class="inform-content-item-isNew"></p>
                    </div>
                </div>
                 <div class="inform-content-item" v-fb>
                    <div class="inform-content-item-warpper">
                        <p class="inform-content-item-warpper-title">
                            关于清
                        </p>
                        <p class="inform-content-item-warpper-context">
                            今天放假好好好玩
                        </p>
                    </div>
                    <div class="inform-content-item-timeAndIsNew">
                       <p class="inform-content-item-time">2018-12-12</p>
                        <p class="inform-content-item-isNew"></p>
                    </div>
                </div>
        
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        },
        methods: {
            toInformDesc(e){
                // console.log(this.$store.state)
                this.$store.commit('updateAppBottomShow',false);
                this.$router.replace('/informDesc');
            },
            toInformDesc2(e){
                // console.log(this.$store.state)
                this.$store.commit('updateAppBottomShow',true);
            }
        },
        components: {},
        computed:{
            
        }
    }
</script>

<style scoped>
    .inform-content .inform-content-item{
        width: 100%;
        height: auto;
        padding: 12px;
        border-bottom: 1px #d8d8d8 solid;
        overflow: hidden;
        position: relative;
    }
    .inform-content .inform-content-item .inform-content-item-warpper{
        display: inline-block;
        width: 70%;
    }
    .inform-content .inform-content-item .inform-content-item-timeAndIsNew{
        display: inline-block;
        width: 25%;
        height: 4px;
    }
    .inform-content .inform-content-item .inform-content-item-warpper .inform-content-item-warpper-title{
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 30px;
    }
    .inform-content .inform-content-item .inform-content-item-warpper .inform-content-item-warpper-context{
        width: 100%;
        font-size: 1.3rem;
        color: #575757;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height: 20px;
    }
    .inform-content-item .inform-content-item-time{
        position: absolute;    
        right: 40px;
        top: 14px;
        height: 30px;
        line-height: 30px;
        color: #808080;
        font-size: 1.2rem;
    }
    .inform-content-item .inform-content-item-isNew{
        position: absolute;    
        right: 40px;
        top: 44px;
        width: 8px;
        height: 8px;
        background-color: rgb(218, 2, 2);
        -webkit-border-radius: 100%;
    }
</style>
