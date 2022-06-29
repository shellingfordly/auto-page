<script lang="ts" setup>
import { SchemaStore } from "@/store/modules/template";
import type { ContainerSchema, StyleEmitItem } from "@/types";

const schemaStore = SchemaStore();
const containerSchema = computed(
  () => schemaStore.selectedSchema as ContainerSchema
);
const { style } = unref(containerSchema);

function onChangeStyle(item: StyleEmitItem) {
  style.setValue(item.key, item.value);
}
</script>

<template>
  <div :class="$style.controlTitle">容器设置</div>
  <ControlBox title="容器样式">
    <StyleControl
      :style="containerSchema.style"
      @change-style="onChangeStyle"
    />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
