<template>
  <div :class="['u-input']">
    <input v-if="type !== 'textarea'" class="input" v-bind="$attrs" @input="handleInput" type="text" />
    <textarea v-else class="input" v-bind="$attrs"  ></textarea>
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
<style lang="scss" scoped>
$component-height: 32px;
$input-color: #333333;
$border-color: #e6e6eb;
.u-input {
  display: inline-block;
  width: 300px;
  height: $component-height;
  &.textarea {
    height: 200px;
  }
  .input {
    width:100%;
    height: 100%;
    font-size: 14px;
    color:  $input-color;
    padding: 6px 10px;
    border: 1px solid $border-color;
    border-radius: 2px;
  }

}
 
  
</style>
