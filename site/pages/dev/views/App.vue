<script>
import { defineComponent, ref } from "vue";
import { routes } from '../router';

export default defineComponent({
  setup() {
    return ()=>(
       <div class="k-view-demo-container">
        <div class="markdown-preview-box preview-content-box">
          <section class="section-box">
            <ul>
              {routes.map((item) => {
                return (
                  <li key={item.path + 1}>
                    <RouterLink to={item.path}>{item.name}</RouterLink>
                  </li>
                );
              })}
            </ul>
            <RouterView></RouterView>
          </section>
        </div>
      </div>
    )
  },
});
</script>

<style lang="less">
@import url('../../../theme/common.less');

@border-color-light: #f5f5f5;
@font-family: microsoft YaHei, Simsun;
@font-size-h1: 30px;
@font-size-h2: 24px;
@font-size-h3: 18px;
@nav-height: 64px;
@footer-height: 100px;
@menu-width: 270px;
.k-view-demo-container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .nav-box{
    height: @nav-height;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 58px;
    height: 64px;
    white-space: nowrap;
    background: #fff;
    box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);
  }
  .preview-content-box{
    padding-right: 260px;
    display: flex;
    justify-content: flex-start;
    height: calc(~"100% - @{nav-height}");
  }
  .section-menu{
    width: @menu-width;
    height: 100%;
    overflow: auto;
  }
  .section-box {
    padding: 40px;
    border: 1px solid @border-color-light;
    height: 100%;
    width: 100%;
    overflow: auto;
    .hljs {
      line-height: 1.4;
      font-size: 14px;
      padding: 18px 24px;
      -webkit-font-smoothing: auto;
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;
    }
  }
  .pre-code {
    font-family: "Lucida Console", Consolas, Monaco, "Andale Mono",
      "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
}
</style>
