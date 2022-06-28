<script lang="ts" setup>
import { createWidgets } from "@/lib";
import draggable from "vuedraggable";
import Widget from "./Widget.vue";
import { DRAGGABLE_GROUP } from "@/constants";
import type { SchemaItemType } from "@/types";

const widgets = ref(createWidgets());

function cloneSchema(schema: SchemaItemType) {
  return schema.newFunc(schema);
}
</script>

<template>
  <draggable
    :class="$style.draggable"
    :list="widgets"
    :group="{ name: DRAGGABLE_GROUP, pull: 'clone', put: false }"
    :clone="cloneSchema"
    item-key="id"
  >
    <template #item="{ element }">
      <Widget :class="$style.widget" :widget="element" />
    </template>
  </draggable>
</template>

<style module scoped lang="less">
.draggable {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  .widget {
    margin-bottom: 10px;
  }
}
</style>
