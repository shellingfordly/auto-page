<script lang="ts" setup>
import { ImageSchema } from "@/schemas";

const props = defineProps<{ schema: ImageSchema }>();
const style = computed(() => props.schema.getStyle);
</script>

<template>
  <BorderContainer :schema="schema">
    <img :style="style" :src="schema.info.url" />
  </BorderContainer>
</template>
