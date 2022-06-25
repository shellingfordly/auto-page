<script lang="ts" setup>
import { SlideshowSchema } from "@/schemas";

defineProps<{ schema: SlideshowSchema }>();
</script>

<template>
  <BorderContainer :schema="schema">
    <div :class="$style.container">This si a SlideshowSchema</div>
  </BorderContainer>
</template>

<style module scoped lang="less">
.container {
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
  border: 1px solid #eee;
}
</style>
