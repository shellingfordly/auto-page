<script lang="ts" setup>
import { TextSchema } from "@/schemas";

defineProps<{ schema: TextSchema }>();
</script>

<template>
  <BorderContainer :schema="schema">
    <div :class="$style.container">
      {{ schema.text }}
    </div>
  </BorderContainer>
</template>

<style module scoped lang="less">
.container {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
