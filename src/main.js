import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/toast'


Vue.config.productionTip = false

Vue.use(VueLazyload, {
    loading: require('./assets/img/common/default.jpeg')
  })
  // 安装toast插件，安装后自动执行该插件的install方法
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')