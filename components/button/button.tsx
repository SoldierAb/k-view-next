import { defineComponent } from 'vue'
import buttonTypes from './buttonTypes'

export default defineComponent({
    name: 'KButton',
    props: buttonTypes(),
    emits: ['click'],
    setup(_, { attrs, slots, emit }) {
        const handleClick = (ev: Event) => {
            emit('click', ev)
        }
        const btnProps =  {
            ...attrs,
            class: [
                'v-btn-container',
                attrs.class,
            ],
            onClick: handleClick
        }
        const child = slots.default?.()
        return ()=> {
            return <button {...btnProps}>{child}</button>
        }
    }
})