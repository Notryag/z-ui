<template>
  <label class="z-radio">
    <input v-model="model" :value="label" @change="handleChange" ref="radioRef" type="radio" /> <slot>{{ label }}</slot>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
const UPDATE_MODEL_EVENT = 'update:modelValue'
export default defineComponent({
  name: 'z-radio',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
  },
  setup(props, { emit }) {
    const radioRef = ref()
    const model = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        emit(UPDATE_MODEL_EVENT, val)
        radioRef.value.checked = props.modelValue === props.label
      },
    })
    const handleChange = (): void => {
      nextTick(() => {
        emit('change', model.value)
      })
    }
    return {  model, radioRef, handleChange }
  },
})
</script>

<style lang="scss">
$disabled-color: #c4ccd8;
.z-radio {
  display: inline-block;
  user-select: none;

  &[disabled] {
    cursor: not-allowed;
    color: $disabled-color;
  }

  input {
    margin-right: 8px;
  }
}
</style>
