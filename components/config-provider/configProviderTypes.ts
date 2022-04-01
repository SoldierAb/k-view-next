import type { ExtractPropTypes, PropType } from 'vue'
import type { Locale } from './localeTypes'

// TODO: 全局注入配置
const configProviderProps = {
    prefixCls: {
        type: String,
    },
    getPrefixCls: {
        // 组件后缀，自定义前缀
        type: Function as PropType<(suffix?: string, customizePrefix?: string)=> string>, 
    },
    locale: {
        type: Object as PropType<Locale>,
    },
}


export type ConfigProviderProps = Partial<ExtractPropTypes<typeof configProviderProps>>


export default configProviderProps