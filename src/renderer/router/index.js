import Vue from 'vue';
import Router from 'vue-router';
// import login from '../views/login';
import cal from '@/components/calculator/calculator';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:{cal}
    },
    // {
    //   path: '/logined',
    //   name: 'calculator',
    //   component: {login}
    // },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
