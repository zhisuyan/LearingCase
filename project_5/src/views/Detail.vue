<script setup>
import { useRoute } from 'vue-router';

const props = defineProps(['id', 'title']);

const route = useRoute();
</script>

<template>
  <ul>
    <!-- <li>消息编号：{{ route.query.id }}</li>
    <li>消息标题：{{ route.query.title }}</li> -->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<style></style>
