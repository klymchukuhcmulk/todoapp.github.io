import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const updateStorage = (notes) => {
  localStorage.notes = JSON.stringify(notes)
}

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    addNote (state, payload) {
      state.notes.push(payload)
      updateStorage(state.notes)
    },
    addNotes (state, payload) {
      state.notes = payload
      updateStorage(state.notes)
    },
    updateNote (state, { note, index }) {
      state.notes[index] = note
      updateStorage(state.notes)
    },
    deleteNote (state, index) {
      state.notes.splice(index, 1)
      updateStorage(state.notes)
    }
  },
  actions: {
    addNotes ({ commit }, payload) {
      commit('addNotes', payload)
    },
    addNote ({ commit }, payload) {
      commit('addNote', payload)
    },
    updateNote ({ commit }, { note, index }) {
      commit('updateNote', { note: note, index: Number(index) })
    },
    deleteNote ({ commit }, index) {
      commit('deleteNote', index)
    }
  },
  modules: {
  },
  getters: {
    notes (state) {
      return state.notes
    },
    noteByIndex (state) {
      return index => state.notes[index]
    }
  }
})
