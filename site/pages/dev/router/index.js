import { createRouter, createWebHistory } from "vue-router";


console.log(process.env.DemoPath, process.env.DemoPath === 'docs' );

/**
 * @description demo 开发预览
 * @param {*} folder
 * @returns
 */
const requireDemo = () => {
  const demosContexts = require.context(`../../../../${process.env.DemoPath}/demos`, false, /\.vue$/);
  return demosContexts.keys().reduce((prev, key) => {
    const demoName = key.replace(/(\.\/|\.vue)/g, '');
    prev.push({
      name: demoName,
      path: `/${demoName}`,
      component: demosContexts(key).default,
    });
    return prev;
  }, [
    {
      name: 'README.zh-CN.md',
      path: '/',
      component: ()=> import(`../../../../${process.env.DemoPath}/README.zh-CN.md`),
    },
    {
      name: 'README.en-US.md',
      path: '/en-US',
      component: ()=> import(`../../../../${process.env.DemoPath}/README.en-US.md`),
    },
  ]);
};

export const routes = requireDemo();

console.log(process.env.DemoPath, process.env.DemoPath === 'docs', routes );


export default function createRoutes () {
  const base = `${process.env.DemoPath}`.split('/').pop();
  return createRouter({
    history: createWebHistory(base),
    routes,
  });
}

// const routes = [
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: "/components",
//     component: ButtonMd,
//     children: [
//       {
//         path: 'button',
//         components: {
//           default: count,
//           basic
//         },
//       }
//     ]
//   },
// //   {
// //     path: "/about",
// //     name: "About",
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component: () =>
// //       import(/* webpackChunkName: "about" */ "../views/About.vue"),
// //   },
// ];

// const router = createRouter({
//   history: createWebHistory('/'),
//   routes,
// });

// export default router;
