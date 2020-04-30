import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      { title: 'Note 1', tasks: [{ task: 'lab1', done: false }] },
      { title: 'Note 2', tasks: [{ task: 'lab2', done: false }] },
      { title: 'Note 3', tasks: [{ task: 'lab1', done: true }, { task: 'lab2', done: false }] }
    ]
  },
  mutations: {
    addNote (state, payload) {
      state.notes.push(payload)
    },
    addNotes (state, payload) {
      state.notes = payload
    },
    updateNote (state, { note, index }) {
      state.notes[index] = note
    },
    deleteNote (state, index) {
      state.notes.splice(index, 1)
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
