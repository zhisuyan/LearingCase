<script setup>
import { nanoid } from 'nanoid';
import { useStore } from 'vuex';

let name = '';

const store = useStore();

let state = store.state.person;

function add() {
  const personObj = { id: nanoid(), name: name };
  store.commit('person/ADD_PERSONS', personObj);
  name = '';
}
</script>

<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为:{{ $store.state.count.sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in state.personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<style></style>
