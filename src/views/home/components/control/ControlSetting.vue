<script lang="ts" setup>
import { SchemaId } from "@/enums/schema";
import { SchemaStore } from "@/store/modules/template";
import {
  ImageSetting,
  TextSetting,
  NoticeSetting,
  SlideshowSetting,
} from "@/views/controls-setting";

const schemaStore = SchemaStore();

const comp = computed(() => {
  switch (schemaStore.selectedSchema?.id) {
    case SchemaId.Image:
      return ImageSetting;
    case SchemaId.Container:
      return null;
    case SchemaId.Slideshow:
      return SlideshowSetting;
    case SchemaId.Notice:
      return NoticeSetting;
    case SchemaId.Text:
      return TextSetting;
    default:
      break;
  }
});
</script>

<template>
  <template v-if="comp">
    <component :is="comp"></component>
  </template>
</template>
