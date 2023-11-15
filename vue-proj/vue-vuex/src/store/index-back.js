import { createStore } from 'vuex'

const STORAGE_KEY = 'familyData';
const savedData = localStorage.getItem(STORAGE_KEY);



export default createStore({
  state: {
    families: 
    savedData ? JSON.parse(savedData):
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
})
