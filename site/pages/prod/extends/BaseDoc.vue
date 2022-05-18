<script>
import MenuTree from "../../../components/MenuTree.vue";

export default {
  data() {
    return {
      menuProps: {
        openKeys: [],
        selectedKeys: [],
        theme: "light",
        mode: "inline",
        style: {
          width: "256px",
        },
      },
    };
  },
  watch: {
    "$route.path": "setSelectedKeys",
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const [, , openKey] = this.$route.path.split("/");
      this.onOpenChange([openKey]);
      this.setSelectedKeys();
      this.autoScrollAnchor();
    },
    autoScrollAnchor() {
      const [, anchor] = this.$route.hash.split("#");
      document.getElementById(anchor)?.scrollIntoView();
    },
    onOpenChange(openKeys) {
      console.log(this.menuProps);
      this.menuProps.openKeys = openKeys;
    },
    // onSelect ({ item, key, selectedKeys }) {
    onSelect({ selectedKeys }) {
      this.$router.push(`/${selectedKeys[0]}`);
    },
    setSelectedKeys() {
      const { path } = this.$route;
      const pathArr = path.split("/");
      const selectedKeys =
        pathArr.length === 2 ? [path.slice(1)] : [pathArr.slice(2).join("/")];
      this.menuProps.selectedKeys = selectedKeys;
    },
  },
  render() {
    const { menuProps, onOpenChange, onSelect } = this;
    return (
      <div class="preview-components-container">
        <AAffix offsetTop={64}>
          <section class="section-menu">
            <MenuTree
              {...menuProps}
              onOpenChange={onOpenChange}
              onSelect={onSelect}
              style={{ height: "100%" }}
            />
          </section>
        </AAffix>
        <section class="markdown-preview-box section-box">
          <RouterView />
        </section>
      </div>
    );
  },
};
</script>

<style lang="less">
@border-color-light: #f5f5f5;
@font-family: microsoft YaHei, Simsun;
@font-size-h1: 30px;
@font-size-h2: 24px;
@font-size-h3: 18px;
@menu-width: 360px;
.preview-components-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .section-menu {
    width: @menu-width;
    height: calc(100% - 30px);
    overflow: auto;
  }
  .section-box {
    width: calc(~"100% - @{menu-width}");
    height: 100%;
    padding: 40px 260px 100px 40px;
    border: 1px solid @border-color-light;
  }
  .external-demo-content {
    padding-bottom: 100px;
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
