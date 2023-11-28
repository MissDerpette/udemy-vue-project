import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

import state from '../store/state.js'
import mutations from '../store/mutations.js'
import getters from '../store/getters.js'
import actions from '../store/actions.js'

const STORAGE_KEY = 'familyData';
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});


export default createStore({
  state: state,
  getters: {
  },
  mutations: mutations,
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],

});