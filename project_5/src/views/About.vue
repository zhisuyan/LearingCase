<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

// 在当前路由改变，但是该组件被复用时调用
// 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
// 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
onBeforeRouteUpdate((to, from, next) => {
  /* console.log('About--beforeRouteUpdate', to, from);
  if (to.meta.isAuth) {
    //判断是否需要鉴权
    if (localStorage.getItem('school') === 'bili') {
      next();
    } else {
      alert('学校名不对，无权限查看！');
    }
  } else {
    next();
  } */
});

//通过路由规则，离开该组件时被调用
onBeforeRouteLeave((to, from, next) => {
  // console.log('About--beforeRouteLeave', to, from);
  next();
});
</script>

<template>
  <h2>我是About的内容</h2>
</template>

<style></style>
