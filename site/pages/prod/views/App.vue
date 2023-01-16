<script>
import Header from "./Header.vue";

export default {
  data() {
    return {};
  },
  render() {
    return (
      <div class="docs-container">
        <div class="preview-container">
          <div class="nav-box">
            <Header />
          </div>
          <div class="preview-contents-box">
            <RouterView />
          </div>
        </div>
      </div>
    );
  },
};
</script>

<style lang="less">
@import url("../../../theme/common.less");

@border-color-light: #f5f5f5;
@font-family: microsoft YaHei, Simsun;
@font-size-h1: 30px;
@font-size-h2: 24px;
@font-size-h3: 18px;
@nav-height: 64px;
@footer-height: 100px;
@menu-width: 360px;
.docs-container,
#app {
  height: 100%;
  width: 100%;
}
.preview-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .nav-box {
    height: @nav-height;
    z-index: 2;
    align-items: center;
    justify-content: space-between;
    padding: 0 58px;
    height: 64px;
    white-space: nowrap;
    background: #fff;
    box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);
  }
  .preview-contents-box {
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(~"100% - @{nav-height}");
  }
  .preview-components-box {
    display: flex;
    justify-content: flex-start;
    height: calc(~"100% - @{nav-height}");
  }
}
</style>
