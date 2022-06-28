<script lang="ts" setup>
import { StyleControl, TextControl, ControlBox } from "@/components/controls";
import { SchemaStore } from "@/store/modules/template";
import type { StyleEmitItem } from "@/types";
import { TextSchema } from "@/schemas";

const schemaStore = SchemaStore();
const textSchema = computed(() => schemaStore.selectedSchema as TextSchema);

function onChangeText(value: any) {
  textSchema.value.setText(value);
}

function onChangeStyle(item: StyleEmitItem) {
  textSchema.value.style.setValue(item.key, item.value);
}
</script>

<template>
  <div :class="$style.controlTitle">文本设置</div>
  <ControlBox title="文本详情">
    <TextControl :model-value="textSchema.text" @change-text="onChangeText" />
  </ControlBox>
  <ControlBox title="文本样式">
    <StyleControl :style="textSchema.style" @change-style="onChangeStyle" />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
