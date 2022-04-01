import { computed, defineComponent, toRefs } from "vue"
import buttonTypes from "./buttonTypes"
import { useLocaleReceive } from "../config-provider"
import useConfigInject from "../_hooks/useConfigInject"

export interface ButtonLocale {
  OkText: string;
  CancelText: string;
}

export default defineComponent({
  name: "KButton",
  props: buttonTypes(),
  emits: ["click"],
  setup(props, { attrs, emit }) {
    // 多语言注入
    const locale = useLocaleReceive("Button")
    const handleClick = (ev: Event) => {
      if (attrs.disabled) {
        ev.preventDefault()
        return
      }
      emit("click", ev)
    }
    const { prefixCls } = useConfigInject()
    const { type } = toRefs(props)
    const classes = computed(() => {
      const pre = prefixCls.value
      return [`${pre}-btn-container`, `${pre}-btn-${type.value||'default'}`,attrs.class]
    })
    const btnProps = {
      ...attrs,
      class: classes.value,
      onClick: handleClick,
    }
    return {
      btnProps,
      locale,
    }
  },
  render() {
    const { locale, btnProps, $slots } = this
    const child = $slots.default?.()
    return (
      <button {...btnProps}>
        {child}
        {locale.OkText}
        {locale.CancelText}
      </button>
    )
  },
})
