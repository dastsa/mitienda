import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numValido: false
  },
  getters:{
    getternumValido(state) {
      return state.numValido;
    },
  },
  mutations: {
    SET_isNumvalido(state, post) {
      state.numValido = post
    },
  },
  actions: {
    getValidnum({ commit }, payload) {
      if (payload == 7865470213) {
        commit('SET_isNumvalido', true) 
      }
    },
  },
  modules: {
  }
})
