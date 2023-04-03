<template>
  <div id="app">
    <div class="demo-layout">
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="1"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="2"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="3"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="4"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="5"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="6"><div class="item bg-purple"></div></c-col>
      </c-row>
      

      <c-row :gutter="100">
        <c-col :span="12">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="12">
          <div class="item bg-purple"></div>
        </c-col>
      </c-row>
      <c-row  :gutter="20">
        <c-col :span="8">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="8">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="8">
          <div class="item bg-purple-light"></div>
        </c-col>
      </c-row>
      <c-row>
        <c-col :span="24">
          <div class="item bg-purple-light"></div>
        </c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="12">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="12">
          <div class="item bg-purple-light"></div>
        </c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="8">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="8">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="8">
          <div class="item bg-purple"></div>
        </c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="6">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="6">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="6">
          <div class="item bg-purple"></div>
        </c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="4">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple-light"></div>
        </c-col>
      </c-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import ZButton from './components/z-button.vue'
import ZInput from './components/input/index.vue'
import ZSwitch from './components/switch/index.vue'
import CRow from './components/row/index.vue'
import CCol from './components/col/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    ZButton,
    ZInput,
    ZSwitch,
    CRow,
    CCol,
  },
  setup(props) {
    let inputValue = ref('')
    let switchValue = ref(false)
    return { inputValue, switchValue }
  },
})
</script>

<style lang="scss">
.demo-layout {
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
}
.demo-layout .z-row {
  margin-bottom: 10px;
  padding: 10px 0;
}
.demo-layout .z-col {
  .item {
    height: 40px;
    border-radius: 4px;
    color: white;
  }
}
</style>
