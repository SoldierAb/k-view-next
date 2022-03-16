import type { UnwrapRef, ComputedRef } from 'vue'
import { inject, computed  } from 'vue'
import { rootProviderKey, defaultRootConfig, rootPrefixCls } from '../config-provider/index'
import type { ConfigProviderProps } from '../config-provider/configProviderTypes'


export default (
  // compName?: string,
  // props?: Record<any, any>
): {
  prefixCls: ComputedRef<string>;
} => {
	const rootConfig = inject<UnwrapRef<ConfigProviderProps>>(rootProviderKey, defaultRootConfig)
	const prefixCls = computed(()=> {
		return rootConfig.prefixCls || rootPrefixCls
	})
	// TODO: 其他全局属性获取
  return {
    prefixCls
  };
};
