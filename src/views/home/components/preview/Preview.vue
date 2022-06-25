<script lang="ts" setup>
import { SchemaItemType } from "@/types";
import draggable from "vuedraggable";
import SchemaTemplate from "./components/SchemaTemplate.vue";

const contents = ref<SchemaItemType[]>([]);
</script>

<template>
  <a-layout :class="$style.preview">
    <div :class="$style.previewContent">
      <draggable
        :class="$style.draggable"
        :list="contents"
        group="people"
        item-key="id"
        ghostClass="ghost-schema"
      >
        <template #item="{ element }">
          <SchemaTemplate :schema="element" />
        </template>
      </draggable>
    </div>
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
    height: 600px;
    background-color: var(--color-bg-4);
    overflow: auto;

    .draggable {
      height: 100%;
    }

    .compItem {
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border: 1px solid var(--color-border);
      border-radius: 10px;
      cursor: pointer;
    }
  }
}
</style>
