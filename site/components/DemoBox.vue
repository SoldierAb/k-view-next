<template>
  <div class="demo-box-container">
    <div class="demo-instance">
      <slot name="instance" />
    </div>
    <div
      :style="{ height: isShow ? `${codeBlockHeight}px` : '0' }"
      class="demo-content"
    >
      <div ref="code-block">
        <slot name="code-box" />
      </div>
    </div>
    <div
      :class="['demo-block-control', isShow ? '' : 'none-top-border']"
      @click="flodBtnInfo.clickCb"
    >
      <em :class="flodBtnInfo.iconClass"/>
      <span class="text">{{ flodBtnInfo.text }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, computed, onMounted, defineComponent } from "vue";

export default defineComponent({
  name: "DemoBox",
  setup() {
    const codeBlockRef = ref(null);
    const codeBlockHeight = ref(0);
    const isShow = ref(false);
    const flodCode = () => {
      isShow.value = !isShow.value;
    };
    const flodBtnInfo = computed(() => {
      const flodBtnMap = {
        true: {
          text: "隐藏代码",
          iconClass: "el-icon-caret-top",
          clickCb: flodCode,
        },
        false: {
          text: "显示代码",
          iconClass: "el-icon-caret-bottom",
          clickCb: flodCode,
        },
      };
      return flodBtnMap[`${isShow.value}`];
    });
    onMounted(() => {
      // codeBlockHeight.value = codeBlockRef.value?.$el?clientHeight + 40;
      codeBlockHeight.value = 40;
    });

    return {
      codeBlockRef,
      flodBtnInfo,
    };
  },
});
</script>

<style lang="less">
.demo-box-container {
  height: auto;
  border: 1 px solid #ebebeb;
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
    border-top: 1 px solid #eaeefb;
    overflow: hidden;
    border: 1px solid #ebedf0;
    border-radius: 2px;
    width: 100%;
    position: relative;
    transition: height 0.5s;
  }

  .demo-instance {
    .demo-box;
    background-color: #fff;
    padding: 16px 24px;
    border-bottom: 0;
  }
  .demo-content {
    .demo-box;
    background-color: #f8f8f8;
  }
}
.demo-block-control {
  border: 1px solid #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
  i {
    font-size: 16px;
    line-height: 44px;
    transition: 0.3s;
  }
  text {
    line-height: 44px;
  }
  .text {
    display: none;
    transition: 0.3s;
    margin-right: 8px;
  }
  &:hover {
    color: #409eff;
    background-color: #f9fafc;
    i {
      transform: translateX(-10px);
    }
    .text {
      display: inline-block;
      // transform: translateX(-20px);
    }
  }
  &.none-top-border {
    border-top: 0;
  }
}
</style>
