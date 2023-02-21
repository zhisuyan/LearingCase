<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Bus from '../bus';

let keyword = ref('');

function searchUsers() {
  Bus.emit('updateListData', {
    isFirst: false,
    isLoading: true,
    errMsg: '',
    users: [],
  });
  axios.get(`https://api.github.com/search/users?q=${keyword.value}`).then(
    response => {
      // console.log("请求成功了", response.data.items);
      // 请求成功后更新List的数据
      Bus.emit('updateListData', {
        isLoading: false,
        errMsg: '',
        users: response.data.items,
      });
    },
    error => {
      // console.log("请求失败了", error.message);
      // 请求失败后更新List的数据
      Bus.emit('updateListData', {
        isLoading: false,
        errMsg: error.message,
        users: [],
      });
    }
  );
}
</script>

<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword" />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<style></style>
