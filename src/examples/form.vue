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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import ZButton from '../components/z-button.vue'
import ZInput from '../components/input/index.vue'
import ZSwitch from '../components/switch/index.vue'
import ZRow from '../components/row/index.vue'
import ZCol from '../components/col/index.vue'
import ZRadio from '../components/radio/radio.vue'
import ZRadioGroup from '../components/radio/radio-group.vue'
import ZCheckBox from '../components/z-checkbox/z-checkbox.vue'

import Toast from '../components/Toast/index'
import ZIcon from '../components/icon/z-icon.vue'
import ZLink from '../components/link/z-link.vue'

import ZTree from '../components/tree/z-tree.vue'
export default defineComponent({
  name: 'App',
  components: {
    ZButton,
    ZInput,
    ZSwitch,
    ZRow,
    ZCol,
    ZRadio,
    ZRadioGroup,
    ZCheckBox,
    ZTree,
    ZIcon,
    ZLink
  },
  setup(props) {
    console.log()
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
      Toast({ text: 'asdfasd', type: 'error' })
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
