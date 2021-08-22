<template>
  <ZButton :round="true"> 初始化 </ZButton>

  <ZInput v-model="inputValue"></ZInput>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import ZButton from './components/z-button.vue'
import ZInput from './components/input/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    ZButton,
    ZInput,
  },
  setup(props) {
    let inputValue = ref('')

    return { inputValue }
  },
})
</script>

<style>
body {
  background-color: black;
}
</style>
