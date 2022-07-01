<script lang="ts" setup>
import type { SchemaItemType, PositionType } from "@/types";
import draggable from "vuedraggable";
import { ContainerSchema } from "@/schemas";
import { DRAGGABLE_GROUP } from "@/constants";
import SchemaTemplate from "@/views/home/components/preview/SchemaTemplate.vue";

const content = ref<SchemaItemType[]>([]);
const props = defineProps<{ schema: ContainerSchema }>();
const style = computed(() => props.schema.getStyle);
</script>

<template>
  <BorderContainer :schema="schema">
    <div :style="style">This is a Container</div>
    <!-- <draggable
      :class="$style.draggable"
      :list="content"
      :group="DRAGGABLE_GROUP"
      item-key="schemaId"
      :draggable="true"
    >
      <template #item="{ element }">
        <SchemaTemplate :schema="element" />
      </template>
    </draggable> -->
  </BorderContainer>
</template>

<style module scoped lang="less">
.draggable {
  width: 100%;
  height: 300px;
}
</style>
