<script lang="ts" setup>
import { SchemaId } from "@/enums/schema";
import { SchemaStore } from "@/store/modules/template";
import {
  ImageSetting,
  TextSetting,
  NoticeSetting,
  SlideshowSetting,
  ContainerSetting,
} from "@/views/controls-setting";

const schemaStore = SchemaStore();

const comp = computed(() => {
  switch (schemaStore.selectedSchema?.id) {
    case SchemaId.Image:
      return ImageSetting;
    case SchemaId.Container:
      return ContainerSetting;
    case SchemaId.Slideshow:
      return SlideshowSetting;
    case SchemaId.Notice:
      return NoticeSetting;
    case SchemaId.Text:
      return TextSetting;
    default:
      return;
  }
});
</script>

<template>
  <div :class="$style.controlSettingBox">
    <template v-if="comp">
      <component :is="comp"></component>
    </template>
  </div>
</template>

<style module scoped lang="less">
.controlSettingBox {
  height: 100%;
  overflow-y: auto;
}
</style>
