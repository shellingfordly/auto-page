<script lang="ts" setup>
import { createWidgets } from "@/lib/widget/createWidgets";
import draggable from "vuedraggable";
import Widget from "./Widget.vue";

const widgets = ref(createWidgets());
</script>

<template>
  <draggable
    :class="$style.draggable"
    :list="widgets"
    :group="{ name: 'people', pull: 'clone', put: false }"
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
