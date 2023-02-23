<script setup>
defineProps(['title']);
</script>

<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽 -->
    <slot name="center">这里是默认值,当没有传递具体结构时会出现</slot>
    <slot name="footer">这里是默认值,当没有传递具体结构时会出现</slot>
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
