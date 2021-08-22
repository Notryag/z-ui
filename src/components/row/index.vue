<template>
  <div class="z-row" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'

export default defineComponent({
  name: 'z-row',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const gutter = computed(() => props.gutter)
    provide('ZRow', {
      gutter,
    })
    const style = computed(() => {
      if (props.gutter === 0) {
        return ''
      }
      const value = -(props.gutter / 2) + 'px'
      return {
        marginLeft: value,
        marginRight: value,
      }
    })
    return { style }
  },
})
</script>

<style lang="scss" scoped>
.z-row {
  box-sizing: border-box;
}
</style>
