<script>
import pkg from '../../../../package.json';
import Banner from './Banner.vue';
import Footer from './Footer.vue';

export default {
  data () {
    return {};
  },
  methods: {
    quickStart () {
      this.$router.push('/Documents');
    },
  },
  render () {
    return (
      <div class="home-container">
       <Banner />
       <div class="home-name-box">
        <h1>
          K-View-next
          <ATag style="transform: translate3d(10px,-30px,0)">v{pkg.version}</ATag>
        </h1>
        <span class="home-item-box home-description">
          <span style="margin: 0 8px; font-size: 18px">
            🚀
          </span>
          <span>
            让中后台开发更简单
          </span>
        </span>
        <span class="home-item-box">
          <KButton type="warning" onClick={this.quickStart}>快速开始</KButton>
        </span>
       </div>
       <div class="footer-box">
        <Footer />
       </div>
      </div>
    );
  },
};
</script>

<style lang="less">
.home-container {
  position: relative;
  width: 100%;
  .home-name-box{
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
      font-size: 64px;
    }
    .home-description{
      font-size: 18px;
    }
    .home-item-box{
      padding: 10px 0;
    }
    span {
      letter-spacing: 1px;
    }
  }
  .footer-box{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: fit-content;
    padding: 80px;
  }
}
</style>
