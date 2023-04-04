<template>
  <label class="z-radio">
    <input
      v-model="model"
      :value="label"
      @change="handleChange"
      ref="radioRef"
      type="radio"
    />
    <slot>{{ label }}</slot>
  </label>
</template>

<script lang="ts">
const UPDATE_MODEL_EVENT = 'update:modelValue'

export default {
  name: 'ZRadio',
}
</script>

<script lang="ts" setup>
import { computed, inject, nextTick, ref } from 'vue'
import { radioEmits, radioProps } from './radio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const radioGroup: any = inject('ZRadioGroup')
const isGroup = computed(() => radioGroup?.name === 'ZRadioGroup')

const radioRef = ref<HTMLInputElement>()

const model = computed({
  get() {
    return isGroup.value ? radioGroup.modelValue : props.modelValue
  },
  set(val) {
    if (isGroup.value) {
      radioGroup.changeEvent(val)
    } else {
      emit('UPDATE_MODEL_EVENT', val)
    }
    radioRef.value!.checked = props.modelValue === props.label
  },
})

const handleChange = (): void => {
  nextTick(() => {
    emit('change', model.value)
  })
}
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
