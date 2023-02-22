<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="router.back">后退</button>
    <button @click="router.forward">前进</button>
    <button @click="router.go(2)">测试一下go</button>
  </div>
</template>

<style></style>
