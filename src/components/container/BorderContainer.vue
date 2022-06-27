<script lang="ts" setup>
import { SchemaStore } from "@/store/modules/template";
import { SchemaItemType } from "@/types";

const props = defineProps<{ schema: SchemaItemType }>();
const style = useCssModule();
const schemaStore = SchemaStore();
const isSelected = computed(
  () => props.schema.schemaId === schemaStore.selectedSchemaId
);
const className = computed(() => [
  !isSelected.value && style.schemaItem,
  isSelected.value && style.schemaSelected,
]);

function onClick() {
  schemaStore.setSelectedId(props.schema.schemaId);
  schemaStore.setSelectedSchema(props.schema);
}
</script>

<template>
  <div :class="className" @click="onClick">
    <slot />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/schema.module.less";
</style>
