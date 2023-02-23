<script setup>
import { reactive } from 'vue';
defineProps(['title']);
const games = reactive(['pokemon', 'csgo', 'apex', 'lol']);
</script>

<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽 -->
    <slot :games="games"></slot>
    <slot :games="games" text="This are some text." name="slot2"></slot>
  </div>
</template>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}

img {
  width: 100%;
}
</style>
