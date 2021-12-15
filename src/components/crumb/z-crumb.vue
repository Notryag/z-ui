<template>
    <ul class="z-crumb">
        <slot></slot>
    </ul>
</template>

<script lang="ts">
import { defineComponent, provide, ref, onMounted } from 'vue'
export default defineComponent({
    name: 'z-crumb',
    props: {
        separator: { type: String, default: '/' }
    },
    setup(props) {
        provide('BreadcrumbKey',props)
    }
})
</script>
