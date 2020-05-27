import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import passwordKeybord from './lib/index.js'
import './assets/icon.js'
Vue.use(passwordKeybord)
new Vue({
  render: h => h(App),
}).$mount('#app')
