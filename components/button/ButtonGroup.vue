<script lang="ts">
import { computed, defineComponent } from 'vue'
import useConfigInject from '../_hooks/useConfigInject'
import { componentNamePrefix } from '../_constants/root'

export default defineComponent({
    name: componentNamePrefix + 'ButtonGroup',
    setup(_, { attrs }){
        const { prefixCls } = useConfigInject()
        const classes = computed(()=>{
            return [`${prefixCls.value}-btn-group-container`]
        })
        const btnGroupProps = {
            ...attrs,
            class: classes.value,
        }
        return {
            btnGroupProps,
        }
    },
})

</script>


<template>
  <div v-bind="btnGroupProps">
    <slot />
  </div>
</template>