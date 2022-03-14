import type { App, ComputedRef, Plugin } from "vue";
import {
  defineComponent,
  provide,
  reactive,
  inject,
  computed,
  watch,
} from "vue";
import configProviderTypes from "./configProviderTypes";
import type { Locale } from './localeTypes'

const ConfigProvider = defineComponent({
  name: "KConfigProvider",
  inheritAttrs: false,
  props: configProviderTypes,
  setup(props, { slots }) {
    // 多语言注入
    const configData = reactive({
      ...props,
    });
    // TODO: 全局前缀注入

    // 监听注入的全局数据
    Object.keys(props).forEach((key) => {
      watch(
        () => props[key],
        () => {
          configData[key] = props[key];
        }
      );
    });

    provide("config", configData);

    return () => {
      return slots.default?.();
    };
  },
});

type LocaleComponent = keyof Locale;

interface LocaleInterface {
  [key: string]: any;
}

export interface LocalReceiverCtx {
  locale?: LocaleInterface;
}

export function useLocaleReceiver<T extends LocaleComponent>(
  compName: T
): ComputedRef<Locale[T]> {
  const config = inject<LocalReceiverCtx>("config", {} as LocalReceiverCtx);
  return computed<Locale[T]>(() => {
    const { locale } = config;
    return locale && compName ? locale[compName] : {};
  });
}

ConfigProvider.install = (app: App) => {
  app.component(ConfigProvider.name, ConfigProvider);
  return app;
};

export default ConfigProvider as typeof ConfigProvider & Plugin;
