import Vue from 'vue';
import Router from 'vue-router';
import login from '../views/login';
import cal from '../views/user-center/calculator/calculator';
import layout from '../views/layout/layout';
import viewWrap from '../views'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: '登录',
    component: login
  },
  {
    path: '/user-center',
    name: '用户中心',
    component: layout,
    redirect: '/user-center/doctor-manage/cal',
    children: [
      {
        path: 'doctor-manage',
        component: viewWrap,
        name: '医生管理',
        children: [
          // {
          //   path: 'valid-manage',
          //   component: validManage,
          //   name: '认证审核管理'
          // },
          {
            path: 'ddzy-manage',
            // component: validManage,
            name: '多点执业管理'
          },
          {
            path: 'cal',
            name: '计算器',
            component: cal
          }
        ]
      }
    ]
  },
  {
    path:'/vip-serve',
    name:'vip服务',
    component: layout,
    redirect:'/vip-serve/service-manage/package-list',
    children: [
      {
        path:'service-manage',
        component: viewWrap,
        name: '服务管理',
        children:[
          {
            path:'package-list',
            name:'套餐列表',
            component: viewWrap,
          },
          {
            path:'service-list',
            name:'服务列表',
            component: viewWrap,
          }
        ]
      },
      {
        path:'order-manage',
        name: '订单管理',
        children:[
          {
            path:'order-list',
            name:'订单列表'
          }
        ]
      },
      {
        path:'resource-manage',
        name: '资源管理',
        children:[
          {
            path:'resource-list',
            name:'资源列表'

          }
        ]
      }
    ]
  },
  {
    path:'/test',
    name:'测试',
    component:layout,
    children:[
      {
        path:'test',
        name:'测试一级菜单',
        component: viewWrap            
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default new Router({
  routes
})
