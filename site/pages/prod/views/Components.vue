<script>
import BaseDoc from "../extends/BaseDoc.vue";
import { menuDataSource } from "../router";

export default {
  extends: BaseDoc,
  data() {
    return {
      menuProps: {
        dataSource: menuDataSource,
        labelFilter: (node) => node.children ? node.label : `${node.label}-${node.name}`,
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
  methods: {
    onSelect({ selectedKeys }) {
      this.$router.push(`/Components/${selectedKeys[0]}`);
    },
  },
};
</script>
