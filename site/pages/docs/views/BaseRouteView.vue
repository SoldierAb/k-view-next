<template>
  <div class="preview-components-container">
    <RouterView />
  </div>
</template>
<script>

export default {
  name: 'BaseRouteView',
  data () {
    return {
      menuProps: {
        props: {},
        attrs: {
          openKeys: [],
          selectedKeys: [],
          theme: 'light',
          mode: 'inline',
        },
      },
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.setSelectedKeys();
    },
    setSelectedKeys () {
      const { path } = this.$route;
      const pathArr = path.split('/');
      const selectedKeys = pathArr.length === 2 ? [path.slice(1)] : [pathArr.slice(2).join('/')];
      this.menuProps.attrs.selectedKeys = selectedKeys;
    },
  },
};
</script>

<style lang="less">
@border-color-light: #f5f5f5;
@font-family: microsoft YaHei, Simsun;
@font-size-h1: 30px;
@font-size-h2: 24px;
@font-size-h3: 18px;
@menu-width: 270px;
.preview-components-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
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
