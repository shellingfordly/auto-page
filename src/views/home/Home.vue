<script lang="ts" setup>
import WidgetsContainer from "./components/widget/WidgetsContainer.vue";
import TemplatePreview from "./components/preview/Preview.vue";
import TransitionContainer from "@/components/container/TransitionContainer.vue";
</script>

<template>
  <a-layout :class="$style.home">
    <TransitionContainer :class="$style.homeLeft">
      <WidgetsContainer />
    </TransitionContainer>
    <TemplatePreview />
    <TransitionContainer :class="$style.homeLeft" position="right">
      <a-layout-sider style="height: 100%"> Sider Right </a-layout-sider>
    </TransitionContainer>
  </a-layout>
</template>

<style module scoped lang="less">
.home {
  height: 100%;

  &Left {
    width: 200px;
    height: 100%;
    background-color: var(--color-bg-1);
    border-right: 1px solid var(--color-border);
  }
}
</style>
