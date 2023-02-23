import { defineStore } from 'pinia';

export const usePersonStore = defineStore('person', {
  state: () => ({
    personList: [],
  }),
  actions: {
    add_persons(value) {
      this.personList.unshift(value);
    },
  },
});
