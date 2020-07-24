// 1. 导入
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 2. 安装
Vue.use(Vuex)


const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 3. 将vuex挂载到vue实例上
export default store