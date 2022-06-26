<script lang="ts" setup>
import { TextSchema } from "@/schemas";

defineProps<{ schema: TextSchema }>();

onMounted(() => {
  console.log("TextTemplate");
});
const randomCount = Math.random();
</script>

<template>
  <BorderContainer :schema="schema">
    <div :class="$style.container">This si a TextSchema {{ randomCount }}</div>
  </BorderContainer>
</template>

<style module scoped lang="less">
.container {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #eee;
}
</style>
