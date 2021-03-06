import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './register'
import 'common/stylus/index.styl'
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  render: h => h(App)
}).$mount('#app')
