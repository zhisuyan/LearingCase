<script setup>
import Category from './components/Category.vue';
import { reactive } from 'vue';
// const foods = reactive(['火锅', '烧烤', '小龙虾', '牛排']);
const games = reactive(['pokemon', 'csgo', 'apex', 'lol']);
/* const films = reactive([
  '《建国大业》',
  '《拆弹专家》',
  '《无间道》',
  '《霍元甲》',
]); */
</script>

<template>
  <div class="container">
    <Category title="美食">
      <template #center>
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
      </template>
      <template #footer>
        <a href="https://www.bilibili.com">更多美食</a>
      </template>
    </Category>

    <Category title="游戏">
      <template #center>
        <ul>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
      </template>
      <template #footer>
        <div class="foot">
          <a href="https://www.bilibili.com">单机游戏</a>
          <a href="https://www.bilibili.com">网络游戏</a>
        </div>
      </template>
    </Category>

    <Category title="电影">
      <template #center>
        <video
          controls
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </template>

      <template #footer>
        <div class="foot">
          <a slot="footer" href="https://www.bilibili.com">经典</a>
          <a slot="footer" href="https://www.bilibili.com">热门</a>
          <a slot="footer" href="https://www.bilibili.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
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
