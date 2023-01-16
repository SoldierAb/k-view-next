<script>
import { ref, toRefs, computed } from 'vue'
import { useRoute } from 'vue-router'

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
  setup(props, { attrs }){
    const menuData = ref([])
    const flatData = ref([])
    const { router, sep } = toRefs(props);
    const menuProps = computed(()=>{
      let { openKeys, selectedKeys, ...restAttrs } = attrs;
      if (router) {
        const { path } = useRoute();
        const pathArr = path.split(sep);
        openKeys = pathArr.slice(0, pathArr.length - 1);
        selectedKeys = [path];
      }
      return {
        attrs: {
          openKeys,
          selectedKeys,
          ...restAttrs,
        },
        // on: {
        //   ...$listeners,
        // },
      }; 
    })
    return {
      ...toRefs(props),
      menuProps,
      menuData,
      flatData
    }
  },
  // data () {
  //   return {
  //     menuData: [],
  //     flatData: {},
  //   };
  // },
  // computed: {
  //   menuProps () {
      
  //   },
  // },
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
      console.log(menuData);
      this.menuData = menuData;
      return menuData;
    },
    renderSubMenu (data) {
      const { labelFilter } = this;
      const { label, icon, children, key } = data;
      return data.children
        ? (
        <ASubMenu key={key}>
          <span slot="title">
            {icon ? <AIcon type={icon} /> : ''}
            {labelFilter(data) || label}
          </span>
          {children.map((sub) => this.renderSubMenu(sub))}
        </ASubMenu>
          )
        : (
        <AMenuItem key={key}>
          {icon ? <AIcon type={icon} /> : ''}
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
</script>
