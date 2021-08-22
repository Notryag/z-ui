<template>
  <div :class="['u-input']">
    <input v-bind="$attrs" @input="handleInput" type="text" />
    <textarea v-bind="$attrs"  ></textarea>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from '@vue/runtime-core'
const UPDATE_MODEL_EVENT = 'update:modelValue'
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
  name: 'z-input',
  setup(props, { emit, attrs }) {
    console.log(attrs)
    
    const handleInput = (event: InputEvent | CompositionEvent | Event,) => {
      let value = (event.target as HTMLInputElement).value
      emit(UPDATE_MODEL_EVENT, value)
      emit('input', value)
    }
    return {
      handleInput,
    }
  },
})
</script>
