<script lang="ts" setup>
import { ImageSchema } from "@/schemas";

const props = defineProps<{ schema: ImageSchema }>();
const style = computed(() => props.schema.getStyle);
</script>

<template>
  <BorderContainer :schema="schema" :style="style">
    <img :class="$style.imgItem" :src="schema.info.url" />
  </BorderContainer>
</template>

<style module>
.imgItem {
  width: 100%;
  height: 100%;
}
</style>
