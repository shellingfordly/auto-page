<script lang="ts" setup>
import { NoticeSchema } from "@/schemas";
import { SchemaStore } from "@/store/modules/template";
import { TextControl, ControlBox, StyleControl } from "@/components/controls";
import type { StyleEmitItem } from "@/types";

const schemaStore = SchemaStore();
const noticeSchema = computed(() => schemaStore.selectedSchema as NoticeSchema);

function onChangeStyle(item: StyleEmitItem) {
  unref(noticeSchema).style.setValue(item.key, item.value);
}
</script>

<template>
  <div :class="$style.controlTitle">公告设置</div>
  <ControlBox title="公告详情">
    <TextControl v-model:value="noticeSchema.text" />
  </ControlBox>
  <ControlBox title="公告样式">
    <StyleControl :style="noticeSchema.style" @change-style="onChangeStyle" />
  </ControlBox>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
