<template>
  <Zform> </Zform>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Zform from './examples/form.vue'

export default defineComponent({
  name: 'App',
  components: {
    Zform,
  },
  setup(props) {

  },
})
</script>

<style lang="scss">
@import './assets/css/vars.scss'

</style>
