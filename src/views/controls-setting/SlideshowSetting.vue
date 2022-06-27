<script lang="ts" setup>
import ControlBox from "@/components/controls/ControlBox.vue";
import StyleControl from "@/components/controls/StyleControl.vue";
import ImageUpload from "@/components/controls/ImageUpload.vue";
import { SchemaStore } from "@/store/modules/template";
import { SlideshowSchema } from "@/schemas";

defineProps();

const schemaStore = SchemaStore();
const slideshowSchema = computed(
  () => schemaStore.selectedSchema as SlideshowSchema
);

console.log("slideshowSchema", slideshowSchema);

const slideshowList = ref([]);
</script>

<template>
  <div :class="$style.controlTitle">轮播图设置</div>
  <ControlBox title="轮播图列表">
    <ImageUpload
      :image="image"
      v-for="image in slideshowSchema.list"
      :key="image.url"
    />
  </ControlBox>
  <ControlBox title="轮播图样式">
    <StyleControl />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
