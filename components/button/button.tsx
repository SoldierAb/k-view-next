import { defineComponent } from 'vue'
import buttonTypes from './buttonTypes'
import { useLocaleReceiver } from '../config-provider'

export interface ButtonLocale {
    OkText: string;
    CancelText: string;
}

export default defineComponent({
    name: 'KButton',
    props: buttonTypes(),
    emits: ['click'],
    setup(_, { attrs, slots, emit }) {
        // 多语言注入
        const locale = useLocaleReceiver('Button')
        console.log('button inject locale', locale)
        const handleClick = (ev: Event) => {
            emit('click', ev)
        }
        const btnProps =  {
            ...attrs,
            class: [
                'k-btn-container',
                attrs.class,
            ],
            onClick: handleClick
        }
        const child = slots.default?.()
        return () => {
            return <button {...btnProps}>
                {child}
                {locale.value.OkText}
                {locale.value.CancelText}
            </button>
        }
    }
})