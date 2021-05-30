<template>
    <button class="z-button" :class="dynamicClass" @click="handleClick">
        <!-- <g-icon class="loading icon" :class="iconDynamicClass" v-if="loading" name="loading" :icon-position="iconPosition"></g-icon>
        <g-icon class="icon" :class="iconDynamicClass" v-if="icon && !loading" :name="icon" :icon-position="iconPosition"></g-icon> -->
        <div class="z-button-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
import {computed} from 'vue'

export default {
    name: 'ZButton',
    props: {
        type: {
            type: String,
            required: false,
            default: '',
            validator(value) {
                return ['primary', 'success', 'warning', 'danger', 'info', 'text', ''].indexOf(value) >= 0;
            }
        },
        loading: {
            type: Boolean,
            required: false,
            default: false,
        },
        round: {
            type: Boolean,
            required: false,
            default: false
        },
        plain: {
            type: Boolean,
            required: false,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    setup(props, {emit}) {
        const handleClick = (e) => {
            emit('click', e)
        }

        const dynamicClass = computed(() => {
            return {
                [`z-button-${props.type}`]: props.type,
                [`is-round`]: props.round,
                [`is-plain`]: props.plain,
                [`is-disabled`]: props.disabled,
                [`is-loading`]: props.loading
            };
        })
        return {
            handleClick,
            dynamicClass
        }
    }


}
</script>
<style lang="scss">
  @import '../../assets/style/_var.scss';
  .z-button {
    @include inline-flex(center, center);
    @include fontLineColor();
    padding: 0 20px;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background-color: $button-bg;
    cursor: pointer;
    min-height: $min-height;
    transition: all $transition-duration linear;
    &:hover {
      border-color: $border-color-hover;
      background-color: $bg-color-hover;
    }
    &:active {
      background-color: $button-active-bg;
    }
    &:focus {
      outline: none;
    }
    &.is-round{
      border-radius: $min-height / 2;
    }
    &.is-plain{
      &:hover{
        color: $color-plain;
        border-color: $border-color-plain-hover;
        background-color: #fff;
      }
    }
    &.is-disabled, &.is-disabled:hover{
      color: $color-disabled;
      border-color: $border-color-disabled;
      background-color: $bg-color;
      cursor: not-allowed;
    }
    &.is-loading, &.is-loading:hover{
      color: $color-disabled;
      border-color: $border-color;
      background-color: $bg-color;
      cursor: initial;
    }
    &-primary{
      color: $color-white;
      background-color: $bg-color-primary;
      border-color: $border-color-primary;
      &:hover{
        background-color: $bg-color-hover-primary;
        border-color: $border-color-hover-primary;
      }
      &.is-plain{
        color: $color-plain-primary;
        background-color: $bg-color-plain-primary;
        border-color: $border-color-plain-primary;
        &:hover{
          color: $color-white;
          background-color: $bg-color-plain-hover-primary;
          border-color: $border-color-plain-hover-primary;
        }
      }
      &.is-disabled, &.is-disabled:hover{
        color: $color-white;
        background-color: $bg-color-disabled-primary;
        border-color: $border-color-disabled-primary;
      }
    }
    &-success{
      color: $color-white;
      background-color: $bg-color-success;
      border-color: $border-color-success;
      &:hover{
        background-color: $bg-color-hover-success;
        border-color: $border-color-hover-success;
      }
      &.is-plain{
        color: $color-plain-success;
        background-color: $bg-color-plain-success;
        border-color: $border-color-plain-success;
        &:hover{
          color: $color-white;
          background-color: $bg-color-plain-hover-success;
          border-color: $border-color-plain-hover-success;
        }
      }
      &.is-disabled, &.is-disabled:hover{
        color: $color-white;
        background-color: $bg-color-disabled-success;
        border-color: $border-color-disabled-success;
      }
    }
    &-warning{
      color: $color-white;
      background-color: $bg-color-warning;
      border-color: $border-color-warning;
      &:hover{
        background-color: $bg-color-hover-warning;
        border-color: $border-color-hover-warning;
      }
      &.is-plain{
        color: $color-plain-warning;
        background-color: $bg-color-plain-warning;
        border-color: $border-color-plain-warning;
        &:hover{
          color: $color-white;
          background-color: $bg-color-plain-hover-warning;
          border-color: $border-color-plain-hover-warning;
        }
      }
      &.is-disabled, &.is-disabled:hover{
        color: $color-white;
        background-color: $bg-color-disabled-warning;
        border-color: $border-color-disabled-warning;
      }
    }
    &-danger{
      color: $color-white;
      background-color: $bg-color-danger;
      border-color: $border-color-danger;
      &:hover{
        background-color: $bg-color-hover-danger;
        border-color: $border-color-hover-danger;
      }
      &.is-plain{
        color: $color-plain-danger;
        background-color: $bg-color-plain-danger;
        border-color: $border-color-plain-danger;
        &:hover{
          color: $color-white;
          background-color: $bg-color-plain-hover-danger;
          border-color: $border-color-plain-hover-danger;
        }
      }
      &.is-disabled, &.is-disabled:hover{
        color: $color-white;
        background-color: $bg-color-disabled-danger;
        border-color: $border-color-disabled-danger;
      }
    }
    &-info{
      color: $color-white;
      background-color: $bg-color-info;
      border-color: $border-color-info;
      &:hover{
        background-color: $bg-color-hover-info;
        border-color: $border-color-hover-info;
      }
      &.is-plain{
        color: $color-plain-info;
        background-color: $bg-color-plain-info;
        border-color: $border-color-plain-info;
        &:hover{
          color: $color-white;
          background-color: $bg-color-plain-hover-info;
          border-color: $border-color-plain-hover-info;
        }
      }
      &.is-disabled, &.is-disabled:hover{
        color: $color-white;
        background-color: $bg-color-disabled-info;
        border-color: $border-color-disabled-info;
      }
    }
    > .icon {
      order: 0;
      margin-right: 0.3em;
      &.icon-right {
        order: 1;
        margin-right: 0;
        margin-left: 0.3em;
      }
      &.only-icon{
        margin-right: 0;
      }
    }
    > .loading {
      animation: spin 1.5s linear infinite;
      fill: $color-disabled;
    }
  }
</style>