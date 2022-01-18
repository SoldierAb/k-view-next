import { defineComponent } from 'vue'
import buttonTypes from './buttonTypes'

export default defineComponent({
    name: 'KButton',
    props: buttonTypes(),
    emits: ['click'],
    setup(props, { attrs, emit }) {
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
        return ()=> {
            const { type } = props
            return <button {...btnProps}>{type}-按钮</button>
        }
    }
})