<script lang="ts" setup>
const styles = [
  {
    label: "宽度",
  },
  {
    label: "高度",
  },
  {
    label: "内边距",
  },
  {
    label: "外边距",
  },
  {
    label: "边框",
  },
  {
    label: "圆角",
  },
];
</script>

<template>
  <div class="container">
    <div :class="$style.item" v-for="style in styles">
      <span :class="$style.controlItemLabel">{{ style.label }}：</span>
      <span>100px</span>
    </div>
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";

.item {
  padding-bottom: 20px;
}
</style>
