<script lang="ts" setup>
import { TextSchema } from "@/schemas";
import { SchemaStore } from "@/store/modules/template";
import { StyleControl } from "@/components/controls";

defineProps();

const schemaStore = SchemaStore();
const textSchema = computed(() => schemaStore.selectedSchema as TextSchema);

function onChangeText(value: any) {
  textSchema.value.setText(value);
}
</script>

<template>
  <div :class="$style.controlTitle">文本设置</div>
  <ControlBox title="文本详情">
    <TextControl :model-value="textSchema.text" @change-text="onChangeText" />
  </ControlBox>
  <ControlBox title="文本样式">
    <StyleControl :style="textSchema.style" />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
