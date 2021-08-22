import { defineComponent } from "vue";

<template>
  <button :class="['z-button', { 'is-round': round, 'is-circle': circle }]" @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    icon: String,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
  },
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }
    return {
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
$border-color: #e6e6eb;
$primary-color: #409eff;
.z-button {
  display: inline-block;
  position: relative;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid $border-color;
  border-radius: 4px;
  background-color: #ffffff;
  letter-spacing: 0;
  line-height: 1;

  &:hover {
    border: 1px solid $primary-color;
    color: $primary-color;
  }
}
.is-round {
  border-radius: 20px;
}
.is-circle {
  border-radius: 50%;
  padding: 10px;
}
</style>
