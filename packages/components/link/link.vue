<template>
    <a class="z-link"  :href="href" :disabled="disabled" @click="onClick">
        <z-icon v-if="icon" :name="icon" />
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </a>
</template>

<script>
import { defineComponent, computed } from 'vue'
import ZIcon from '../icon/icon.vue'
export default defineComponent({
    name: 'ZLink',
    components: { ZIcon },
    props: {
        href: { type: String },
        disabled: { type: Boolean, default: false },
        icon: { type: String, default: '' }
    },
    emits: ['click'],
    setup(props, { emit }) {
        function onClick(e) {
            if (!props.disabled)
                emit('click', e)
        }
        return { onClick }
    }

})
</script>

<style lang="scss" scoped>
@import "../../assets/css/vars.scss";
.z-link {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    color: inherit;

    @each $name, $color in $colors {
        &[type="#{$name}"] {
            color: $color;
        }
    }

    &[disabled="disabled"] {
        cursor: not-allowed;
        color: $disabled-color;
    }

    & [class*="z-icon-"] + span {
        margin-left: 5px;
    }

    .z-icon {
        font-size: 14px;
    }
}
</style>
