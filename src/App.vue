<template>
    <ZButton>默认按钮</ZButton>
    <ZButton type="primary">默认按钮</ZButton>
    <ZButton type="success">默认按钮</ZButton>
    <ZButton type="info">默认按钮</ZButton>
    <ZButton type="warning">默认按钮</ZButton>
    <ZButton type="danger">默认按钮</ZButton>
    <ZButton type="primary">默认按钮</ZButton>
    <ZButton type="primary">默认按钮</ZButton>

    <ZButton plain>默认按钮</ZButton>
    <ZButton type="primary" plain>主要按钮</ZButton>
    <ZButton type="success" plain>成功按钮</ZButton>
    <ZButton type="warning" plain>警告按钮</ZButton>
    <ZButton type="danger" plain>危险按钮</ZButton>
    <ZButton type="info" plain>信息按钮</ZButton>

    <ZButton round>默认按钮</ZButton>
    <ZButton type="primary" round>主要按钮</ZButton>
    <ZButton type="success" round>成功按钮</ZButton>
    <ZButton type="warning" round>警告按钮</ZButton>
    <ZButton type="danger" round>危险按钮</ZButton>
    <ZButton type="info" round>信息按钮</ZButton>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ZButton from './components/button/button'
export default {
  name: 'App',
  components: {
    ZButton
  },
  setup() {
    const handClick = () => {
      console.log(132);
    }
    return {
      handClick
    }
  }
}
</script>

<style lang="scss">

</style>
