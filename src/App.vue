<template>
  <ZRadioGroup v-model="radio">
    <ZRadio label="1">备选项 </ZRadio>
    <ZRadio label="2">备选项 </ZRadio>
  </ZRadioGroup>

  {{ radio }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import ZButton from './components/z-button.vue'
import ZInput from './components/input/index.vue'
import ZSwitch from './components/switch/index.vue'
import ZRow from './components/row/index.vue'
import ZCol from './components/col/index.vue'
import ZRadio from './components/radio/radio.vue'
import ZRadioGroup from './components/radio/radio-group.vue'

export default defineComponent({
  name: 'App',
  components: {
    ZButton,
    ZInput,
    ZSwitch,
    ZRow,
    ZCol,
    ZRadio,
    ZRadioGroup,
  },
  setup(props) {
    let radio = ref('')
    return { radio }
  },
})
</script>

<style>
/* body {
  background-color: black;
} */
</style>
