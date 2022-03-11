import type { ExtractPropTypes, PropType } from 'vue'
import { ButtonLocale } from '../button/button'


export interface  Locale {
    Button: ButtonLocale
}


const configProviderProps = {
    getPrefixCls: {
        // 组件后缀，自定义前缀
        type: Function as PropType<(suffix?: string, customizePrefix?: string)=> string> 
    },
    locale: {
        type: Object as PropType<Locale>
    }
}


export type ConfigProviderProps = Partial<ExtractPropTypes<typeof configProviderProps>>


export default configProviderProps