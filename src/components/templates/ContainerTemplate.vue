<script lang="ts" setup>
import { ContainerSchema } from "@/schemas";

const props = defineProps<{ schema: ContainerSchema }>();
const style = computed(() => props.schema.getStyle);
</script>

<template>
  <BorderContainer :schema="schema">
    <div :style="style">This is a Container</div>
  </BorderContainer>
</template>
