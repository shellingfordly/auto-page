<script lang="ts" setup>
import { TextSchema } from "@/schemas";

const props = defineProps<{ schema: TextSchema }>();
const style = computed(() => props.schema.getStyle);
</script>

<template>
  <BorderContainer :schema="schema" :style="style">
    {{ schema.text }}
  </BorderContainer>
</template>
