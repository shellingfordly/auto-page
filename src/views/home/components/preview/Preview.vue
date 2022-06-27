<script lang="ts" setup>
import SchemaTemplate from "./SchemaTemplate.vue";
import { DRAGGABLE_GROUP } from "@/constants";
import { SchemaItemType } from "@/types";
import draggable from "vuedraggable";

const content = ref<SchemaItemType[]>([]);
</script>

<template>
  <a-layout :class="$style.preview">
    <a-resize-box :directions="['right', 'bottom']" :class="$style.resizeBox">
      <div :class="$style.scrollBox">
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
      </div>
    </a-resize-box>
  </a-layout>
</template>

<style module scoped lang="less">
.preview {
  display: flex;
  justify-content: center;
  align-items: center;

  .resizeBox {
    position: relative;
    width: 800px;
    min-width: 600px;
    max-width: 1200px;
    height: 600px;
    min-height: 300px;
    max-height: 1200px;
    background-color: var(--color-bg-4);

    .scrollBox {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;

      .draggable {
        height: 100%;
      }
    }
  }
}
</style>
