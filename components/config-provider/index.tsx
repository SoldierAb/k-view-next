import { merge } from 'lodash'
import type { App, ComputedRef, Plugin, UnwrapRef } from "vue"
import {
  defineComponent,
  provide,
  reactive,
  inject,
  computed,
  watch,
} from "vue"
import type {
  ConfigProviderProps,
} from "./configProviderTypes"
import configProviderTypes from "./configProviderTypes"
import type { Locale } from "./localeTypes"
import { rootPrefixCls, rootProviderKey, componentNamePrefix } from '../_constants/root'
import locale from '../_locale'


export const defaultRootConfig: UnwrapRef<ConfigProviderProps> = reactive({
  prefixCls: rootPrefixCls,
  locale
})


type LocaleComponent = keyof Locale;

interface LocaleInterface {
  [key: string]: any;
}

export interface LocalReceiverCtx {
  locale?: LocaleInterface;
}

export function useLocaleReceive<T extends LocaleComponent>(
  compName: T,
): ComputedRef<Locale[T]> {
  const config = inject<LocalReceiverCtx>(
    rootProviderKey,
    defaultRootConfig as LocalReceiverCtx,
  )
  return computed<Locale[T]>(() => {
    const { locale } = config
    return locale && compName ? locale[compName] : {}
  })
}


const ConfigProvider = defineComponent({
  name: componentNamePrefix + "ConfigProvider",
  inheritAttrs: false,
  props: configProviderTypes,
  setup(props, { slots }) {
    // 全局配置数据
    const configData = reactive({
      ...merge(defaultRootConfig, props)
      // TODO: 默认属性合并
    })
    // 监听注入的全局数据
    Object.keys(props).forEach((key) => {
      watch(
        () => props[key],
        () => {
          configData[key] = props[key]
        },
      )
    })

    provide(rootProviderKey, configData)

    return () => {
      return slots.default?.()
    }
  },
})

ConfigProvider.install = (app: App) => {
  app.component(ConfigProvider.name, ConfigProvider)
  return app
}

export default ConfigProvider as typeof ConfigProvider & Plugin
