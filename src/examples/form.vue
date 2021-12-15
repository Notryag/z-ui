<template>
  <div>
    <ZCheckBox v-model="val">备选项1</ZCheckBox>
  </div>
  <div>
    <button @click="toastClick">button</button>
  </div>
  <div>
    <z-tree :data="treeData"></z-tree>
  </div>
  <div>
    <ZSwitch v-model="switchVal"></ZSwitch>
  </div>
  <div>
    <z-icon size="s" name="edit" />
    <z-icon name="edit" />
    <z-icon size="l" name="edit" />
    <z-icon size="40px" name="edit" />
    <z-icon size="40px" color="#F30000" name="edit" />
  </div>
  <div>
    <z-link>普通颜色</z-link>
    <z-link type="primary">主要颜色</z-link>
    <z-link type="success">成功颜色</z-link>
    <z-link type="warning">警告颜色</z-link>
    <z-link type="danger">禁用颜色</z-link>
    <z-link type="info">消息颜色</z-link>
  </div>

  <d-component-item name="z-crumb">
    <z-crumb>
      <z-crumb-item to="/">home</z-crumb-item>
      <z-crumb-item to="/">home</z-crumb-item>
      <z-crumb-item>home</z-crumb-item>
    </z-crumb>
    <z-crumb separator=">">
      <z-crumb-item to="/">home</z-crumb-item>
      <z-crumb-item to="/" disabled>home</z-crumb-item>
      <z-crumb-item>home</z-crumb-item>
    </z-crumb>
  </d-component-item>
  <d-component-item>
    <z-badge status="success" />
    <z-badge status="error" />
    <z-badge status="default" />
    <z-badge status="warning" />
    <br />
    <z-badge status="success" text="success" />
    <br />
    <z-badge status="error" text="error" />
    <br />
    <z-badge status="default" text="default" />
    <br />
    <z-badge status="warning" text="warning" />
  </d-component-item>

  <d-component-item>
    <z-tabs>
      <z-tab-pane label="Tab 1">这是选项卡1</z-tab-pane>
      <z-tab-pane label="Tab 2">这是选项卡2</z-tab-pane>
    </z-tabs>
  </d-component-item>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
import DComponentItem from './DComponentItem.vue'
import Toast from '../components/index'
export default defineComponent({
  name: 'App',
  components: {
    DComponentItem
  },
  setup(props) {
    const instance = getCurrentInstance()
    const { $toast } = instance.appContext.config.globalProperties
    let treeData = ref({
      label: 'My Tree',
      children: [
        {
          label: 'Level one 1',
          children: [
            {
              label: 'Level two 1-1',
              children: [
                {
                  label: 'Level three 1-1-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Level one 2',
          children: [
            {
              label: 'Level two 2-1',
              children: [
                {
                  label: 'Level three 2-1-1',
                },
              ],
            },
            {
              label: 'Level two 2-2',
              children: [
                {
                  label: 'Level three 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Level one 3',
          children: [
            {
              label: 'Level two 3-1',
              children: [
                {
                  label: 'Level three 3-1-1',
                },
              ],
            },
            {
              label: 'Level two 3-2',
              children: [
                {
                  label: 'Level three 3-2-1',
                },
              ],
            },
          ],
        },
      ]
    })
    let val = ref('123')
    let checkValue = ref(false)
    let switchVal = ref(false)
    const checkClick = () => {
      checkValue = !checkValue
    }
    const toastClick = () => {
      $toast({ text: 'asdfasd', type: 'error' })
    }
    return { val, checkValue, toastClick, treeData, switchVal }
  },
})
</script>

<style>
/* body {
  background-color: black;
} */
</style>
