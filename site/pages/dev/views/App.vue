<template>
  <div class="k-view-demo-container">
    count: {{ count }}
    <k-button @click="handleClick">测试</k-button>
    <DemoBox />
    <router-link to="/">home</router-link> | 
    <router-link to="/components/button">button</router-link>
    <router-view />
  </div>
</template>

<script>
import DemoBox from "../../../components/DemoBox.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    DemoBox,
  },
  setup() {
    const count = ref(0);
    const handleClick = () => {
      count.value += 1;
    };
    return {
      count,
      handleClick,
    };
  },
});
</script>

<style lang="less">
.k-view-demo-container {
  position: relative;
}
</style>
