<script lang="ts" setup>
defineProps();
</script>

<template>
  <div :class="$style.controlTitle">公告设置</div>
  <ControlBox title="公告详情">
    <TextControl />
  </ControlBox>
  <ControlBox title="公告样式">
    <StyleControl />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
