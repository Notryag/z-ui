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

# Icon按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
      <z-icon name="backup" />
      <z-icon name="info" />
      <z-icon name="face" />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <z-icon name="backup" />
    <z-icon name="info" />
    <z-icon name="face" />
  </div>
</template>
```

</details>

## size/color

<div class="example">
    <div>
        <z-icon size="s" name="edit" />
        <z-icon name="edit" />
        <z-icon size="l" name="edit" />
        <z-icon size="40px" name="edit" />
        <z-icon size="40px" color="#F30000" name="edit" />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div>
        <z-icon size="s" name="edit" />
        <z-icon name="edit" />
        <z-icon size="l" name="edit" />
        <z-icon size="40px" name="edit" />
        <z-icon size="40px" color="#F30000" name="edit" />
    </div>
</template>

```

</details>

## disabled

<div class="example">
 <z-icon name="backup" disabled />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <z-icon name="backup" disabled />
</template>
```

</details>


## 属性设置
| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
name | 图标名 | String | - | -
size | 图标大小 | String | px/vw/rem | -
color | 图标颜色 | String | - | -
target | 链接打开的方式(原声属性) | String | _blank/_self/_parent/_top | _self
append | 配合vue-router, 为true时, 在当前路径前追加to的路径 | Boolean | true/false | false
replace | 配合vue-router, 为true时, 点击调用router.replace(), 不会在导航留下记录 | Boolean | true/false | false
disabled | 是否禁用, 禁用后不响应click事件 | Boolean | true/false | false


## 事件

| 事件名| 说明| 回调值|
| -- | -- | -- |
| @click |  点击按钮时触发 | event |