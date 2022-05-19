import { computed, defineComponent, toRefs } from "vue"
import buttonTypes from "./buttonTypes"
import { useLocaleReceive } from "../config-provider"
import useConfigInject from "../_hooks/useConfigInject"
import { componentNamePrefix } from "../_constants/root"

export default defineComponent({
  name: componentNamePrefix + "Button",
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
      type
    }
  },
  render() {
    const { locale, btnProps, $slots, type } = this
    const child = $slots.default?.()
    return (
      type === 'confirm'?
      <button {...btnProps}>
      {locale.OkText}
    </button>:
      <button {...btnProps}>
        {child}
      </button>
    )
  },
})
