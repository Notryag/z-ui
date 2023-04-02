<template>
  <i
    :class="'z-icon-' + name"
    class="z-icon material-icons"
    :style="style"
    :size="size"
    :disabled="disabled"
  >{{ name }}</i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { isNumber, isString } from '../../utils/util'
import type { CSSProperties } from 'vue'
export default defineComponent({
  name: 'ZIcon',
  props: {
    name: { type: [String, Number], required: true },
    color: { type: String },
    size: { type: String }
  },
  setup(props) {
    const style = computed<CSSProperties>(() => {
      if (!props.size && !props.color) {
        return {}
      }
      let size
      if (props.size && !['s', 'l'].includes(props.size)) {
        size = props.size + 'px'
      }
      return {
        ...(props.size ? { fontSize: size } : {}),
        ...(props.color ? { color: props.color } : {}),
      } as CSSProperties
    })
    return { style }
  }
})
</script>

<style lang="scss">
@import "material-design-icons/iconfont/material-icons.css";

.z-icon {
  cursor: pointer;
  font-size: 18px;
  vertical-align: text-bottom; /* align icon and text*/

  &[size="s"] {
    font-size: 14px;
  }

  &[size="l"] {
    font-size: 24px;
  }

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
