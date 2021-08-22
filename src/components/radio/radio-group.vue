<template>
  <div class="z-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, provide, reactive, toRefs } from 'vue'
const UPDATE_MODEL_EVENT = 'update:modelValue'
export default defineComponent({
  name: 'ZRadioGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
  },
  setup(props, ctx) {
    // methods
    const changeEvent = (value: any) => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }
    provide(
      'ZRadioGroup',
      reactive({
        name: 'ZRadioGroup',
        ...toRefs(props),
        changeEvent: changeEvent,
      })
    )
    return { changeEvent }
  },
})
</script>

<style lang="scss"></style>
