import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: require('@/components/calculator/calculator')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
