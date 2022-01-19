<template>
  <div class="vizier-demo-container">
    count: {{ count }}
    <k-button @click="handleClick">测试</k-button>
    <DemoBox />
  </div>
</template>

<script lang="ts">
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
.vizier-demo-container {
  position: relative;
}
</style>
