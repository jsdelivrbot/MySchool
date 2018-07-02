<template>
    <div id="testApp">
        <mu-container>
            <mu-bottom-nav>
                <mu-bottom-nav-item title="首页" icon="home"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="通知" icon="textsms"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="" icon="add_circle"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="学校" icon="dashboard"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="我" icon="account_circle"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

<script type="text/ecmascript-6">

    //将渲染的内容导出
    export default{
        data(){
            return {}
        },
        methods: {},
        components: {}

    }
</script>

<style>
@import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';
@import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
    /**渲染内容的样式**/
#testApp .material-icons{
    font-size: 2.5rem;
}
</style>