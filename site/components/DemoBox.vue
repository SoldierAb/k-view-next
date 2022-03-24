<template>
  <div class="demo-box-container">
    <div class="demo-instance">
      <slot name="instance" />
    </div>
    <div
      class="demo-content"
      :style="`height: ${isShow ? codeBlockHeight : 0}px`"
    >
      <div ref="codeBlockRef">
        <slot name="code" />
      </div>
      <slot name="copy" />
    </div>
    <div class="act-btns">
      <code-outlined @click="flodCode" />
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted, defineComponent } from "vue";
import { CodeOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "DemoBox",
  components: {
    CodeOutlined,
  },
  setup() {
    const codeBlockRef = ref(null);
    const codeBlockHeight = ref(0);
    const isShow = ref(false);
    const flodCode = () => {
      isShow.value = !isShow.value;
    };
    onMounted(() => {
      codeBlockHeight.value = codeBlockRef.value?.clientHeight ?? + 40;
    });

    return {
      isShow,
      flodCode,
      codeBlockRef,
      codeBlockHeight,
    };
  },
});
</script>

<style lang="less">
@border-color: #ebebeb;
.demo-box-container {
  height: auto;
  border: 1px solid @border-color;
  border-radius: 3 px;
  transition: 0.2s;
  margin: 10px 0;
  &:hover {
    box-shadow: 0 0 8px 0 #f0f0f0;
  }
  .hover-pointer {
    &:hover {
      cursor: pointer;
    }
  }
  .clipboard-btn {
    font-size: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    .hover-pointer;
  }
  .demo-box-hover {
    &:hover {
      box-shadow: 0 0 10px #ccc;
    }
  }
  .demo-nav {
    position: absolute;
    right: 20px;
    top: 100px;
  }

  .demo-box {
    overflow: hidden;
    border: 1px solid @border-color;
    width: 100%;
    position: relative;
    transition: height 0.5s;
  }

  .demo-instance {
    .demo-box;
    background-color: #fff;
    padding: 16px 24px;
    border-bottom: 1px solid @border-color;
  }
  .demo-content {
    .demo-box;
    border-top: none;
    border-bottom: none;
    background-color: #f8f8f8;
  }
}
.act-btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 44px;
  line-height: 44px;
  padding: 0 20px;
  border: 1px solid @border-color;
  background-color: #fff;
  cursor: pointer;
}
</style>
