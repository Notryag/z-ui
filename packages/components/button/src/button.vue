
<template>
  <button ref="buttonRef" :class="classes" @click="handleClick">
    <ZIcon v-if="icon" :name="icon"></ZIcon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>

</template>

<script lang="tsx">
export default {
  name: 'ZButton',
};
</script>

<script lang="tsx" setup>
import { computed, ref } from 'vue'
import { buttonProps, buttonEmits } from './button'
import ZIcon from '../../icon/icon.vue'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const buttonRef = ref<HTMLButtonElement>()

const handleClick = (e: MouseEvent) => {
  emit('click', e)
}
const useButton = (props) => {
  let classes = computed(() => ({
    'z-button': true,
    [`z-button--${props.type}`]: props.type,
    [`z-button--${props.size}`]: props.size,

    'is-round': props.round,
    'is-circle': props.circle,
    'is-plain': props.plain,
    'is-disabled': props.disabled
  }))

  let iconFont = computed(() => ({
    iconName: props.icon,
    position: props.iconPosition
  }))

  return { classes,iconFont }
}



const { classes, iconFont } = useButton(props)
console.log('%c [ classes ]-40', 'font-size:13px; background:pink; color:#bf2c9f;', classes.value, props)
</script>
<style lang="scss">

.z-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  .z-button-text {
    display: inline-block;
    margin: 0 4px;
  }

  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.z-button.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}

.z-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}

.z-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;

  &:hover {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}

.z-button--primary.is-disabled,
.z-button--primary.is-disabled:active,
.z-button--primary.is-disabled:focus,
.z-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

//朴素按钮禁用
.z-button--primary.is-disabled.is-plain,
.z-button--primary.is-disabled.is-plain:active,
.z-button--primary.is-disabled.is-plain:focus,
.z-button--primary.is-disabled.is-plain:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

.z-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;

  &:hover {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
  }
}

.z-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}

.z-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;

  &:hover {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
}

.z-button--success.is-disabled,
.z-button--success.is-disabled:active,
.z-button--success.is-disabled:focus,
.z-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

//朴素按钮禁用
.z-button--success.is-disabled.is-plain,
.z-button--success.is-disabled.is-plain:active,
.z-button--success.is-disabled.is-plain:focus,
.z-button--success.is-disabled.is-plain:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.z-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}

.z-button--info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;

  &:hover {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
}

.z-button--info.is-disabled,
.z-button--info.is-disabled:active,
.z-button--info.is-disabled:focus,
.z-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
  cursor: not-allowed;
}

//朴素按钮禁用
.z-button--info.is-disabled.is-plain,
.z-button--info.is-disabled.is-plain:active,
.z-button--info.is-disabled.is-plain:focus,
.z-button--info.is-disabled.is-plain:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

.z-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}

.z-button--warning.is-plain {
  color: #e6a23c;
  background: #ecf5ff;
  border-color: #b3d8ff;

  &:hover {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
}

.z-button--warning.is-disabled,
.z-button--warning.is-disabled:active,
.z-button--warning.is-disabled:focus,
.z-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

//朴素按钮禁用
.z-button--warning.is-disabled.is-plain,
.z-button--warning.is-disabled.is-plain:active,
.z-button--warning.is-disabled.is-plain:focus,
.z-button--warning.is-disabled.is-plain:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.z-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

.z-button--warning.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;

  &:hover {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
}

.z-button--danger.is-disabled,
.z-button--danger.is-disabled:active,
.z-button--danger.is-disabled:focus,
.z-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.z-button--danger.is-disabled.is-plain,
.z-button--danger.is-disabled.is-plain:active,
.z-button--danger.is-disabled.is-plain:focus,
.z-button--danger.is-disabled.is-plain:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.is-round {
  border-radius: 20px;
}

// size
.z-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.z-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.z-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
</style>