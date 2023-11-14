import { createStore } from 'vuex'

export default createStore({
  state: {
    families: [
      "Jean Andrew Fuentes",
      "Kirstine Pineda",
      "Rick Bird",
      "Freya Dog",
      "Archer Dog"
    ]
  },
  getters: {
  },
  mutations: {
    addMember: (state, newMember) => {
      state.families.push(newMember);
    }
  },
  actions: {
  },
  modules: {
  }
})
