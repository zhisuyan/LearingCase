import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Message from '../views/Message.vue';
import Detail from '../views/Detail.vue';

const routes = [
  {
    path: '/about',
    component: About,
    meta: { title: '关于' },
  },
  {
    path: '/home',
    component: Home,
    meta: { title: '主页' },
    children: [
      {
        path: 'news',
        component: News,
        meta: { isAuth: true, title: '新闻' },
        beforeEnter: (to, from, next) => {
          // console.log('独享路由守卫', to, from);
          if (to.meta.isAuth) {
            //判断是否需要鉴权
            if (localStorage.getItem('school') === 'bili') {
              next();
            } else {
              alert('学校名不对，无权限查看！');
            }
          } else {
            next();
          }
        },
      },
      {
        path: 'message',
        component: Message,
        meta: { isAuth: true, title: '消息' },

        children: [
          {
            path: 'detail',
            component: Detail,
            meta: { isAuth: true, title: '详情' },

            // props:{a:1,b:'hello'}
            // 值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
            // props:true

            props(route) {
              return {
                id: route.query.id,
                title: route.query.title,
                a: 1,
                b: 'hello',
              };
            },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
  // console.log('前置路由守卫', to, from);
  if (to.meta.isAuth) {
    //判断是否需要鉴权
    if (localStorage.getItem('school') === 'bili') {
      next();
    } else {
      alert('学校名不对，无权限查看！');
    }
  } else {
    next();
  }
}); */

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
  // console.log('后置路由守卫', to, from);
  document.title = to.meta.title || 'kirito';
});

export default router;
