<script setup>
import { useCountStore } from '@/stores/count';
import { usePersonStore } from '@/stores/person';
import { storeToRefs } from 'pinia';

const countStore = useCountStore();
const personStore = usePersonStore();
const { sum, school, subject, bigSum } = storeToRefs(countStore);
const { personList } = storeToRefs(personStore);

let n = 1;

function increment() {
  countStore.add(n);
}

function decrement() {
  countStore.sub(n);
}

function incrementOdd() {
  countStore.addOdd(n);
}

function incrementWait() {
  countStore.addWait(n);
}
</script>

<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和放大10倍后为:{{ bigSum }}</h1>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3>下方组件的总人数是:{{ personList.length }}</h3>
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
