<script setup>
import { ref } from 'vue';
let isShow = ref(true);
</script>

<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊!</h1>
    </transition>
  </div>
</template>

<style scoped>
h1 {
  background-color: orange;
}
.hello-enter-active {
  animation: anime 1s;
}

.hello-leave-active {
  animation: anime 1s reverse;
}

@keyframes anime {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
