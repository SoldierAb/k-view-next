import { computed, defineComponent } from "vue";
import buttonTypes from "./buttonTypes";
import { useLocaleReceive } from "../config-provider";
import useConfigInject from "../_hooks/useConfigInject";

export interface ButtonLocale {
  OkText: string;
  CancelText: string;
}

export default defineComponent({
  name: "KButton",
  props: buttonTypes(),
  emits: ["click"],
  setup(_, { attrs, emit }) {
    // 多语言注入
    const locale = useLocaleReceive("Button");
    const handleClick = (ev: Event) => {
      if (attrs.disabled) {
        ev.preventDefault()
        return
      }
      emit("click", ev);
    };
    // 全局前缀获取
    const { prefixCls } = useConfigInject()
    const classes = computed(() => {
      const pre = prefixCls.value
      return [`${pre}-btn-container`, attrs.class]
    })
    const btnProps = {
      ...attrs,
      class: classes.value,
      onClick: handleClick,
    };
    return {
      btnProps,
      locale,
    };
  },
  render() {
    const { locale, btnProps, $slots } = this;
    const child = $slots.default?.();
    return (
      <button {...btnProps}>
        {child}
        {locale.OkText}
        {locale.CancelText}
      </button>
    );
  },
});
