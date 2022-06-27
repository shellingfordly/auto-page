<script lang="ts" setup>
import SchemaTemplate from "./components/SchemaTemplate.vue";
import { DRAGGABLE_GROUP } from "@/constants";
import { SchemaItemType } from "@/types";
import draggable from "vuedraggable";
import VaResizeBox from "@/components/resizebox/VaResizeBox.vue";

const content = ref<SchemaItemType[]>([]);
</script>

<template>
  <a-layout :class="$style.preview">
    <VaResizeBox
      :directions="['right', 'bottom']"
      :class="$style.previewContent"
    >
      <draggable
        :class="$style.draggable"
        :list="content"
        item-key="schemaId"
        :group="DRAGGABLE_GROUP"
      >
        <template #item="{ element }">
          <SchemaTemplate :schema="element" />
        </template>
      </draggable>
    </VaResizeBox>
  </a-layout>
</template>

<style module scoped lang="less">
.preview {
  display: flex;
  justify-content: center;
  align-items: center;

  .previewContent {
    position: relative;
    width: 800px;
    min-width: 600px;
    max-width: 1200px;
    height: 600px;
    min-height: 300px;
    max-height: 1200px;
    background-color: var(--color-bg-4);
    overflow: auto;

    .draggable {
      height: 100%;
    }
  }
}
</style>
