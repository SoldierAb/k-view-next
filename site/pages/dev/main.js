import { createApp, nextTick } from "vue";
import App from "./views/App.vue";
import core from "../../core";
import createRoutes from "./router";

const router = createRoutes();

const app = createApp(App);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "";
  next();
});

router.afterEach(async () =>{
    window.scrollTo(0, 0);
    await nextTick()
    document.querySelectorAll("pre code").forEach((block) => {
      // eslint-disable-next-line no-undef
      hljs.highlightBlock(block);
    });
  }
);

core(app).use(router).mount("#app");

console.log(app);
