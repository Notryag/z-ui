<template>
  <div class="u-checkbox" :disabled="disabled" @click="checkClick" :id="label">
    <label>
      <input type="checkbox" v-model="checkValue" :disabled="disabled" />
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'z-checkbox',
  props: {
    checked: { type: Boolean, default: false },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    modelValue: {
      type: [Boolean, Number, String],
      default: () => undefined,
    },
  },
  emits: ['update:modelValue', 'change', 'check'],
  setup: (props, { emit }) => {
    const checkClick = () => {
      if (props.disabled) return
      checkValue = !checkValue

    }
    let checkValue = computed({
      get() {
        return props.modelValue
      },
      set() {
        emit('check', checkValue)
        emit('update:modelValue', checkValue)
        emit('change', checkValue)
      }
    })

    return { checkValue, checkClick }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/css/vars.scss";

.u-checkbox {
  display: inline-block;
  user-select: none;

  &[disabled="true"] {
    cursor: not-allowed;
    color: $disabled-color;
  }

  input {
    margin-right: 8px;
  }
}
</style>
