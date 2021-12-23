import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: {
      login: '这是哪个页面啊？',
      computeds: '1',
      watchs: '2'
    }
  },
  mutations: {
    login (state, page) {
      state.page.login = page
    },
    watchs (state, page) {
      state.page.watchs = page
    },
    computeds (state, page) {
      state.page.computeds = page
    }
  },
  actions: {
  },
  modules: {
  }
})
