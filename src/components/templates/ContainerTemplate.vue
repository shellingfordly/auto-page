<script lang="ts" setup>
import { ContainerSchema } from "@/schemas";

defineProps<{ schema: ContainerSchema }>();
</script>

<template>
  <BorderContainer :schema="schema">
    <div :class="[$style.container]">This is a Container</div>
  </BorderContainer>
</template>

<style module scoped lang="less">
.container {
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
}
</style>
