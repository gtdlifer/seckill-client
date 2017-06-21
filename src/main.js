// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import bus from './bus'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$bus = bus
Vue.prototype.$api = axios.create({
  baseURL: `http://${location.hostname}:3000/`,
  timeout: 1000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
