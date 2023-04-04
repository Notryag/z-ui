<template>
  <div class="z-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">

export default {
  name: 'ZRadioGroup',
};
</script>

<script lang="ts" setup>
import { nextTick, provide, reactive, toRefs, useAttrs, useSlots } from 'vue'
import { CHANG_EVENT, UPDATE_MODEL_EVENT } from '../../../constant/event';

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  }
})
const emit = defineEmits([UPDATE_MODEL_EVENT, CHANG_EVENT])

const changeEvent = (value: any) => {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => {
    emit(CHANG_EVENT, value)
  })
}

provide(
  'ZRadioGroup',
  reactive({
    name: 'ZRadioGroup',
    ...toRefs(props),
    changeEvent: changeEvent,
  })
)
</script>

<style lang="scss">

</style>
