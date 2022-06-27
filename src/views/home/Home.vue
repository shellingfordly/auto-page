<script lang="ts" setup>
import WidgetsContainer from "./components/widget/WidgetsContainer.vue";
import TemplatePreview from "./components/preview/Preview.vue";
import TransitionContainer from "@/components/container/TransitionContainer.vue";
import ControlSetting from "./components/control/ControlSetting.vue";

onMounted(() => {
  // window.onbeforeunload = () => true;
});

onUnmounted(() => {
  // window.onbeforeunload = null;
});
</script>

<template>
  <a-layout :class="$style.home">
    <TransitionContainer :class="$style.homeLeft">
      <WidgetsContainer />
    </TransitionContainer>
    <TemplatePreview />
    <TransitionContainer :class="$style.homeRight" position="right">
      <ControlSetting />
    </TransitionContainer>
  </a-layout>
</template>

<style module scoped lang="less">
@borderStyle: 1px solid var(--color-border);

.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &Left,
  &Right {
    position: absolute;
    height: 100%;
    z-index: 1;
    background-color: var(--color-bg-1);
  }

  &Left {
    left: 0;
    width: 200px;
    border-right: @borderStyle;
  }

  &Right {
    right: 0;
    width: 300px;
    border-left: @borderStyle;
  }
}
</style>
