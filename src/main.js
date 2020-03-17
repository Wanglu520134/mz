import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import '@/util/filter' // 引入过滤器

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App) // app 跟组件
}).$mount('#app')
