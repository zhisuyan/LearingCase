<script setup>
import { useRouter } from 'vue-router';
const messageList = [
  { id: '001', title: '消息001' },
  { id: '002', title: '消息002' },
  { id: '003', title: '消息003' },
];

const router = useRouter();
function pushShow(m) {
  router.push({
    path: '/home/message/detail',
    query: {
      id: m.id,
      title: m.title,
    },
  });
}

function replaceShow(m) {
  router.replace({
    path: '/home/message/detail',
    query: {
      id: m.id,
      title: m.title,
    },
  });
}
</script>

<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }">
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<style></style>
