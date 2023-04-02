<template>
  <div class="z-tabs-item" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
import emtter from '../../utils/emiter.ts'
export default {
  name: 'ZTabPane',
  props: {
    label: String,
    disabled: Boolean,
  },
  setup(props) {
    const { label } = props
    const { dispatch } = emtter()
    const active = inject('active')
    dispatch('props', props)

    const isShow = computed(() => {
      return active.label === label
    })

    return {
      isShow,
    }
  },
}
</script>
<style lang="scss" scoped>

</style>