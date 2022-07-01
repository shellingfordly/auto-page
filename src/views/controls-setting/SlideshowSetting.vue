<script lang="ts" setup>
import { SchemaStore } from "@/store/modules/template";
import type { StyleEmitItem, SlideshowSchema } from "@/types";
import {
  ImageControl,
  ControlBox,
  StyleControl,
  SlideshowControl,
} from "@/components/controls";

defineProps();
const schemaStore = SchemaStore();
const slideshowSchema = computed(
  () => schemaStore.selectedSchema as SlideshowSchema
);
const { style, addItem, removeItem, updateItem } = unref(slideshowSchema);

const onAddItem = addItem.bind(slideshowSchema.value);
const onDelete = removeItem.bind(slideshowSchema.value);
const onUpdateItem = updateItem.bind(slideshowSchema.value);
</script>

<template>
  <div :class="$style.controlTitle">轮播图设置</div>
  <ControlBox title="轮播图列表">
    <ImageControl
      :class="$style.imageItem"
      :image="image"
      v-for="image in slideshowSchema.list"
      :key="image.url"
      :deleteIcon="true"
      @delete="onDelete(image.uid)"
      @change="onUpdateItem"
    />
    <a-button long @click="onAddItem({})"> Add Item </a-button>
  </ControlBox>
  <ControlBox title="轮播图配置">
    <SlideshowControl />
  </ControlBox>
  <ControlBox title="轮播图样式">
    <StyleControl />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
:deep(.imageItem) {
  border-bottom: 1px dashed var(--color-border);
}
</style>
