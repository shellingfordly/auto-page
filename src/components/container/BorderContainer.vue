<script lang="ts" setup>
import { TemplateStore } from "@/store/modules/template";
import { BaseSchema } from "@/schemas/base";

const props = defineProps<{ schema: BaseSchema }>();
const style = useCssModule();
const templateStore = TemplateStore();
const isSelected = computed(
  () => props.schema.schemaId === templateStore.selectedId
);
const className = computed(() => [
  !isSelected.value && style.schemaItem,
  isSelected.value && style.schemaSelected,
]);

function onClick() {
  templateStore.setSelectedId(props.schema.schemaId);
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
