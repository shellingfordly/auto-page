<script lang="ts" setup>
import { BaseSchema } from "@/schemas/base";
import { TemplateStore } from "@/store/modules/template";

const props = defineProps<{ schema: BaseSchema }>();
const style = useCssModule();
const templateStore = TemplateStore();
const className = computed(() => [
  style.schemaItem,
  props.schema.schemaId === templateStore.selectedId && style.schemaSelected,
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
