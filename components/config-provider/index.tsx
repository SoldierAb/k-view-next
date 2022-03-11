import type { ComputedRef, Plugin } from 'vue'
import { defineComponent, provide, reactive, inject, computed } from 'vue'
import configProviderTypes, { Locale } from './configProviderTypes';

const ConfigProvider = defineComponent({
    name: 'KConfigProvider',
    inheritAttrs: false,
    props: configProviderTypes,
    setup (props, { slots }){
        // 多语言注入
        const localeData = reactive({
            localeData: props.locale
        })
        provide('config', {
            localeData
        })

        // 全局前缀注入
        

        return ()=> {
            return slots.default?.();
        }
    }
})


type LocaleComponent = keyof Locale

interface LocaleInterface {
    [key: string]: any;
}

export interface LocalReceiverCtx {
    localeData?: LocaleInterface;
}

export function useLocaleReceiver<T extends LocaleComponent>(
    compName: T
): ComputedRef<Locale[T]> {
    const config = inject<LocalReceiverCtx>('config', {} as LocalReceiverCtx)
    return computed<Locale[T]>(() => {
        const { localeData } = config
        return localeData && compName ? localeData[compName] : {}
    })
}


export default ConfigProvider as typeof ConfigProvider & Plugin