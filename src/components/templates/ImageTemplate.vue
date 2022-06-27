<script lang="ts" setup>
import { ImageSchema } from "@/schemas";

defineProps<{ schema: ImageSchema }>();
</script>

<template>
  <BorderContainer :schema="schema">
    <div :class="$style.container">{{ schema.info.link }}</div>
  </BorderContainer>
</template>

<style module scoped lang="less">
.container {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
</style>
