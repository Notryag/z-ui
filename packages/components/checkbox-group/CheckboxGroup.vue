<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'ZCheckboxGroup'
})
</script>
<script lang="ts" setup>
import { defineComponent, computed, provide, nextTick } from 'vue'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../constant/event'

const props = defineProps({
  checked: { type: Boolean, default: false },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  modelValue: {
    type: [Boolean, Number, String],
    default: () => undefined,
  },
})
const emit = defineEmits([UPDATE_MODEL_EVENT, CHANGE_EVENT, 'check'])

const changeEvent = async (value) => {
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  emit(CHANGE_EVENT, value)
}

let modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    changeEvent(value)
  }
})

provide('checkboxGroupContextKey', {
  modelValue,
  changeEvent
})
</script>

<style lang="scss" scoped>
@import "../../assets/css/vars.scss";

.z-checnbox--outer {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  margin-right: 2px;
}

.z-checnbox--inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);
}

.z-checnbox--inner:after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform .15s ease-in .05s;
  transform-origin: center;
}

.z-checnbox--inner.is-checked {
  background-color: #409eff;
  border-color: #409eff;
}

.z-checnbox--inner.is-checked:after {
  transform: rotate(45deg) scaleY(1);
}

.z-checnbox-native {
  opacity: 0;
  display: none;
}

.z-checnbox__label {
  margin-left: -10px;
  display: inline-block;
  line-height: 19px;
  font-size: 14px;
}

.z-checnbox {
  color: #606266;
  margin-right: 10px;
  cursor: pointer;
}
</style>
