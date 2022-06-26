<script lang="ts" setup>
import { createWidgets } from "@/lib/widget/createWidgets";
import { BaseSchema } from "@/schemas/base";
import draggable from "vuedraggable";
import Widget from "./Widget.vue";
import { createSchema } from "@/lib/widget/createSchema";
import { DRAGGABLE_GROUP } from "@/constants";

const widgets = ref(createWidgets());

function cloneSchema(schema: BaseSchema) {
  return createSchema(schema);
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
