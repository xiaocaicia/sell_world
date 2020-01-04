import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  created() {
   
  },
  mutations: {
    addN(state, step) {
      state.count += step
    }
  },
  actions: {},
  modules: {},
  methods: {
   
  },
})
