import Vue from 'vue'
// import axios from 'axios'
// 这里是为了测试index.ejs中将node_module添加到module全局路径中的验证，只为学习，弄清楚原理
// import axios from 'E:/workproject/my-elctron/electron-demo/node_modules/axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import utils from './utils'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.use(utils);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
