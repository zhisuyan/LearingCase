import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  state: () => ({
    sum: 0,
    school: 'bili',
    subject: 'webDesign',
  }),
  getters: {
    bigSum: state => state.sum * 10,
  },
  actions: {
    addOdd(value) {
      if (this.sum % 2) {
        this.add(value);
      }
    },
    addWait(value) {
      setTimeout(() => {
        this.add(value);
      }, 500);
    },
    add(value) {
      this.sum += value;
    },
    sub(value) {
      this.sum -= value;
    },
  },
});
