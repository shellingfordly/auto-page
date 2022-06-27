<script lang="ts" setup>
import ControlBox from "@/components/controls/ControlBox.vue";
import ImageUpload from "@/components/controls/ImageUpload.vue";
import StyleControl from "@/components/controls/StyleControl.vue";

defineProps();
</script>

<template>
  <div :class="$style.controlTitle">图片设置</div>
  <ControlBox title="图片详情">
    <ImageUpload />
  </ControlBox>
  <ControlBox title="图片详情">
    <StyleControl />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
