<template>
  <d-component-item name="input">
    <z-input v-model="inputVal">备选项1</z-input>
    <div style="margin-top:20px">bind val: {{inputVal}}</div>
  </d-component-item>

  <d-component-item name="checkbox">
    <ZCheckBox v-model="val">备选项1</ZCheckBox>
  </d-component-item>

  <d-component-item name="button">
    <ZButton @click="toastClick">button</ZButton>
  </d-component-item>

  <d-component-item name="radio">
    <z-radio-group v-model="radio1" class="ml-4">
      <z-radio label="1">Option 1</z-radio>
      <z-radio label="2">Option 2</z-radio>
    </z-radio-group>
    <span>{{ radio1 }}</span>
  </d-component-item>

  <d-component-item name="crumb">
    <ZSwitch v-model="switchVal"></ZSwitch>
  </d-component-item>

  <d-component-item name="icon">
    <z-icon size="s" name="edit" />
    <z-icon name="edit" />
    <z-icon size="l" name="edit" />
    <z-icon size="40px" name="edit" />
    <z-icon size="40px" color="#F30000" name="edit" />
  </d-component-item>

  <d-component-item name="link">
    <z-link>普通颜色</z-link>
    <z-link type="primary">主要颜色</z-link>
    <z-link type="success">成功颜色</z-link>
    <z-link type="warning">警告颜色</z-link>
    <z-link type="danger">禁用颜色</z-link>
    <z-link type="info">消息颜色</z-link>
  </d-component-item>

  <d-component-item name="crumb">
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

  <d-component-item name="badge">
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

  <d-component-item name="tab">
    <z-tabs>
      <z-tab-pane label="Tab 1">这是选项卡1</z-tab-pane>
      <z-tab-pane label="Tab 2">这是选项卡2</z-tab-pane>
    </z-tabs>
  </d-component-item>

  <d-component-item name="tree">
    <z-tree :data="treeData"></z-tree>
  </d-component-item>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<script lang="ts" setup>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import DComponentItem from './DComponentItem.vue'
import Toast from '../components/index'

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
// input bind ref
const inputVal = ref<string>('')

let val = ref('123')
let checkValue = ref(false)
let switchVal = ref(true)
const checkClick = () => {
  checkValue = !checkValue
}
const toastClick = () => {
  $toast({ text: 'asdfasd', type: 'error' })
}

const radio1 = ref('1')
</script>

<style>
/* body {
  background-color: black;
} */
</style>
