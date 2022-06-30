<script lang="ts" setup>
import { BaseSchema } from "@/schemas";
import { SchemaStore } from "@/store/modules/template";

const emit = defineEmits(["change-position"]);
const schemaStore = SchemaStore();
const style = computed(() => (schemaStore.selectedSchema as BaseSchema)?.style);

function onChangePosition(bool: any) {
  const value = !bool ? "relative" : "absolute";
  unref(style).setValue("position", value);
  emit("change-position", bool);
}

const onChangePositionTop = (value: any) => unref(style).setValue("top", value);
const onChangePositionLeft = (value: any) =>
  unref(style).setValue("left", value);
const onChangeIndex = (value: any) => unref(style).setValue("zIndex", value);
</script>

<template>
  <div :class="$style.controlStyleItem">
    <div :class="$style.controlItemLabel">浮动</div>
    <a-switch type="round" @change="onChangePosition" />
  </div>
  <control-item title="上">
    <a-input-number
      @input="onChangePositionTop"
      @change="onChangePositionTop"
      style="width: 126px"
    />
  </control-item>
  <control-item title="左">
    <a-input-number
      @input="onChangePositionLeft"
      @change="onChangePositionLeft"
      style="width: 126px"
    />
  </control-item>
  <div :class="$style.controlStyleItem">
    <div :class="$style.controlItemLabel">层级</div>
    <a-input-number
      @input="onChangeIndex"
      @change="onChangeIndex"
      style="width: 126px"
    />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
