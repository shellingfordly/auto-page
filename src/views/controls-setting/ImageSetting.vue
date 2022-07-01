<script lang="ts" setup>
import type { ImageSchema, ImageInfoType } from "@/types";
import { SchemaStore } from "@/store/modules/template";
import FloatControl from "@/components/controls/FloatControl.vue";

const schemaStore = SchemaStore();
const imageSchema = computed(() => schemaStore.selectedSchema as ImageSchema);

function onChange(item: ImageInfoType) {
  imageSchema.value.setImageInfo(item);
}
</script>

<template>
  <div :class="$style.controlTitle">图片设置</div>
  <ControlBox title="图片详情">
    <ImageControl :image="imageSchema.info" @change="onChange" />
  </ControlBox>
  <ControlBox title="布局设置">
    <FloatControl />
  </ControlBox>
  <ControlBox title="图片样式">
    <StyleControl />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
