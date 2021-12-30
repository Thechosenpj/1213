import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: {
      login: '这是哪个页面啊？',
      computeds: '1',
      watchs: '2'
    },
    sum: 0,
    pCount: 0,
    imss: '宿舍',
    proge: 'Vuex'
  },
  getters: {
    pCount (state) {
      return state.sum * 10
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
    },
    jia (state, val) {
      state.sum += val
    },
    jian (state, val) {
      console.log('jian触发了', state.sum, val)
      state.sum -= val
    }
  },
  actions: {
  },
  modules: {
  }
})
