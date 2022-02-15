<script>
import { Anchor } from 'ant-design-vue';
export default {
  name: 'BaseAnchor',
  extends: Anchor,
  props: {
    getContainer: {
      type: Object,
      default () {
        return document.getElementsByClassName('markdown-preview-box')[0];
      },
    },
  },
};
</script>
