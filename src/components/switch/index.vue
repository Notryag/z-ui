<template>
  <label ref="input" :class="['z-switch', { 'z-checked': currentValue }]" @click="toggle">
    <span class="button"></span>
  </label>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'z-switch',
  props: {
    modelValue: {
      type: [Boolean],
      default: false,
    },
    value: {
      type: Boolean,
      defalut: false,
    },
    disable: {
      type: Boolean,
      defalut: false,
    },
  },
  emits: ['update:modelValue', 'change', 'input'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue)
    const toggle = () => {
      if (props.disable) return
      currentValue.value = !currentValue.value

      emit('update:modelValue', currentValue.value)
      emit('change', currentValue.value)
      emit('input', currentValue.value)

    }

    return { toggle, currentValue }
  },
})
</script>

<style lang="scss">
$height: 22px;
$button-size: 18px;
$disabled-color: #c4ccd8;
$primary-color: #409eff;
.z-switch {
  position: relative;
  display: inline-block;
  line-height: $height;
  height: $height;
  width: 44px;
  border-radius: 100px;
  background: $disabled-color;
  color: white;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  &.z-checked {
    background: $primary-color;

    .button {
      transition: all 0.2s ease;
      left: 24px;
    }
  }
  .button {
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 100px;
    width: $button-size;
    height: $button-size;
    background: white;
    transition: all 0.2s ease;
  }
}
</style>
