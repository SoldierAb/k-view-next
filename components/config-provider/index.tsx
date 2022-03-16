import type { App, ComputedRef, Plugin, UnwrapRef } from "vue";
import {
  defineComponent,
  provide,
  reactive,
  inject,
  computed,
  watch,
} from "vue";
import configProviderTypes, {
  ConfigProviderProps,
} from "./configProviderTypes";
import type { Locale } from "./localeTypes";
import { rootPrefixCls, rootProviderKey } from '../_constants/root'

export const defaultRootConfig: UnwrapRef<ConfigProviderProps> = reactive({
  prefixCls: rootPrefixCls,
});


type LocaleComponent = keyof Locale;

interface LocaleInterface {
  [key: string]: any;
}

export interface LocalReceiverCtx {
  locale?: LocaleInterface;
}

export function useLocaleReceive<T extends LocaleComponent>(
  compName: T
): ComputedRef<Locale[T]> {
  const config = inject<LocalReceiverCtx>(
    rootProviderKey,
    {} as LocalReceiverCtx
  );
  return computed<Locale[T]>(() => {
    const { locale } = config;
    return locale && compName ? locale[compName] : {};
  });
}


const ConfigProvider = defineComponent({
  name: "KConfigProvider",
  inheritAttrs: false,
  props: configProviderTypes,
  setup(props, { slots }) {
    // 全局配置数据
    const configData = reactive({
      ...defaultRootConfig,
      ...props,
    });
    // 监听注入的全局数据
    Object.keys(props).forEach((key) => {
      watch(
        () => props[key],
        () => {
          configData[key] = props[key];
        }
      );
    });

    provide(rootProviderKey, configData);

    return () => {
      return slots.default?.();
    };
  },
});

ConfigProvider.install = (app: App) => {
  app.component(ConfigProvider.name, ConfigProvider);
  return app;
};

export default ConfigProvider as typeof ConfigProvider & Plugin;
