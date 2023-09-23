<template>
  <label class="z-checnbox">
    <span class="z-checnbox--outer">
      <span class="z-checnbox--inner" :class="{ 'is-checked': checkValue }"></span>
      <input type="checkbox" class="z-checnbox-native" :value="label" v-model="checkValue">
    </span>
    <span class="checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { UPDATE_MODEL_EVENT, CHANG_EVENT } from '../../constant/event'

export default defineComponent({
  name: 'ZCheckbox',
  props: {
    checked: { type: Boolean, default: false },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    modelValue: {
      type: [Boolean, Number, String],
      default: () => undefined,
    },
  },
  emits: [UPDATE_MODEL_EVENT, CHANG_EVENT, 'check'],
  setup: (props, { emit }) => {

    const handleChange = () => {
      if (props.disabled) return
      emit(CHANG_EVENT, checkValue.value)
    }

    let checkValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        console.log(val, 'check val');
        emit(UPDATE_MODEL_EVENT, val)
      }
    })

    return { checkValue, handleChange }
  }
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
  // font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
}
</style>
