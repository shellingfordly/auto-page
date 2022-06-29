<script lang="ts" setup>
import { SchemaStore } from "@/store/modules/template";

const schemaStore = SchemaStore();
const isFloat = ref(false);
const zIndex = ref(0);

function onChange(float: UndOf<StrOrNum | boolean>) {
  const value = !float ? "relative" : "absolute";
  schemaStore.selectedSchema?.style.setValue("position", value);
}

function onChangeIndex(value: any) {
  schemaStore.selectedSchema?.style.setValue("zIndex", value);
}
</script>

<template>
  <div :class="$style.controlStyleItem">
    <div :class="$style.controlItemLabel">浮动</div>
    <a-switch v-model="isFloat" type="round" @change="onChange" />
  </div>

  <div :class="$style.controlStyleItem">
    <div :class="$style.controlItemLabel">层级</div>
    <a-input-number
      v-model="zIndex"
      @input="onChangeIndex"
      @change="onChangeIndex"
      style="width: 126px"
    />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
