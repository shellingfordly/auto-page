<script lang="ts" setup>
import { SchemaStore } from "@/store/modules/template";
import type { SlideshowSchema } from "@/schemas";
import type { ImageInfoType } from "@/types";
import { ImageControl, ControlBox, StyleControl } from "@/components/controls";

defineProps();
const schemaStore = SchemaStore();
const slideshowSchema = computed(
  () => schemaStore.selectedSchema as SlideshowSchema
);

function onDelete(item: ImageInfoType) {
  slideshowSchema.value.removeSlideshowItem(item.uid);
}

function onChangeLink(link: string, item: ImageInfoType) {
  slideshowSchema.value.updateSlideshowItem({ ...item, link });
}
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
      @delete="onDelete(image)"
      @change-link="(link) => onChangeLink(link, image)"
    />
    <a-button long @click="slideshowSchema.addSlideshowItem({})">
      Add Item
    </a-button>
  </ControlBox>
  <ControlBox title="轮播图配置"> </ControlBox>
  <ControlBox title="轮播图样式">
    <StyleControl :style="slideshowSchema.style" />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
:deep(.imageItem) {
  border-bottom: 1px dashed var(--color-border);
}
</style>
