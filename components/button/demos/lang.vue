<template>
  [<em>多语言</em>]<br/>
  <div>
  本地多语言配置注入 localeData: {{localeData}}
  </div>
  <div>
  当前语言 currentLang： {{currentLang}}
  </div>
  <k-config-provider :locale="locale">
    <k-button @click="langToggle">点击切换语言-</k-button>
  </k-config-provider>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup(){
    const currentLang = ref('zh-CN')
    const langToggle =  ()=>{
      currentLang.value =  currentLang.value === 'en-US'? 'zh-CN': 'en-US'
    }
    // 多语言注入
    const localeData = {
      'zh-CN': {
        Button: {
          OkText: '确定',
          CancelText: '取消'
        }
      },
      'en-US': {
        Button: {
          OkText: 'Ok',
          CancelText: 'Cancel'
        }
      }
    }
    const locale = computed(()=>{
      return localeData[[currentLang.value]]
    })
    return {
      langToggle,
      locale,
      localeData,
      currentLang
    }
  }
}
</script>