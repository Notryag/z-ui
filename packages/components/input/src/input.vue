<template>
  <div class="z-input" :class="containClass">
    <div v-if="type !== 'textarea'" class="z-input__wrapper">
      <input
        class="z-input__inner"
        v-model="model"
        v-bind="$attrs"
        @change="handleChange"
        @focus="handleFocus"
      />
    </div>
    <textarea v-else class="input"></textarea>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZInput',
}
</script>

<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue'
import { INPUT_EVENT, UPDATE_MODEL_EVENT } from '../../../constant/event'
import { inputEmits, inputProps } from './input'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const attrs = useAttrs()

const focus = ref(false)

const containClass = computed(() => {
  return {
    'is-disabled': props.disabled,
  }
})

const handleChange = (e: Event) => {
  emit('change', (e.target as TargetElement).value)
}

const handleFocus = (e: FocusEvent) => {
  focus.value = true
  emit('focus', e)
}

const model = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit(UPDATE_MODEL_EVENT, val)
    emit(INPUT_EVENT, val)
  },
})
</script>
<style lang="scss">
$input-color: #333333;
$border-color: #e6e6eb;

.z-input {
  --component-height: 32px;
  display: inline-flex;
  line-height: 14px;
  width: 100%;
  font-size: 14px;

  &.is-disabled {
    .z-input__wrapper {
      box-shadow: 0 0 0 1px #e4e7ed inset;
      background-color: #f5f7fa;
    }
    .z-input__inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #a8abb2;
      cursor: not-allowed;

      &::placeholder {
        color: #c3c4cc;
      }
    }
  }

  。 &.textarea {
    height: 200px;
  }

  .z-input__wrapper {
    box-shadow: 0 0 0 1px #dcdfe6;
    background-color: #fff;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    transition: cubic-bezier(0.23, 1, 0.32, 1);
    flex-grow: 1;
    padding: 1px 11px;
    box-sizing: border-box;
  }

  .z-input__inner {
    font-size: 14px;
    line-height: 32px;
    height: 32px;
    color: #606266;
    flex-grow: 1;
    padding: 1px 11px;
    border: none;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
}
</style>
