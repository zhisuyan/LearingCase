export default {
  namespaced: true,
  state: {
    personList: [],
  },
  mutations: {
    ADD_PERSONS(state, value) {
      state.personList.unshift(value);
    },
  },
};
