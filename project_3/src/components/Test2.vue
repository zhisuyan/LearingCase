<script setup>
import 'animate.css';
import { ref } from 'vue';

let isShow = ref(true);
</script>

<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__jello"
      leave-active-class="animate__heartBeat">
      <h1 v-show="isShow" key="1">你好啊!</h1>
      <h1 v-show="isShow" key="2">Zhisuyan0909</h1>
    </transition-group>
  </div>
</template>

<style scoped>
h1 {
  background-color: orange;
}
</style>
