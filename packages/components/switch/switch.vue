<template>
  <label ref="input" :class="['z-switch', { 'z-checked': currentValue }]">
    <input ref="inputRef" v-model="currentValue" :disabled="disabled" type="checkbox" @change="handleChange" />
    <span class="button"></span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'ZSwitch',
};
</script>

<script lang="ts" setup>
import { computed, nextTick, ref } from 'vue'
import { CHANGE_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from '../../constant/event';
import { switchProps } from './switch';

const props = defineProps(switchProps)
const emit = defineEmits([UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT])

const currentValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit(UPDATE_MODEL_EVENT, value)
    emit(INPUT_EVENT, value)
  }
})

const handleChange = async () => {
  await nextTick()
  emit(CHANGE_EVENT, currentValue.value)
}
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
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
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
