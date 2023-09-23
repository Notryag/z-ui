<template>
  <li class="u-crumb-item">
    <span ref="link" class="text" :disabled="disabled">
      <slot></slot>
    </span>
    <span class="separator">{{ separator }}</span>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  onMounted,
  getCurrentInstance,
} from 'vue'
export default defineComponent({
  name: 'ZCrumbItem',
  props: {
    to: {
      type: [String, Object],
      default: '',
    },
    replace: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const link = ref<HTMLSpanElement>()
    const instance = getCurrentInstance()!
    const router = instance.appContext.config.globalProperties.$router
    const parent = inject('BreadcrumbKey', undefined)


    onMounted(() => {
      link.value!.setAttribute('role', 'link')
      link.value!.addEventListener('click', () => {
        if (!props.to || !router) return
        props.replace ? router.replace(props.to) : router.push(props.to)
      })
    })
    return {
      link,
      separator: parent?.separator
    }
  }

})
</script>

<style lang="scss" scoped>
@import "../../assets/css/vars.scss";
.u-crumb-item {
  display: inline;

  &:last-child {
    .separator {
      display: none;
    }
  }

  .text {
    font-size: 14px;
    letter-spacing: 0;
    text-align: left;
    cursor: default;

    &.link {
      color: $primary-color;

      &:not([disabled="disabled"]):hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    &[disabled="disabled"] {
      cursor: not-allowed;
      color: $disabled-color;
    }
  }

  .separator {
    margin: 0 9px;
  }
}
</style>
