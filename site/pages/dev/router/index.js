import { createRouter, createWebHistory } from "vue-router";

/**
 * @description demo 开发预览
 * @param {*} folder
 * @returns
 */
const requireDemo = () => {
  // md文件基础路由
  const entryMdRoutes = [
    {
      name: "README.zh-CN.md",
      path: "/",
      component: () =>
        import(`../../../../${process.env.DemoPath}/README.zh-CN.md`),
      children: [{
        path: '/',
        components: {}
      }],
    },
    {
      name: "README.en-US.md",
      path: "/en-US",
      component: () =>
        import(`../../../../${process.env.DemoPath}/README.en-US.md`),
      children: [{
        path: '/en-US',
        components: {}
      }],
    },
  ];
  // demos 组件批量注册
  const demosContexts = require.context(
    `../../../../${process.env.DemoPath}/demos`,
    false,
    /\.vue$/
  );
  return demosContexts.keys().reduce((prev, key) => {
    const demoName = key.replace(/(\.\/|\.vue)/g, "");
    prev.push({
      name: demoName,
      path: `/${demoName}`,
      component: demosContexts(key).default,
    });
    // 路由子视图注入
    prev[0].children[0].components[demoName === "basic" ? "default" : demoName] =
    prev[1].children[0].components[demoName === "basic" ? "default" : demoName] =
    demosContexts(key).default;
    return prev;
  }, entryMdRoutes);
};

export const routes = requireDemo();

export default function createRoutes() {
  const base = `${process.env.DemoPath}`.split("/").pop();
  return createRouter({
    history: createWebHistory(base),
    routes,
  });
}
