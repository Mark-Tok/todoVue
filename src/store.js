import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todo: [],
    status: '',
    check: [],
    KeyLocalCheckFalse: JSON.parse(localStorage.getItem("CheckFalse")),
    KeyLocalCheckTrue: JSON.parse(localStorage.getItem("CheckTrue")),
    ArraysCheckFalse: function () {
      let arrays = this.todo.concat(this.KeyLocalCheckFalse)
      let cleanArrays = arrays.filter(function (x) {
        return x !== undefined && x !== null;
      });
      localStorage.setItem("CheckFalse", JSON.stringify(cleanArrays));
      return cleanArrays;
    },
    ArraysCheckTrue: function () {
      let arrays = this.check.concat(this.KeyLocalCheckTrue)
      let cleanArrays = arrays.filter(function (x) {
        return x !== undefined && x !== null;
      });
      localStorage.setItem("CheckTrue", JSON.stringify(cleanArrays));
      return cleanArrays;
    },
  },
  mutations: {

    SET_STATUS(state, index) {
      state.status = index;
    },

    SET_TEXT(state, property) {
      state.status = ''
      state.todo.unshift(property)

    },

    CHECK(state, property) {
      state.check.unshift(property);
      if (state.todo.length != 0) {
        state.todo.concat(state.KeyLocalCheckFalse)
        state.todo.splice(property.id, 1)
      } else {
        state.KeyLocalCheckFalse.splice(property.id, 1)
      }
    },

    UN_CHECK(state, property) {
      state.todo.push(property);
      state.check.splice(property.id, 1)
      state.KeyLocalCheckTrue.splice(property.id, 1)
    },

    DELETE_ITEM(state, property) {
      state.todo.splice(property, 1)
      state.KeyLocalCheckFalse.splice(property, 1)
    },
  },

  getters: {
    Todo(state) {
      return state.ArraysCheckFalse();
    },
    Status(state) {
      return state.status
    },
    Check(state) {
      return state.ArraysCheckTrue();
    },
  },

  actions: {
    setStatus({
      commit
    }, payload) {
      commit('SET_STATUS', payload)
    },
    setText({
      commit
    }, payload) {
      commit('SET_TEXT', payload)
    },
    Check({
      commit
    }, payload) {
      commit('CHECK', payload)
    },
    UnCheck({
      commit
    }, payload) {
      commit('UN_CHECK', payload)
    },
    deleteItem({
      commit
    }, payload) {
      commit('DELETE_ITEM', payload)
    },
    changeItem({
      commit
    }, payload) {
      commit('CHANGE_ITEM', payload)
    },
    CheckLocal({
      commit
    }, payload) {
      commit('CHECK_LOCAL', payload)
    },
  }
})
