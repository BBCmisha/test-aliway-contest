import Vue from 'vue'
import Vuex from 'vuex'
import FieldService from '@/FieldService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    influencers: [],
    sortKey: '',
    isAsc: false
  },
  mutations: {
    setInfluencers: (state, data) => {
      state.influencers = data
    },
    setSortKey: (state, data) => {
      state.sortKey = data
    },
    setAsc: (state, data) => {
      state.isAsc = data
    },
    changeAsc: state => state.isAsc = !state.isAsc
  },
  actions: {
    async fetchInfluencers({ commit }) {
      const fieldService = new FieldService()
      const influencers = await fieldService.getInfluencers()

      commit('setInfluencers', influencers)
    },
    changeSortKey({ commit }, sortKey) {
      commit('setSortKey', sortKey)
      commit('setAsc', false)
    },
    changeAsc({ commit }, ascKey) {
      if (ascKey) {
        commit('setAsc', ascKey)
      } else {
        commit('changeAsc')
      }
    }
  },
  getters: {
    getAllInfluencers: state => state.influencers,
    getCountInfluencers: state => state.influencers.length,
    getSortKey: state => state.sortKey,
    getAsc: state => state.isAsc
  }
})
