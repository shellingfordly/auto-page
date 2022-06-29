<script lang="ts" setup>
import { ContainerSchema } from "@/schemas";

const props = defineProps<{ schema: ContainerSchema }>();
const style = computed(() => props.schema.getStyle);

function dragleave(e: DragEvent) {
  e.stopPropagation();
  e.stopImmediatePropagation();
}
</script>

<template>
  <BorderContainer :schema="schema">
    <div :style="style" @dragleave="dragleave">This is a Container</div>
  </BorderContainer>
</template>
