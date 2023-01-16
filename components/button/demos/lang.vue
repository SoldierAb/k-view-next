<template>
  <a-alert type="warning" description="[ 多语言 ] type=&quot;confirm&quot; button 测试demo" />
  <a-alert :description="`本地多语言配置注入 localeData: ${ JSON.stringify(localeData) }`" />
  <div>当前语言 currentLang： {{ currentLang }}</div>
  <k-config-provider :locale="locale">
    <k-button
      type="confirm"
      @click="langToggle"
    >
      点击切换语言-
    </k-button>
  </k-config-provider>
</template>

<script>
import { ref, computed } from "vue"
import zhCN from "k-view-next/lib/_locale/zh-CN"
import enUS from "k-view-next/lib/_locale/en-US"

export default {
  setup() {
    const currentLang = ref("zh-CN")
    const langToggle = () => {
      currentLang.value = currentLang.value === "en-US" ? "zh-CN" : "en-US"
    }
    // 多语言注入, 此处引用组件库内置多语言配置
    const localeData = {
      "zh-CN": zhCN,
      "en-US": enUS,
    }

    const locale = computed(() => {
      return localeData[[currentLang.value]]
    })

    return {
      langToggle,
      locale,
      localeData,
      currentLang,
    }
  },
}
</script>
