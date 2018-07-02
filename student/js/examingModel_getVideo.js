/**
 * Created by Administrator on 2018/4/23/023.
 */
$(function () {
    //启动摄像头
    var video = document.getElementById('video'), vendorUrl = window.URL || window.webkitURL;
    //媒体对象
    navigator.getMedia = navigator.getUserMedia ||
        navagator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
    navigator.getMedia({
        video: true, //使用摄像头对象
        audio: false  //不适用音频
    }, function (strem) {
        console.log(strem);
        strems = strem;
        video.src = vendorUrl.createObjectURL(strem);
        video.play();
    }, function (error) {
        //error.code
        console.log(error);
        alert("相机加载失败！请重试")
    });
    $("#closeExam").click(function () {
        if (strems != null) {
            strems.getTracks()[0].stop(); //关闭摄像头
        }
        //离开全屏
        //win.leaveFullscreen();
        location.href = "statisticalTest.html";
    });
});