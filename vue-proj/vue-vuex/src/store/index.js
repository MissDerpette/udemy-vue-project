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
    ],
    todoLists: 
    [
      "Clean sink",
      "Do laundry"
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
    },
    addList: (state, newList) => {
      state.todoLists.push(newList);
    },
    updateList: (state, { index, updatedList }) => {
      if (index >= 0 && index < state.todoLists.length) {
        state.todoLists.splice(index, 1, updatedList);
      }
    },
    deleteList: (state, index) => {
      if (index >= 0 && index < state.todoLists.length) {
        state.todoLists.splice(index, 1);
      }
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],

});