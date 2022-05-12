import '../../../scripts/version';
import { createApp, nextTick } from 'vue';
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import { routes } from './router';
import App from './views/App.vue';
import core from "../../core";
import './public-path';

const packageName = require('../../../package.json').name;

let instance = null;
let router = null;

function render () {
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  // 运行在主应用中时，添加路由命名空间 /vue
  const routeBase = window.__POWERED_BY_QIANKUN__ ? `/${packageName}` : '/'
  router = createRouter({
    history: process.env.VUE_APP_MODE === 'UMD_PREVIEW' ? createWebHashHistory(routeBase): createWebHistory(routeBase),
    // history:  createWebHashHistory(routeBase),
    routes
  })

  router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '';
    next();
  });

  router.afterEach(async () =>{
    window.scrollTo(0, 0);
    await nextTick()
    document.querySelectorAll("pre code").forEach((block) => {
      // eslint-disable-next-line no-undef
      hljs.highlightBlock(block);
    });
  });

  instance = createApp(App)

  console.log(instance)

  core(instance).use(router).mount('#app');
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap () {
  console.log('VueMicroApp bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount (props) {
  console.log('VueMicroApp mount', props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount () {
  console.log('VueMicroApp unmount');
  instance.$destroy();
  instance = null;
  router = null;
}
