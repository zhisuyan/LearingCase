import { createStore } from 'vuex';
import count from './modules/count';
import person from './modules/person';

export default createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    count,
    person,
  },
});
