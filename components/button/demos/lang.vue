<template>
  [<em>多语言</em>]<br/>
  <div>
  currentLang {{currentLang}}
  </div>
  <div>
  localeData: {{localeData}}
  </div>
  <k-config-provider :locale="locale">
    <k-button @click="upFn">Button</k-button>
  </k-config-provider>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup(){
    const currentLang = ref('zh-CN')
    const upFn =  ()=>{
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
      upFn,
      locale,
      localeData,
      currentLang
    }
  }
}
</script>