<style scoped>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .z-button {
        margin:10px 5px !important
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
    a {
      all: initial
    }
    a:hover {
      all: initial
    }
</style>

# z-button 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <z-button>默认按钮</z-button>
        <z-button icon="edit" type="primary">主要按钮</z-button>
        <z-button type="success">成功按钮</z-button>
        <z-button type="info">信息按钮</z-button>
        <z-button type="warning">警告按钮</z-button>
        <z-button type="danger">危险按钮</z-button>
        <z-button type="text">文字按钮</z-button>
        <br>
        <br>
        <z-button plain>朴素按钮</z-button>
        <z-button type="primary" plain>主要按钮</z-button>
        <z-button type="success" plain>成功按钮</z-button>
        <z-button type="info" plain>信息按钮</z-button>
        <z-button type="warning" plain>警告按钮</z-button>
        <z-button type="danger" plain>危险按钮</z-button>
        <br>
        <br>
        <z-button round>圆角按钮</z-button>
        <z-button type="primary" round>主要按钮</z-button>
        <z-button type="success" round>成功按钮</z-button>
        <z-button type="info" round>信息按钮</z-button>
        <z-button type="warning" round>警告按钮</z-button>
        <z-button type="danger" round>危险按钮</z-button>
    </div>

</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <z-button>默认按钮</z-button>
    <z-button type="primary">主要按钮</z-button>
    <z-button type="success">成功按钮</z-button>
    <z-button type="info">信息按钮</z-button>
    <z-button type="warning">警告按钮</z-button>
    <z-button type="danger">危险按钮</z-button>
    <z-button type="text">文字按钮</z-button>
    <br />
    <br />
    <z-button plain>朴素按钮</z-button>
    <z-button type="primary" plain>主要按钮</z-button>
    <z-button type="success" plain>成功按钮</z-button>
    <z-button type="info" plain>信息按钮</z-button>
    <z-button type="warning" plain>警告按钮</z-button>
    <z-button type="danger" plain>危险按钮</z-button>
    <br />
    <br />
    <z-button round>圆角按钮</z-button>
    <z-button type="primary" round>主要按钮</z-button>
    <z-button type="success" round>成功按钮</z-button>
    <z-button type="info" round>信息按钮</z-button>
    <z-button type="warning" round>警告按钮</z-button>
    <z-button type="danger" round>危险按钮</z-button>
  </div>
</template>
<script lang="ts" setup>
import { z-button } from "z-ui";
</script>
<style>
.k-z-button {
  margin-right: 10px;
}
</style>
```

</details>

## 禁用状态

<div class="example">
    <div>
        <z-button disabled>禁用按钮</z-button>
        <z-button type="primary" disabled>主要按钮</z-button>
        <z-button type="success" disabled>成功按钮</z-button>
        <z-button type="info" disabled>信息按钮</z-button>
        <z-button type="warning" disabled>警告按钮</z-button>
        <z-button type="danger" disabled>危险按钮</z-button>
        <br>
        <br>
        <z-button disabled>禁用按钮</z-button>
        <z-button type="primary" disabled plain>主要按钮</z-button>
        <z-button type="success" disabled plain>成功按钮</z-button>
        <z-button type="info" disabled plain>信息按钮</z-button>
        <z-button type="warning" disabled plain>警告按钮</z-button>
        <z-button type="danger" disabled plain>危险按钮</z-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <z-button disabled>禁用按钮</z-button>
    <z-button type="primary" disabled>主要按钮</z-button>
    <z-button type="success" disabled>成功按钮</z-button>
    <z-button type="info" disabled>信息按钮</z-button>
    <z-button type="warning" disabled>警告按钮</z-button>
    <z-button type="danger" disabled>危险按钮</z-button>
    <br />
    <br />
    <z-button disabled>禁用按钮</z-button>
    <z-button type="primary" disabled plain>主要按钮</z-button>
    <z-button type="success" disabled plain>成功按钮</z-button>
    <z-button type="info" disabled plain>信息按钮</z-button>
    <z-button type="warning" disabled plain>警告按钮</z-button>
    <z-button type="danger" disabled plain>危险按钮</z-button>
  </div>
</template>
<script lang="ts" setup>
import { z-button } from "z-ui";
</script>
<style>
.k-z-button {
  margin-right: 10px;
}
</style>
```

</details>

## 调整尺寸

<div class="example">
    <div>
        <z-button>默认按钮</z-button>
        <z-button size="medium">中等按钮</z-button>
        <z-button size="small">小型按钮</z-button>
        <z-button size="mini">超小按钮</z-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <z-button>默认按钮</z-button>
    <z-button size="medium">中等按钮</z-button>
    <z-button size="small">小型按钮</z-button>
    <z-button size="mini">超小按钮</z-button>
  </div>
</template>
<script lang="ts" setup>
import { z-button } from "z-ui";
</script>
<style>
.k-z-button {
  margin-right: 10px;
}
</style>
```

</details>