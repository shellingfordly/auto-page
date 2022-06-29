<script lang="ts" setup>
import { StyleControl, TextControl, ControlBox } from "@/components/controls";
import { SchemaStore } from "@/store/modules/template";
import type { StyleEmitItem } from "@/types";
import { TextSchema } from "@/schemas";
import FloatControl from "@/components/controls/FloatControl.vue";

const schemaStore = SchemaStore();
const textSchema = computed(() => schemaStore.selectedSchema as TextSchema);

function onChangeStyle(item: StyleEmitItem) {
  unref(textSchema).style.setValue(item.key, item.value);
}
</script>

<template>
  <div :class="$style.controlTitle">文本设置</div>
  <ControlBox title="详情">
    <TextControl v-model:value="textSchema.text" />
  </ControlBox>
  <ControlBox title="布局">
    <FloatControl />
  </ControlBox>
  <ControlBox title="样式">
    <StyleControl :style="textSchema.style" @change-style="onChangeStyle" />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
