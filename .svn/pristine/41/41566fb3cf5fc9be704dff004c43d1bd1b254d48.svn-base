$(document).ready(function () {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    // var json = "[{\"createDate\":\"2018-05-01 14:31:45\",\"historyID\":1,\"isComplete\":1},{\"createDate\":\"2018-05-01 14:31:45\",\"historyID\":11,\"isComplete\":1}]";
    var arr = [];
    $.post("http://localhost:8080/workhistory/ByParentId.do", {"parentId": 1}, function (result) {
        for (var i = 0; i < result.length; i++) {
            var isOK = "";
            var obj = result[i];
            var data1 = new Date(obj.createDate);
            console.log(data1.getFullYear() + "年" + data1.getMonth() + "月" + data1.getDate() + "天");
            if (obj.isComplete == 0) {
                isOK = "未检查"
            } else if (obj.isComplete == 1) {
                isOK = "完成"
            } else if (obj.isComplete == 2) {
                isOK = "未完成"
            }
            arr.push({title:isOK,start:new Date(data1.getFullYear(),data1.getMonth(),data1.getDate())})
        }
        console.log(arr)
        if ($('.calendar').length > 0) {
            $('.calendar').fullCalendar({
                header: {
                    left: 'prev,next,today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                buttonText: {
                    today: '跳转到当天'
                },

                events: arr
            });
        }
    }, "json");



    // events: [
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 1),
    //     },
    //
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 3)
    //     },
    //     {
    //         title: '没课',
    //         start: new Date(y, m, 4)
    //     },
    //     {
    //         title: '没课',
    //         start: new Date(y, m, 5)
    //     },
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 6)
    //     },
    //     {
    //         title: '未完成',
    //         start: new Date(y, m, 7)
    //     },
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 8 - 1)
    //     },
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 9)
    //     },
    //     {
    //         title: '未完成',
    //         start: new Date(y, m, 10)
    //     },
    //     {
    //         title: '未完成',
    //         start: new Date(y, m, 11)
    //     },
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 12)
    //     },
    //     {
    //         title: '没课',
    //         start: new Date(y, m, 13)
    //     },
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 14)
    //     },
    //     {
    //         title: '未完成',
    //         start: new Date(y, m, 15)
    //     },
    //     {
    //         title: '没课',
    //         start: new Date(y, m, 16)
    //     },
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 17)
    //     },
    //     {
    //         title: '没课',
    //         start: new Date(y, m, 18)
    //     },
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 19)
    //     },
    //     {
    //         title: '没完成',
    //         start: new Date(y, m, 20)
    //     },
    //     {
    //         title: '完成',
    //         start: new Date(y, m, 21)
    //     },
    //     {
    //         title: '未完成',
    //         start: new Date(y, m, 22)
    //     },
    // ]

    // events: [
    //     {
    //         title: '全天事项',
    //         start: new Date(y, m, 31)
    //     },
    //     {
    //         title: '长距离项目',
    //         start: new Date(y, m, d-5),
    //         end: new Date(y, m, d-2)
    //     },
    //     {
    //         id: 999,
    //         title: '重复项目',
    //         start: new Date(y, m, d-3, 16, 0),
    //         allDay: false
    //     },
    //     {
    //         id: 999,
    //         title: '重复项目',
    //         start: new Date(y, m, d+2, 16, 0),
    //         allDay: false
    //     },
    //     {
    //         title: '会议',
    //         start: new Date(y, m, d, 10, 30),
    //         allDay: false
    //     },
    //     {
    //         title: '午餐',
    //         start: new Date(y, m, d, 12, 0),
    //         end: new Date(y, m, d, 14, 0),
    //         allDay: false
    //     },
    //     {
    //         title: '生日聚会',
    //         start: new Date(y, m, d+1, 19, 0),
    //         end: new Date(y, m, d+1, 22, 30),
    //         allDay: false
    //     },
    //     {
    //         title: '点击跳转谷歌',
    //         start: new Date(y, m, 28),
    //         end: new Date(y, m, 29),
    //         url: 'http://www.google.com/'
    //     }
    // ]

});