<script lang="ts" setup>
import { BaseSchema } from "@/schemas";
import { SchemaStore } from "@/store/modules/template";

const emit = defineEmits(["change-position"]);
const schemaStore = SchemaStore();
const schema = computed(() => schemaStore.selectedSchema as BaseSchema);
const style = computed(() => unref(schema).style);

function onChangePosition(bool: any) {
  const value = !bool ? "relative" : "absolute";
  unref(schema).setValue("floatStatus", bool);
  unref(schema).style.setValue("position", value);
  emit("change-position", bool);
}

const onChangePositionTop = (value: any) =>
  unref(schema).style.setValue("top", value);
const onChangePositionLeft = (value: any) =>
  unref(schema).style.setValue("left", value);
const onChangeIndex = (value: any) =>
  unref(schema).style.setValue("zIndex", value);
</script>

<template>
  <div :class="$style.controlStyleItem">
    <div :class="$style.controlItemLabel">浮动</div>
    <a-switch type="round" @change="onChangePosition" />
  </div>
  <control-item title="上">
    <a-input-number
      v-model="(style.top as number)"
      @input="onChangePositionTop"
      @change="onChangePositionTop"
      style="width: 126px"
    />
  </control-item>
  <control-item title="左">
    <a-input-number
      v-model="(style.left as number)"
      @input="onChangePositionLeft"
      @change="onChangePositionLeft"
      style="width: 126px"
    />
  </control-item>
  <div :class="$style.controlStyleItem">
    <div :class="$style.controlItemLabel">层级</div>
    <a-input-number
      v-model="(style.zIndex as number)"
      @input="onChangeIndex"
      @change="onChangeIndex"
      style="width: 126px"
    />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
