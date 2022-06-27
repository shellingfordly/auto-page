<script lang="ts" setup>
import { ControlBox, ImageControl, StyleControl } from "@/components/controls";
import type { ImageSchema } from "@/schemas";
import { SchemaStore } from "@/store/modules/template";

const schemaStore = SchemaStore();
const imageSchema = computed(() => schemaStore.selectedSchema as ImageSchema);

function onChangeLink(link: string) {
  imageSchema.value.setImageInfo({ link });
}
</script>

<template>
  <div :class="$style.controlTitle">图片设置</div>
  <ControlBox title="图片详情">
    <ImageControl :image="imageSchema.info" @change-link="onChangeLink" />
  </ControlBox>
  <ControlBox title="图片详情">
    <StyleControl :style="imageSchema.style" />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
