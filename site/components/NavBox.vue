<script>
export default {
  name: "NavBox",
  render() {
    return this.$slots.nav || "";
  },
};
</script>

<style lang="less">
.nav-box-container {
  position: absolute;
  right: 20px;
  top: 100px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
