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
    odd (context, val) {
      console.log('为奇数时在加')
      if (context.state.sum % 2) {
        context.commit('jia', val)
      } else {
        alert('傻子，这是偶数')
      }
    },
    stop (context, val) {
      console.log('等等再加')
      setTimeout(() => {
        context.commit('jia', val)
      }, 1000)
    }
  },
  modules: {
  }
})
