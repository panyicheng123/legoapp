import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false
//为Vue原型中添加$bus
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
