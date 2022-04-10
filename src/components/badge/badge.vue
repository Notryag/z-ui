<template>
  <span :class="'z-badge'">
    <template v-if="status !== ''">
      <i :class="[`z-badge-${status}`, shine && 'z-badge-shine']"></i>
      {{ text }}
    </template>
    <sup class="z-badge-count" v-else>{{ count }}</sup>
  </span>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'ZBadge',
  props: {
    text: [String, Number],
    status: {
      type: String,
      default: '',
      validator: (value:string) =>
        [
          '',
          'success',
          'primary',
          'warning',
          'info',
          'error',
          'default',
        ].includes(value),
    },
    count: [String, Number],
    shine: Boolean,
  },
})
</script>
<style lang="scss" scoped>
.z-badge{

  .z-badge-success{
    --color: rgb(var(--success));
  }

  .z-badge-warning{
    --color: rgb(var(--warning));
  }

  .z-badge-error{
    --color: rgb(var(--danger));
  }

  .z-badge-default{
    --color: rgb(var(--default));
  }

  .z-badge-warning,
  .z-badge-success,
  .z-badge-error,
  .z-badge-default{
      width: 6px;
      height: 6px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 5px;
      background-color: var(--color);
  }

  .z-badge-shine{
    position: relative;

    &::after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: block;
      background-color: var(--color);
      animation: shine 2.5s cubic-bezier(.47, -.2, .13, 1.35) infinite;
    }
  }

  .z-badge-count{
    background-color: rgb(var(--danger));
    border-radius: 8px;
    font-size: 12px;
    line-height: 16px;
    padding: 0 5px;
    color: rgb(var(--white));
  }

  @keyframes shine {
    0% {
      transform: scale(1);
      opacity: 0.48;
    }

    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
}
</style>
