# checkbox


:::demo

```vue
<template>
    <z-checkboc-box v-model="val">备选项1</z-checkboc-box>

    <z-checkbox-group v-model="checkGroupVal">
      <z-checkbox label="1">备选项1</z-checkbox>
      <z-checkbox label="2">备选项2</z-checkbox>
    </z-checkbox-group>
</template>

<script setup>
import {ref} from 'vue'
const val = ref(false)
const checkGroupVal = ref([])
</script>

<style>

</style>
```