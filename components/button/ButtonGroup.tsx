import { computed, defineComponent } from 'vue'
import useConfigInject from '../_hooks/useConfigInject'
import { componentNamePrefix } from '../_constants/root'

export default defineComponent({
    name: componentNamePrefix + 'ButtonGroup',
    setup(_, { attrs, slots }){
        const { prefixCls } = useConfigInject()
        const classes = computed(()=>{
            return [`${prefixCls.value}-btn-group-container`]
        })
        const btnGroupProps = {
            ...attrs,
            class: classes.value,
        }
        return ()=> <div {...btnGroupProps}>{slots.default?.()}</div>
    },
})
