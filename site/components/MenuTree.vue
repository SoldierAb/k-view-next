<script>
export default {
  name: 'MenuTree',
  props: {
    dataSource: {
      type: Object,
      default () {
        return {};
      },
    },
    router: {
      type: Boolean,
      default: false,
    },
    sep: {
      type: String,
      default: '/',
    },
    labelFilter: {
      type: Function,
      default: (node) => node.label,
    },
  },
  data () {
    return {
      menuData: [],
      flatData: {},
    };
  },
  computed: {
    menuProps () {
      const { $attrs, router, sep } = this;
      let { openKeys, selectedKeys, ...restAttrs } = $attrs;
      if (router) {
        const { path } = this.$route;
        const pathArr = path.split(sep);
        openKeys = pathArr.slice(0, pathArr.length - 1);
        selectedKeys = [path];
      }
      return {
          openKeys,
          selectedKeys,
          ...restAttrs,
        // on: {
        //   ...$listeners,
        // },
      };
    },
  },
  watch: {
    dataSource: 'setFlat',
  },
  created () {
    this.init();
  },
  methods: {
    init () {
      this.setFlat();
    },
    setFlat () {
      const { dataSource, sep } = this;
      const dpFn = (data, parentKey = '') =>
        Object.keys(data).reduce((prev, key) => {
          const nodeKey = `${parentKey ? parentKey + sep : ''}${key}`;
          const { label, icon, children } = data[key];
          const item = {
            label,
            icon,
            name: key,
            key: nodeKey,
          };
          if (children) {
            item.children = dpFn(children, key);
          }
          this.flatData[nodeKey] = item;
          prev.push(item);
          return prev;
        }, []);
      const menuData = dpFn(dataSource);
      this.menuData = menuData;
      return menuData;
    },
    renderSubMenu (data) {
      const { labelFilter } = this;
      const { label, icon, children, key } = data;
      return data.children
        ? (
        <ASubMenu key={key} v-slots={{
          title: <span>
            {labelFilter(data) || label}
          </span>
        }}>
          {children.map((sub) => this.renderSubMenu(sub))}
        </ASubMenu>
          )
        : (
        <AMenuItem key={key}>
          {labelFilter(data) || label}
        </AMenuItem>
          );
    },
  },
  render () {
    const { menuData, menuProps, renderSubMenu } = this;
    return (
      <AMenu {...menuProps}>
        {menuData.map((item) => renderSubMenu(item))}
      </AMenu>
    );
  },
};
// {icon ? <AIcon type={icon} /> : ''}
</script>

