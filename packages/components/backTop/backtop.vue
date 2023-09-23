<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <z-icon name="arrow_upward" size="40px" color="#FFF" />
            </div>
        </slot>
    </div>
</template>
<script>
const prefixCls = 'z-back-top'
export default {
    name: 'ZBacktop',
    props: {
        height: {
            type: Number,
            default: 400
        },
        bottom: {
            type: Number,
            default: 30
        },
        right: {
            type: Number,
            default: 30
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            backTop: false
        }
    },
    mounted() {
    },
    beforeDestroy() {
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-show`]: this.backTop
                }
            ]
        },
        styles() {
            return {
                bottom: `${this.bottom}px`,
                right: `${this.right}px`
            }
        },
        innerClasses() {
            return `${prefixCls}-inner`
        }
    },
    methods: {
        handleScroll() {
            this.backTop = window.pageYOffset >= this.height
        },
        back() {
            const sTop = document.documentElement.scrollTop || document.body.scrollTop
            this.$emit('on-click')
        }
    }
}
</script>

<style lang="scss" scoped>
$zindex-back-top: 10;
$transition-time: 0.2s;
$ease-in-out: ease-in-out;

.z-back-top {
    z-index: $zindex-back-top;
    position: fixed;
    cursor: pointer;
    display: none;

    &.z-back-top-show {
        display: block;
    }

    &-inner {
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        transition: all $transition-time $ease-in-out;

        &:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }

    i {
        color: #fff;
        font-size: 24px;
        padding: 8px 12px;
    }
}
</style>
