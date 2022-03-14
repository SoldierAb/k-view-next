<template>
  [<em>count</em>]<br/>
  count+++--> {{count}}
  <k-button @click="upFn">Default Button</k-button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const count = ref(0)
    const upFn =  ()=>{
      count.value += 1
    }
    return {
      upFn,
      count
    }
  }
}
</script>