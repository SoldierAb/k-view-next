<script>
export default {
  name: 'NavList',
  props: {
    nav: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    jumpAnchor (anchor) {
      let convertedAnchor = anchor.replace(/#/g, '').trim();
      convertedAnchor = convertedAnchor.match(/[a-zA-Z]+/) ? encodeURIComponent(convertedAnchor.toLowerCase().replace(/\s/, '-')) : encodeURIComponent(convertedAnchor);
      console.log('jumpAnchor: ', convertedAnchor);
      console.log('node: ', document.getElementById(convertedAnchor));
      document.getElementById(convertedAnchor)?.scrollIntoView();
    },
  },
  render () {
    const { nav, jumpAnchor } = this;
    return (
      <ul class="nav-list-container">
        {nav.map((item) => (
          <li onClick={() => jumpAnchor(item)}>{item}</li>
        ))}
      </ul>
    );
  },
};
</script>

<style lang="less">
.nav-list-container {
  position: absolute;
  right: 20px;
  top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  li{
    cursor: pointer;
  }
}
</style>
