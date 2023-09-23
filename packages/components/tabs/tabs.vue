<template>
  <div class="z-tabs">
    <div class="z-tabs-nav">
      <div
        class="z-tabs-menu"
        :ref="setItemRef"
        v-for="(item, i) in nav"
        :key="i"
        @click="setTabs(item, i)"
        :class="[
          item.disabled && 'z-tabs-disabled',
          {
            active: active.index === i,
          },
        ]"
      >
        {{ item.label }}
      </div>
      <i class="z-tabs-line" :style="line"></i>
    </div>
    <div class="z-tabs-view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { provide, reactive, onBeforeUpdate, onMounted, nextTick } from 'vue'
import emtter from '../../utils/emiter.ts'
export default {
  name: 'ZTabs',
  setup() {
    const { on } = emtter()
    const nav = reactive([])
    const active = reactive({})
    const line = reactive({})
    provide('active', active)

    on('props', (value) => {
      if (!active.label) {
        setTabs(value, 0)
      }
      nav.push(value)
    })

    const setTabs = (item, i) => {
      if (item.disabled) return
      active.label = item.label
      active.index = i

      nextTick(() => {
        const e = itemRefs[i].getBoundingClientRect()
        line.width = e.width + 'px'
        line.transform = ` translateX(${itemRefs[i].offsetLeft}px)`
      })
    }

    let itemRefs = []
    const setItemRef = (el) => {
      itemRefs.push(el)
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })

    return {
      nav,
      active,
      setTabs,
      setItemRef,
      line,
    }
  },
}
</script>
<style lang="scss" scoped>
.z-tabs{
  .z-tabs-nav{
    display: flex;
    border-bottom: 1px solid var(--hover-background-color);
    position: relative;

    .z-tabs-menu{
      padding: 5px 10px;
      margin-right: 10px;
      cursor: pointer;
      user-select: none;

      &.active{
        color: rgba(var(--primary));
      }
      &.z-tabs-disabled{
        cursor: not-allowed;
        color: var(--hover-background-color);
      }
    }

    .z-tabs-line{
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 2px;
      display: block;
      background-color: rgba(var(--primary));
      transition: all .2s ease-in-out;
      transform: translateX();
    }
  }

  .z-tabs-view{
    padding: 10px;
  }
}


</style>