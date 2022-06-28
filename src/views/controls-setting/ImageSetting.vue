<script lang="ts" setup>
import type { ImageSchema, StyleEmitItem } from "@/types";
import { SchemaStore } from "@/store/modules/template";

const schemaStore = SchemaStore();
const imageSchema = computed(() => schemaStore.selectedSchema as ImageSchema);

function onChangeLink(link: string) {
  imageSchema.value.setImageInfo({ link });
}

function onChangeStyle(item: StyleEmitItem) {
  imageSchema.value.style.setValue(item.key, item.value);
}
</script>

<template>
  <div :class="$style.controlTitle">图片设置</div>
  <ControlBox title="图片详情">
    <ImageControl :image="imageSchema.info" @change-link="onChangeLink" />
  </ControlBox>
  <ControlBox title="图片样式">
    <StyleControl :style="imageSchema.style" @change-style="onChangeStyle" />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
