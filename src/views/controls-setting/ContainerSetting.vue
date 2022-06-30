<script lang="ts" setup>
import { SchemaStore } from "@/store/modules/template";
import type { ContainerSchema, StyleEmitItem } from "@/types";

const schemaStore = SchemaStore();
const containerSchema = computed(
  () => schemaStore.selectedSchema as ContainerSchema
);
</script>

<template>
  <div :class="$style.controlTitle">容器设置</div>
  <ControlBox title="容器样式">
    <StyleControl />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
