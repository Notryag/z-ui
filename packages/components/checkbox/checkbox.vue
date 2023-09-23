<template>
  <div class="u-checkbox" :disabled="disabled" :id="label">
    <label>
      <input type="checkbox" v-model="checkValue" :disabled="disabled"  @chagne="handleChange" />
      <slot>{{ label }}</slot>
    </label>
  </div>
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

.z-checkbox {
  font-family: Arial, sans-serif;
}

.z-checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.z-checkbox-input {
  display: none;
}

.z-checkbox-box {
  width: 18px;
  height: 18px;
  border: 1px solid #409EFF;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  position: relative;
}

.z-checkbox-icon {
  color: #409EFF;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.z-checkbox-text {
  font-size: 14px;
}
</style>
