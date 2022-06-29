<script lang="ts" setup>
import { NoticeSchema } from "@/schemas";

const props = defineProps<{ schema: NoticeSchema }>();
const style = computed(() => props.schema.getStyle);
</script>

<template>
  <BorderContainer :schema="schema">
    <div :style="style">{{ schema.text }}</div>
  </BorderContainer>
</template>
