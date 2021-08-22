<template>
  <div class="z-col" :class="['z-col-' + span,`z-col-offset-${offset}`]" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'z-col',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const { gutter } = inject('ZRow', { gutter: { value: 0 } })
    console.log(gutter) // ref

    const style = computed(() => {
      if (gutter.value) {
        return {
          paddingLeft: gutter.value / 2 + 'px',
          paddingRight: gutter.value / 2 + 'px',
        }
      }
      return {}
    })
    return {
      style,
    }
  },
})
</script>

<style lang="scss" scoped>
.z-col {
  display: inline-block;
  box-sizing: border-box;
}

@for $i from 1 through 24 {
  .z-col-#{$i} {
    width: 100%/24 * $i;
  }
}

@for $k from 1 through 24 {
  .z-col-offset-#{$k} {
    margin-left: 100%/24*$k; 
  }
}
</style>
