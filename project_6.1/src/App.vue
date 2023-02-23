<script setup>
import Category from './components/Category.vue';
</script>

<template>
  <div class="container">
    <Category title="游戏">
      <template v-slot="gamesData">
        <ul>
          <li v-for="(g, index) in gamesData.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template #slot2="{ games, text }">
        <ol>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
        <h4>{{ text }}</h4>
      </template>
    </Category>
  </div>
</template>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
