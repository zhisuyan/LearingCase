<script setup>
import { useStore } from 'vuex';

let n = 1;
const store = useStore();

let state = store.state.count;
let getters = store.getters;

function increment() {
  store.commit('count/ADD', n);
}

function decrement() {
  store.commit('count/SUB', n);
}

function incrementOdd() {
  store.dispatch('count/addOdd', n);
}

function incrementWait() {
  store.dispatch('count/addWait', n);
}
</script>

<template>
  <div>
    <h1>当前求和为:{{ state.sum }}</h1>
    <h1>当前求和放大10倍后为:{{ getters['count/bigSum'] }}</h1>
    <h3>我在{{ state.school }},学习{{ state.subject }}</h3>
    <h3>下方组件的总人数是:{{ $store.state.person.personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数再加</button>
    <button @click="incrementWait">一会再加</button>
  </div>
</template>

<style>
button {
  margin-left: 5px;
}
</style>
