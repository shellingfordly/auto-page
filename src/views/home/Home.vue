<script lang="ts" setup>
import WidgetsContainer from "./components/widget/Container.vue";
import TemplatePreview from "./components/preview/Preview.vue";
</script>

<template>
  <a-layout :class="$style.home">
    <a-layout-sider :class="$style.homeLeft">
      <WidgetsContainer />
    </a-layout-sider>
    <TemplatePreview />
    <a-layout-sider> Sider Right </a-layout-sider>
  </a-layout>
</template>

<style module scoped lang="less">
.home {
  height: 100%;
  &Left {
    height: 100%;
    border-right: 1px solid var(--color-border);
  }
}
</style>
