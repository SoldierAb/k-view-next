<script>
import NavMenu from './NavMenu.vue';
export default {
  data () {
    return {};
  },
  methods: {
    jumpHome () {
      this.$router.push('/');
    },
  },
  render () {
    // eslint-disable-next-line no-undef
    const BaseUrl = __webpack_public_path__;
    return (
      <div class="header-container">
        <h2 onClick={this.jumpHome}>
          <a-avatar shape="square" size={46} src={`${BaseUrl}logo.svg`} />
          <span class="lib-name">K-View-Next</span>
        </h2>
        <NavMenu />
      </div>
    );
  },
};
</script>

<style lang="less">
.header-container {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .lib-name {
    color: #080e29;
    padding: 10px;
  }
  h2{
    margin: 0;
    padding: 0;
  }
  h2:hover {
    cursor: pointer;
  }
}
</style>
