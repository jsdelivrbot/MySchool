import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home/home'
import msg from '@/views/msg/msg'
import school from '@/views/school/school'
import my from '@/views/my/my'
import informDesc from '@/views/msg/inform/informDesc/informDesc'
import studentAttendance from '@/views/school/studentAttendance/studentAttendance'
import lastTest from '@/views/school/lastTest/lastTest'
import jobState from '@/views/school/jobState/jobState'
import myDesc from '@/views/my/myDesc/myDesc'
import login from '@/views/login/login'
import voluntary from '@/views/my/voluntary/voluntary'
import approve from '@/views/my/approve/approve'

import test from '@/views/test'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg,
    },
    {
      path: '/school',
      name: 'school',                   
      component: school
    },
    {
      path: '/my',
      name: 'my',                     
      component: my
    },
     {
      path: '/login',
      name: 'login',
      component:login,
    },
    //我的 编辑资料 详情页面
    {
      path: '/myDesc',
      name: 'myDesc',                     
      component: myDesc
    },
    //通知详情
    {
      path: '/informDesc',
      name: 'informDesc',
      component:informDesc,
    },
    //学员考勤
    {
      path: '/studentAttendance',
      name: 'studentAttendance',
      component:studentAttendance,
    },
    //结业考试
    {
      path: '/lastTest',
      name: 'lastTest',
      component:lastTest,
    },
    //就业情况
    {
      path: '/jobState',
      name: 'jobState',
      component:jobState,
    },
    //志愿服务
    {
      path: '/voluntary',
      name: 'voluntary',
      component:voluntary,
    },
    //我的审批
    {
      path: '/approve',
      name: 'approve',
      component:approve,
    },
    //测试
    {
      path: '/test',
      name: 'test',
      component:test,
    },
    {
      path: '/', 
      redirect: '/login'
    },
  ]
});

