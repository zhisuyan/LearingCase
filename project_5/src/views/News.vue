<script setup>
import { onBeforeUnmount, onActivated, onDeactivated, ref } from 'vue';
let opacity = ref(1);
let timer;

onBeforeUnmount(() => {
  console.log('destory!!');
});
onActivated(() => {
  console.log('News组件被激活了');
  timer = setInterval(() => {
    opacity.value -= 0.01;
    if (opacity.value <= 0) opacity.value = 1;
  }, 16);
});
onDeactivated(() => {
  console.log('News组件失活了');
  clearInterval(timer);
});
</script>

<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<style></style>
