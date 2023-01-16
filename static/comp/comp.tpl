import { computed, defineComponent } from "vue"
// import { useLocaleReceive } from "../config-provider"
import { componentNamePrefix } from "../_constants/root"
import useConfigInject from "../_hooks/useConfigInject"
import %lowCompName%Types from "./%lowCompName%Types"


export default defineComponent({
  name: componentNamePrefix + "%CompName%",
  props: %lowCompName%Types(),
  emits: ["click"],
  setup(props, { attrs, emit }) {
    // 多语言注入
    // const locale = useLocaleReceive("%CompName%")

    const { prefixCls } = useConfigInject()

    const classes = computed(() => {
      const pre = prefixCls.value
      return [`${pre}-%DashName%-container`, attrs.class]
    })

     const handleClick = (ev: Event) => {
      if (attrs.disabled) {
        ev.preventDefault()
        return
      }
      emit("click", ev)
    }
    
    const compProps = {
      ...attrs,
      class: classes.value,
      onClick: handleClick,
    }

    return {
      compProps,
      // locale
    }
  },
  render() {
    const { 
      // locale,
      compProps
    } = this
    return (
      <div {...compProps}>你的组件 %compName% </div>
    )
  },
})
