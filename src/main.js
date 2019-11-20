import Vue from 'vue'
import './plugins/axios'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptor from './interceptor'
import axios from 'axios'
import { createAPI } from 'cube-ui'
import CartAnim from '@/components/CartAnim'
import create from '@/utils/create'

// 注册全局组件
createAPI(Vue, CartAnim, ['transitionend'])

Vue.prototype.$ajax= axios
Vue.prototype.$create = create

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

interceptor(app);
