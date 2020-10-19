import Vue from 'vue'
import Vuex from 'vuex'
import form from './modules/form'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { form, list }
})
