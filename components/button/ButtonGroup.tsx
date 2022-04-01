import { computed, defineComponent } from 'vue'
import useConfigInject from '../_hooks/useConfigInject'

export default defineComponent({
    name: 'KButtonGroup',
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
