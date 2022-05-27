<script>
import MenuTree from '../../../components/MenuTree.vue';
import { navMenuDataSource } from '../router';

export default {
  data () {
    return {
      navProps: {
        dataSource: navMenuDataSource,
        openKeys: [],
        selectedKeys: [],
        mode: 'horizontal',
        router: true,
      },
    };
  },
  watch: {
    '$route.path': 'setSelectedKeys',
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.setSelectedKeys();
    },
    onOpenChange (openKeys) {
      this.navProps.openKeys = openKeys;
    },
    onSelect ({ selectedKeys }) {
      if (['Github', 'CHANGELOG', 'Typescript'].includes(selectedKeys[0])) {
        window.open(navMenuDataSource[selectedKeys[0]].link);
        return;
      }
      console.log(`/${selectedKeys[0]}`)
      this.$router.push(`/${selectedKeys[0]}`);
    },
    setSelectedKeys () {
      const [, selectedKey] = this.$route.path.split('/');
      this.navProps.selectedKeys = selectedKey ? [selectedKey] : [];
    },
  },
  render () {
    const { navProps, onOpenChange, onSelect } = this;
    return (
      <div class="nav-menu-container">
        <MenuTree
          {...navProps}
          onOpenChange={onOpenChange}
          onSelect={onSelect}
        />
      </div>
    );
  },
};
</script>

<style lang="less">
.nav-menu-container {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ul.ant-menu-horizontal{
    height: 100%;
    border: none;
    li.ant-menu-item {
      height: 100%;
      line-height: 60px;
    }
  }
}
</style>
