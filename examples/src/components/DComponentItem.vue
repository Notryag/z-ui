<template>
    <div class="z-demo-item">
        <p class="c-title">
            <span class="name">
                {{ name }}
            </span>
            <span class="desc">{{ desc }}</span>
        </p>
        <div class="c-content" v-bind="$attrs">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    name: { type: String, default: '' },
    desc: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.z-demo-item {
    position: relative;

    .c-title {
        font-size: 28px;
        padding-left: 15px;
        position: relative;

        .name {
            &::after {
                content: '';
                position: absolute;
                background-color: lightcoral;
                left: 0;
                top: 8px;
                height: 60%;
                width: 4px;
            }
        }


        .desc {
            margin-left: 10px;
            font-size: 18px;
        }
    }

    .c-content>* {
        margin: 0 5px;
    }
}
</style>
