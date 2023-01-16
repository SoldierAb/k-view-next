<script>
import BaseDoc from '../extends/BaseDoc.vue';
import { navMenuDataSource } from '../router';

export default {
  extends: BaseDoc,
  data () {
    return {
      menuProps: {
        props: {
          dataSource: {
            CHANGELOG: navMenuDataSource.CHANGELOG,
          },
          labelFilter: (node) => node.label,
        },
      },
    };
  },
};
</script>
