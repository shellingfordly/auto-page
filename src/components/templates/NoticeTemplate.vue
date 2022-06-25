<script lang="ts" setup>
import { NoticeSchema } from "@/schemas";

defineProps<{ schema: NoticeSchema }>();
</script>

<template>
  <BorderContainer :schema="schema">
    <div :class="$style.container">This si a NoticeSchema</div>
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
