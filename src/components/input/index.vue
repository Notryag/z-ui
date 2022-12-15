<template>
  <div class="z-input" :class="containClass">
    <div v-if="type !== 'textarea'" class="z-input__wrapper">
      <input class="z-input-inner" v-model="model" v-bind="attrs" @change="handleChange" />
    </div>
    <textarea v-else class="input" v-bind="$attrs"></textarea>
  </div>
</template>

<script lang="ts">
export default {
  name: 'z-input',
};
</script>

<script lang="ts" setup>
import { computed, defineComponent, useAttrs } from 'vue'
import { CHANG_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from '../../constant/event'
import { inputProps } from './input';

const props = defineProps(inputProps)
const emit = defineEmits([UPDATE_MODEL_EVENT, INPUT_EVENT, CHANG_EVENT])

const attrs = useAttrs()
console.log(attrs.disabled, 'attrs');

const containClass = computed(() => {
  return {
    'is-disabled': props.disabled
  }
})

const handleChange = (e: Event) => {
  emit(CHANG_EVENT, e)
}

const model = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit(UPDATE_MODEL_EVENT, val)
    emit(INPUT_EVENT, val)
  }
})


</script>
<style lang="scss" scoped>
$input-color: #333333;
$border-color: #e6e6eb;

.z-input {
  --component-height: 32px;
  display: inline-flex;
  line-height: 32px;
  width: 100%;
  font-size: 32px;

  &.is-disabled {
    .z-input__wrapper {

      box-shadow: 0 0 0 1px #e4e7ed inset;
      background-color: #f5f7fa;

    }
    .z-input-inner {
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
    transition: cubic-bezier(.23, 1, .32, 1);
    flex-grow: 1;
    padding: 1px 11px;
  }

  .z-input-inner {
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
