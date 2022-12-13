
<template>
  <button ref="buttonRef" :class="classes" @click="handleClick">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>

</template>

<script lang="tsx">
export default {
  name: 'ZButton',
};
</script>

<script lang="tsx" setup>
import { computed, ref, useSlots } from 'vue'
import { buttonProps, buttonEmits } from './button.ts'
import './button.scss'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const buttonRef = ref<HTMLButtonElement>()

const handleClick = (e: MouseEvent) => {
  emit('click', e)
}
const useButton = (props) => {
  let classes = computed(() => ({
    'z-button': true,
    'is-round': props.round,
    'is-circle': props.circle,
  }))

  return { classes }
}
const { classes } = useButton(props)
</script>
