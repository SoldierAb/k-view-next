import type { UnwrapRef, ComputedRef } from 'vue'
import { inject, computed  } from 'vue'
import { rootPrefixCls, rootProviderKey } from '../_constants/root'
import { defaultRootConfig } from '../config-provider'
import type { ConfigProviderProps } from '../config-provider/configProviderTypes'


export default (
  // compName?: string,
  // props?: Record<any, any>
): {
  prefixCls: ComputedRef<string>;
} => {
	const rootConfig = inject<UnwrapRef<ConfigProviderProps>>(rootProviderKey, defaultRootConfig)
  console.log('rootConfig' ,rootConfig)
	const prefixCls = computed(()=> {
		return rootConfig?.prefixCls || rootPrefixCls
	})
	// TODO: 其他全局属性获取
  console.log('prefixCls' ,prefixCls)
  return {
    prefixCls,
  }
}
