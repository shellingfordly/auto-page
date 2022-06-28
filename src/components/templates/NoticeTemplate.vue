<script lang="ts" setup>
import { NoticeSchema } from "@/schemas";

const props = defineProps<{ schema: NoticeSchema }>();
const style = computed(() => props.schema.getStyle);
</script>

<template>
  <BorderContainer :schema="schema">
    <div :style="style">This si a NoticeSchema</div>
  </BorderContainer>
</template>
