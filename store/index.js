import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cacheVersion: '',
      settings: {
        main_navi: []
      },
      mainNavTree: {}
    },
    mutations: {
      setSettings(state, settings) {
        state.settings = settings
      },
      setMainNavTree(state, mainNavTree) {
        state.mainNavTree = mainNavTree
      },
      setCacheVersion(state, version) {
        state.cacheVersion = version
      }
    },
    actions: {
      nuxtServerInit({ commit }, context) {
        return this.$storyapi
          .get(`cdn/links`, {
            version: context.version
          })
          .then(res => {
            commit('setMainNavTree', res.data.links)
          })
      },
      loadSettings({ commit }, context) {
        return this.$storyapi
          .get(`cdn/stories/settings`, {
            version: context.version
          })
          .then(res => {
            commit('setSettings', res.data.story.content)
          })
      }
    }
  })
}

export default createStore
