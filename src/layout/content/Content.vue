<script lang="ts" setup></script>

<template>
  <a-layout-content :class="$style.contentLayout">
    <RouterView />
  </a-layout-content>
</template>

<style module scoped lang="less">
.contentLayout {
  height: 100%;
  background-color: var(--color-fill-2);
}
</style>
