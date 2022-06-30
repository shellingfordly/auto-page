<script lang="ts" setup>
import { SchemaId } from "@/enums/schema";
import { SchemaItemType } from "@/types";
import {
  ContainerTemplate,
  ImageTemplate,
  NoticeTemplate,
  TextTemplate,
  SlideshowTemplate,
} from "@/components/templates";

const props = defineProps<{
  schema: SchemaItemType;
}>();

const comp = computed(() => {
  switch (props.schema.id) {
    case SchemaId.Image:
      return ImageTemplate;
    case SchemaId.Container:
      return ContainerTemplate;
    case SchemaId.Slideshow:
      return SlideshowTemplate;
    case SchemaId.Notice:
      return NoticeTemplate;
    case SchemaId.Text:
      return TextTemplate;
    default:
      break;
  }
});
const style = props.schema.style;

function dragover(event: DragEvent) {
  console.log("event", event.x, event.y);

  // if (props.schema.style.position === "absolute") {
  //   style.setValue("top", event.x);
  //   style.setValue("left", event.y);
  // }
}
</script>

<template>
  <div>
    <component :is="comp" v-bind="{ schema }"></component>
  </div>
</template>
