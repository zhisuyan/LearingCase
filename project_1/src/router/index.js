import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 设置全路由兜底配置，一般用户错误页面
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: { title: '404' },
      component: () => import('@/views/common/NotFound.vue'),
    },
  ],
});

export default router;
