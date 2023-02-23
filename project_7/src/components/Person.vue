<script setup>
import { nanoid } from 'nanoid';
import { useCountStore } from '@/stores/count';
import { usePersonStore } from '@/stores/person';
import { storeToRefs } from 'pinia';

const countStore = useCountStore();
const personStore = usePersonStore();
const { personList } = storeToRefs(personStore);
const { sum } = storeToRefs(countStore);

let name = '';

function add() {
  const personObj = { id: nanoid(), name: name };
  personStore.add_persons(personObj);
  name = '';
}
</script>

<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为:{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<style></style>
