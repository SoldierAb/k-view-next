import { createRouter, createWebHistory } from "vue-router";
import basic from '../../../../components/button/demos/basic.vue'
import ButtonMd from '../../../../components/button/README.zh-CN.md'
import Home from '../views/Home.vue'
// 1. 获取组件demos/* 文件
// 2. 注册组件路由+子视图（components）

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: "/components",
    name: "components",
    component: ButtonMd,
    children: [
      {
        path: 'button',
        components: {
          basic
        },
      }
    ]
  },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
