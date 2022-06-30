<script lang="ts" setup>
const isDark = ref(false);

onClick();

function onClick() {
  if (!isDark.value) {
    isDark.value = true;
    // 设置为暗黑主题
    document.body.setAttribute("arco-theme", "dark");
  } else {
    // 恢复亮色主题
    document.body.removeAttribute("arco-theme");
    isDark.value = false;
  }
}
</script>

<template>
  <a-layout-header :class="$style.header">
    <a-button type="primary" @click="onClick">黑暗模式</a-button>
  </a-layout-header>
</template>

<style module scoped lang="less">
.header {
  height: 58px;
  text-align: center;
  line-height: 58px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-2);
}
</style>
