<template>
    <div class="vizier-demo-container">
        count: {{count}}
        <v-button @click="handleClick">测试</v-button>
    </div>    
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0)
        const handleClick = () => {
            count.value += 1
        }
        return {
            count,
            handleClick
        }
    },
})
</script>

<style lang="less">
.vizier-demo-container{
    position: relative;
}
</style>
