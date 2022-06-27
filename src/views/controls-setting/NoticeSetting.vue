<script lang="ts" setup>
import ControlBox from "@/components/controls/ControlBox.vue";
import StyleControl from "@/components/controls/StyleControl.vue";

defineProps();
</script>

<template>
  <div :class="$style.controlTitle">公告设置</div>
  <ControlBox title="公共详情">
    <TextControl />
  </ControlBox>
  <ControlBox title="公共样式">
    <StyleControl />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
