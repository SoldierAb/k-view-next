<script>
import BaseDoc from "../extends/BaseDoc.vue";
import { documentsDataSource } from "../router";

export default {
  extends: BaseDoc,
  data() {
    return {
      menuProps: {
        dataSource: documentsDataSource,
        labelFilter: (node) => node.label,
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
      this.$router.push(`/Documents/${selectedKeys[0]}`);
    },
  },
};
</script>
