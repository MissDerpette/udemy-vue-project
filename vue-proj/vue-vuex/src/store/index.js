import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

const STORAGE_KEY = 'familyData';
// const savedData = localStorage.getItem(STORAGE_KEY);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});


export default createStore({
  state: {
    families: 
     [
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
      // localStorage.setItem(STORAGE_KEY, JSON.stringify(state.families));
      
    },
    updateMember: (state, { index, updatedMember }) => {
      // Check if the index is within the array bounds
      if (index >= 0 && index < state.families.length) {
        state.families.splice(index, 1, updatedMember);
        // localStorage.setItem(STORAGE_KEY, JSON.stringify(state.families));
      }
    },
    deleteMember: (state, index) => {
      // Check if the index is within the array bounds
      if (index >= 0 && index < state.families.length) {
        state.families.splice(index, 1);
      }
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],

});